import React from 'react';
import styles from './footer.module.scss';
import distriBaguette from '../../picture/distri-baguette.png';

const Footer = () => {
  return (
    <footer className={styles.section2}>
      <div className={styles.part1}>
        <div className={styles.adress}>
          <h3>la fournee de pierre</h3>
          <p>8 bis rue Félix Pauger<br />49070 St Lambert La Potherie<br />02 41 19 40 93</p>
        </div>
        <div className={styles.adress}>
          <h3>la fournee de pierre</h3>
          <p>15 Place des Plantagenets<br />49070 Saint-Jean-des-Linières<br />02 41 39 76 06</p>
        </div>
        <img src="./assets/img/paiement-securise.jpg" alt="paiement sécurisé" />
        <div className={styles.logoPart}>
          <img src="./assets/img/800px-Logo_Point_Vert.jpg" alt="point vert" />
          <a href="https://www.festivaldespains.com/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/img/LogoFestival.jpg" alt="festival des pains" />
          </a>
          <a href="https://www.michard.fr/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/img/logo-michard-sticky.png" alt="michard" />
          </a>
        </div>
      </div>
      <div className={styles.part2}>
        <div className={styles.horaires}>
          <ul>
            <li className={styles.upper}>nos horaires d'ouverture</li>
            <div className={styles.liRed}>Lundi : Fermé</div>
            <li className={styles.upper}>mardi au vendredi :</li>
            <li>7h00 - 13h00 / 16h00 - 19h30</li>
            <li className={styles.upper}>samedi :</li>
            <li>7h00 - 13h00 / 16h00 - 19h00</li>
            <li className={styles.upper}>dimanche :</li>
            <li>7h00 - 13h00</li>
            <div className={styles.liRed}>Les jours fériés OUVERT de 7h00 à 13h00</div>
          </ul>
          <div className={styles.listFooterRight}>
            <ul>
              <li>Compte client</li>
              <li>Conditions générales de ventes</li>
              <li>Offres Promotionnelles</li>
              <li>Politique de confidentialité</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.part3}>
        <img src={distriBaguette} alt="distributeur baguettes" />
        <div className={styles.lieuDistributeurBaguettes}>
          <p>2 DISTRIBUTEURS DE BAGUETTES<br />24H24 – 7J/7</p>
          <ul>
            <li>Route de Saint Georges sur Loire à St Jean de Linières</li>
            <li>Devant la boulangerie de St Lambert La Potherie</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
