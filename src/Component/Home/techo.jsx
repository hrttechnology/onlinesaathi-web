
import React from 'react';
import './Techo.css';
import { Link } from 'react-router-dom';

// Import placeholder icons (replace these with actual icon paths)
import laptopIcon from '../Home/annual.gif';
import deliveryIcon from '../Home/delivery.gif';
import moneyIcon from '../Home/call-center.gif';
import communityIcon from '../Home/sol3.gif';
import jobsIcon from '../Home/sol1.gif';
import governmentIcon from '../Home/sol2.gif';

const features = [
  {
    title: "Comprehensive Delivery Tracking System",
    icon: deliveryIcon,
    position: "top-left",
  },
  {
    title: "Assisted  and Financial Services",
    icon: moneyIcon,
    position: "top-right",
  },
  {
    title: "Localized Community Platform",
    icon: communityIcon,
    position: "bottom-left",
  },
  {
    title: "Jobs Connect",
    icon: jobsIcon,
    position: "bottom",
  },
  {
    title: "Gov Schemes Eligibility Engine",
    icon: governmentIcon,
    position: "bottom-right",
  },
];

const Techo = () => {
  return (
    <>
    <h2 style={{textAlign: 'center', fontSize: '54px', fontWeight: 'bold', marginTop: '50px'}}>
      Our <span style={{color: '#0077FF'}}>Technology</span>
    </h2>
    <div className="circle-container">
      <div className="circle-path"></div>
      <div className="central-icon">
        <img src={laptopIcon} alt="Laptop" />
      </div>

      {features.map((feature, idx) => (
        <div key={idx} className={`feature ${feature.position}`}>
          <div className="icon-box">
            <img src={feature.icon} alt={feature.title} />
            <div className="hover-box">
              <p>{feature.title}</p>
            </div>
          </div> <br />
        </div>
        
      ))}
      
      <div className="know-more"> 
      <Link to="tech" className="know-more-btn" style={{textDecoration: 'none'}} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
    Know More
  </Link>
      </div>
    </div>

    </>
  );
};

export default Techo;