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
        contentLoaded({ actions }) {
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
                            test: /\.(js|jsx)$/,
                            exclude: /node_modules/,
                            use: { loader: 'babel-loader' },
                        },
                    ],
                },
            };
        },
    };
}

exports.default = theme;
