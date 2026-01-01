import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomeSection from "./HomeSection";
import styles from "./ExtensiblePluginsSection.module.css";

function ExtensiblePluginsSection() {
  const backgroundImage = useBaseUrl("img/home/plugin-installer-list.png");

  return (
    <HomeSection
      id="extensible-plugins"
      title="Extensible by Design"
      subtitle="Start simple, then layer in plugins for every workflow."
      className={styles.section}
      centered
      backgroundColor="color-mix(in srgb, #0a0a34 40%, var(--ifm-background-color))"
      backgroundImage={backgroundImage}
      backgroundBlur="8px"
    >
      <div className={styles.sectionBody}>
        <div className={styles.topRow}>
          <div className={styles.copy} data-scroll-reveal>
            <p className={styles.lead}>
              Unmanic stays intentionally simple to operate. Set your targets,
              point it at a library, and it just keeps working. When you need
              more than the essentials, the plugin ecosystem lets you expand
              Unmanic into a full automation toolkit.
            </p>
            <p className={styles.detail}>
              Install just a handful of plugins or mix many, many together to
              create the exact flow you need for your files. From format
              conversions to metadata cleanup, Unmanic makes it easy to automate
              the tasks that keep your library healthy.
            </p>
          </div>
          <div className={styles.noteCard} data-scroll-reveal>
            <h3 className={styles.cardTitle}>Build your own workflow</h3>
            <p className={styles.cardCopy}>
              Have a niche requirement? Writing a plugin is straightforward and
              well documented (Even an AI can write a fully functional plugin in
              under 10 mins). Start with the step-by-step guide in the
              documentation to build a plugin that fits your own pipeline.
            </p>
            <Link
              className={styles.cardLink}
              to="/docs/development/writing_plugins/creating_a_new_plugin"
            >
              Learn how to write a plugin
            </Link>
          </div>
        </div>
        <div className={styles.pluginsRow} data-scroll-reveal>
          <div className={styles.pluginCardHeader}>
            <h3 className={styles.cardTitle}>Popular plugins</h3>
            <p className={styles.cardCopy}>
              A few of the community favorites you can install right now:
            </p>
          </div>
          <ul className={styles.pluginGrid}>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Unmanic/plugin.video_transcoder/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>Video Transcoder</span>
              </div>
              <span className={styles.pluginDetail}>
                Standardize codecs, bitrate targets, and containers.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Unmanic/plugin.audio_transcoder/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>Audio Transcoder</span>
              </div>
              <span className={styles.pluginDetail}>
                Convert audio tracks to consistent formats and mixes.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Unmanic/plugin.file_size_metrics/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>File Size Metrics</span>
              </div>
              <span className={styles.pluginDetail}>
                Track savings and spot the biggest wins in your library.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Unmanic/plugin.comskip/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>Comskip</span>
              </div>
              <span className={styles.pluginDetail}>
                Detect and mark commercial breaks automatically.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Josh5/unmanic.plugin.notify_plex/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>Notify Plex (or Jellyfin)</span>
              </div>
              <span className={styles.pluginDetail}>
                Trigger library refreshes after processing finishes.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Josh5/unmanic.plugin.auto_rotate_images/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>Auto Rotate Images</span>
              </div>
              <span className={styles.pluginDetail}>
                Automatically rotate JPEG images based on Exif headers.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Unmanic/plugin.video_ai_upscaler/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>AI Video Upscaler</span>
              </div>
              <span className={styles.pluginDetail}>
                Upscale videos using Dandere2x, Real-ESRGAN, or Waifu2x with
                Intel/AMD/NVIDIA GPU support.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Unmanic/plugin.rename_video_file_after_transcode/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>Rename File</span>
              </div>
              <span className={styles.pluginDetail}>
                Rename files after processing using ffprobe metadata fields.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Unmanic/plugin.normalise_aac/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>
                  Normalise AAC Audio Streams
                </span>
              </div>
              <span className={styles.pluginDetail}>
                Normalize AAC audio streams and only process files with AAC
                tracks.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Josh5/unmanic.plugin.reorder_audio_streams_by_language/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>
                  Re-order Audio Streams by Language
                </span>
              </div>
              <span className={styles.pluginDetail}>
                Set the default audio track by language or Radarr/Sonarr
                original language.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Unmanic/plugin.processor_script/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>External Script</span>
              </div>
              <span className={styles.pluginDetail}>
                Execute an external script (Python, Node, or Bash) against a
                file.
              </span>
            </li>
            <li className={styles.pluginTile}>
              <div className={styles.pluginHeader}>
                <img
                  className={styles.pluginIcon}
                  src="https://raw.githubusercontent.com/Unmanic/plugin.remove_stream_by_language/master/icon.png"
                  alt=""
                  loading="lazy"
                />
                <span className={styles.pluginName}>
                  Remove Audio/Subtitle Streams by Language
                </span>
              </div>
              <span className={styles.pluginDetail}>
                Strip specified audio and subtitle languages from video files.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </HomeSection>
  );
}

export default ExtensiblePluginsSection;
