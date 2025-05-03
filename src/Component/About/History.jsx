import React from 'react';
import './History.css';

const History = () => {
  return (
    <div className="history-container">
      <h1 className="history-title">History</h1>
      <div className="history-content">
        <div className="history-item">
          <div className="number-circle">1</div>
          <p className="history-text">
            Started in <b style={{color:'black',fontSize:'29px'}}>2015</b> by Naresh, a young man who had himself experienced the difficulties faced by migrant workers, worked as a child laborer in a factory, hotel, and tea shop, but he never gave up his formal education. He took a part-time job in a hotel/restaurant and completed his graduation in commerce. He then joined a job as an admin assistant at Teach for India, where he was exposed to the challenges faced by migrant workers in India. As Naresh began to learn more about the plight of migrant workers, he was moved to take action. In 2015, he started Online Saathi with the goal of supporting migrant workers with basic support from a not-for-profit. With the help of a bank loan, he started a digital mobile office that helped migrant workers to get jobs, their rights, and legal aid in the workplace in cities. Over time, Naresh and Online Saathi helped countless migrants with their needs.
          </p>
        </div>
        <div className="history-item">
          <div className="number-circle">2</div>
          <p className="history-text">
            In <b style={{color:'black',fontSize:'29px'}}>2018</b>, Online Saathi received CSR funding and Naresh started the Labor Resource and Support Centre. With this organization, he has helped more than 20,000 migrants across the country, registering a union and helping lakhs of migrant workers get government schemes, their entitlements, wages, legal aid, and more. Naresh was driven to help migrant workers in any way he could, and he was committed to making a difference in their lives.
          </p>
        </div>
        <div className="history-item">
          <div className="number-circle">3</div>
          <p className="history-text">
            In <b style={{color:'black',fontSize:'29px'}}>2019</b>, the COVID-19 pandemic hit India and caused widespread hardship, particularly for migrant workers. Naresh quickly stepped up to help, organizing relief efforts for migrant communities. He helped more than 12,500 migrant laborer families get food, rations, transportation, flight tickets, livelihoods, loans to start businesses, and everything else they needed to survive. During this two-year period, Online Saathi raised more than 2.25 crore fund and did relief work for migrant communities.
          </p>
        </div>
        <div className="history-item">
          <div className="number-circle">4</div>
          <p className="history-text">
          Despite all that Naresh had achieved, he knew that there was still much work to be done. In <b style={{color:'black',fontSize:'29px'}}>2022</b>, he embarked on an ambitious project called #WalkforMigrant. Naresh walked 5,100 kilometers through 77 districts in 10 states of India to learn more about the lives of migrant workers.
          He conducted over 100 RTIs about migrant labor issues and wrote request letters to more than 50 district collectors, urging them to take action on behalf of migrant workers. He discovered that there were no government schemes available for migrant workers and wrote a request letter to the PMO and other government agencies, calling for change.
          </p>
        </div>
        <div className="history-item">
          <div className="number-circle">5</div>
          <p className="history-text">
          <b style={{color:'black',fontSize:'29px'}}>Today</b>, Online Saathi is a thriving organization that continues to help migrant workers across India. Naresh and Online Saathi remain committed to their mission and are always looking for new ways to make a difference in the lives of migrant workers. Over the years, they have expanded their services to include vocational training programs, empowering migrants with skills such as carpentry, tailoring, and digital literacy to improve their employability.
          </p>
        </div>

      </div>
    </div>
  );
};

export default History;