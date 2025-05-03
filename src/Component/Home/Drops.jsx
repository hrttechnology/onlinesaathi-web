import React, { useState } from 'react';
import sol1 from "../Home/freelance.png";
import sol2 from "../Home/profit.gif";
import sol3 from "../Home/governance.png";
import sol4 from "../Home/community.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SolutionSection = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleContent = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const cards = [
    {
      title: 'On Demand Services',
      image: sol1,
      content:
        'Online Saathi On-Demand Services provides informal workers with doorstep access to essential services like bill payments, recharges, ticket bookings, and remittances, reducing the need for long-distance travel and saving time.',
    },
    {
      title: 'Jobs Connect',
      image: sol2,
      content:
        'Online Saathi Jobs Module connects informal workers with safe, local job opportunities tailored to their skills. It offers curated job listings in sectors like agriculture, construction, and manufacturing, helping workers find secure employment and improve their livelihoods.',
    },
    {
      title: 'Government Schemes',
      image: sol3,
      content:
        'Online Saathi\'s digital eligibility engine connects informal workers and rural communities with government support. It simplifies the process of finding and accessing social welfare schemes by analyzing personal information.',
    },
    {
      title: 'Localized Community',
      image: sol4,
      content:
        'The Localized Community on Online Saathi brings together informal workers and rural residents in a supportive digital space. It allows them to share, celebrate, discuss, and stay informed about community issues and welfare',
    },
  ];

  return (
    <div className="py-5">
      <h1
        className="mt-5"
        style={{
          fontSize: window.innerWidth < 768 ? '34px' : '52px',
          fontWeight: '700',
          width: '100%',
          color: '#000',
          textAlign: 'center',
        }}
      >
        <span>Our </span>
        <span style={{ color: '#0077FF' }}>Innovation</span><span> and </span><span style={{ color: '#0077FF' }}>Services</span>
      </h1>

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-4 g-4 justify-content-center">
            {cards.map((card, index) => (
              <div className="col" key={index}>
                <div
                  className="card text-center border-primary shadow-sm p-4"
                  onClick={() => toggleContent(index)}
                  style={{
                    width: '100%',
                    maxWidth: '18rem',
                    margin: 'auto',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    backgroundColor: '#fff',
                    height: openCard === index ? 'auto' : '195px',
                  }}
                >
                  <h5 className="fw-bold">{card.title}</h5>
                  <div className="my-3">
                    <img src={card.image} style={{ height: '70px' }} alt={card.title} />
                  </div>

                  {openCard === index && (
                    <div className="text-dark mt-2">
                      <p>{card.content}</p>
                    </div>
                  )}

                  <div className="mt-2">
                    <i
                      className={`fas ${openCard === index ? 'fa-chevron-up' : 'fa-chevron-down'} fs-1 text-muted`}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
