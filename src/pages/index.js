import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
// Import react-slick and slick-carousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import React video player
import ReactPlayer from 'react-player';

const features = [
    {
        title: 'Quick to configure',
        imageUrl: 'img/configure.png',
        description: (
            <>
                Unmanic's basic features can be configured in under 2 minutes.
                For most people, this is all that is required.
            </>
        ),
    },
    {
        title: 'Easy to Use',
        imageUrl: 'img/thumbs-up.png',
        description: (
            <>
                Unmanic has been designed to be simple to install and
                easy to use.
            </>
        ),
    },
    {
        title: 'Powerful for advanced users',
        imageUrl: 'img/advanced-settings.png',
        description: (
            <>
                Unmanic has been built with advanced features that allow more advanced
                users to dial in their library optimisation.
            </>
        ),
    },
    {
        title: 'Multi-tasking',
        imageUrl: 'img/multi-tasking.svg',
        description: (
            <>
                Unmanic can manage multiple file conversion tasks at a time.
            </>
        ),
    },
    {
        title: 'Extensions',
        imageUrl: 'img/plugins.png',
        description: (
            <>
                Unmanic is fully extensible. You have the ability to write any Plugin to run any task.
            </>
        ),
    },
    {
        title: 'Opensource',
        imageUrl: 'img/opensource.svg',
        description: (
            <>
                Unmanic's code is released opensource under GPL v3.
            </>
        ),
    },
];

function Feature({imageUrl, title, description}) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title}/>
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
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
        cssEase: "linear"
    };
    return (
        <Slider {...settings}>
            <div style={'width = 100%'}>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=3sYu-VkXic4'
                    width={'100%'}
                    light={true}
                    controls={true}
                />
            </div>
            <div>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=8_t_DJ6azkw'
                    width={'100%'}
                    light={true}
                    controls={true}
                />
            </div>
        </Slider>
    );
}

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Optimise your file library ${siteConfig.title}`}
            description="Unmanic is a simple tool for optimising your file library to a single, uniform format.">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <div className="row">
                        <div className="col col--6">
                            <img src="/img/unmanic-logo-bluewhite.png" alt="Unmanic Logo"/>
                            <br/>
                            <br/>
                            <p className="text--left">
                                Unmanic gives you the power to automate the management of any file library
                                through the use of customised modular task flows to suit your specific needs,
                                giving you the ultimate, simple to configure, set-and-forget library optimisation tool.
                            </p>
                            <div className={styles.buttons}>
                                <Link
                                    className={clsx(
                                        'button button--outline button--secondary button--lg',
                                        styles.getStarted,
                                    )}
                                    to={useBaseUrl('docs/')}>
                                    Get Started
                                </Link>
                            </div>
                        </div>
                        <div className="col col--6">
                            <VideoSlider/>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}
