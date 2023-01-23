const path = require('path');
const fs = require('fs');

function findPathInParent(endPath) {
    let parentPath = __dirname;
    while (parentPath !== path.join(parentPath, '..')) {
        const filePath = path.join(parentPath, endPath);
        if (fs.existsSync(filePath)) return filePath;
        parentPath = path.join(parentPath, '..');
    }
    const filePath = path.join(parentPath, endPath);
    if (fs.existsSync(filePath)) return filePath;

    return false;
}

function findPathInParentOrThrow(endPath) {
    const filePath = findPathInParent(endPath);
    if (!filePath) throw new Error(`Could not find ${endPath} in any parent directory`);
    return filePath;
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
                const changelogPath = findPathInParentOrThrow('CHANGELOG.md');
                const versioned = findPathInParent('website/versioned_docs');

                const pathsToCopyChangelog = [
                    findPathInParentOrThrow('docs'),
                    ...(versioned
                        ? fs.readdirSync(versioned).map((version) => path.join(versioned, version))
                        : []
                    ),
                ];

                for (const docsPath of pathsToCopyChangelog) {
                    if (fs.existsSync(path.join(docsPath, 'changelog.md')) && fs.statSync(
                        path.join(docsPath, 'changelog.md')).mtime >= fs.statSync(changelogPath).mtime) continue;
                    fs.copyFileSync(changelogPath, path.join(docsPath, 'changelog.md'));
                    console.log(`copied ${changelogPath} to ${path.join(docsPath, 'changelog.md')}`);
                    updateChangelog(path.join(docsPath, 'changelog.md'));
                }
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
