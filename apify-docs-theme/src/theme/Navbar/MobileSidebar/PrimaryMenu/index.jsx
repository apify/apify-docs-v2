import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { usePluginData } from '@docusaurus/useGlobalData';
import NavbarItem from '@theme/NavbarItem';

function useNavbarItems() {
    // TODO temporary casting until ThemeConfig type is improved
    return useThemeConfig().navbar.items;
}
// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu() {
    // const mobileSidebar = useNavbarMobileSidebar();
    // TODO how can the order be defined for mobile?
    // Should we allow providing a different list of items?
    const items = useNavbarItems();
    const baseUrl = useBaseUrl('.');
    const { options: { subNavbar } } = usePluginData('@apify/docs-theme');
    return (
        <>
            {
                subNavbar ? <>
                    <NavbarItem
                        key={'title'}
                        mobile
                        href={baseUrl}
                        label={subNavbar.title}
                    />
                    <ul className="menu__list" style={{ paddingLeft: '1rem', marginBottom: '1rem', borderBottom: '1px solid #e0e0e0', paddingBottom: '1rem' }}>
                        {subNavbar.items.map((item, i) => (
                            <NavbarItem
                                key={i}
                                mobile
                                {...item}
                            />
                        ))}
                    </ul>
                </> : null
            }
            <NavbarItem
                key={'title2'}
                mobile
                label='Apify documentation'
            />
            <ul className="menu__list" style={{ paddingLeft: '1rem' }}>
                {items.map((item, i) => (
                    <NavbarItem
                        mobile
                        {...item}
                        key={i}
                    />
                ))}
            </ul>
        </>
    );
}
