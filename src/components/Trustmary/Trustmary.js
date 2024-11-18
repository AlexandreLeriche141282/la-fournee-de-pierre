import React, { useEffect, useRef } from 'react';
import './trustmary.module.scss'

const TrustmaryWidget= () => {
    const widgetRef = useRef(null);
  
    useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://widget.tagembed.com/embed.min.js";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  
    return (
        <div 
        ref={widgetRef}
        className="tagembed-widget" 
        style={{
          width: '90%', 
          height: '100%',
          margin: '0 auto'  // Ajout de cette ligne
        }} 
        data-widget-id="2138341" 
        data-tags="false" 
        view-url="https://widget.tagembed.com/2138341"
      ></div>
    );
  };
  

export default TrustmaryWidget;