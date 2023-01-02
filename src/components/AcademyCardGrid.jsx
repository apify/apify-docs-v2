import React from 'react';
import AcademyCard from './AcademyCard';
import styles from './AcademyCardGrid.module.css';

export default function AcademyCardGrid({ cards }) {
    return (
        <div className={styles['academy-card-grid']}>
            {cards.map((cardItem, i) => <AcademyCard
                key={i}
                categoryName={cardItem.title}
                to={cardItem.link}
                image={cardItem.imageUrl}
                categoryDesc={cardItem.description}
            />)}
        </div>);
}
