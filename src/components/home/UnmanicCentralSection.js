import React from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Slider from "react-slick";
import HomeSection from "./HomeSection";
import styles from "./UnmanicCentralSection.module.css";

const slides = [
  {
    src: "img/home/browser-unmanic-central-dashboard-1.jpg",
    alt: "Unmanic Central dashboard overview",
  },
  {
    src: "img/home/browser-unmanic-central-dashboard-2.jpg",
    alt: "Unmanic Central dashboard metrics",
  },
  {
    src: "img/home/browser-unmanic-central-home-1.jpg",
    alt: "Unmanic Central home view",
  },
];

function UnmanicCentralSection() {
  const backgroundImage = useBaseUrl("img/home/unmanic-central-dashboard.jpg");

  const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    cssEase: "ease",
    customPaging: (index) => (
      <button
        type="button"
        aria-label={`Go to slide ${index + 1}`}
        style={{
          width: "18px",
          height: "18px",
          borderRadius: "999px",
          background: "var(--ifm-color-primary)",
          padding: 0,
          fontSize: 0,
          lineHeight: 0,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      />
    ),
  };

  return (
    <HomeSection
      id="unmanic-central"
      title="Unmanic Central"
      subtitle="Your entire Unmanic fleet, unified in one secure dashboard."
      className={styles.section}
      centered
      backgroundColor="color-mix(in srgb, #08151a 45%, var(--ifm-background-color))"
      backgroundImage={backgroundImage}
      backgroundBlur="10px"
    >
      <div className={styles.sectionBody}>
        <div className={styles.copy} data-scroll-reveal>
          <div className={styles.copyColumn}>
            <div className={styles.copyBlock}>
              <h3 className={styles.blockTitle}>Unify your fleet</h3>
              <p className={styles.lead}>
                Unmanic Central brings multiple Unmanic installations together
                into one place, so your whole fleet feels like a single system.
                It collects metrics and logs into the Unmanic Central Datastore,
                a self-hosted service you run and control, so your data stays on
                your infrastructure.
              </p>
              <p className={styles.detail}>
                Keep everything local-only on your LAN, or securely expose it to
                the internet behind your own reverse proxy with SSL (for
                example, Nginx Proxy Manager). If you want deeper reporting, you
                can connect Grafana directly to your datastore and build your
                own dashboards on the same data.
              </p>
            </div>
          </div>
          <div className={styles.copyColumn}>
            <div className={styles.copyBlock}>
              <h3 className={styles.blockTitle}>
                Build the dashboard you want
              </h3>
              <p className={styles.lead}>
                Unmanic Central isn&apos;t just a viewer. It&apos;s a dashboard
                builder. Create custom dashboards made up of widgets that
                surface what matters to you, across every installation: worker
                status and activity, resource usage (CPU/RAM), uptime, library
                size and scan history, and a timeline of recent events.
              </p>
              <p className={styles.detail}>
                You also get a central place to triage issues fast: view logs
                from all installations in one stream, filter by installation
                name, focus on error-only output, and build dashboards that
                highlight failed tasks and current errors. For processing
                insights, track file-size metrics and total savings, then slice
                it by time range (last day/week, or custom dates) and by outcome
                (only increases, only decreases, or recently processed). For
                wall displays, enable kiosk mode with automatic refresh (for
                example, every 30 seconds).
              </p>
            </div>
          </div>
        </div>
        <p className={styles.supporterNote} data-scroll-reveal>
          Unmanic Central is available to supporters of the Unmanic project.
        </p>
        <div className={styles.sliderCard} data-scroll-reveal>
          <Slider {...sliderSettings}>
            {slides.map((slide) => (
              <div className={styles.slide} key={slide.src}>
                <img
                  className={styles.slideImage}
                  src={useBaseUrl(slide.src)}
                  alt={slide.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className={styles.ctaRow} data-scroll-reveal>
          <Link className={styles.ctaButton} to="https://central.unmanic.app/">
            <span>Log into Unmanic Central</span>
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

export default UnmanicCentralSection;
