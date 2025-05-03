import React from 'react';
import './Join.css';
import img from '../Home/a1.png'
import img1 from '../Home/a2.png'
import img2 from '../Home/a3.png'
import img3 from '../Home/a4.png'
import img4 from '../Home/a5.png'
import img5 from '../Home/a6.png'


const Join = () => {
  return (
    <div className="join-wrapper">
      <h2 className="join-title">Join <span>US</span></h2>
      <div className="join-content">
        <div className="join-text">
          <p>We are partnered with....</p>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <div className="underline"></div>
          <button className="enroll-btn">Enroll Now</button>
        </div>
        <div className="join-grid">
          <div className="grid-item">
            <img src={img} alt="Job Offers" />
            <div className="overlay">
              <p>800+<br />JOB OFFERS</p>
            </div>
          </div>
          <div className="grid-item">
            <img src={img1} alt="Companies" />
            <div className="overlay">
              <p>20+<br />COMPANIES</p>
            </div>
          </div>
          <div className="grid-item small">
            <img src={img2} alt="Workers" />
          </div>
          <div className="grid-item small">
            <img src={img3} alt="Children" />
          </div>
          <div className="grid-item">
            <img src={img4} alt="Government Schemes" />
            <div className="overlay">
              <p>1200+<br />GOVERNMENT SCHEMES</p>
            </div>
          </div>
          <div className="grid-item small">
            <img src={img5} alt="Additional Item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;