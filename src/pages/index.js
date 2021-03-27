import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

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
                Unmanic's feature set can be extended with installable plug-ins.
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

export default function Home() {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <img src="/img/unmanic-logo-bluewhite.png" alt="Unmanic Logo" />
                    <br />
                    <br />
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
