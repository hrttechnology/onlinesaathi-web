import React from 'react';
import "../About/About.css";
import about1 from "../About/c.jpeg";
import Mission from "../About/Mission"
import History from './History';
import Chairman from './Chairman';
function About() {
    return (
        <>
        <br />
            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4 align-items-center justify-content-between">
                        <br />
                        <h1 className='mt-4 mb-2' style={{
                            fontSize: window.innerWidth < 768 ? "34px" : "52px",
                            fontWeight: "700",
                            width: '100%',
                            color: '#000',
                            textAlign: 'left'
                        }}>
                            <span>About</span>
                            <span style={{ color: '#0077FF' }}> Us</span>
                        </h1>
                        <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="about-titles">Transforming Access and Opportunities for India’s Informal Workforce</h2>
                            <p className="about-description">A <b style={{color:'#0077FF',fontSize:'19px'}}>tech-driven network</b> bridging the gap for informal workers to access essential services, social welfare schemes, safe job opportunities, and on-demand services like banking, insurance, and travel and E-governance services.</p>
                            <div className="row feature-list-wrapper">
                                <div className="col-md-">
                                <p className="about-description">Online Saathi connects rural and migrant workers with crucial services, empowering communities through a <b style={{color:'#0077FF',fontSize:'19px'}}>network of dedicated agents.</b></p>
                                </div>
                            </div>

                           
                        </div>

                        <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="image-wrapper">
                                <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                                    <img src={about1} alt="Business Meeting" className="img-fluid main-image rounded-4" />
                                   
                                </div>
                              
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Mission />
            <History />
            <Chairman />
        </>
    )
}

export default About
