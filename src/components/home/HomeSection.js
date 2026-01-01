import React from "react";
import clsx from "clsx";
import styles from "./HomeSection.module.css";

function HomeSection({
  id,
  title,
  subtitle,
  className,
  centered,
  backgroundColor,
  backgroundImage,
  backgroundBlur,
  children,
}) {
  return (
    <section
      id={id}
      className={clsx(styles.section, className)}
      data-home-section
      data-bg-color={backgroundColor}
      data-bg-image={backgroundImage}
      data-bg-blur={backgroundBlur}
    >
      <div className={styles.sectionInner}>
        {(title || subtitle) && (
          <header
            className={clsx(
              styles.sectionHeader,
              centered && styles.sectionHeaderCentered
            )}
            data-scroll-reveal
          >
            {title && <h2 className={styles.sectionTitle}>{title}</h2>}
            {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export default HomeSection;
