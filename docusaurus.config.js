/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: "Unmanic",
    tagline:
        "Unmanic is a simple tool for optimising your video library to a single, uniform format.",
    url: "http://docs.unmanic.app/",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: "Unmanic", // Usually your GitHub org/user name.
    projectName: "unmanic-documentation", // Usually your repo name.
    themeConfig: {
        navbar: {
            title: "Unmanic - Library Optimiser",
            logo: {
                alt: "Unmanic Icon",
                src: "img/icon.png",
            },
            items: [
                {
                    to: "docs/",
                    activeBasePath: "docs",
                    label: "Docs",
                    position: "left",
                },
                /*{to: 'blog', label: 'Blog', position: 'left'},*/
                {
                    href: "https://github.com/Unmanic",
                    label: "GitHub",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Getting Started",
                            to: "docs/",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        /*{
                          label: 'Discord',
                          href: 'https://discordapp.com/invite/',
                        },*/
                        {
                            label: "Twitter",
                            href: "https://twitter.com/jsunnex",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        /*{
                          label: 'Blog',
                          to: 'blog',
                        },*/
                        {
                            label: "GitHub",
                            href: "https://github.com/Unmanic",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Josh Sunnex. Built with Docusaurus.`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                },
                blog: {
                    showReadingTime: true,
                },
                theme: {
                    customCss: [
                        require.resolve("./src/css/custom.css"),
                    ],
                },
            },
        ],
    ],
};
