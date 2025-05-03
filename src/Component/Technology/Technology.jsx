import React from 'react';
import "../Technology/Techonlogy.css";
import img from '../Technology/techo.gif'
import Combination from "../Technology/Combination"
const Technology = () => {
    return (
        <>
      <div className="technology-section">
        <div className="tech-left">
          <h2 className="tech-heading">
            Our <span className="highlight">Technology</span>
          </h2>
          <p>
            Online Saathi leverages a powerful, community-centric technology platform to bridge the gap
            between rural communities and essential services. Designed with simplicity, accessibility, and
            local needs in mind, our technology empowers Saathis (community agents) to deliver a wide
            range of services—from financial transactions and product orders to social welfare schemes
            and job opportunities—directly to underserved populations.
          </p>
        </div>
  
        <div className="tech-right">
          <div className="tech-icons">
            <img src={img} alt="Tech Graphic" />
          </div>
        </div>
  
        <p className="scroll-down" onClick={() => window.scrollTo({ top: document.body.scrollHeight - window.innerHeight, behavior: 'smooth' })}>Scroll Down</p>
      </div>
        <Combination />
      </>
    );
  };
  
  export default Technology;
  