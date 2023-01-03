import React from "react";
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from "./styles.module.css";

interface CardWithIconProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    to: string;
    width?: string;
}

export default function CardWithIcon({ icon, title, description, to, width }: CardWithIconProps) {
    return (
        <Link to={to} className={clsx(styles.card)} style={{ width }}>
            <div className={styles.cardContent}>
                <div className={styles.cardIcon}>{icon}</div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Link>
    );
}