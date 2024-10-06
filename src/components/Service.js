import React from 'react';

const Service = ({ title, description, icon }) => {
    return (
        <div className="service">
            <img src={icon} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default Service;
