import React from 'react';

const Hero = ({ title, subtitle, image }) => {
    return (
        <section style={{ backgroundImage: `url(${image})` }}>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </section>
    );
};

export default Hero;
