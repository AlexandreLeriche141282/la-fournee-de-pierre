import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.scss';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={styles.nav}>

            <button className={styles.burgerButton} onClick={toggleMenu}>
                ☰ {/* Icône du menu burger */}
            </button>
            <div className={styles.containerLogo}>
                <h2>La <span>F</span>ournée de <span>P</span>ierre</h2>
            </div>
            
            <div className="containerNav">

            <ul className={`${styles.menuList} ${isOpen ? styles.open : ''}`}>
                <li>
                    <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>
                        Accueil
                    </Link>
                </li>
                <li>
                    <Link to="/saintJean" className={location.pathname === '/saintJean' ? styles.active : ''}>
                        Saint Jean de Linières
                    </Link>
                </li>
                <li>
                    <Link to="/para" className={location.pathname === '/para' ? styles.active : ''}>
                        Saint Lambert la Potherie
                    </Link>
                </li>
                <li>
                    <Link to="/ortho" className={location.pathname === '/ortho' ? styles.active : ''}>
                        Snacking
                    </Link>
                </li>
                <li>
                    <Link to="/materials" className={location.pathname === '/materials' ? styles.active : ''}>
                        Pâtisseries
                    </Link>
                </li>
                <li>
                    <Link to="/actuality" className={location.pathname === '/actuality' ? styles.active : ''}>
                        Chocolats
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''}>
                        Contact
                    </Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};

export default Navbar;
