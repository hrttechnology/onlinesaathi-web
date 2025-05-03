import React from 'react';
import chairmanImage from './chairman.jpeg'; // Ensure you have this image file in the same directory or adjust the path
import './Chairman.css';

const Chairman = () => {
  return (
    <div className="chairman-container">
      {/* <h1 className="chairman-title"> </h1> */}
      <h2 className="vision-mission-title">
     <span className="highlight-and">Chairman's</span> Message
</h2>
      <div className="chairman-content">
        <img src={chairmanImage} alt="Chairman" className="chairman-image" />
        <div className="chairman-text">
          <p>
            I came from Nepal with my father as a migrant labour, with education up to 6th grade only. I then worked at a tea stall for many years and gradually found work in a hotel to support my education to complete my 12th grade in 2012. I started college soon along with which I joined an NGO – Ajeevika Bureau, and started my social sector journey. I want to create one stop information centre for migrants, especially the daily wage labourers in the hotel industry. This centre would inform them of multiple government schemes & opportunities & support them in applying for schemes, along with saving them from the agents & touts. We also resolve issues between the migrant worker and his/her employer & provides training to improve their skills that will help those secure better jobs.
          </p>
          <p>
            This is my story – <b style={{color:'black',fontSize:'20px'}}>being a migrant labour, I realized the challenges everyone else like me faces and they don’t have any support.</b> I wish I had someone supporting me but now I can provide a support structure to the thousands of migrant labour in my state. Who even don’t have information about remittance and information about the multiple source of income as well. Have lead an NGO that raised and donated more than 5 crore in last five year and 4 crore worth material in last two year in covid pandemic as well. Now We want to create a single window solution for them as being the migrant we understand the pain of the people whom we works with.
            <b style={{color:'black',fontSize:'20px'}}>The company aim is to provide the world class financial and E-governance services thought-out the company and also from the organization that we work with</b> . Our team and people around us is self motivated to do the transaction behalf of the same.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chairman;