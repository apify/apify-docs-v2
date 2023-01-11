module.exports = {
    academy: [
        'index',
        {
            type: 'category',
            label: 'WEB SCRAPING & AUTOMATION',
            link: {
                type: 'generated-index',
                title: 'Academy',
                slug: '/academy',
                keywords: ['academy'],
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'academy',
                },
            ],
        },
        {
            type: 'category',
            label: 'Docs',
            link: {
                type: 'generated-index',
                title: 'Docs',
                slug: '/docs',
                keywords: ['docs'],
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'docs',
                },
            ],
        },
        {
            type: 'category',
            label: 'Apify SDK',
            link: {
                type: 'generated-index',
                title: 'Apify SDK',
                slug: '/apify-sdk',
                keywords: ['apify-sdk'],
            },
            items: [
                {
                    type: 'autogenerated',
                    dirName: 'apify-sdk',
                },
            ],
        },
    ],
};