const path = require('path');
const fs = require('fs');

function findPathToParent(endPath) {
    let parentPath = __dirname;
    while (parentPath !== path.join(parentPath, '..')) {
        const filePath = path.join(parentPath, endPath);
        if (fs.existsSync(filePath)) return filePath;
        parentPath = path.join(parentPath, '..');
    }
    const filePath = path.join(parentPath, endPath);
    if (fs.existsSync(filePath)) return filePath;

    throw new Error('Could not find CHANGELOG.md in any parent directory');
}

function updateChangelog(changelogPath) {
    const changelog = fs.readFileSync(changelogPath, 'utf-8');
    const updated = changelog.replaceAll(/\n#[^#]/g, '\n## ');
    fs.writeFileSync(changelogPath, updated, 'utf-8');
}

function theme(
    context,
    options,
) {
    return {
        name: '@apify/docs-theme',
        getPathsToWatch() {
            return ['./pages'];
        },
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
                const changelogPath = findPathToParent('CHANGELOG.md');
                const docsPath = findPathToParent('docs');
                fs.copyFileSync(changelogPath, path.join(docsPath, 'changelog.md'));
                updateChangelog(path.join(docsPath, 'changelog.md'));
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
