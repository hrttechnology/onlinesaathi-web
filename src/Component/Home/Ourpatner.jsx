import React from 'react';
import './Ourpatner.css';
import img from '../Home/profit.gif';
import sol from '../Home/sol1.gif';
import img2 from '../Home/business.gif';
import img3 from '../Home/call-center.gif';
import img4 from '../Home/delivery.gif';
import { Link } from 'react-router-dom';

const Partner = () => {
  const items = [
    { title: "Access to India’s Informal and Underserved Markets", img: img },
    { title: "Last-Mile Delivery and Distribution", img: sol },
    { title: "Jobs connect", img: img3 },
    { title: "Digital finance services and cost-effective delivery models", img: img2 },
    { title: "Actionable consumer insights and Market intelligence", img: img4 }
  ];

  const iconPositions = [
    { left: '15%', top: '80%' },
    { left: '30%', top: '50%' },
    { left: '50%', top: '70%' },
    { left: '70%', top: '60%' },
    { left: '89%', top: '90%' }
  ];

  return (
    <div className="partner-wrapper">
      <h2 className="partner-title">
        What <span>we offer</span> to Our Partners
      </h2>

      <div className="curve-container">
        <svg className="curve-line" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M 10 70 Q 30 20 50 70 Q 70 20 90 70"
            fill="none"
            stroke="#d6eaff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {items.map((item, index) => (
          <div
            key={index}
            className="circle-box"
            style={{
              left: iconPositions[index].left,
              top: iconPositions[index].top,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className="circle-img">
              <img src={item.img} alt={item.title} />
            </div>
            <p className="circle-text">{item.title}</p>
          </div>
        ))}
      </div>

      <Link to="/tech" className="know-more-btn" style={{textDecoration: 'none'}} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
    Know More
  </Link>
    </div>
  );
};

export default Partner;
