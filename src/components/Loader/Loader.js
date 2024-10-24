import React, { useEffect, useState } from 'react';
import styles from './loader.module.scss';
import logo from '../../picture/logo/logo-fournil-de-pierre.png'

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Attendre que l'animation de sortie soit terminée avant de supprimer le loader
      setTimeout(() => setShouldRender(false), 1300);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <div className={`${styles.loader} ${!isLoading ? styles.hide : ''}`}>
      <div className={styles.loaderTop}></div>
      <div className={styles.loaderBottom}></div>
      <img src={logo} alt="Logo" className={styles.loaderLogo} />
    </div>
  );
};

export default Loader;