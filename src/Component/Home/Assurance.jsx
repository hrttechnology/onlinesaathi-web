import React, { useState, useEffect } from 'react';
import './Assurance.css';
import strength from '../Home/strengthimg.png'; // Replace with your actual path
// Adjust path as needed

const Assurance = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const accordionData = [
      {
        title: 'Online Saathi Tech',
        content:
          'Our single-window tech platform streamlines access to 50+ essential services for the informal sector, from remittance to job opportunities and travel. Simplifying tasks like accessing government schemes, banking, and insurance, we offer a comprehensive solution for enhanced convenience and efficiency.',
      },
      {
        title: 'Sewa Saathi Network',
        content:
          'A grassroots network designed to bridge the digital gap in underserved areas, empowering local partners to deliver government and private services efficiently with trust and transparency.',
      },
      {
        title: 'Services Provider',
        content:
          'We collaborate with verified service providers to offer a range of high-quality solutions, from microfinance and insurance to training and logistics, enhancing last-mile service delivery.',
      },
    ];
  
    const handleToggle = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="assurance-container">
        <h1 className="assurance-heading">
          Our strength and <span className="blue-text">assurance</span>
        </h1>
  
        <div className="assurance-content">
          <div className="accordion-section">
            {accordionData.map((item, index) => (
              <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                <div className="accordion-title" onClick={() => handleToggle(index)}>
                  <span>{item.title}</span>
                  <span>
                    <i className={`fa-solid fa-angle-${activeIndex === index ? 'up' : 'down'}`}></i>
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="accordion-body">
                    <hr />
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
  
          <div className="image-section">
            <img src={strength} alt="strength" className="assurance-image" />
          </div>
        </div>
      </div>
    );
  };
  
  export default Assurance;