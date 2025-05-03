

import React, { useState } from 'react';
import './Jobs.css';

const JobCards = () => {
  const [isModalOpen, setIsModalOpen] = useState(null); // Track which job's modal is open
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(null); // Track which job's success modal is open
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    jobRole: '',
    resume: null,
  });

  const jobs = [
    {
      date: '20 May, 2024',
      company: 'ABC Constructions',
      location: 'Gujarat',
      experience: '4 Years',
      details: 'Need 60 Labours for Construction of Apartment Towers',
      benefits: ['Free Food', 'Accomodation'],
      wages: '₹ 500 - 700 Per Day',
    },
    {
      date: '20 May, 2024',
      company: 'ABC Constructions',
      location: 'Gujarat',
      experience: '4 Years',
      details: 'Need 60 Labours for Construction of Apartment Towers',
      benefits: ['Free Food', 'Accomodation'],
      wages: '₹ 500 - 700 Per Day',
    },
    {
      date: '20 May, 2024',
      company: 'ABC Constructions',
      location: 'Gujarat',
      experience: '4 Years',
      details: 'Need 60 Labours for Construction of Apartment Towers',
      benefits: ['Free Food', 'Accomodation'],
      wages: '₹ 500 - 700 Per Day',
    },
    {
      date: '20 May, 2024',
      company: 'ABC Constructions',
      location: 'Gujarat',
      experience: '4 Years',
      details: 'Need 60 Labours for Construction of Apartment Towers',
      benefits: ['Free Food', 'Accomodation'],
      wages: '₹ 500 - 700 Per Day',
    },
    {
      date: '20 May, 2024',
      company: 'ABC Constructions',
      location: 'Gujarat',
      experience: '4 Years',
      details: 'Need 60 Labours for Construction of Apartment Towers',
      benefits: ['Free Food', 'Accomodation'],
      wages: '₹ 500 - 700 Per Day',
    },
    {
      date: '20 May, 2024',
      company: 'ABC Constructions',
      location: 'Gujarat',
      experience: '4 Years',
      details: 'Need 60 Labours for Construction of Apartment Towers',
      benefits: ['Free Food', 'Accomodation'],
      wages: '₹ 500 - 700 Per Day',
    },
  ];

  const handleApplyClick = (index) => {
    setIsModalOpen(index);
  };

  const handleModalClose = () => {
    setIsModalOpen(null);
    setFormData({ fullName: '', contactNumber: '', jobRole: '', resume: null });
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalOpen(null);
    setIsModalOpen(null);
    setFormData({ fullName: '', contactNumber: '', jobRole: '', resume: null });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccessModalOpen(isModalOpen);
  };

  return (
    <div className="featured-jobs">
      <h1 className="featured-heading">
        <span>All Featured</span> <span className="highlighted">Jobs</span>
      </h1>
      <div className="job-cards-container">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-date">{job.date}</div>
            <h3 className="job-company">{job.company}</h3>
            <p className="job-location">📍 {job.location}</p>
            <p className="job-experience">🕒 {job.experience}</p>
            <p className="job-details">
              <strong>Details:</strong>
              <br /> {job.details}
            </p>
            <div className="job-benefits">
              {job.benefits.map((benefit, benefitIndex) => (
                <span key={benefitIndex} className="benefit-tag">{benefit}</span>
              ))}
            </div>
            <div className="job-wages">
              <div>
                <strong>Wages:</strong>
                <br />
                <span className="wage-amount">{job.wages}</span>
              </div>
              <button className="apply-button" onClick={() => handleApplyClick(index)}>
                Apply
              </button>
            </div>

            {isModalOpen === index && (
              <div className="modal">
                <div className="modal-content">
                  <h2>Apply for {job.company}</h2>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="tel"
                      name="contactNumber"
                      placeholder="Contact Number"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      required
                    />
                    <select
                      name="jobRole"
                      value={formData.jobRole}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Job Role</option>
                      <option value="Labour">Labour</option>
                      <option value="Supervisor">Supervisor</option>
                      <option value="Technician">Technician</option>
                    </select>
                    <input
                      type="file"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleInputChange}
                      required
                    />
                    <div>
                      <button type="submit">Submit</button>
                      <button
                        type="button"
                        className="close-button"
                        onClick={handleModalClose}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {isSuccessModalOpen === index && (
              <div className="modal">
                <div className="modal-content success-modal">
                  <h2>Application Submitted!</h2>
                  <p>Your application has been successfully submitted.</p>
                  <button onClick={handleSuccessModalClose}>Close</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobCards;