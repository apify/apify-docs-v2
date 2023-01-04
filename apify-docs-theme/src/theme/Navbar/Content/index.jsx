import React from 'react';
import { useThemeConfig } from '@docusaurus/theme-common';
import { usePluginData } from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
    splitNavbarItems,
} from '@docusaurus/theme-common/internal';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarItem from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarSearch from '@theme/Navbar/Search';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import styles from './styles.module.css';

function NavbarItems({ items }) {
    return (
        <>
            {items.map((item, i) => (
                <NavbarItem {...item} key={i}/>
            ))}
        </>
    );
}

function NavbarContentLayout({
    left,
    right,
}) {
    return (
        <div className="navbar__inner">
            <div className="navbar__items">{left}</div>
            <div className="navbar__items navbar__items--right">{right}</div>
        </div>
    );
}

function SubNavbar() {
    const { options: { subNavbar } } = usePluginData('@apify/docs-theme');
    return (
        subNavbar ? (
            <div className="navbar__inner">
                <div className="navbar__items">
                    <NavbarItems items={[
                        {
                            label: subNavbar.title,
                            to: '/',
                        },
                        ...subNavbar.items,
                    ]}/>
                </div>
            </div>
        ) : null
    );
}

export default function NavbarContent() {
    const { navbar: { items } } = useThemeConfig();
    const [leftItems, rightItems] = splitNavbarItems(items);
    const searchBarItem = items.find((item) => item.type === 'search');
    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <NavbarContentLayout
                left={
                    <>
                        <NavbarMobileSidebarToggle/>
                        <NavbarLogo/>
                        <NavbarItems items={leftItems}/>
                    </>
                }
                right={
                    <>
                        <NavbarColorModeToggle className={styles.colorModeToggle}/>
                        <NavbarItems items={rightItems}/>
                        {!searchBarItem && (
                            <NavbarSearch>
                                <SearchBar/>
                            </NavbarSearch>
                        )}
                    </>
                }
            />
            <SubNavbar/>
        </div>
    );
}
