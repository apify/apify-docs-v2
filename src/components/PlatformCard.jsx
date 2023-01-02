import React from 'react';
import styles from './Cards.module.css';
// eslint-disable-next-line import/no-extraneosus-dependencies

const Link = ({ cardItem, href, isExternalLink }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
        <span style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
            <span>🗒️</span>
            <span style={{ marginLeft: '0.5rem', marginRight: '0.3rem' }}>{cardItem}</span>
            {
                isExternalLink && (
                    <>
                        <span style={{ flex: 1 }}></span>
                        <span>🔗</span>
                    </>
                )
            }
        </span>
    </a>
);

const PlaftormCard = ({ title, items }) => {
    return (
        <div className={styles.card}>
            <h4 className={styles['card-header']}>{title}</h4>
            <ul className={styles['card-links']}>
                {items.map((props, i) => (
                    <li key={i}>
                        <Link {...props} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlaftormCard;
