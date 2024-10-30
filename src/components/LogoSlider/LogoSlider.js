import React, { useEffect, useRef } from 'react';
import styles from './logoSlider.module.scss';

// Importez vos images ici
import logo1 from '../../picture/logo/logo-fabrication-maison.png';
import logo2 from '../../picture/logo/logo-click-and-collect.png';
import logo3 from '../../picture/logo/logo-gateau.png';
import logo4 from '../../picture/logo/logo-chocolat.png';
import logo5 from '../../picture/logo/logoSnacking.png';
import logo6 from '../../picture/logo/logoSnacking.png';
import logo7 from '../../picture/logo/logoSnacking.png';
// Ajoutez autant d'imports que nécessaire

const logos = [
  { name: 'FABRICATION MAISON', image: logo1 },
  { name: 'Commande en ligne', image: logo2 },
  { name: 'Gâteau anniversaires,mariages, communions ...', image: logo3 },
  { name: 'Chocolats fait maison', image: logo4 },
  { name: 'Snacking', image: logo5 },
  { name: 'Snacking', image: logo6 },
  { name: 'Snacking', image: logo7 },
  // Ajoutez autant de logos que nécessaire
];

const LogoSlider = () => {
    return (
      <div className={styles.logoSlider}>
        <div className={styles.logoTrack}>
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className={styles.logoItem}>
              <img src={logo.image} alt={logo.name} />
              <p>{logo.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default LogoSlider;