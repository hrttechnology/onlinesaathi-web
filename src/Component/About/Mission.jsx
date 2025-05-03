import React from 'react';
import './VisionMission.css';
import { FaEye, FaBullseye,FaMapMarkedAlt } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <div className="vision-mission-container">
      <h2 className="vision-mission-title">
  Vision <span className="highlight-and">and</span> Mission
</h2>

      <div className="vision-mission-content">
        <div className="vision-section section-box">
          <div className="icon-box animate-icon">
            <FaBullseye className="icon-svg" />
          </div>
          <p className="vision-text">
            Online Saathi is partner for everyone who needs support.
          </p>
        </div>
        <div className="mission-section section-box">
          <div className="icon-box animate-icon">
            <FaMapMarkedAlt className="icon-svg" />
          </div>
          <p className="mission-text">
            To create products and services that help our customers achieve their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
