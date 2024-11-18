import React from 'react';
import Magasin from '../../components/Magasin/Magasin';
import LogoSlider from '../../components/LogoSlider/LogoSlider';
import { saintLambConfig } from './saintLambConfig';
import TrustmaryWidget from '../../components/Trustmary/Trustmary';

const SaintJean = () => {
    return (
        <div>
            <Magasin {...saintLambConfig} />
            <h3>Vos retours sont précieux <span>...</span></h3>
           <TrustmaryWidget /> 
            <LogoSlider />  
        </div>
    );
};

export default SaintJean;