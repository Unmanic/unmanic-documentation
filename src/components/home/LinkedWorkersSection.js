import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HomeSection from "./HomeSection";
import styles from "./LinkedWorkersSection.module.css";

function LinkedWorkersSection() {
  const backgroundImage = useBaseUrl(
    "img/home/browser-unmanic-central-dashboard-2.jpg"
  );

  return (
    <HomeSection
      id="linked-installations"
      title="Linked Installations"
      subtitle="Share workers across PCs to keep one unified queue moving."
      className={styles.section}
      centered
      backgroundColor="color-mix(in srgb, #0b1b24 45%, var(--ifm-background-color))"
      backgroundImage={backgroundImage}
      backgroundBlur="10px"
    >
      <div className={styles.sectionBody}>
        <div className={styles.copy} data-scroll-reveal>
          <div className={styles.copyColumn}>
            <div className={styles.copyBlock}>
              <h3 className={styles.blockTitle}>One queue, many machines</h3>
              <p className={styles.lead}>
                Link multiple Unmanic installations and let them share workers
                across your PCs. A primary installation coordinates tasks, then
                hands them off to connected machines that are enabled to receive
                work and have a matching library name.
              </p>
              <p className={styles.detail}>
                You keep the same simple workflow, but now your fleet acts like
                a single, elastic worker pool. Add another PC and watch the
                queue clear faster without changing how you manage jobs.
              </p>
            </div>
          </div>
          <div className={styles.copyColumn}>
            <div className={styles.copyBlock}>
              <h3 className={styles.blockTitle}>
                Selective routing, your rules
              </h3>
              <p className={styles.lead}>
                Tasks only flow to linked installations that are configured to
                receive them, and only when a matching library exists. Create
                matching libraries only where you want tasks to run, and keep
                other installations out of that workload entirely.
              </p>
              <p className={styles.detail}>
                Configure each installation with its own plugin stack for the
                same library name, then let linked tasks run on the hardware
                that fits. Set a distributed worker target to keep the overall
                worker count balanced.
                <Link
                  className={styles.inlineLink}
                  to="/docs/configuration/linking/link_overview#selective-routing-with-matching-library-names"
                >
                  Learn how linked routing works
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.valueGrid} data-scroll-reveal>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>Scale on demand</h4>
            <p className={styles.valueCopy}>
              Add or remove installations without reconfiguring the main queue.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>Selective task sharing</h4>
            <p className={styles.valueCopy}>
              Only installations with the matching library name receive tasks
              for that library.
            </p>
          </div>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>Hardware-specific stacks</h4>
            <p className={styles.valueCopy}>
              Tune plugins per installation to target NVIDIA, Intel, or Apple
              hardware.
            </p>
          </div>
        </div>
        <div className={styles.transferCard} data-scroll-reveal>
          <div className={styles.transferBody}>
            <div className={styles.nodeColumn}>
              <div className={`${styles.node} ${styles.nodeLocal}`}>
                <div className={styles.nodeText}>
                  <span className={styles.nodeLabel}>Primary Installation</span>
                  <span className={styles.nodeDetail}>Central coordinator</span>
                </div>
                <img
                  className={styles.nodeRemoteImage}
                  src={useBaseUrl("img/home/intel-arc.jpg")}
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className={styles.linkColumn} aria-hidden="true">
              <div className={`${styles.linkTrack} ${styles.trackTop}`}>
                <span className={styles.packet} />
                <span className={styles.packetReturn} />
              </div>
              <div className={`${styles.linkTrack} ${styles.trackBottom}`}>
                <span className={styles.packet} />
                <span className={styles.packetReturn} />
              </div>
            </div>
            <div className={styles.nodeColumn}>
              <div className={`${styles.node} ${styles.nodeRemote}`}>
                <div className={styles.nodeText}>
                  <span className={styles.nodeLabel}>Linked Installation</span>
                  <span className={styles.nodeDetail}>
                    Hardware-accelerated node
                  </span>
                </div>
                <img
                  className={styles.nodeRemoteImage}
                  src={useBaseUrl("img/home/nvidia-rtx.jpg")}
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
              <div className={`${styles.node} ${styles.nodeRemote}`}>
                <div className={styles.nodeText}>
                  <span className={styles.nodeLabel}>Linked Installation</span>
                  <span className={styles.nodeDetail}>
                    Hardware-accelerated node
                  </span>
                </div>
                <img
                  className={styles.nodeRemoteImage}
                  src={useBaseUrl("img/home/m4-max.jpg")}
                  alt=""
                  loading="lazy"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className={styles.transferFooter}>
            <span className={styles.statusItem}>
              <span className={styles.statusDot} />
              Task sent
            </span>
            <span className={styles.statusItem}>
              <span className={styles.statusDot} />
              Remote processing
            </span>
            <span className={styles.statusItem}>
              <span className={styles.statusDot} />
              Result received
            </span>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}

export default LinkedWorkersSection;
