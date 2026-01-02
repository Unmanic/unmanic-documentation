import React, { useEffect, useRef } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeSection from "./HomeSection";
import styles from "./SaveFileSpaceSection.module.css";

function SaveFileSpaceSection() {
  const backgroundImage = useBaseUrl(
    "img/home/file-size-metrics-data-panel.png"
  );
  const sectionRef = useRef(null);
  const beforeBarRef = useRef(null);
  const afterBarRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || typeof window === "undefined") {
      return undefined;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const bars = [beforeBarRef.current, afterBarRef.current];

      gsap.set(bars, { scaleX: 0 });

      const animateIn = () => {
        gsap.to(bars, {
          scaleX: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.12,
        });
      };

      const reset = () => {
        gsap.set(bars, { scaleX: 0 });
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 50%",
        end: "bottom 1%",
        onEnter: animateIn,
        onEnterBack: animateIn,
        onLeave: reset,
        onLeaveBack: reset,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <HomeSection
      id="save-file-space"
      title="Save File Space"
      subtitle="Keep your library lean with automated file management."
      className={styles.section}
      centered
      backgroundColor="color-mix(in srgb, #021430 40%, var(--ifm-background-color))"
      backgroundImage={backgroundImage}
      backgroundBlur="6px"
    >
      <div className={styles.sectionBody} ref={sectionRef}>
        <div className={styles.textGrid} data-scroll-reveal>
          <div className={styles.copyColumn}>
            <p className={styles.lead}>
              Configure Unmanic to continuously optimize your library for
              storage. You define what &ldquo;better compression&rdquo; looks
              like, then Unmanic applies those rules across your files as new
              content arrives and old content is revisited.
              <br />
              <br />
              Instead of occasional cleanups, your library stays space-efficient
              automatically.
            </p>
          </div>
          <div className={styles.listColumn}>
            <p className={styles.detail}>
              It can reduce footprint in a few key ways:
            </p>
            <ul className={styles.detailList}>
              <li>
                <strong>Remove bloat:</strong> strip unnecessary streams,
                attachments, or metadata you do not need
              </li>
              <li>
                <strong>Standardize outputs:</strong> keep formats and settings
                consistent across your library
              </li>
              <li>
                <strong>Compress media:</strong> use FFmpeg to shrink video (and
                audio) while preserving the tracks you want
              </li>
              <li>
                <strong>Convert and tidy files:</strong> turn documents into
                PDFs, normalize image metadata, and fix orientation
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.chartCard} data-scroll-reveal>
          <div className={styles.chartHeader}>
            <span>Total Disk Space Saved</span>
            <span className={styles.chartUnit}>GB</span>
          </div>
          <div className={styles.chartPlot}>
            <div className={styles.axisGrid} aria-hidden="true">
              <span className={styles.axisCell}>0</span>
              <span className={styles.axisCell}>100</span>
              <span className={styles.axisCell}>200</span>
              <span className={styles.axisCell}>300</span>
              <span className={styles.axisCell}>400</span>
              <span className={styles.axisCell}>500</span>
              <span className={styles.axisCell}>600</span>
            </div>
            <div className={styles.barRow}>
              <div className={styles.barLabel}>Before</div>
              <div className={styles.barTrack}>
                <div
                  className={`${styles.barFill} ${styles.barFillBefore}`}
                  style={{ "--bar-size": "100%" }}
                  ref={beforeBarRef}
                />
              </div>
              <div className={styles.barValue}>698GB</div>
            </div>
            <div className={styles.barRow}>
              <div className={styles.barLabel}>After</div>
              <div className={styles.barTrack}>
                <div
                  className={`${styles.barFill} ${styles.barFillAfter}`}
                  style={{ "--bar-size": "66%" }}
                  ref={afterBarRef}
                />
              </div>
              <div className={styles.barValue}>462GB</div>
            </div>
          </div>
        </div>
      </div>
    </HomeSection>
  );
}

export default SaveFileSpaceSection;
