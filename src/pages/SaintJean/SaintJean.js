import React from 'react';
import Magasin from '../../components/Magasin/Magasin';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import { saintJeanConfig } from './saintJeanConfig';
import ElfsightWidget from '../../components/ElfsightWidget/ElfsightWidget';
import './saintJean.module.scss'

const SaintJean = () => {
    return (
        <div>
            <Magasin {...saintJeanConfig} />
            <h3>Vos retours sont précieux <span>...</span></h3>
            <ElfsightWidget />
            <LogoSlider />  
        </div>
    );
};

export default SaintJean;