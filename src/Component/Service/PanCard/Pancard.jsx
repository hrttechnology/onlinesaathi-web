import React from 'react';
import "../PanCard/Pancard.css";
import img from '../PanCard/PanCard.gif'
import Application from '../PanCard/app.jsx'
const PanCard = () => {
    return (
        <>
      <div className="technology-section">
        <div className="tech-left">
          <h2 className="tech-heading">
            Pan Card <span className="highlight">Center</span>
          </h2>
          <p>
          Online Saathi acts as the unified platform for all services related to the application of the PAN card and all other procedures, at all. Permanent Account Number (PAN), the ten-digit number issued in the form of a laminated card by the Income Tax Department in India, counts as one of the most important documents as the unique identification number allotted to each taxpayer of the country. Tax Information Network (TIN) is a contemporary system for collecting, processing, monitoring, and accounting of direct taxes.
          </p>
        </div>
  
        <div className="tech-right">
          <div className="tech-icons" style={{ marginTop: '80px' }}>
            <img src={img} alt="Tech Graphic" style={{ width: '100%' }} />
          </div>
        </div>
  
        <p className="scroll-down" onClick={() => window.scrollTo({ top: document.body.scrollHeight - window.innerHeight, behavior: 'smooth' })}>Scroll Down</p>
      </div>
        <Application />
      </>
    );
  };
  
  export default PanCard;
  