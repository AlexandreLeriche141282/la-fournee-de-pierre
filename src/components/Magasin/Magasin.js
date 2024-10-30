import React from 'react';
import styles from './magasin.module.scss';
// Exemple d'import d'image
import exampleImage from '../../picture/boulangeries/boulangerie-saint-jean-de-linières.jpg';

const ImageWithOverlappingText = ({ 
  image, 
  title, 
  text, 
  buttonText,
  buttonLink 
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.content}>
          <div className={styles.textContent}>
          <article>
  <h1>Boulangerie Artisanale <br />à St Jean de Linières</h1>
  
  <section>
    <h2>Découvrez Nos Spécialités du Maine et Loire</h2>
    <p>Au cœur de St Jean de Linières (49), notre boulangerie artisanale vous propose chaque jour des pains frais, des viennoiseries dorées et des pâtisseries délicieuses, préparés avec passion et savoir-faire.</p>
  </section>

  <section>
    <h2>Idéalement Située à 15 Minutes d'Angers</h2>
    <p>Facilement accessible, notre boulangerie vous accueille tous les jours pour satisfaire vos envies gourmandes.</p>
  </section>

  <section>
    <h2>Venez Savourer l'Authenticité</h2>
    <p><strong>Laissez-vous séduire par nos créations uniques et nos spécialités locales !</strong></p>
  </section>
</article>
            {buttonText && buttonLink && (
              <a href={buttonLink} className={styles.button}>
                {buttonText}
              </a>
            )}
          </div>
          <div className={styles.imageWrapper}>
            <img src={exampleImage} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
};

// Exemple d'utilisation avec image importée
const ExampleUsage = () => {
  return (
    <ImageWithOverlappingText
      image={exampleImage}
      title="Notre Histoire"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      buttonText="En savoir plus"
      buttonLink="/notre-histoire"
    />
  );
};

export default ImageWithOverlappingText;