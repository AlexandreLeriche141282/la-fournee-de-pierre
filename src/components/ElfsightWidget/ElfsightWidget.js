import React, { useEffect } from 'react';
import './elfsightWidget.module.scss'

const ElfsightWidget = () => {
  useEffect(() => {
    const initElfsight = () => {
      if (window.eapps && typeof window.eapps.initAll === 'function') {
        window.eapps.initAll();
      }
    };

    // Vérifiez si le script est déjà chargé
    if (document.readyState === 'complete') {
      initElfsight();
    } else {
      // Sinon, attendez que la page soit complètement chargée
      window.addEventListener('load', initElfsight);
    }

    // Nettoyage
    return () => window.removeEventListener('load', initElfsight);
  }, []);

  return (
    <div className="elfsight-widget-container">
      <div className="elfsight-app-14ff380b-0151-4778-85d3-7c9482a8c490" data-elfsight-app-lazy></div>
    </div>
  );
};

export default ElfsightWidget;