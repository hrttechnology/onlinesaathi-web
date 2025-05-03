
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SolutionSection = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleContent = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const cards = [
    {
      title: '1',
      subtitle: 'Strategic Partnerships',
      content:
        'Strategic Partnerships: We join forces with like-minded groups to expand services, boost efficiency, and develop solutions tailored to workers needs',
    },
    {
      title: '2',
      subtitle: 'Government Collaborations',
      content:
        'Collaboration with government agencies is key to Online Saathi mission of connecting informal workers to schemes and subsidies. By aligning with national policies, the platform promotes financial inclusion, skill development, and social welfare while ensuring seamless program implementation and systemic advocacy for the informal workforce.',
    },
    {
      title: '3',
      subtitle: 'Private Sector Engagement',
      content:
        'Partnering with private entities helps Online Saathi leverage expertise, technology, and funding to enhance infrastructure, expand services, and scale solutions. These collaborations drive innovation, foster entrepreneurship, and empower informal workers for sustainable economic growth.',
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
        <span style={{ color: '#0077FF' }}>Partners</span>
      </h1>

      <div className="album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-5 g-4 justify-content-center">
            {cards.map((card, index) => (
              <div className="col" key={index}>
                <div
                  className="card text-center border-primary shadow-sm p-4"
                  onClick={() => toggleContent(index)}
                  style={{
                    width: '100%',
                    maxWidth: '28rem',
                    margin: 'auto',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    backgroundColor: '#fff',
                    height: openCard === index ? 'auto' : '228px',
                  }}
                >
                  <h1 className="text-primary fw-bold" style={{ fontSize: window.innerWidth < 768 ? '50px' : '66px', opacity: '0.2' }}>{card.title}</h1>
                  <h5 className="mb-3" style={{ fontSize: '25px' }}>{card.subtitle}</h5>
                  {openCard === index && (
                    <div className="text-dark mt-3">
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

