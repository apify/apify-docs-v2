import React from 'react';
import Link from '@docusaurus/Link';
import styles from './AcademyCard.module.css';
// eslint-disable-next-line import/no-extraneosus-dependencies

const AcademyCard = ({ to, image, categoryName, categoryDesc }) => {
    return (
        <div className={styles['academy-card']}>
            <Link to={to}>
                <div className="cardImageContainer" style={{ height: '15rem' }}>
                    <img style={{ padding: '0.8rem 0.8rem', height: '100%', objectFit: 'scale-down' }} src={image} />
                </div>
                <div style={{ padding: '0px 1rem 1rem' }}>
                    <h4 style={{ fontSize: '120%' }}>{categoryName}</h4>
                    <p style={{ color: 'var(--ifm-navbar-link-color)' }}>{categoryDesc}</p>
                </div>
            </Link>
        </div>
    );
};

export default AcademyCard;
