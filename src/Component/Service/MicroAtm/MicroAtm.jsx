import React, { useEffect, useState } from 'react';
import "./MicroAtm.css";
import about1 from "../MicroAtm/m1.png";
import about2 from "../MicroAtm/m2.png";
import about3 from "../MicroAtm/m3.png";
import about4 from "../MicroAtm/m4.png";
import JobCards from '../Jobscard';
import MicroServices from './MicroServices'
function About() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <br />

            {/* Section 1: Micro ATM */}
            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row" style={{
                        flexDirection: isMobile ? 'column' : 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '1rem',
                    }}>
                        <div className="col" style={{ flex: '1 1 100%' }} data-aos="fade-up" data-aos-delay="200">
                            <h1 style={{
                                marginTop: '1.5rem',
                                marginBottom: '3.5rem',
                                fontSize: isMobile ? "34px" : "52px",
                                fontWeight: "700",
                                color: '#000',
                                textAlign: 'left'
                            }}>
                                <span>Micro</span>
                                <span style={{ color: '#0077FF' }}> ATM</span>
                            </h1>
                            <p className="about-description">
                                At Online Saathi, we understand the importance of affordability. Our Micro ATM devices are priced competitively for only Rs. 1,399/- to ensure that becoming a Online Saathi agent is within reach for small shop owners.
                            </p>
                            <button className="scroll-down-btn" onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}>
                                Scroll Down
                            </button>
                        </div>

                        <div className="col" style={{ flex: '1 1 100%' }} data-aos="fade-up" data-aos-delay="300">
                            <div className="image-wrapper">
                                <img src={about1} alt="Micro ATM" className="main-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: How It Works */}
            <section className="how-it-works" style={{ marginTop: '2rem' }}>
                <h2 style={{
                    fontSize: isMobile ? '2rem' : '2.75rem',
                    fontWeight: 'bold',
                    marginBottom: '2rem',
                    color: '#000',
                    textAlign: 'center'
                }}>
                    Features Of Online Saathi <span style={{ color: '#0077FF' }}>Mini ATM Machine</span>
                </h2>

                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: isMobile ? '1rem' : '3rem',
                    padding: '0 1rem'
                }}>
                    {/* Step 1 */}
                    <div className="step-box">
                        <div style={{ padding: '1rem' }}>
                            <img src={about4} alt="Skill Assessment" />
                            <h3 style={{ textAlign: 'center' }}>Easy To Use</h3>
                        </div>
                        <div className="step-content">
                        Easy to use: Mini ATMs are designed with user-friendly interfaces, making them easy to operate even for those who are having limited technical knowledge or experience.
                        </div>
                    </div>

                    {/* Arrow */}
                    {!isMobile && <div className="arrow">➜</div>}

                    {/* Step 2 */}
                    <div className="step-box">
                        <div style={{ padding: '1rem' }}>
                            <img src={about3} alt="Job Matching" />
                            <h3 style={{ textAlign: 'center' }}>Safe And Quick</h3>
                        </div>
                        <div className="step-content">
                        Safe and quick: Mini ATMs are equipped with advanced security features to safeguard transactions and protect customers' financial information.
                        </div>
                    </div>

                    {!isMobile && <div className="arrow">➜</div>}

                    {/* Step 3 */}
                    <div className="step-box">
                        <div style={{ padding: '1rem' }}>
                            <img src={about2} alt="Application Support" />
                            <h3 style={{ textAlign: 'center' }}>Portable</h3>
                        </div>
                        <div className="step-content">
                        Portable: Mini ATMs can be easily transported to any location that lacks traditional banking infrastructure. So, you can easily provide services to your customers anywhere.
                        </div>
                    </div>
                </div>
            </section>
            <MicroServices />
            <JobCards />
            
        </>
    );
}

export default About;
