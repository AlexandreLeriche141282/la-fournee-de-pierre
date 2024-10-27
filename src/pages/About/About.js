import React from 'react';
import styles from './about.module.scss'; // Import du fichier SCSS
import NewSection from '../../components/NewSection/NewSection'; // Import du nouveau composant
import exampleImage from '../../picture/pierre&steph.jpg'; // Exemple d'image
import Services from '../../components/Serv/Services';
import Team from '../../components/Team/Team';
import Distri from '../../components/DistributeurBaguettes/Distri'

const About = () => {
    return (
        <div>
            <div className={styles.aboutContainer}>
                <div className={styles.content}>
                    <h1>Boulangeries pâtisseries chocolaterie près d'Angers</h1>
                    <p>La Fournée de Pierre, boulanger à <strong>St Jean de Linières</strong> et <strong>St Lambert La Potherie</strong> propose ses produits faits maison : pains, viennoiseries, chocolats, sandwichs, snacking, pâtisseries. <br />Création de gâteau et pièce montée sur mesure pour tous vos événements. </p>
                </div>
            </div>
            <NewSection 
            title="À Propos de nous ..."
            image={exampleImage}
        >
            Quand il s'est installé, en 2007, comme boulanger dans la commune - là où il est né - Pierre Mourgues était surtout connu pour ses pâtisseries. <br /><strong>« Il y a dix ans, avec mon épouse Stéphanie, nous avions l'idée d'ouvrir un salon de thé mais il s'est avéré que le fond de la boulangerie était à vendre, confie-t-il. Ici, dans le village, les habitants me connaissaient comme chef pâtissier. Alors, avec Stéphanie, nous avons tout mis en oeuvre pour leur prouver que j'étais aussi un bon boulanger. »</strong> <br /><br />Cela a tellement bien marché que, depuis, La Fournée de Pierre a une petite soeur de boutique, née en 2013, à Saint-Lambert-la-Potherie. <strong>« Nous nous attachons à réaliser nos produits sur place dans le respect des traditions, explique modestement Pierre Mourgues. Pour obtenir une mie bien alvéolée, il est important que la pâte fermente lentement pour permettre aux arômes de se développer harmonieusement... »</strong>
            </NewSection>
            <Services />
            <Team />
            <Distri />
        </div>
    );
};

export default About;

