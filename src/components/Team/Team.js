import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './team.module.scss';
import equipeImage from '../../picture/julien.jpg'; // Remplacez avec vos images

const equipe = [
    {
        name: 'Pierre',
        position: 'Dirigeant et fondateur',
        image: equipeImage,
    },
    {
        name: 'Stéphanie',
        position: 'Dirigeante et fondatrice',
        image: equipeImage,
    },
    {
        name: 'Lucie Martin',
        position: 'Préparatrice en pharmacie',
        image: equipeImage,
    },
    {
        name: 'Pierre Durand',
        position: 'Préparateur en pharmacie',
        image: equipeImage,
    },
];

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.arrowNext}`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styles.arrowPrev}`}
            style={{ ...style }}
            onClick={onClick}
        />
    );
};

const Team = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,  // Ajout de l'autoplay
        autoplaySpeed: 3000,  // Vitesse de défilement en millisecondes (ici 3 secondes)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className={styles.notreEquipe}>
            <div className={styles.titleContainer}>
                <h2>Notre <span>Équipe</span></h2>
                <h3 className={styles.subtitle}>À votre service !</h3>
            </div>
            <Slider {...settings}>
                {equipe.map((member, index) => (
                    <div key={index} className={styles.equipeCard}>
                        <img src={member.image} alt={member.name} />
                        <div className={styles.text}>
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Team;
