import React from 'react';
import Magasin from '../../components/Magasin/Magasin';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import { saintJeanConfig } from './saintJeanConfig';

const SaintJean = () => {
    return (
        <div>
            <Magasin {...saintJeanConfig} />
            <LogoSlider />  
        </div>
    );
};

export default SaintJean;