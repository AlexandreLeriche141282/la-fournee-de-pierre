import React from 'react';
import styles from './distri.module.scss';
import distriBaguettes from '../../picture/distri-baguette.png';
import mapMarkerIcon from '../../picture/logo/icone-localisation.png';

const DistriBaguettes = () => {
  return (
    <section className={styles.productSection}>
      <div className={styles.productContent}>
      <div className={styles.textContent}>
  <h2>Vos baguettes <br /><span>à portée de main !</span></h2>
  <p>Découvrez nos distributeurs automatiques, votre boulangerie de proximité ouverte 24h/24 7/7.</p>
  <address className={styles.lieuDistributeurBaguettes}>
    <ul>
      <li className={styles.locationItem}>
        <img src={mapMarkerIcon} alt="Localisation" className={styles.icon} />
        <a href="https://goo.gl/maps/LIEN_GOOGLE_MAPS_1" target="_blank" rel="noopener noreferrer">
          Route de Saint Georges sur Loire, St Jean de Linières
        </a>
      </li>
      <li className={styles.locationItem}>
        <img src={mapMarkerIcon} alt="Localisation" className={styles.icon} />
        <a href=" https://www.google.fr/maps?hl=fr&gl=fr&um=1&ie=UTF-8&fb=1&sa=X&geocode=KZlb1wxegAhIMRe0V--qlMSS&daddr=8+Rue+F%C3%A9lix+Pauger,+49070+Saint-Lambert-la-Potherie"  target="_blank" rel="noopener noreferrer">
          Devant la boulangerie, St Lambert La Potherie
        </a>
      </li>
    </ul>
  </address>
  <p className={styles.callToAction}>D’une capacité de 100 baguettes, la machine est reliée par une puce électronique à un téléphone qui avertit le boulanger lorsqu’il est temps de réalimenter le distributeur en baguettes. La fabrication est assurée avec un roulement entre les deux établissements de Saint-Jean-de-Linières et de Saint-Lambert-la-Potherie.</p>
</div>
        <div className={styles.imageContainer}>
          <img src={distriBaguettes} alt="Distributeur de baguettes" className={styles.image} />
        </div>
      </div>
    </section>
  );
};

export default DistriBaguettes;