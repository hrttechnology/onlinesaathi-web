

import React from 'react';
import './Combination.css';
import paymentImg from '../Sathi/sathi.png'; // update with correct paths
import deliveryImg from '../Sathi/sathi1.png';

const Combination = () => {
    return (
      <div className="combination-container">
  
        {/* First Section - Image Left, Text Right */}
        <div className="combo-row normal">
          <div className="combo-image">
            <img src={paymentImg} alt="Payments" />
          </div>
          <div className="combo-text">
            {/* <h3>Assisted Transactions and Financial Services</h3> */}
            <p>
            Our services cover multiple states across India, each with unique needs and
demographics. In each state, we work closely with local organizations,
community leaders, and government bodies to deliver our services effectively.
This localized approach allows us to adapt our offerings to each state's
specific social and economic environment, ensuring maximum impact.
            </p>
          </div>
        </div>
  
        {/* Second Section - Text Left, Image Right */}
        <div className="combo-row reverse">
          <div className="combo-text">
            <h3> District level</h3>
            <p>
           
Within each state, we have set up operational networks at the
district level. By dividing operations district-wise, we're able to
provide more targeted services and reach people in rural and
underserved areas. Our district teams are deeply involved with
the local communities, making sure that every initiative is
relevant and accessible to the residents of each district.
            </p>
          </div>
          <div className="combo-image">
            <img src={deliveryImg} alt="Delivery" />
          </div>
        </div>
{/* Third Section - Image Left, Text Right */}
        <div className="combo-row normal">
         
          <div className="combo-texts">
            <h3>Government Schemes Eligibility Engine</h3>
            <p>
            Our Saathis are community representatives trained to deliver Online Saathi's services at the grassroots level.

These individuals act as connectors, spreading awareness about available services, helping people navigate

social welfare schemes, job opportunities, and more. Saathis are selected from local communities, making

them <b style={{color:'black',fontSize:'20px'}}>trusted figures</b> who <b style={{color:'black',fontSize:'20px'}}>understand the unique challenges </b>faced by their neighbors. Their involvement

ensures that Online Saathi remains a <b style={{color:'black',fontSize:'20px'}}>people-centric platform.</b>
            </p>
          </div>
        </div>

        
        <div className="entrepreneur-section">
  <h2><strong>Our Local Entrepreneurs do below thing's</strong></h2>
  <div className="entrepreneur-cards">
    <div className="hover-card">
      <div className="card-content">
        <h3>Outreach</h3>
        <p>
          Sewa Saathis actively engage with local communities to identify and reach out to informal workers in need.
        </p>
      </div>
    </div>

    <div className="hover-card">
      <div className="card-content">
        <h3>Onboarding</h3>
        <p>
          They assist workers in registering on the Online Saathi Platform and understanding the available services.
        </p>
      </div>
    </div>
    <div className="hover-card">
      <div className="card-content">
        <h3>Service Facilitation</h3>
        <p>
          Sewa Saathi is gudie worker through the process of accessing services, from job applications to financial services.
        </p>
      </div>
    </div>

    <div className="hover-card">
      <div className="card-content">
        <h3>Follow-up Support</h3>
        <p>
         They provide ongoing support and follow-up to ensure successfull service delivery and address any concerns.
        </p>
      </div>
    </div>
  </div>
</div>

      </div>
    );
  };
  
  export default Combination;