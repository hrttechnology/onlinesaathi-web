import React from 'react';
import { useMediaQuery } from 'react-responsive';
import "../Service/safe.css";
import about1 from "../Service/safe.gif";
import skillImg from "../Service/saf1.gif"; // Replace with actual skill assessment image
import jobImg from "../Service/safe2.gif";   // Replace with actual job matching image
import supportImg from "../Service/safe3.gif"; // Replace with actual application support image
import JobCard from './Jobscard.jsx';
function Safe() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <>
            <br />
            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div
  className="row"
  style={{
    display: 'flex',
    flexDirection: isMobile ? 'column-reverse' : 'row',  // ← This is key
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '0.5rem',
  }}
>
<div
  className="col"
  style={{
    flex: isMobile ? '0 0 100%' : '0 0 45%',
    maxWidth: isMobile ? '100%' : '45%',
  }}
  data-aos="fade-up"
  data-aos-delay="200"
>

                            <h1 style={{
                                marginTop: '1.5rem',
                                marginBottom: '0.5rem',
                                fontSize: window.innerWidth < 768 ? "34px" : "52px",
                                fontWeight: "700",
                                width: '100%',
                                color: '#000',
                                textAlign: 'left'
                            }}>
                                <span>Safe Job</span>
                                <span style={{ color: '#0077FF' }}> Connect</span>
                            </h1>
                            <p style={{ margin: '0 0 1rem' }}>Explore Various jobs at our platform</p>
                            <p className="about-description">Online Saathi's job matching services are dedicated to empowering informal workers by connecting them with employment opportunities that best fit their skills and preferences.</p>
                            <button className="scroll-down-btn" onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
                                Scroll Down
                            </button>
                        </div>

                        <div
    className="col"
    style={{
      flex: isMobile ? '0 0 100%' : '0 0 50%',
      maxWidth: isMobile ? '100%' : '50%',
    }}
    data-aos="fade-up"
    data-aos-delay="300"
  >
                            <div className="image-wrapper">
                                <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                                    <img src={about1} alt="Business Meeting" className="main-image" style={{ width: '100%', height: '100%', borderRadius: '0.5rem', objectFit: 'cover' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="how-it-works" style={{ marginTop: '2rem' }}>
                <h2 style={{
                    fontSize: window.innerWidth < 768 ? '2.5rem' : '2.75rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    color: '#000',
                    textAlign: 'center'
                }}>
                    How our Job portal <span style={{ color: '#0077FF' }}>works</span>
                </h2>

                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isMobile ? '1rem' : '3rem',
                    padding: '0 1rem'
                }}>
                    {/* Step 1: Skill Assessment */}
                    <div className="step-box">
                        <div style={{ padding: '1rem' }}>
                            <img src={skillImg} alt="Skill Assessment" style={{ width: '100%', height: '250px', objectFit: 'cover', margin: '0 auto 0.5rem', display: 'block' }} />
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', textAlign: 'center' }}>Skill Assessment</h3>
                        </div>
                        <div className="step-content">
                            Saathis begin by conducting comprehensive skill assessments to gain insights into each worker’s unique abilities and professional background. These assessments are crucial as they help determine the most suitable job opportunities that align with the worker’s capabilities and career aspirations.
                        </div>
                    </div>

                    {/* Arrow */}
                    {!isMobile && <div className="arrow">➜</div>}

                    {/* Step 2: Job Matching */}
                    <div className="step-box">
                        <div style={{ padding: '1rem' }}>
                            <img src={jobImg} alt="Job Matching" style={{ width: '100%', height: '250px', objectFit: 'cover', margin: '0 auto 0.5rem', display: 'block' }} />
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', textAlign: 'center' }}>Job Matching</h3>
                        </div>
                        <div className="step-content">
                            Utilizing the gathered information, Online Saathi’s platform employs advanced algorithms to match workers with relevant job openings across various sectors. This personalized approach ensures that each worker is connected with opportunities where they can thrive and contribute effectively.
                        </div>
                    </div>

                    {/* Arrow */}
                    {!isMobile && <div className="arrow">➜</div>}

                    {/* Step 3: Application Support */}
                    <div className="step-box">
                        <div style={{ padding: '1rem' }}>
                            <img src={supportImg} alt="Application Support" style={{ width: '100%', height: '250px', objectFit: 'cover', margin: '0 auto 0.5rem', display: 'block' }} />
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0', textAlign: 'center' }}>Application Support</h3>
                        </div>
                        <div className="step-content">
                            In addition to job matching, Saathis provide hands-on support to workers throughout the application journey. This includes assisting them in completing job applications accurately, crafting compelling resumes that highlight their skills and experiences, and even conducting mock interviews to help them prepare confidently.
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <JobCard />
        </>
    );
}

export default Safe;