import React from 'react';
import Layout from '@theme/Layout';
import ReactMarkdown from 'react-markdown';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import TOC from '@theme/TOC';
import TOCCollapsible from '@theme/TOCCollapsible';
import { useWindowSize } from '@docusaurus/theme-common';

import { unified } from 'unified';
import remarkSlug from 'remark-slug';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkHeadings from '@vcarl/remark-headings';
import rehypeHighlight from 'rehype-highlight';
import dockerfile from 'highlight.js/lib/languages/dockerfile';

export default function ChangelogPage({ changelog }) {
    const windowSize = useWindowSize();

    const { data: { headings: tocRaw } } = unified()
        .use(remarkParse)
        .use(remarkStringify)
        .use(remarkSlug)
        .use(remarkHeadings)
        .processSync(changelog);

    const toc = tocRaw.map((x) => ({
        value: x.value,
        level: x.depth,
        id: x.data.id,
    }));

    return (windowSize === 'desktop' || windowSize === 'ssr') ? (
        <ChangelogPageDesktop {...{ changelog, toc }} />
    ) : <ChangelogPageMobile {...{ changelog, toc }}/>;
}

function ChangelogPageDesktop({ changelog, toc }) {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`Changelog · ${siteConfig.tagline}`}
            description={siteConfig.tagline}
        >
            <div className='docPage docMainContainer' style={{ margin: 'auto' }}>
                <div className="row" style={{ flexWrap: 'nowrap' }}>
                    <div style={{ flexDirection: 'column' }} className='theme-doc-markdown markdown col--9'>
                        <ReactMarkdown
                            remarkPlugins={[remarkSlug]}
                            rehypePlugins={[
                                [rehypeHighlight,
                                    {
                                        languages: { dockerfile },
                                        ignoreMissing: true,
                                    },
                                ]]}
                        >
                            {changelog}
                        </ReactMarkdown>
                    </div>
                    <div className="col--3">
                        <TOC
                            {...{
                                toc,
                                minHeadingLevel: 1,
                            }}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function ChangelogPageMobile({ changelog, toc }) {
    const { siteConfig } = useDocusaurusContext();

    return (
        <Layout
            title={`Changelog · ${siteConfig.tagline}`}
            description={siteConfig.tagline}
        >
            <div className='col apiItemCol' style={{ margin: 'auto' }}>
                <TOCCollapsible
                    {...{
                        toc,
                        minHeadingLevel: 1,
                    }}
                />
                <div style={{ flexDirection: 'column' }} className='theme-doc-markdown markdown'>
                    <ReactMarkdown
                        remarkPlugins={[remarkSlug]}
                    >
                        {changelog}
                    </ReactMarkdown>
                </div>
            </div>
        </Layout>
    );
}
