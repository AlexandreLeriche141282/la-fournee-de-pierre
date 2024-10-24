import React from 'react';
import styles from './newSection.module.scss';
import useInView from '../hooks/useInView'; // Assurez-vous que le chemin est correct

const NewSection = ({ title, children, image }) => {
    const [ref, isInView] = useInView({
        threshold: 0.1, // L'élément sera considéré comme visible quand 10% sera dans la vue
        triggerOnce: true // L'animation ne se déclenchera qu'une seule fois
    });

    return (
        <div ref={ref} className={`${styles.newSection} ${isInView ? styles.inView : ''}`}>
            {image && <img src={image} alt={title} className={styles.image} />}
            <div className={styles.textContainer}>
                {title && <h2>{title}</h2>}
                <p>{children}</p>
            </div>
        </div>
    );
};

export default NewSection;