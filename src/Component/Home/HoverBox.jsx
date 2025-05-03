import React from 'react';
import './HoverBox.css';

const HoverBox = () => {
  const cards = [
    {
      title: "Create Local Opportunities and Earn a Stable Income",
      content: "As a Saathi, you are empowered to generate multiple income streams within your village. By offering services like government scheme access, financial transactions, assisted commerce, and product deliveries, you become a central resource for your community, providing convenient and essential services while building a sustainable income."
    },
    {
      title: "Be a Catalyst for Economic Growth in Your Community",
      content: "Through Online Saathi, you help transform the lives of the informal workforce by making critical services accessible. By bringing opportunities directly to their doorstep, you enable your community members to thrive without having to migrate for work, fostering local economic growth and stability."
    },
    {
      title: "Build Social Capital and Community Trust",
      content: "As a Saathi, you earn respect and trust within your community, becoming a leader people can rely on for assistance with complex services. Your role as a Saathi gives you pride and a sense of purpose, as you support your community members in building a dignified life."
    },
    {
      title: "Gain Skills and Access Growth Opportunities",
      content: "Online Saathi offers comprehensive digital and professional training through our Saathi Academy, ensuring you are well-prepared within 24 hours of onboarding.You also have access to tools for building credit history and expanding your services, helping you grow both personally and professionally."
    },
    {
      title: "Be a part of Mission to Empower India's Informal Workforce",
      content: "Over 1 million youth join the workforce each month, but less than 10% find formal jobs. By becoming a Saathi, you are part of a solution that provides meaningful, sustainable work within local communities,supporting India's vast informal workforce in achieving financial independence and stability."
    }
  ];

  return (
    <div className="hoverbox-section">
      <h2><strong>Our Local Entrepreneurs do below thing's</strong></h2>
      <div className="hoverbox-cards">
        {cards.map((card, index) => (
          <div className="hoverbox-card" key={index}>
            <div className="hoverbox-card-content">
              <h3>{card.title}</h3>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HoverBox;
