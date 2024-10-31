import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        closeMenu();
    }, [location]);

    const menuItems = [
        { name: 'Accueil', path: '/about' },
        { name: 'Saint Jean de Linières', path: '/saintJean' },
        { name: 'Saint Lambert la Potherie', path: '/para' },
        { name: 'Snacking', path: '/ortho' },
        { name: 'Pâtisseries', path: '/materials' },
        { name: 'Chocolats', path: '/actuality' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className={styles.nav}>
            <button className={styles.burgerButton} onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'}
            </button>
            <div className={styles.containerLogo}>
                <h2>La <span>F</span>ournée de <span>P</span>ierre</h2>
            </div>

            <div className={styles.containerNav}>
                <ul className={`${styles.menuList} ${isOpen ? styles.open : ''}`}>
                    {menuItems.map((item, index) => (
                        <li key={item.name} style={{transitionDelay: `${index * 0.1}s`}}>
                            <Link 
                                to={item.path} 
                                className={location.pathname === item.path ? styles.active : ''}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;