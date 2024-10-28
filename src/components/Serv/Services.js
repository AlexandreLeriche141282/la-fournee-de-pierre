import React from 'react';
import { Link } from 'react-router-dom';
import styles from './OurServices.module.scss';
import boulangerieSaintLambert from '../../picture/boulangeries/boulangerie-saint-lambert.jpg';
import boulangerieSaintJean from '../../picture/boulangeries/boulangerie-saint-jean-de-linières.jpg';
import snacking from '../../picture/snacking/sandwich.jpg';
import patisserie from '../../picture/patisserie/patisserie.jpg';
import chocolaterie from '../../picture/chocolat/bonbon chocolat.jpg';
import contact from '../../picture/contactFp.jpg';

const services = [
    {
        title: 'Boulangerie de Saint Jean de Linières',
        description: 'Découvrez la boulangerie',
        image: boulangerieSaintJean,
        link: '/saintJean', // Lien interne
    },
    {
        title: 'Boulangerie de Saint Lambert la Potherie',
        description: 'Découvrez la boulangerie',
        image: boulangerieSaintLambert,
        link: 'https://example.com/parapharmacie', // Lien externe
    },
    {
        title: 'Snacking',
        description: "Un p'tit creux, c'est par ici ! ",
        image: snacking,
        link: 'https://example.com/orthopedie', // Lien externe
    },
];

const services2 = [
    {
        title: 'La pâtisserie',
        description: 'Laissez-vous tenter ...',
        image: patisserie,
        link: 'https://example.com/materiel-medical', // Lien externe
    },
    {
        title: 'La chocolaterie',
        description: 'Succombez à la tentation ! ',
        image: chocolaterie,
        link: 'https://example.com/produits-bebe', // Lien externe
    },
    {
        title: 'Contact',
        description: "Vous avez des questions ? Contactez-nous dès aujourd'hui !",
        image: contact,
        link: '/contact', // Lien interne
    },
];

const OurServices = () => {
    return (
        <section className={styles.ourServices}>
            <div className={styles.titleContainer}>
                <h2>La <span>Gourmandise</span></h2>
                <h3 className={styles.subtitle}>avant tout ...</h3>
            </div>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <img src={service.image} alt={service.title} />
                        <div className={styles.overlay}>
                            <div className={styles.text}>
                                <h3>{service.title}</h3>
                                <p>
                                    {service.link.startsWith('/')
                                        ? <Link to={service.link}>{service.description} →</Link>
                                        : <a href={service.link} target="_blank" rel="noopener noreferrer">{service.description} →</a>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.servicesGrid}>
                {services2.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <img src={service.image} alt={service.title} />
                        <div className={styles.overlay}>
                            <div className={styles.text}>
                                <h3>{service.title}</h3>
                                <p>
                                    {service.link.startsWith('/')
                                        ? <Link to={service.link}>{service.description} →</Link>
                                        : <a href={service.link} target="_blank" rel="noopener noreferrer">{service.description} →</a>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
