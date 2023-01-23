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
    const updated = `---
title: Changelog
---
${changelog.replaceAll(/\n#[^#]/g, '\n## ')}`;
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
        async loadContent() {
            try {
                const docsPath = findPathToParent('docs');
                const changelogPath = findPathToParent('CHANGELOG.md');
                if (fs.existsSync(path.join(docsPath, 'changelog.md') || fs.statSync(
                    path.join(docsPath, 'changelog.md')).mtime >= fs.statSync(changelogPath).mtime,
                )) return;
                fs.copyFileSync(changelogPath, path.join(docsPath, 'changelog.md'));
                updateChangelog(path.join(docsPath, 'changelog.md'));
            } catch (e) {
                console.warn(`Changelog page could not be initialized: ${e.message}`);
            }
        },
        async contentLoaded({ actions }) {
            const { setGlobalData } = actions;
            setGlobalData({
                options,
            });
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
