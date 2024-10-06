import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique d'envoi du formulaire
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Votre email" value={formData.email} onChange={handleChange} />
            <textarea name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} />
            <button type="submit">Envoyer</button>
        </form>
    );
};

export default ContactForm;
