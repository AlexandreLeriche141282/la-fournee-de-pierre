import React from 'react';
import Hero from '../components/Hero';
import Service from '../components/Service';

const Home = () => {
    return (
        <div>
            <Hero title="Bienvenue sur MonSite" subtitle="Nous offrons les meilleurs services" image="/path-to-image.jpg" />
            <div className="services">
                <Service title="Service 1" description="Description du service 1" icon="/path-to-icon1.png" />
                <Service title="Service 2" description="Description du service 2" icon="/path-to-icon2.png" />
                <Service title="Service 3" description="Description du service 3" icon="/path-to-icon3.png" />
            </div>
        </div>
    );
};

export default Home;
