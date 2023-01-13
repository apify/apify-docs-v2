const path = require('path');
const fs = require('fs');

function findChangelogPath() {
    let changelogPath = __dirname;
    while (changelogPath !== path.join(changelogPath, '..')) {
        const filePath = path.join(changelogPath, 'CHANGELOG.md');
        if (fs.existsSync(filePath)) return filePath;
        changelogPath = path.join(changelogPath, '..');
    }
    const filePath = path.join(changelogPath, 'CHANGELOG.md');
    if (fs.existsSync(filePath)) return filePath;

    throw new Error('Could not find CHANGELOG.md in any parent directory');
}

function theme(
    context,
    options,
) {
    return {
        name: '@apify/docs-theme',
        getThemePath() {
            return '../src/theme';
        },
        getTypeScriptThemePath() {
            return '../src/theme';
        },
        async contentLoaded({ actions }) {
            const { setGlobalData } = actions;
            setGlobalData({
                options,
            });

            try {
                const changelog = fs.readFileSync(findChangelogPath(), 'utf8');
                const dataPath = await actions.createData(
                    'changelog.json',
                    JSON.stringify(changelog),
                );

                actions.addRoute({
                    path: path.join(context.baseUrl, 'changelog'),
                    component: require.resolve('./pages/ChangelogPage.jsx'),
                    exact: true,
                    modules: {
                        changelog: dataPath,
                    },
                });
            } catch (e) {
                console.warn(`Changelog page could not be initialized: ${e.message}`);
            }
        },
        getClientModules() {
            return [
                require.resolve('./theme/custom.css'),
            ];
        },
        configureWebpack() {
            return {
                module: {
                    rules: [
                        {
                            test: /(@apify\/|apify-)docs-theme\/src\/(theme|pages)\/.*?\.jsx?$/,
                            use: {
                                loader: 'babel-loader',
                            },
                        },
                    ],
                },
            };
        },
    };
}

module.exports = {
    theme,
};
