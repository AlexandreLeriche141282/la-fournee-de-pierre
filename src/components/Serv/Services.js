import React from 'react';
import styles from './OurServices.module.scss';
import interieurPharma from '../../picture/pharm2.jpg';
import para from '../../picture/para2.jpg';
import ortho from '../../picture/ortho.jpg';
import materielsMedical from '../../picture/Materiel-medical.jpg';
import produitsBebe from '../../picture/produits-bébé.jpg';
import basContention from '../../picture/bas-de-contention.jpg';

const services = [
    {
        title: 'Consultation Pharmaceutique',
        description: 'Des conseils personnalisés pour vos besoins médicaux.',
        image: interieurPharma,
    },
    {
        title: 'Parapharmacie',
        description: 'Prendre soin de vous avec des produits cosmétiques et des produits de beauté de marques reconnues.',
        image: para,
    },
    
    {
        title: 'Orthopédie',
        description: "Retrouvez dans notre Pharmacie toutes nos solutions orthopédiques issues des plus grandes marques spécialisées.",
        image: ortho,
    },
    
];
const services2 = [
    {
        title: 'Matériel médical',
        description: 'La Pharmacie St-Firmin, située à Morbecque, met à votre disposition la location et la vente de matériels médicaux de toutes sortes, pour vos besoins au quotidien ou en cas de nécessité particulière pour le maintien à domicile.',
        image: materielsMedical,
    },
    {
        title: 'Produits Bébé',
        description: 'À La Pharmacie St-Firmin, notre rayon puériculture vous propose un large choix de produits de toilette, de matériel pour le soin et le bien-être des tout-petits et de laits maternisés.',
        image: produitsBebe,
    },
    {
        title: 'Bas de contention',
        description: 'Soulagez vos jambes lourdes et prévenez l`\'`apparition de varices avec des chaussettes, collants et bas de contention à La Pharmacie St-Firmin, située à Morbecque.',
        image:basContention,
        
    },
    
    
];

const OurServices = () => {
    return (
        <section className={styles.ourServices}>
            <div className={styles.titleContainer}>
                <h2>Nos <span>Services</span></h2>
                <h3 className={styles.subtitle}>Pharmacie à Morbecque</h3>
            </div>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <img src={service.image} alt={service.title} />
                        <div className={styles.overlay}>
                            <div className={styles.text}>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
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
                                <p>{service.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;
