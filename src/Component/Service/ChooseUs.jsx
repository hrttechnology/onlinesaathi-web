import React from 'react';
import { FaCheckCircle, FaTrophy, FaStar } from 'react-icons/fa';
import './ChooseUs.css';

const WhyChooseUs = () => {
  const cards = [
    { icon: <div style={{ display: 'flex', justifyContent: 'center' }}><FaCheckCircle size={90} color="#f7b801" /></div>, title: "Verified" },
    { icon: <div style={{ display: 'flex', justifyContent: 'center' }}><FaTrophy size={90} color="#f7b801" /></div>, title: "Value for Work" },
    { icon: <div style={{ display: 'flex', justifyContent: 'center' }}><FaStar size={90} color="#f7b801" /></div>, title: "Trust for Partners" },
  ];

  return (
    <section className="why-choose-us">
      <h2>
        Why Choose <span className="highlight">US</span>
      </h2>
      <p className="description">
        By offering this comprehensive support system, Online Saathi not only enhances the chances of workers securing gainful employment but also contributes significantly to their economic empowerment. This holistic approach not only focuses on job placement but also on equipping individuals with the necessary tools and confidence to succeed in the competitive job market.
      </p>
      <div className="cards-container">
        {cards.map((card, idx) => (
          <div className="card" key={idx}>
            {card.icon}
            <h4>{card.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
