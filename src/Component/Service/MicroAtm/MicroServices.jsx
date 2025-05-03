import React from 'react';
import './MicroAtmServices.css';
import img from '../MicroAtm/s1.jpeg'
import img1 from '../MicroAtm/s2.jpeg'
import img2 from '../MicroAtm/s3.jpeg'

const services = [
  {
    title: 'Cash',
    highlight: 'Withdrawal',
    image: img,
    details: 'By Micro ATM services you can provide instant cash withdrawal services to your customers while earning attractive commissions.'
  },
  {
    title: 'Balance',
    highlight: 'Inquiry',
    image: img1,
    details: 'You can provide balance enquiry service to your customers using Micro ATMs and providing them with real-time updates on their financial transactions.'
  },
  {
    title: 'Mini',
    highlight: 'statement',
    image: img2,
    details: 'You can also help to your customers by providing them mini statements your customers using Micro ATMs.'
  }
];

const MicroAtmServices = () => {
  return (
    <div className="microatm-container">
      {/* Main Title */}
      <h2 className="microatm-title">
        Services Offered by <span className="highlight">Micro ATM</span>
      </h2>

      {/* Cards */}
      <div className="microatm-cards">
        {services.map((service, index) => (
          <div key={index} className="microatm-card">
            {/* Heading */}
            <h5 className="microatm-card-heading">
              {service.title} <span className="highlight">{service.highlight}</span>
            </h5>

            {/* Image */}
            <img src={service.image} alt={service.highlight} className="microatm-image" />

            {/* Body */}
            <div className="microatm-body">
              <p className="microatm-details-heading">Details:</p>
              <p className="microatm-details-text">{service.details}</p>
              <div className="microatm-button-container">
                <button className="microatm-apply-button">Apply</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="microatm-explore">
        <button className="microatm-explore-button">Explore More</button>
      </div>
    </div>
  );
};

export default MicroAtmServices;
