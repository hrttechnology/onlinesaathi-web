// App.jsx
import React from 'react';
import './App.css';
import { FaRegIdCard, FaUpload, FaPaperPlane, FaImage, FaCheckDouble, FaCalendarCheck, FaQrcode } from 'react-icons/fa';
import Faqs from './Faqs'
const steps = [
    {
        icon: <FaRegIdCard className="icon" />, 
        text: 'Fill out the PAN form on behalf of the applicant via the UTIITSL website.'
      },
      {
        icon: <FaCalendarCheck className="icon" />, 
        text: 'The application typically completes within 15 days with valid documents.'
      },
      {
        icon: <FaImage className="icon" />, 
        text: 'Add applicant\'s photo, obtain their signature, and scan it.'
      },
      {
        icon: <FaPaperPlane className="icon" />, 
        text: 'Submit the hardcopy to the Online Saathi distributor.'
      },
      {
        icon: <FaUpload className="icon" />, 
        text: 'Upload the form with Aadhaar, photo, and signature, then complete payment for commission.'
      },
     
      
      {
        icon: <FaCheckDouble className="icon" />, 
        text: 'Double-check details, submit, and print the form.'
      },
      {
        icon: <FaQrcode className="icon" />, 
        text: 'Scan Aadhaar as address and DOB proof, and make a copy.'
      }

  
];

function App() {
  return (
    <>
    <div className="app">
      <h1>
        Process for new PAN card <span className="highlight">Application</span>
      </h1>
      <div className="timeline">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-icon">{step.icon}</div>
            <p className="step-text">{step.text}</p>
          </div>
        ))}
      </div>
    </div>

<section className="features-container">
<div className="feature-box">
  <div className="feature-icon"><i className="fas fa-id-card"></i></div>
  <div className="feature-title">Authorized PAN Card Center</div>
</div>
<div className="feature-box">
  <div className="feature-icon"><i className="fas fa-globe"></i></div>
  <div className="feature-title">Broad Service Scope</div>
</div>
<div className="feature-box">
  <div className="feature-icon"><i className="fas fa-store"></i></div>
  <div className="feature-title">Nationwide Retail Outlets</div>
</div>
<div className="feature-box">
  <div className="feature-icon"><i className="fas fa-square"></i></div>
  <div className="feature-title">Application Assistance</div>
</div>
<div className="feature-box">
  <div className="feature-icon"><i className="fas fa-credit-card"></i></div>
  <div className="feature-title">Complete PAN Services</div>
</div>
<div className="feature-box">
  <div className="feature-icon"><i className="fas fa-star"></i></div>
  <div className="feature-title">Flexible Application Options</div>
</div>
<div className="feature-box">
  <div className="feature-icon"><i className="fas fa-laptop"></i></div>
  <div className="feature-title">Easy Online Access</div>
</div>
<div className="feature-box">
  <div className="feature-icon"><i className="fas fa-headphones"></i></div>
  <div className="feature-title">Dedicated Customer Support</div>
</div>
<div className="feature-box">
  <div className="feature-icon"><i className="fas fa-clock"></i></div>
  <div className="feature-title">Fast and Affordable ePAN</div>
</div>
<div className="feature-box">
  <div className="feature-icon"><i className="fas fa-check-circle"></i></div>
  <div className="feature-title">Choice of PAN Type</div>
</div>
</section>

<Faqs />
</>
  );
}

export default App;