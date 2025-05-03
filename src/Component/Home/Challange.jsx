// import React from 'react';
// import './Challange.css';

// const Challenge = () => {
//     return (
        // <div className="container">
        //     <h1
        //         className='challenge-heading mt-5'
        //         style={{
        //             fontSize: window.innerWidth < 768 ? "34px" : "52px",
        //             fontWeight: "700",
        //             width: '100%',
        //             color: '#000',
        //             textAlign: 'center'
        //         }}
        //     >
        //         <span>Overcoming Challenges in the </span>
        //         <br />
        //         <span style={{ color: '#0077FF' }}>Unorganized Sector</span>
        //     </h1>
        //     <br />
        //     <p className='text-center challenge-description'>
        //         The Reality for India’s Invisible Workforce India’s informal workforce faces significant barriers in accessing essential welfare schemes and services.
        //         Despite the government’s investment of ₹2 lakh crore in welfare programs, over 83% of these workers earn less than ₹1.2 lakh annually.
        //         They encounter challenges such as:
        //     </p>

//             <div className="album py-5">
//                 <div className="container">
//                     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
//                         {[
//                             {
//                                 title: "Limited Access to Essential Services",
//                                 text: "Informal workers often miss out on banking, insurance, and welfare services due to limited documentation and awareness."
//                             },
//                             {
//                                 title: "Lack of Sustainable Income Opportunities",
//                                 text: "With few formal job opportunities available locally, people often rely on low-paying, irregular work or face the difficult choice of migrating to cities in search of income, leaving behind their families and communities."
//                             },
//                             {
//                                 title: "Barriers to Growth and Financial Stability",
//                                 text: "Without access to credit, training, and formal support, members of the informal workforce find it challenging to achieve economic stability or build a career path that allows for personal and professional growth."
//                             },
//                             {
//                                 title: "Lack of Awareness and Access",
//                                 text: "Many informal workers are unaware of available welfare schemes or lack the means to access them due to complicated processes and minimal digital literacy."
//                             },
//                             {
//                                 title: "Complex Processes",
//                                 text: "Government schemes involve extensive documentation, challenging timelines, and lack of clarity, deterring informal workers from fully utilizing available resources."
//                             },
//                             {
//                                 title: "Information and Usage Gaps",
//                                 text: "Even when informal workers gain access to a scheme, understanding how to effectively utilize benefits remains a hurdle. This lack of guidance often results in underutilization of resources, such as the high number of inactive Jan Dhan accounts."
//                             }
//                         ].map((item, index) => (
//                             <div key={index} className="hover-card-container">
//                                 <div className="hover-card">
//                                     <div className="card-text">{item.title}</div>
//                                     <div className="hover-text">{item.text}</div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Challenge;

import React from 'react';
import './Challange.css';

const challengeCards = [
  {
    title: "Limited Access to\nessential services",
    hoverText: "**Informal Worker Often miss out on a banking, insaurance and welfare services due to limited documentation and awareness.**"
  },
  {
    title: "Lack of Awareness\nand\nAccess",
    hoverText: "With few formal job opportunities available locally, people often rely on low-paying, irregular work or face the difficult choice of migrating to cities in search of income, leaving behind their families and communities."
  },
  
  {
    title: "Barriers to Growth\nand\nFinancial Stability",
    hoverText: "Without access to credit, training, and formal support, members of the informal workforce find it challenging to achieve economic stability or build a career path that allows for personal and professional growth."
  },
 
 
  {
    title: "Lack Of Awarness And Access",
    hoverText: "Many informal workers are unaware of available welfare schemes or lack the means to access them due to complicated processes and minimal digital literacy."
  },
  {
    title: "Complex Processes",
    hoverText: "Government schemes involve extensive documentation, challenging timelines, and lack of clarity, deterring informal workers from fully utilizing available resources."
  },
  {
    title: "Information\nand\nUsage Gaps",
    hoverText: "Even when informal workers gain access to a scheme, understanding how to effectively utilize benefits. This lack of guidance often results in underutilization of resources, such as the high number of inactive Jan Dhan accounts."
  }
];

const ChallengesLayout = () => {
  return (
    <div className="challenge-wrapper">
      <h2 className="challenge-title">
      Overcoming Challenges in the <br /> <span>Unorganized Sector</span>
      </h2>
      <p className="challenge-description">
      The Reality for India's Invisible Workforce India's informal workforce faces significant barriers in accessing essential welfare schemes and services. Despite the government's investment of 72 lakh crore in welfare programs, over 83% of these workers earn less than P1.2 lakh annually. They encounter challenges such as:
      </p>

      <div className="challenge-grid">
        {challengeCards.map((card, index) => (
          <div className="challenge-card" key={index}>
            <div className="card-content">
              <div className="card-front">{card.title}</div>
              <div className="card-back">{card.hoverText}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChallengesLayout;
