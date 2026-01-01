import React from "react";
import Link from "@docusaurus/Link";
import HomeSection from "./HomeSection";
import styles from "./GetStartedSection.module.css";

function GetStartedSection() {
  return (
    <HomeSection
      id="get-started"
      title="Get Started Today"
      subtitle="Unmanic is free and open source. Install it and start automating in minutes."
      className={styles.section}
      centered
      backgroundColor="#1b1b1d"
      backgroundBlur="10px"
    >
      <div className={styles.sectionBody} data-scroll-reveal>
        <p className={styles.caption}>
          Ready to clean up and optimize your library? Follow the setup guide to
          deploy Unmanic and start running plugins right away.
        </p>
        <div className={styles.ctaRow}>
          <Link className={styles.ctaButton} to="/docs/requirements">
            <span>Install / Get Started</span>
            <span className={styles.ctaIcon} aria-hidden="true">
              <svg viewBox="0 0 24 24" role="img" focusable="false">
                <path
                  d="M5 12h13m0 0l-5-5m5 5l-5 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </HomeSection>
  );
}

export default GetStartedSection;
