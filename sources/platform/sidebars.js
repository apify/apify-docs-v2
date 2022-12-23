const absoluteUrl = process.env.LOCAL
    ? 'http://docs-v2.apify.loc'
    : 'https://docs-v2.apify.com';

module.exports = {
    docs: [
        {
            type: 'autogenerated',
            dirName: '.',
        },
        {
            type: 'link',
            label: 'JavaScript API client',
            href: `${absoluteUrl}/client-js`,
        },
        {
            type: 'link',
            label: 'Python API client',
            href: `${absoluteUrl}/client-python`,
        },
        {
            type: 'link',
            label: 'JavaScript SDK',
            href: `${absoluteUrl}/sdk-js`,
        },
        {
            type: 'link',
            label: 'Python SDK',
            href: `${absoluteUrl}/sdk-python`,
        },
        {
            type: 'link',
            label: 'Command-line interface',
            href: `${absoluteUrl}/cli`,
        },
    ],
};