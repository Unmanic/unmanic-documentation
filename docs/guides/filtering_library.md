---
title: Pseudo Branching in Library Processing
description: Use two Unmanic libraries over the same media library to process files differently based on ffprobe metadata
id: filtering_library
---

![Difficulty](https://img.shields.io/badge/Difficulty-moderate-orange?style=flat)
![Setup Time](https://img.shields.io/badge/Setup%20Time-15%20minutes-orange?style=flat)
[![Original Author](https://img.shields.io/badge/Original%20Author-yajrendrag-lightgrey?style=flat?style=plastic&logo=github)](https://github.com/yajrendrag)

Sometimes you need to process files in the same media library differently based on their properties. For example, you might want to encode HEVC files one way and H.264 files another way, or handle high-resolution files differently from standard-definition ones.

While Unmanic library processing does not implement branches, this can be approximated through the use of filtering plugins. This guide shows how to set up a **filtering library** pattern: two Unmanic libraries pointed at the same media folder, each using a JSONata-based file test plugin to claim its portion of the files. One library processes files that **match** certain ffprobe criteria, while the other processes files that **do not match** those same criteria.

## Concept

The filtering library approach uses two complementary plugins:

- **Limit Library Search by FFprobe Data** — includes only files whose ffprobe data matches a JSONata query. Files that do not match are skipped.
- **Ignore Files with Matching FFprobe Data** — excludes files whose ffprobe data matches a JSONata query. Files that do not match are processed.

By configuring both plugins with the **same JSONata query and search strings** but placing them in separate Unmanic libraries that point to the same media path, every file in the library is processed by exactly one of the two libraries.

## Requirements

- A running Unmanic installation.
- The **Limit Library Search by FFprobe Data** plugin installed from the official plugin repository.
- The **Ignore Files with Matching FFprobe Data** plugin installed from the [yajrendrag plugin repository](https://github.com/yajrendrag/unmanic-plugins). To add this repository, go to **Plugins** and click the repositories icon, then add `https://raw.githubusercontent.com/yajrendrag/unmanic-plugins/repo/repo.json` as a custom plugin repository.

## Instructions

### 1. Decide on a filtering criteria

Choose the ffprobe property you want to split on. You will express this as a JSONata query. For example, to split on video codec:

| JSONata Query | Search Strings | Matches |
|---|---|---|
| `$.streams[*].codec_name` | `hevc` | Files with an HEVC video stream |
| `$.streams[codec_type="video"].codec_name` | `h264,mpeg4` | Files with H.264 or MPEG-4 video |
| `[$.streams[codec_type="video" and (coded_height > 1000) and (coded_height < 2000)].codec_name]` | `hevc,h264` | 1080p HEVC or H.264 files |
| `[$.format.duration > 300 ? "true" : "false"]` | `true` | Files longer than 5 minutes |

For help building JSONata expressions, use the [JSONata Exerciser Tool](https://try.jsonata.org/pdNmg6BId) and the [JSONata Documentation](https://docs.jsonata.org/overview.html).

:::warning
**Quotes**

The Python library used to parse the JSONata query does not support single quotes. Always use double quotes in your query as in the examples above.
:::

### 2. Create Library A — files that match

Create a new library (or use an existing one) and set its path to your media folder.

1. Go to **Settings > Libraries** and add a library. Give it a descriptive name — for example, `Movies - HEVC`.
2. Set the library path to your media folder (e.g., `/library/movies`).
3. Go to the library's **Plugins** tab.
4. Enable the **Limit Library Search by FFprobe Data** plugin in the **Library Management File Test** section of the plugin flow. Place it at the **top** of the file test flow so it filters files before any other file test plugins run.
5. Configure the plugin:
   - **The FFprobe field to match against** — enter your JSONata query (e.g., `$.streams[*].codec_name`).
   - **Search strings** — enter the values to match (e.g., `hevc`).
   - Optionally check **Add all matching files to pending tasks list** if you want matching files to skip any subsequent file test plugins and be added to the task list immediately.
6. Add and configure any additional worker plugins for this library to process matching files the way you want (e.g., transcode HEVC to AV1).

### 3. Create Library B — files that do not match

Create a second library pointed at the **same media folder**.

1. Add another library with a descriptive name — for example, `Movies - Non-HEVC`.
2. Set the library path to the **same media folder** as Library A (e.g., `/library/movies`).
3. Go to the library's **Plugins** tab.
4. Enable the **Ignore Files with Matching FFprobe Data** plugin in the **Library Management File Test** section of the plugin flow. Place it at the **top** of the file test flow so it filters files before any other file test plugins run.
5. Configure the plugin with the **same JSONata query and search strings** as Library A:
   - **Field to match against** — enter the same JSONata query (e.g., `$.streams[*].codec_name`).
   - **Search strings** — enter the same values (e.g., `hevc`).
   - Optionally check **If checked, this plugin will force the plugin to immediately add the file to the task list when no disallowed values are found** if you want non-matching files to skip subsequent file test plugins.
6. Add and configure any additional worker plugins for this library to process non-matching files the way you want (e.g., transcode H.264 to AV1 with different settings).

### 4. Enable library scanning

For both libraries, enable **Library Scanner** and/or **File Monitor** as needed under the library settings. Both libraries will scan the same folder, but each will only pick up its respective portion of files based on the filtering plugin.

:::tip
If you are using **Library Scanner** on both libraries, consider staggering their scan schedules to avoid both libraries probing the same files simultaneously.
:::

## Example: splitting HDR and SDR content

Suppose you have a movie library at `/library/movies` with a mix of HDR and SDR content. The **Video Transcoder** plugin needs to be configured differently for each — HDR files require settings that preserve HDR metadata and tone mapping, while SDR files can use standard encoding settings.

HDR content is identified by the `color_transfer` property in ffprobe output. HDR10 files use the `smpte2084` transfer characteristic (also known as PQ — Perceptual Quantizer).

**Library A** — `Movies - HDR`:
- Path: `/library/movies`
- File test plugin: **Limit Library Search by FFprobe Data** (at the top of the file test flow)
  - JSONata query: `$.streams[codec_type="video"].color_transfer`
  - Search strings: `smpte2084`
- Worker plugin: **Video Transcoder** configured with HDR-appropriate settings (e.g., preserving HDR metadata, 10-bit encoding)

**Library B** — `Movies - SDR`:
- Path: `/library/movies`
- File test plugin: **Ignore Files with Matching FFprobe Data** (at the top of the file test flow)
  - JSONata query: `$.streams[codec_type="video"].color_transfer`
  - Search strings: `smpte2084`
- Worker plugin: **Video Transcoder** configured with standard SDR encoding settings

With this setup, every video file in `/library/movies` is handled by exactly one library. HDR files are processed with HDR-aware transcoding settings, and SDR files are processed with standard settings.

:::note
Both plugins evaluate the JSONata query against the full ffprobe JSON output of each file. The query results are then checked against the comma-separated search strings. A file "matches" if any of the search strings appear in the query result.
:::

## Tips

- **Keep the JSONata query and search strings identical** across both libraries. This ensures complete, non-overlapping coverage of your media files.
- You can extend this pattern to more than two libraries by using more specific JSONata queries in each. For example, one library could target `hevc`, another `h264`, and a third everything else.
- Test your JSONata queries using the [JSONata Exerciser Tool](https://try.jsonata.org/pdNmg6BId) with sample ffprobe JSON output from one of your files. You can generate sample output by running `ffprobe -show_format -show_streams -print_format json "yourfile.mkv"`.
