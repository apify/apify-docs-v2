/* eslint-disable global-require,import/no-extraneous-dependencies */
const { externalLinkProcessor } = require('./tools/utils/externalLink');

const absoluteUrl = 'http://docs-v2.apify.com:8080';
/** @type {Partial<import('@docusaurus/types').DocusaurusConfig>} */
module.exports = {
    title: 'Apify Docs v2',
    tagline: 'Apify Documentation',
    url: absoluteUrl,
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
    presets: /** @type {import('@docusaurus/types').PresetConfig[]} */ ([
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                    path: './sources/docs',
                    routeBasePath: 'docs',
                    // sidebarPath: require.resolve('./sources/docs/sidebars.js'),
                    rehypePlugins: [externalLinkProcessor],
                },
                theme: {
                    customCss: '/src/css/custom.css',
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
    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
        docs: {
            versionPersistence: 'localStorage',
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            hideOnScroll: true,
            title: 'Apify Docs',
            logo: {
                src: 'img/apify_sdk.svg',
                srcDark: 'img/apify_sdk_white.svg',
                href: absoluteUrl,
                target: '_self',
            },
            items: [
                {
                    label: 'Academy',
                    href: `${absoluteUrl}/academy`,
                    activeBasePath: 'academy',
                    position: 'left',
                    target: '_self',
                    rel: 'dofollow',
                },
                {
                    label: 'Platform',
                    href: `${absoluteUrl}/docs`,
                    className: 'navbar__active',
                    activeBasePath: 'platform',
                    position: 'left',
                    target: '_self',
                    rel: 'dofollow',
                },
                {
                    label: 'API',
                    type: 'dropdown',
                    activeBasePath: 'api',
                    position: 'left',
                    items: [
                        {
                            label: 'Reference',
                            // TODO
                            href: 'https://docs.apify.com/api/v2',
                        },
                        {
                            label: 'Client for JavaScript',
                            href: `${absoluteUrl}/apify-client-js/`, // we need a trailing slash here, we'd get redirected there anyway
                            target: '_self',
                            rel: 'dofollow',
                        },
                        {
                            label: 'Client for Python',
                            href: `${absoluteUrl}/apify-client-python/`, // we need a trailing slash here, we'd get redirected there anyway
                            target: '_self',
                            rel: 'dofollow',
                        },
                    ],
                },
                {
                    label: 'SDK',
                    type: 'dropdown',
                    activeBasePath: 'sdk',
                    position: 'left',
                    items: [
                        {
                            label: 'SDK for JavaScript',
                            href: `${absoluteUrl}/apify-sdk-js/`, // we need a trailing slash here, we'd get redirected there anyway
                            target: '_self',
                            rel: 'dofollow',
                        },
                        {
                            label: 'SDK for Python',
                            href: `${absoluteUrl}/apify-sdk-python/`, // we need a trailing slash here, we'd get redirected there anyway
                            target: '_self',
                            rel: 'dofollow',
                        },
                    ],
                },
                {
                    label: 'CLI',
                    href: `${absoluteUrl}/apify-cli/`, // we need a trailing slash here, we'd get redirected there anyway
                    position: 'left',
                    target: '_self',
                    rel: 'dofollow',
                },
                {
                    label: 'Open Source',
                    type: 'dropdown',
                    position: 'left',
                    items: [
                        {
                            label: 'Crawlee',
                            href: 'https://crawlee.dev',
                            rel: 'dofollow',
                        },
                        {
                            label: 'Got Scraping',
                            href: 'https://github.com/apify/got-scraping',
                        },
                        {
                            label: 'Got Scraping',
                            href: 'https://github.com/apify/fingerprint-suite',
                        },
                        {
                            label: 'See our GitHub',
                            href: 'https://github.com/apify',
                        },
                    ],
                },
                {
                    href: 'https://github.com/apify',
                    label: 'GitHub',
                    title: 'See our GitHub',
                    position: 'right',
                    className: 'icon',
                },
                {
                    href: 'https://discord.com/invite/jyEM2PRvMU',
                    label: 'Discord',
                    title: 'Chat on Discord',
                    position: 'right',
                    className: 'icon',
                },
            ],
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: true,
        },
        prism: {
            defaultLanguage: 'typescript',
            theme: require('prism-react-renderer/themes/github'),
            darkTheme: require('prism-react-renderer/themes/dracula'),
            additionalLanguages: ['docker', 'log'],
        },
        metadata: [],
        image: 'img/apify_og_SDK.png',
        footer: {
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Academy',
                            to: 'academy',
                        },
                        {
                            label: 'Platform',
                            to: 'platform',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://discord.com/invite/jyEM2PRvMU',
                        },
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/apify',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/apify',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Apify Platform',
                            href: 'https://apify.com',
                        },
                        {
                            label: 'Crawlee',
                            href: 'https://crawlee.dev',
                        },
                        {
                            label: 'Docusaurus',
                            href: 'https://docusaurus.io',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/apify',
                        },
                    ],
                },
            ],
            logo: {
                src: 'img/apify_logo.svg',
                href: '/',
                width: '60px',
                height: '60px',
            },
        },
        // TODO
        algolia: {
            appId: 'N8EOCSBQGH',
            apiKey: 'b43e67a96ed18c7f63f5fd965906a96d', // search only (public) API key
            indexName: 'apify_sdk',
            algoliaOptions: {
                facetFilters: ['version:VERSION'],
            },
        },
    }),
};
