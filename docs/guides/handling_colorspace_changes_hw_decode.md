---
title: Handling Colorspace Changes with Hardware Decode
description: Resolve ffmpeg filter graph failures caused by colorspace changes when using hardware-accelerated decoding
id: handling_colorspace_changes_hw_decode
---

![Difficulty](https://img.shields.io/badge/Difficulty-moderate-orange?style=flat)
![Setup Time](https://img.shields.io/badge/Setup%20Time-20%20minutes-orange?style=flat)
[![Original Author](https://img.shields.io/badge/Original%20Author-yajrendrag-lightgrey?style=flat?style=plastic&logo=github)](https://github.com/yajrendrag)

When the **Video Transcoder** plugin is configured to use hardware-accelerated decoding (NVENC, QSV, or VAAPI), some video files can cause ffmpeg to fail mid-transcode. This happens when ffmpeg detects a colorspace change in the video stream and attempts to reconfigure its filter graph. Because the frames are on the GPU, ffmpeg cannot perform the filter change and the transcode fails.

This guide explains the problem, how to use the **Safe decode mode** option to resolve it, and how to automate the entire process using a pseudo branching library strategy.

## The Problem

All three hardware decoders supported by the Video Transcoder plugin — NVENC, QSV, and VAAPI — can encounter this failure. When a video stream contains a colorspace change (for example, a transition from BT.601 to BT.709 partway through the file), ffmpeg tries to reconfigure its filter graph on the fly. With hardware decode enabled, the frames reside in GPU memory where this reconfiguration is not supported, causing the transcode to fail.

### Error Messages

**QSV:**
```
[fc#0 @ 0x55853af42c40] Reconfiguring filter graph because hwaccel changed
Impossible to convert between the formats supported by the filter 'scaler_out_#0:0' and the filter 'auto_scale_0'
[fc#0 @ 0x55853af42c40] Error reinitializing filters!
[fc#0 @ 0x55853af42c40] Task finished with error code: -38 (Function not implemented)
[fc#0 @ 0x55853af42c40] Terminating thread with return code -38 (Function not implemented)
Conversion failed!
```

**NVENC:**
```
[fc#0 @ 0x561892fe7940] Reconfiguring filter graph because video parameters changed to yuv420p(tv, bt709), 1910x1070
Impossible to convert between the formats supported by the filter 'Parsed_hwupload_cuda_1' and the filter 'auto_scale_1'
[fc#0 @ 0x561892fe7940] Error reinitializing filters!
[fc#0 @ 0x561892fe7940] Task finished with error code: -38 (Function not implemented)
[fc#0 @ 0x561892fe7940] Terminating thread with return code -38 (Function not implemented)
Conversion failed!
```

VAAPI will produce similar messages referencing VAAPI-specific filter names.

## The Solution: Safe Decode Mode

The Video Transcoder plugin provides a **Safe decode mode** option for each hardware encoder. When enabled, this option downloads decoded frames from the GPU to the CPU, where ffmpeg can implement the option to ignore filter graph changes, and then uploads the frames back to the GPU for encoding. Both decode and encode still happen on the GPU — the CPU round-trip is only needed to enable the filter change bypass.

### Where to Find the Setting

1. Open the **Video Transcoder** plugin configuration.
2. Ensure the plugin is in **Standard** mode (not Basic or Advanced).
3. Under the encoder section (NVENC, QSV, or VAAPI), enable **HW Decoding** (set it to something other than "Disabled").
4. The **Safe decode mode** checkbox appears directly below the HW Decoding option.
5. Check the box to enable safe decode mode.

:::note
Safe decode mode is disabled by default. When disabled, frames stay entirely in GPU memory for maximum performance. The trade-off for enabling it is a small performance penalty due to the GPU-to-CPU-to-GPU round-trip of decoded frames.
:::

## Choosing an Approach

You have three options depending on how frequently you encounter this error.

### Option 1: Manual Reprocessing (Infrequent Failures)

If you rarely see this error, keep **Safe decode mode** disabled for maximum performance. When a file fails:

1. Go to the completed tasks list and identify the failed file.
2. Open the library's plugin configuration and enable **Safe decode mode** on the Video Transcoder plugin.
3. Reprocess the failed file.
4. Disable **Safe decode mode** again after the file completes.

This is the simplest approach but requires manual intervention each time.

### Option 2: Always-On Safe Mode (Frequent Failures)

If you see this error often, simply leave **Safe decode mode** enabled permanently. All files will take the GPU → CPU → GPU path for decoded frames, accepting the small performance penalty in exchange for never hitting this failure.

### Option 3: Automated Pseudo Branching (Recommended)

This approach uses the [Pseudo Branching in Library Processing](/docs/guides/filtering_library) strategy to automatically detect and reprocess failed files. No manual intervention is needed.

The setup uses two libraries pointed at the same media folder:
- **Library 1** — configured with Safe decode mode **disabled** (fast path) and the **Reprocess File** plugin to catch failures.
- **Library 2** — configured with Safe decode mode **enabled** (safe path) to handle the reprocessed files.

#### Requirements

- The **Video Transcoder** plugin installed from the official plugin repository.
- The **Reprocess File** plugin installed from the [yajrendrag plugin repository](https://github.com/yajrendrag/unmanic-plugins). To add this repository, go to **Plugins** and click the repositories icon, then add `https://raw.githubusercontent.com/yajrendrag/unmanic-plugins/repo/repo.json` as a custom plugin repository.

#### Step 1: Create the Diagnostic Script

The **Reprocess File** plugin can run a diagnostic shell script to determine whether a failed file should be reprocessed. The script receives the post-processor data object as JSON on stdin and should exit with code `0` to reprocess or `1` to skip.

A sample script is included in the Reprocess File plugin's `script.md` file. Create a script based on it and save it to a convenient location such as `/config/.unmanic/userdata/reprocess_files/`:

```bash
#!/usr/bin/env bash
DATA=$(cat)

TASK_ID=$(echo "$DATA" | jq -r '.task_id')

DB="/config/.unmanic/config/unmanic.db"

MATCH=$(sqlite3 "$DB" \
  "SELECT COUNT(*) FROM tasks
   WHERE id = ${TASK_ID}
   AND (log LIKE '%Reconfiguring filter graph%'
        OR log LIKE '%hwaccel changed%')")

[ "$MATCH" -gt 0 ] && exit 0 || exit 1
```

Make the script executable:

```bash
chmod +x /config/.unmanic/userdata/reprocess_files/detect_colorspace_failure.sh
```

The script queries the Unmanic database for the failed task's log output. If the log contains `Reconfiguring filter graph` or `hwaccel changed`, the script returns `0` (reprocess). Otherwise it returns `1` (do not reprocess).

#### Step 2: Configure Library 1 — Fast Path

1. Create a library (e.g., `Movies - HW Decode`) and set its path to your media folder.
2. Configure the **Video Transcoder** plugin in Standard mode:
   - Enable HW Decoding for your encoder (NVENC, QSV, or VAAPI).
   - Leave **Safe decode mode** unchecked (disabled).
3. Configure any other worker plugins as needed.
4. Enable the **Reprocess File** plugin in the **Post-processor Task Results** section of the plugin flow.
5. Configure the Reprocess File plugin:
   - Set it to reprocess **failed** tasks.
   - Enter the full path to the diagnostic script (e.g., `/config/.unmanic/userdata/reprocess_files/detect_colorspace_failure.sh`).
   - Select **Library 2** (the safe path library created in the next step) as the target library for reprocessing.

#### Step 3: Configure Library 2 — Safe Path

1. Create a second library (e.g., `Movies - HW Decode Safe`) and set its path to the **same media folder**.
2. Configure the **Video Transcoder** plugin in Standard mode:
   - Enable HW Decoding for your encoder.
   - Check **Safe decode mode** (enabled).
3. Configure any other worker plugins to match Library 1.
4. Disable **Library Scanner** and **File Monitor** on this library — it should only process files sent to it by the Reprocess File plugin from Library 1.

#### How It Works

1. Library 1 scans the media folder and processes files using the fast GPU-only decode path.
2. If a file fails due to a colorspace change, the Reprocess File plugin's diagnostic script detects the specific error in the task log.
3. The Reprocess File plugin automatically adds the failed file to Library 2's task queue.
4. Library 2 reprocesses the file with Safe decode mode enabled, successfully handling the colorspace change.

:::tip
This approach gives you the best of both worlds: maximum performance for the majority of files that do not have colorspace changes, with automatic fallback for the ones that do.
:::
