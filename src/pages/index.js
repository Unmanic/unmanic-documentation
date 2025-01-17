import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
// Import react-slick and slick-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import React video player
import ReactPlayer from "react-player";

const quickLinks = [
  {
    title: "What is Unmanic?",
    description: (
      <>
        Unmanic gives you the power to automate the management of any file
        library
      </>
    ),
    link: "/docs/",
  },
  {
    title: "Get Started",
    description: (
      <>Unmanic's basic features can be configured in under 2 minutes</>
    ),
    link: "/docs/requirements",
  },
  // {
  //   title: "Unmanic Central",
  //   description: <>Get real time analytics from your Unmanic instances</>,
  //   link: "",
  // },
  {
    title: "GitHub Repository",
    description: <>Check out the source code on the Unmanic Github</>,
    link: "https://github.com/Unmanic",
  },
];

const features = [
  {
    title: "Save File Space",
    imageUrl: "img/configure.png",
    description: (
      <>Unmanic can allow you to free up petabytes of storage space</>
    ),
  },
  {
    title: "Set and Forget",
    imageUrl: "img/configure.png",
    description: (
      <>
        Unmanic can run in the background, so you do not need to manually set
        tasks or actively monitor
      </>
    ),
  },
  {
    title: "Quick to Setup",
    imageUrl: "img/configure.png",
    description: (
      <>
        Unmanic's basic features can be configured in under 2 minutes. For most
        people, this is all that is required.
      </>
    ),
  },
  {
    title: "Easy to Use",
    imageUrl: "img/thumbs-up.png",
    description: (
      <>Unmanic has been designed to be simple to install and easy to use.</>
    ),
  },

  {
    title: "Multi-Tasking",
    imageUrl: "img/multi-tasking.svg",
    description: (
      <>Unmanic can manage multiple file conversion tasks at a time.</>
    ),
  },
  {
    title: "Extensions",
    imageUrl: "img/plugins.png",
    description: (
      <>
        Unmanic is fully extensible. You have the ability to write any Plugin to
        run any task.
      </>
    ),
  },
  {
    title: "Powerful for Advanced Users",
    imageUrl: "img/advanced-settings.png",
    description: (
      <>
        Unmanic has been built with advanced features that allow more advanced
        users to dial in their library optimisation.
      </>
    ),
  },
  {
    title: "Opensource",
    imageUrl: "img/opensource.svg",
    description: <>Unmanic's code is released opensource under GPL v3.</>,
  },
];

function QuickLink({ title, description, link }) {
  return (
    <a href={link} className={styles.quickLink}>
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={styles.feature}>
      {imgUrl && (
        <div className={styles.featureImgContainer}>
          <img className={styles.featureImg} src={imgUrl} alt={title} />
        </div>
      )}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function VideoSlider() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    cssEase: "linear",
  };
  return (
    <Slider {...settings}>
      <div style={"width = 100%"}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=3sYu-VkXic4"
          width={"100%"}
          light={true}
          controls={true}
        />
      </div>
      <div>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=8_t_DJ6azkw"
          width={"100%"}
          light={true}
          controls={true}
        />
      </div>
    </Slider>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Optimise your file library ${siteConfig.title}`}
      description="Unmanic is a simple tool for optimising your file library to a single, uniform format."
    >
      <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
          <header className={styles.heroBanner}>
            <div className={styles.container}>
              <div>
                <h1 className={styles.heroTitle}>
                  The Ultimate Library Optimiser Tool
                </h1>
                <p className={styles.heroBlurb}>
                  Unmanic gives you the power to automate the management of your
                  file library. Easily organise, convert, and manage files to
                  suit your needs
                </p>
                <div className={styles.buttons}>
                  <Link className={styles.getStarted} to={useBaseUrl("docs/")}>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </header>
          <main>
            {/* Quick Links Section */}
            {quickLinks && quickLinks.length > 0 && (
              <section className={styles.quickLinksContainer}>
                {quickLinks.map((props, idx) => (
                  <QuickLink key={idx} {...props} />
                ))}
              </section>
            )}

            {/* Features Section */}
            <div className={styles.featuresContainer}>
              <h2>Why use Unmanic?</h2>
              {features && features.length > 0 && (
                <section className={styles.featuresWrapper}>
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </section>
              )}
            </div>
          </main>
        </div>
      </div>
    </Layout>
  );
}
