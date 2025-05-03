import React from 'react';
import './Become.css';
import saathiImage from '../Home/become.png'; // update path as needed

const BecomeSaathi = () => {
  return (
    <div className="saathi-wrapper">
      <h2 className="saathi-heading">
        Become a <span className="highlight">Saathi</span>
      </h2>
      <div className="saathi-box">
        <div className="saathi-text">
          <p>
            Saathi agents are dedicated guides who assist workers in navigating the job search process. They provide personalized support through skill assessments, job matching, and hands-on help with applications, resumes, and interview preparation.
          </p>
        </div>
        <div className="saathi-img-container">
          <img src={saathiImage} alt="Saathi Illustration" className="saathi-img" />
        </div>
      </div>
    </div>
  );
};

export default BecomeSaathi;
