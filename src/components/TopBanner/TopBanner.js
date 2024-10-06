import React from 'react';
import styles from './topBanner.module.scss';
// Assure-toi d'importer les logos corrects
import facebookLogo from '../../picture/facebook-176-svgrepo-com.svg';
import doctolibLogo from '../../picture/doctolib-svgrepo-com.svg';
import logoMail from '../../picture/logoMail.svg'
import logoLocation from '../../picture/logoLocation.svg'

const TopBanner = ({ title, description, icon }) => {
    return (
        <div className={styles.topBanner}>
            <div className={styles.contactInfo}>
                <a href="mailto:pharmaciesaintfirmin@gmail.com " className={styles.email}><img src={logoMail} alt="Mail" className={styles.mailIcon} />
                pharmaciesaintfirmin@gmail.com 
                </a>
                <p className={styles.address}><img src={logoLocation} alt="Mail" className={styles.mailIcon} />11 rue Saint-Firmin 59190 Morbecque</p>
            </div>

                <div className={styles.socialIcons}>
                    <a href="https://www.facebook.com/votrepharmacie" target="_blank" rel="noopener noreferrer">
                        <img src={facebookLogo} alt="Facebook" />
                    </a>
                    <a href="https://www.doctolib.fr/votrepharmacie" target="_blank" rel="noopener noreferrer">
                        <img src={doctolibLogo} alt="Doctolib" />
                    </a>
                </div>
        </div>
    );
};

export default TopBanner;
