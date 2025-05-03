import React, { useState } from 'react';
import './Social.css';
import Faqs from '../PanCard/Faqs'
import Header from './Header'

const Social = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const categories = [
    { name: 'Agriculture-Rural environment', icon: 'https://img.icons8.com/color/48/000000/wheat.png' },
    { name: 'Banking, financial services and insurance', icon: 'https://img.icons8.com/color/48/000000/bank.png' },
    { name: 'Business and Entrepreneur', icon: 'https://img.icons8.com/color/48/000000/handshake.png' },
    { name: 'Education and Learning', icon: 'https://img.icons8.com/color/48/000000/graduation-cap.png' },
    { name: 'Health and wellness', icon: 'https://img.icons8.com/color/48/000000/heart-health.png' },
    { name: 'Housing and shelter', icon: 'https://img.icons8.com/color/48/000000/home.png' },
    { name: 'Law and Justice', icon: 'https://img.icons8.com/color/48/000000/scales.png' },
    { name: 'Science, IT and Communications', icon: 'https://img.icons8.com/color/48/000000/laptop.png' },
    { name: 'Skills Employment', icon: 'https://img.icons8.com/color/48/000000/briefcase.png' },
    { name: 'Social welfare and empowerment', icon: 'https://img.icons8.com/color/48/000000/group.png' },
    { name: 'Sports Culture', icon: 'https://img.icons8.com/color/48/000000/basketball.png' },
    { name: 'Transport Infrastructure', icon: 'https://img.icons8.com/color/48/000000/bus.png' },
    { name: 'Travel and Tourism', icon: 'https://img.icons8.com/color/48/000000/airplane-take-off.png' },
    { name: 'Utility and Sanitation', icon: 'https://img.icons8.com/color/48/000000/water.png' },
    { name: 'Women and Child', icon: 'https://img.icons8.com/color/48/000000/mother.png' },
    { name: 'Transport Infrastructure', icon: 'https://img.icons8.com/color/48/000000/bus.png' },
    { name: 'Travel and Tourism', icon: 'https://img.icons8.com/color/48/000000/airplane-take-off.png' },
    { name: 'Utility and Sanitation', icon: 'https://img.icons8.com/color/48/000000/water.png' },
    { name: 'Women and Child', icon: 'https://img.icons8.com/color/48/000000/mother.png' },
  ];

  return (
    <>
    <Header />
    <div className="social-container py-4">
      {/* Stats Section */}
      <div className="search-section">
        <button className="find-schemes-btn">Find schemes for you</button>
        <h2>Find your scheme based on category</h2>
        <input
          type="text"
          placeholder="Type a word related your scheme to search it..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
      </div>
      <div className="stats">
        <div className="stat-box">
          <h3>Total schemes</h3>
          <p>2720+</p>
        </div>
        <div className="stat-box">
          <h3>Central schemes</h3>
          <p>520+</p>
        </div>
        <div className="stat-box">
          <h3>State schemes</h3>
          <p>520+</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      

      <div className="filter-buttons">
        <button
          className={activeFilter === 'All' ? 'active' : ''}
          onClick={() => handleFilter('All')}
        >
          ALL
        </button>
        <button
          className={activeFilter === 'Central' ? 'active' : ''}
          onClick={() => handleFilter('Central')}
        >
          Central
        </button>
        <button
          className={activeFilter === 'State' ? 'active' : ''}
          onClick={() => handleFilter('State')}
        >
          State
        </button>
      </div>

      {/* Categories Section */}
      <div className="categories">
        {categories.map((category, index) => (
          <div className="category" key={index}>
            <img src={category.icon} alt={`${category.name} icon`} />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="entrepreneur-steps-container">
      <h2 className="section-title">Our Local Entrepreneurs do below thing's</h2>
      <div className="steps-wrapper">
        <div className="step-card">
          <h3>Step 1</h3>
          <p>Scheme Awareness</p>
        </div>
        <div className="arrow">➔</div>
        <div className="step-card">
          <h3>Step 2</h3>
          <p>Application Assistance</p>
        </div>
        <div className="arrow">➔</div>
        <div className="step-card">
          <h3>Step 3</h3>
          <p>Document Collection</p>
        </div>
        <div className="arrow">➔</div>
        <div className="step-card">
          <h3>Step 4</h3>
          <p>Follow-up Support</p>
        </div>
      </div>
    </div>

    <Faqs />
    </>
  );
};

export default Social;