import React from "react";
import styles from "./styles.module.css";

interface SectionProps {
    heading?: string;
}

const Section: React.FC<SectionProps> = ({ heading, children }) => {
    return (
        <section className={styles.section}>
            <div className="container">
                {heading && <h2>{heading}</h2>}
                {children}
            </div>
        </section>
    );
}

export default Section;