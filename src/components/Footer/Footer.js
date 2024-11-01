import React from 'react';
import styles from './footer.module.scss';

import logoFp from '../../picture/logo/logo-fournil-de-pierre.png';
import logoPikcel from'../../picture/logo/cropped.svg';

const Footer = () => {
  return (
    <footer className={styles.section2}>
      
      
      <div className={styles.part3}>
        <img src={logoFp} alt="logo de la Fournée de Pierre" />
        <p>Mentions Légales</p>
        

      </div>
      <div className={styles.part1}>
  <address className={styles.adress}>
    <h3>La Fournée de Pierre</h3>
    <p>
      <a href=" https://www.google.fr/maps?hl=fr&gl=fr&um=1&ie=UTF-8&fb=1&sa=X&geocode=KZlb1wxegAhIMRe0V--qlMSS&daddr=8+Rue+F%C3%A9lix+Pauger,+49070+Saint-Lambert-la-Potherie" target="_blank" rel="noopener noreferrer">
        8 bis rue Félix Pauger<br />
        49070 St Lambert La Potherie
      </a>
    </p>
    <p>
    <i className="fas fa-phone"></i><a href="tel:+33241194093"> 02 41 19 40 93</a>
    </p>
  </address>
  <address className={styles.adress}>
    <h3>La Fournée de Pierre</h3>
    <p>
      <a href="https://www.google.fr/maps/dir//15+Pl.+des+Plantagenets,+49070+Saint-L%C3%A9ger-de-Lini%C3%A8res/@47.4590892,-0.7415872,23746m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x48088008e391cd51:0xbf8135a152ae27ec!2m2!1d-0.6592048!2d47.4591125?hl=fr&entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
        15 Place des Plantagenets<br />
        49070 Saint-Jean-de-Linières
      </a>
    </p>
    <p>
    <i className="fas fa-phone"></i><a href="tel:+33241397606"> 02 41 39 76 06</a>
    </p>
  </address>
</div>
      <div className={styles.part2}>
      <div className={styles.horaires}>
        {/* <h2 className={styles.title}>nos horaires d'ouverture</h2> */}
        <dl>
          <dt className={styles.upper}>Lundi :</dt>
          <dd className={styles.liRed}>Fermé</dd>

          <dt className={styles.upper}>mardi au vendredi :</dt>
          <dd>
            <time>7h00</time> - <time>13h00</time> / <time>16h00</time> - <time>19h30</time>
          </dd>

          <dt className={styles.upper}>samedi :</dt>
          <dd>
            <time>7h00</time> - <time>13h00</time> / <time>16h00</time> - <time>19h00</time>
          </dd>

          <dt className={styles.upper}>dimanche :</dt>
          <dd>
            <time>7h00</time> - <time>13h00</time>
          </dd>
        </dl>
        <p className={styles.liRed}>
          Les jours fériés <strong>OUVERT</strong> de <time>7h00</time> à <time>13h00</time>
          </p>
          <p className={styles.realiseParContainer}>
          Site réalisé par  
          <a 
        href="https://www.pikcel.fr" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src={logoPikcel} 
          alt="Logo Pikcel"
          className={styles.logoImage}
        />
      </a>
    </p>
      </div>
    </div>
    </footer>
  );
};

export default Footer;
