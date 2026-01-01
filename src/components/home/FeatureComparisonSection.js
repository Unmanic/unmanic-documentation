import React from "react";
import HomeSection from "./HomeSection";
import styles from "./FeatureComparisonSection.module.css";

const rows = [
  {
    feature: "Core file automation",
    free: true,
    supporter: true,
  },
  {
    feature: "Plugin installs and updates",
    free: true,
    supporter: true,
  },
  {
    feature: "Third-party plugin repositories and installs",
    free: true,
    supporter: true,
  },
  {
    feature: "Hardware accelerated processing",
    free: true,
    supporter: true,
  },
  {
    feature: "Workflow support for any file type",
    free: true,
    supporter: true,
  },
  {
    feature: "Pause and resume processing",
    free: true,
    supporter: true,
  },
  {
    feature: "Scheduling and worker scaling",
    free: true,
    supporter: true,
  },
  {
    feature: "Export/import library setups",
    free: true,
    supporter: true,
  },
  {
    feature: "Library locking and protections",
    free: true,
    supporter: true,
  },
  {
    feature: "File testing threads",
    free: "Unlimited",
    supporter: "Unlimited",
  },
  {
    feature: "Worker count",
    free: "Unlimited",
    supporter: "Unlimited",
  },
  {
    feature: "Maximum number of libraries",
    free: "2",
    supporter: "Unlimited",
  },
  {
    feature: "Maximum linked installations",
    free: "3",
    supporter: "Unlimited",
  },
  {
    feature: "Supporter-only plugin settings",
    free: "Limited",
    supporter: "Full access",
  },
];

function CheckIcon({ enabled }) {
  if (!enabled) {
    return null;
  }

  return (
    <span className={styles.icon} aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <path
          d="M5 13l4 4L19 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function FeatureCellValue({ value }) {
  if (value === true) {
    return <CheckIcon enabled />;
  }

  if (!value) {
    return null;
  }

  return <span className={styles.textValue}>{value}</span>;
}

function FeatureComparisonSection() {
  return (
    <HomeSection
      id="feature-comparison"
      title="Feature Comparison"
      subtitle="See what is included for everyone and what supporters unlock."
      className={styles.section}
      centered
      backgroundColor="color-mix(in srgb, #111a20 35%, var(--ifm-background-color))"
      backgroundBlur="8px"
    > 
      <div className={styles.sectionBody} data-scroll-reveal>
        <div className={styles.supporterIntro}>
          <p className={styles.supporterLead}>
            Unmanic is free and open source. Supporting it simply means helping
            ensure the future of the project, and no contribution is too small.
            You can unlock supporter features by helping out in a few easy
            ways:
          </p>
          <div className={styles.supporterList}>
            <div className={styles.supporterItem}>
              <h3 className={styles.supporterTitle}>GitHub</h3>
              <p className={styles.supporterDetail}>
                Log in with GitHub to link your profile. Any commit to a project
                on https://github.com/Unmanic, even a small documentation fix,
                can bump your login to a supporter tier.
              </p>
            </div>
            <div className={styles.supporterItem}>
              <h3 className={styles.supporterTitle}>Discord</h3>
              <p className={styles.supporterDetail}>
                Log in with Discord to link your profile. The Discord server
                awards reputation points for helpful participation. Earning one
                rep point per month can bump your login to a supporter tier.
              </p>
            </div>
            <div className={styles.supporterItem}>
              <h3 className={styles.supporterTitle}>Patreon</h3>
              <p className={styles.supporterDetail}>
                Log in with Patreon to link your profile. Any Patreon supporter
                tier unlocks supporter status. The current minimum tier is
                $1AUD.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div className={styles.featureHead}>Features</div>
            <div className={styles.planHead}>Free</div>
            <div className={styles.planHead}>Supporter</div>
          </div>
          <div className={styles.tableBody}>
            {rows.map((row) => (
              <div className={styles.tableRow} key={row.feature}>
                <div className={styles.featureCell}>{row.feature}</div>
                <div className={styles.planCell}>
                  <FeatureCellValue value={row.free} />
                </div>
                <div className={styles.planCell}>
                  <FeatureCellValue value={row.supporter} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </HomeSection>
  );
}

export default FeatureComparisonSection;
