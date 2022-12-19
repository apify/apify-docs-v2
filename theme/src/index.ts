import type { NavbarItem } from '@docusaurus/theme-common';

export default function theme(context, options: Options) {
    return {
        name: "@apify/docs-theme",
        getThemePath() {
            return '../dist/theme';
        },
        getTypeScriptThemePath() {
            return '../src/theme';
        },
        async contentLoaded({ content, actions }) {
            const { setGlobalData } = actions;
            setGlobalData({
                options,
            });
        },
    };
}

export interface Options {
    subNavbar?: NavbarItem[];
}
