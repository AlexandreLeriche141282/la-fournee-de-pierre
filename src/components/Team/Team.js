import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './team.module.scss';
import equipeImage from '../../picture/julien.jpg'; // Remplacez avec vos images

const equipe = [
    {
        name: 'Jean Dupont',
        position: 'Pharmacien titulaire',
        image: equipeImage,
    },
    {
        name: 'Marie Dubois',
        position: 'Pharmacienne adjointe',
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
        slidesToShow: 4, // Nombre d'images visibles
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
                <h2>Notre <span>Equipe</span></h2>
                <h3 className={styles.subtitle}>Avotre service !</h3>
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
