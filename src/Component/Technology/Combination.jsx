

import React from 'react';
import './Combination.css';
import img from '../Technology/5.png'; 
import img1 from '../Technology/2.png';
import img2 from '../Technology/3.png';
import img3 from '../Technology/4.png';
import img4 from '../Technology/6.png';
const Combination = () => {
    return (
      <div className="combination-container">
  
        {/* First Section - Image Left, Text Right */}
        <div className="combo-row normal">
          <div className="combo-image">
            <img src={img} alt="Payments" />
          </div>
          <div className="combo-text">
            <h3>Assisted Transactions and Financial Services</h3>
            <p>
              Our API partner offers essential services like mobile recharges, bill payments,
              AEPS cash withdrawals, G2C services, microloans, insurance, and travel services—
              making everyday transactions accessible and convenient for rural communities.
            </p>
          </div>
        </div>
  
        {/* Second Section - Text Left, Image Right */}
        <div className="combo-row reverse">
          <div className="combo-text">
            <h3>Comprehensive Delivery Tracking System</h3>
            <p>
              Enables efficient order processing and tracking, optimizing routes for Saathis and
              providing proof of delivery. Automated payment reconciliation ensures accuracy and transparency.
            </p>
          </div>
          <div className="combo-image">
            <img src={img3} alt="Delivery" />
          </div>
        </div>
{/* Third Section - Image Left, Text Right */}
        <div className="combo-row normal">
          <div className="combo-image">
            <img src={img1} alt="Payments" />
          </div>
          <div className="combo-text">
            <h3>Government Schemes Eligibility Engine</h3>
            <p>
            Identifies eligible government schemes for
users based on personal information, guides
them through applications, and tracks status
to ensure benefits are delivered efficiently
with support from Saathis.
            </p>
          </div>
        </div>

        {/* Four Section - Image Left, Text Right */}
        <div className="combo-row reverse">
          <div className="combo-text">
            <h3>Localized Community Platform</h3>
            <p>
            A community-driven digital hub where users can
share stories, post needs, and stay informed
about local and global news, fostering unity and
empowerment within rural communities.
            </p>
          </div>
          <div className="combo-image">
            <img src={img2} alt="Delivery" />
          </div>
        </div>
 {/* Five Section - Image Left, Text Right */}
 <div className="combo-row normal">
          <div className="combo-image">
            <img src={img4} alt="Payments" />
          </div>
          <div className="combo-text">
            <h3>Jobs Connect</h3>
            <p>
            Connects users to local job opportunities tailored to
their skills, featuring a job-matching tool, resume
builder, and Saathi support, making the employment
search more accessible and effective.
            </p>
          </div>
        </div>
              {/* Why It Matters Section */}
      <div className="why-matters-box">
        <h3>Why it matters?</h3>
        <p>
          The technology behind Online Saathi is more than just a platform; it’s a lifeline for informal workforce communities,
          enabling access to critical resources that promote financial inclusion, improve quality of life, and foster economic empowerment.
          By simplifying complex services and connecting users with trusted local Saathis, Online Saathi’s technology platform is
          building a sustainable, inclusive digital infrastructure that empowers India’s informal workforce and underserved communities.
        </p>
      </div>

      </div>
    );
  };
  
  export default Combination;