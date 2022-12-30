/* eslint-disable global-require,import/no-extraneous-dependencies */
const { config } = require('./apify-docs-theme');
const { externalLinkProcessor } = require('./tools/utils/externalLink');

/** @type {Partial<import('@docusaurus/types').DocusaurusConfig>} */
module.exports = {
    title: 'Apify Docs v2',
    tagline: 'Apify Documentation',
    url: config.absoluteUrl,
    baseUrl: '/',
    trailingSlash: false,
    organizationName: 'apify',
    projectName: 'apify-docs-v2',
    scripts: ['/js/custom.js'],
    favicon: 'img/favicon.ico',
    onBrokenLinks:
    /** @type {import('@docusaurus/types').ReportingSeverity} */ ('warn'),
    onBrokenMarkdownLinks:
    /** @type {import('@docusaurus/types').ReportingSeverity} */ ('warn'),
    themes: [
        [
            require.resolve('./apify-docs-theme/'),
            {
                // subNavbar: [
                //     {
                //         label: 'Subnav 1',
                //         href: `${absoluteUrl}/platform`,
                //     },
                //     {
                //         label: 'Subnav 2',
                //         href: `${absoluteUrl}/academy`,
                //     },
                //     {
                //         label: 'Subnav 3',
                //         href: `${absoluteUrl}/api`,
                //     },
                // ],
            },
        ],
    ],
    presets: /** @type {import('@docusaurus/types').PresetConfig[]} */ ([
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    path: './sources/platform',
                    routeBasePath: 'platform',
                    sidebarPath: require.resolve('./sources/platform/sidebars.js'),
                    rehypePlugins: [externalLinkProcessor],
                },
            }),
        ],
    ]),
    plugins: [
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'academy',
                path: './sources/academy',
                routeBasePath: 'academy',
                rehypePlugins: [externalLinkProcessor],
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
                // sidebarPath: require.resolve('./sources/academy/sidebars.js'),
            },
        ],
        // TODO this should be somehow computed from all the external sources
        [
            '@docusaurus/plugin-client-redirects',
            {
                createRedirects(existingPath) {
                    if (!existingPath.endsWith('/')) {
                        return `${existingPath}/`;
                    }

                    return undefined; // Return a falsy value: no redirect created
                },
            },
        ],
        // [
        //     'docusaurus-gtm-plugin',
        //     {
        //         id: 'GTM-TKBX678',
        //     },
        // ],
    ],
    themeConfig: config.themeConfig,
};
