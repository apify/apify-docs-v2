import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import { isRegexpStringMatch } from '@docusaurus/theme-common';
import IconExternalLink from '@theme/Icon/ExternalLink';

export default function NavbarNavLink({
    activeBasePath,
    activeBaseRegex,
    to,
    href,
    label,
    html,
    isDropdownLink,
    prependBaseUrlToHref,
    ...props
}) {
    // TODO all this seems hacky
    // {to: 'version'} should probably be forbidden, in favor of {to: '/version'}
    const toUrl = useBaseUrl(to);
    const activeBaseUrl = useBaseUrl(activeBasePath);
    const normalizedHref = useBaseUrl(href, { forcePrependBaseUrl: true });
    // const isExternalLink = label && href && !isInternalUrl(href);
    console.log('isExternalLink', label, href, !isInternalUrl(href), toUrl, useBaseUrl(), activeBaseUrl);
    const isExternalLink = false;
    console.log('nav link?', label, href, to, activeBasePath, activeBaseRegex, activeBaseUrl);
    // Link content is set through html XOR label
    const linkContentProps = html
        ? { dangerouslySetInnerHTML: { __html: html } }
        : {
            children: (
                <>
                    {label}
                    {isExternalLink && (
                        <IconExternalLink
                            {...(isDropdownLink && { width: 12, height: 12 })}
                        />
                    )}
                </>
            ),
        };
    if (href) {
        return (
            <Link
                href={prependBaseUrlToHref ? normalizedHref : href}
                {...props}
                {...(activeBaseUrl && {
                    className: window.location.pathname.startsWith(`/${activeBasePath}`) ? 'navbar__item navbar__link navbar__link--active' : 'navbar__item navbar__link',
                })}
                {...linkContentProps}
            />
        );
    }
    return (
        <Link
            to={toUrl}
            isNavLink
            {...((activeBasePath || activeBaseRegex) && {
                isActive: (_match, location) => (activeBaseRegex
                    ? isRegexpStringMatch(activeBaseRegex, location.pathname)
                    : location.pathname.startsWith(activeBaseUrl)),
            })}
            {...props}
            {...linkContentProps}
        />
    );
}
