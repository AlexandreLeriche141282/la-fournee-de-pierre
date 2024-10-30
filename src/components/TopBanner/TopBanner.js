import React from 'react';
import styles from './topBanner.module.scss';
import facebookLogo from '../../picture/logo/logo-facebook.svg';
import instagramLogo from '../../picture/logo/instagram-2016-5.svg';


const TopBanner = ({ title, description, icon }) => {
    return (
        <div className={styles.topBanner}>
            <div className={styles.contactInfo}>
                <a href="#" className={styles.realisation}>
                Distributeurs à baguettes 24h/24 7j/7
                </a>
                
            </div>

                <div className={styles.socialIcons}>
                    <a href="https://www.facebook.com/profile.php?id=100057568333547" target="_blank" rel="noopener noreferrer">
                        <img src={facebookLogo} alt="Logo de Facebook" />
                    </a>
                    <a href="https://www.instagram.com/la_fournee_de_pierre/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramLogo} alt="Logo d'Instagram" />
                    </a>
                </div>
        </div>
    );
};

export default TopBanner;
