// components/ImageWithOverlappingText/ImageWithOverlappingText.js
import React from 'react';
import styles from './magasin.module.scss';

const Magasin = ({ 
  image, 
  title, 
  sections,
  buttonText,
  buttonLink 
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <article>
              <h1>{title}</h1>
              
              {sections.map((section, index) => (
                <section key={index}>
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </section>
              ))}
            </article>
            {buttonText && buttonLink && (
              <a href={buttonLink} className={styles.button}>
                {buttonText}
              </a>
            )}
          </div>
          <div className={styles.imageWrapper}>
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magasin;