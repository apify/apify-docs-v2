import React from 'react';
import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Hero from '../components/Hero/Hero';
import Section from '../components/Section/Section';
import CardWithIcon from '../components/CardWithIcon/CardWithIcon';
import ChangeLog from '../components/ChangeLog/ChangeLog';

/* Icons */
import LearnIcon from './img/learn.svg';
import BookCodeIcon from './img/book-code.svg';
import BookIcon from './img/book.svg';
import FileCodeIcon from './img/file-code.svg';
import GitHubIcon from './img/github.svg';
import DiscordIcon from './img/discord.svg';
// import FileCodeWithStarIcon from './img/file-code-with-star.svg';
import FileJavaScriptIcon from './img/file-javascript.svg';
import FilePythonIcon from './img/file-python.svg';
import CliIcon from './img/cli.svg';

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title} · ${siteConfig.tagline}`}
            description={siteConfig.tagline}
        >
            <Hero
                heading="Apify Documentation"
                description={<p>
                Mold our tools any way you want to scrape websites or automate
                repetitive tasks.
                    <br />
                Find the solution to your task here or use the search box above.
                </p>}
            />
            <Section heading="Learn">
                <div className={styles.cardsWrapper}>
                    <CardWithIcon
                        icon={<LearnIcon />}
                        title="Web scraping academy"
                        description="Learn everything about extraction of data from the web."
                        to="/academy/web-scraping-for-beginners"
                        width="calc(50% - 24px)"
                    />
                    <CardWithIcon
                        icon={<BookCodeIcon />}
                        title="Platform academy"
                        description="Learn all about the Apify platform, all of the tools it offers and improve your developer experience."
                        to="/academy/apify-platform"
                        width="calc(50% - 24px)"
                    />
                </div>
            </Section>
            <Section heading="Docs">
                <div className={styles.cardsWrapper}>
                    <CardWithIcon
                        icon={<BookIcon />}
                        title="Platform docs"
                        description="Learn everything about extraction of data from the web."
                        to="/platform"
                        width="calc(50% - 24px)"
                    />
                    <CardWithIcon
                        icon={<FileCodeIcon />}
                        title="API reference"
                        description="Learn everything about extraction of data from the web."
                        to="/api/v2"
                        width="calc(50% - 24px)"
                    />
                </div>
            </Section>
            <Section heading="Build">
                <div className={styles.cardsWrapper}>
                    <CardWithIcon
                        icon={<FileJavaScriptIcon />}
                        title="Client for JavaScript"
                        description="Learn everything about extraction of data from the web."
                        to="/client-js"
                        width="calc(33.3% - 24px)"
                    />
                    <CardWithIcon
                        icon={<FilePythonIcon />}
                        title="Client for Python"
                        description="Learn everything about extraction of data from the web."
                        to="/client-python"
                        width="calc(33.3% - 24px)"
                    />
                    <CardWithIcon
                        icon={<CliIcon />}
                        title="Apify CLI"
                        description="Learn everything about extraction of data from the web."
                        to="/cli"
                        width="calc(33.3% - 24px)"
                    />
                </div>
            </Section>
            <Section heading="Contribute">
                <div className={styles.cardsWrapper}>
                    <CardWithIcon
                        icon={<GitHubIcon />}
                        title="GitHub"
                        description="Learn everything about extraction of data from the web."
                        to="https://github.com/apify"
                        width="calc(50% - 24px)"
                    />
                    <CardWithIcon
                        icon={<DiscordIcon />}
                        title="Discord"
                        description="Learn everything about extraction of data from the web."
                        to="https://discord.com/invite/jyEM2PRvMU"
                        width="calc(50% - 24px)"
                    />
                    {/* <CardWithIcon
                        icon={<FileCodeWithStarIcon />}
                        title="Open source"
                        description="Learn everything about extraction of data from the web."
                        to="/learn"
                        width="calc(33.3% - 24px)"
                    /> */}
                </div>
            </Section>
            <Section heading="Change log">
                <ChangeLog />
            </Section>
        </Layout>
    );
}
