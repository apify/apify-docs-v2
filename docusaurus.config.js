/* eslint-disable global-require,import/no-extraneous-dependencies */
const { config } = require('./apify-docs-theme');
const { externalLinkProcessor } = require('./tools/utils/externalLink');

const absoluteUrl = process.env.LOCAL
    ? 'http://docs-v2.apify.loc'
    : 'https://docs-v2.apify.com';

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
            require.resolve('./apify-docs-theme'),
            /** @type {import('./apify-docs-theme/types').ThemeOptions} */
            ({
                subNavbar: [
                    {
                        label: 'Subnav 1',
                        href: `${absoluteUrl}/platform`,
                    },
                    {
                        label: 'Subnav 2',
                        href: `${absoluteUrl}/academy`,
                    },
                    {
                        label: 'Subnav 3',
                        type: 'dropdown',
                        items: [
                            {
                                label: 'Reference',
                                // TODO
                                href: 'https://docs.apify.com/api/v2',
                            },
                            {
                                label: 'Client for JavaScript',
                                href: `${absoluteUrl}/client-js/`, // we need a trailing slash here, we'd get redirected there anyway
                                target: '_self',
                                rel: 'dofollow',
                            },
                            {
                                label: 'Client for Python',
                                href: `${absoluteUrl}/client-python/`, // we need a trailing slash here, we'd get redirected there anyway
                                target: '_self',
                                rel: 'dofollow',
                            },
                        ],
                    },
                ],
            }),
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
