import React from 'react';
import styles from './about.module.scss'; // Import du fichier SCSS
import NewSection from '../../components/NewSection/NewSection'; // Import du nouveau composant
import exampleImage from '../../picture/interieurPharma.jpg'; // Exemple d'image
import Services from '../../components/Serv/Services';
import Team from '../../components/Team/Team';

const About = () => {
    return (
        <div>
            <div className={styles.aboutContainer}>
                <div className={styles.content}>
                    <h1>La pharmacie Saint Firmin - Votre pharmacie à <span>Morbecque</span></h1>
                    <p>La pharmacie Saint Firmin, votre pharmacie à Morbecque, vous accueille du lundi au samedi pour vous apporter les meilleurs conseils au service de votre santé.</p>
                </div>
            </div>
            <NewSection 
            title="Bienvenue à la Pharmacie Saint Firmin"
            image={exampleImage}
        >
            Installée à <span style={{ color: '#3BAA34' }}>Morbecque</span> au 11 rue Saint-Firmin, 
            la pharmacie <strong>Saint Firmin</strong> vous accueille dans une ambiance à la fois chaleureuse et familiale. <br /><br />
            <strong>Nous sommes heureux de vous recevoir du lundi au vendredi de 8h30 jusqu’à 12h30 et de 14h jusqu’à 19h15 
            et le samedi de 8h30 jusqu’à 12h30.</strong>  <br /><br />
            Alliant professionnalisme et savoir-faire, notre équipe de pharmaciens est toujours à votre disposition 
            pour vous écouter, vous servir et vous apporter les meilleurs conseils sur votre santé. <br />
            De plus, nous veillons à répondre à tous vos besoins et tous vos renseignements dans la totale confidentialité 
            et la garantie du secret médical. <br /><br />
            En plus de vous offrir un service de délivrance des médicaments (avec ou sans ordonnance), 
            notre pharmacie vous offre également des articles parapharmaceutiques et une gamme complète de <strong>matériel médical </strong> 
            et <strong>orthopédique</strong>.
            </NewSection>
            <Services />
            <Team />
        </div>
    );
};

export default About;

