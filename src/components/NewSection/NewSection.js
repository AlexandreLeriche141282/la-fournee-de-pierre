import React from 'react';
import styles from './newSection.module.scss'; // Fichier SCSS spécifique à la nouvelle section

const NewSection = ({ title, children, image }) => {
    return (
        <div className={styles.newSection}>
            <div className={styles.textContainer}>
                {title && <h2>{title}</h2>}
                <p>{children}</p>
            </div>
            {image && <img src={image} alt={title} className={styles.image} />}
        </div>
    );
};

export default NewSection;
