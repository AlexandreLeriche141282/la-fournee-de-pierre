import React from 'react';
import styles from './footer.module.scss'; // Assurez-vous que le chemin est correct

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h4>Pharmacie Saint Firmin</h4>
                    <p>12 Rue de l'Église, 59190 Morbecque, France</p>
                    <p>Téléphone : <a href="tel:+330123456789">01 23 45 67 89</a></p>
                    <p>Email : <a href="mailto:contact@pharmacie-saint-firmin.fr">contact@pharmacie-saint-firmin.fr</a></p>
                </div>
                <div className={styles.footerSection}>
                    <h4>Liens Utiles</h4>
                    <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">Nos Services</a></li>
                        <li><a href="#">Produits</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Mentions Légales</a></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h4>Suivez-nous</h4>
                    <div className={styles.socialIcons}>
                        <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
                        <a href="#"><img src="/path/to/twitter-icon.png" alt="Twitter" /></a>
                        <a href="#"><img src="/path/to/instagram-icon.png" alt="Instagram" /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2024 Pharmacie Saint Firmin. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;

