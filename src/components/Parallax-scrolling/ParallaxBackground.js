import React, { useEffect, useState } from 'react';
import styles from './ParallaxBackground.module.scss';
import backgroundImage from '../../picture/boulangeries/brioche.jpg';

const ParallaxBackground = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.parallaxSection}>
      <div 
        className={styles.parallaxBackground}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPositionY: `${scrollPosition * 0.3}px`
        }}
      />
      {/* <div className={styles.content}>
        <h2>Nos Éclairs</h2>
        <p>Découvrez notre sélection d'éclairs gourmands</p>
      </div> */}
    </section>
  );
};

export default ParallaxBackground;