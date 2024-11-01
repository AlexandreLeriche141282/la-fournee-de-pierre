import React from 'react';
import Magasin from '../../components/Magasin/Magasin';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import { saintLambConfig } from './saintLambConfig';

const SaintJean = () => {
    return (
        <div>
            <Magasin {...saintLambConfig} />
            <LogoSlider />  
        </div>
    );
};

export default SaintJean;