// import React, { useState } from 'react';
// import sol1 from "../Home/sol1.gif";
// import sol2 from "../Home/sol2.gif";
// import sol3 from "../Home/sol3.gif";
// import sol4 from "../Home/sol4.gif";
// import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
// import '@fortawesome/fontawesome-free/css/all.min.css'; // For Font Awesome icons

// const SolutionSection = () => {
//   // State to manage which card's content is visible
//   const [openCard, setOpenCard] = useState(null);

//   // Toggle function for showing/hiding content
//   const toggleContent = (index) => {
//     setOpenCard(openCard === index ? null : index);
//   };

//   // Data for cards (you can customize the additional content here)
//   const cards = [
//     {
//       title: 'TRUST',
//       subtitle: 'built through community connections',
//       image: sol1,
//       content:
//         'By training local leaders, known as Saathis, we empower communities with trusted individuals who bridge the gap in access to social welfare, jobs, and on-demand services. Saathis become local advocates, supporting 45,000+ workers through financial services and Comprehensive DeliVery Tracking System',
//     },
//     {
//       title: 'TRANSACTIONS',
//       subtitle: 'Empowered',
//       image: sol2,
//       content:
//         'Our platform facilitates safe, transparent transactions-ranging from remittances to scheme enrollments and bill payments ensuring reliable service access for informalworkers without the need for long-distance travel',
//     },
//     {
//       title: 'TECHNOLOGY',
//       subtitle: 'Made Accessible',
//       image: sol3,
//       content:
//         'Online Saathi simplified technology allows Saathis to start assisting their communities quickly and efficiently. Our app eligibility engine, resume builder, and local language chatbot make it Our Technologys and users to navigate services.',
//     },
//     {
//       title: 'TRENDS Tracked',
//       subtitle: 'for continuous improvement',
//       image: sol4,
//       content:
//         'Through ongoing data collection, Online Saathi tracks service usage and trends to better understand community needs, allowing us to refine our offerings and empower Saathis to provide tailored, impactful solutions at the local level.',
//     },
//   ];

//   return (
//     <div className="py-5">
//       {/* Heading */}
//       <h1
//         className="mt-5"
//         style={{
//           fontSize: window.innerWidth < 768 ? '34px' : '52px',
//           fontWeight: '700',
//           width: '100%',
//           color: '#000',
//           textAlign: 'center',
//         }}
//       >
//         <span>Our </span>
//         <span style={{ color: '#0077FF' }}>Solution</span>
//       </h1>
     

//       {/* Cards Section */}
//       <div className="album py-5">
//         <div className="container">
//           <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-4 g-3">
//             {cards.map((card, index) => (
//               <div className="col" key={index}>
//                 <div className="d-flex justify-content-center align-items-center flex-column">
//                   {/* Card */}
//                   <div
//                     className="card text-center border-primary p-4 shadow-sm"
//                     style={{
//                       width: '18rem',
//                       borderRadius: '10px',
//                       height: '250px',
//                     }}
//                   >
//                     <h5 className="fw-bold">{card.title}</h5>
//                     <p className="mb-2">{card.subtitle}</p>
//                     <div className="my-3">
//                       <img src={card.image} style={{ height: '70px' }} alt={card.title} />
//                     </div>
//                   </div>
//                   {/* Toggle Button */}
//                   <button
//                     className="btn btn-light border shadow"
//                     style={{
//                       borderRadius: '0 0 20px 20px',
//                       height: '40px',
//                       background: 'transparent',
//                     }}
//                     onClick={() => toggleContent(index)}
//                   >
//                     <i
//                       className={`fas ${openCard === index ? 'fa-chevron-up' : 'fa-chevron-down'} fs-4`}
//                     ></i>
//                   </button>
//                   {/* Additional Content (shown when button is clicked) */}
//                   {openCard === index && (
//                     <div
//                       className="mt-3 p-3 bg-light border rounded shadow-sm"
//                       style={{ width: '18rem', textAlign: 'center' }}
//                     >
//                       <p>{card.content}</p>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SolutionSection;


import React, { useState } from 'react';
import sol1 from "../Home/sol1.gif";
import sol2 from "../Home/sol2.gif";
import sol3 from "../Home/sol3.gif";
import sol4 from "../Home/sol4.gif";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const SolutionSection = () => {
  const [openCard, setOpenCard] = useState(null);

  const toggleContent = (index) => {
    setOpenCard(openCard === index ? null : index);
  };

  const cards = [
    {
      title: 'TRUST',
      subtitle: 'Community connections',
      image: sol1,
      content:
        'By training local leaders, known as Saathis, we empower communities with trusted individuals who bridge the gap in access to social welfare, jobs, and on-demand services. Saathis become local advocates, supporting 45,000+ workers through financial services and Comprehensive DeliVery Tracking System',
    },
    {
      title: 'TRANSACTIONS',
      subtitle: 'Empowered',
      image: sol2,
      content:
        'Our platform facilitates safe, transparent transactions-ranging from remittances to scheme enrollments and bill payments ensuring reliable service access for informalworkers without the need for long-distance travel',
    },
    {
      title: 'TECHNOLOGY',
      subtitle: 'Made Accessible',
      image: sol3,
      content:
        'Online Saathi simplified technology allows Saathis to start assisting their communities quickly and efficiently. Our app eligibility engine, resume builder, and local language chatbot make it Our Technologys and users to navigate services.',
    },
    {
      title: 'TRENDS Tracked',
      subtitle: 'Improvement',
      image: sol4,
      content:
        'Through ongoing data collection, Online Saathi tracks service usage and trends to better understand community needs, allowing us to refine our offerings and empower Saathis to provide tailored, impactful solutions at the local level.',
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
        <span style={{ color: '#0077FF' }}>Solution</span>
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
                    height: openCard === index ? 'auto' : '240px',
                  }}
                >
                  <h5 className="fw-bold">{card.title}</h5>
                  <p className="mb-2">{card.subtitle}</p>
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
