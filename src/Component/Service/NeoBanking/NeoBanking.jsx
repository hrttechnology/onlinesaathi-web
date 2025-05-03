import React from 'react';
import { useMediaQuery } from 'react-responsive';
import "../NeoBanking/NeoBanking.css";
import img from '../NeoBanking/n1.jpeg';
import img1 from '../NeoBanking/n2.jpeg';
import img2 from '../NeoBanking/n3.jpeg';
import img3 from '../NeoBanking/n4.jpeg';
import img4 from '../NeoBanking/n5.jpeg';


function NeoBanking() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <>
            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                        <div className="col image-col" data-aos="zoom-out" data-aos-delay="400">
                            <div className="image-wrapper">
                                <img 
                                    src={img} 
                                    alt="Business Meeting" 
                                    className="main-image"
                                />
                            </div>
                        </div>
                        <div className="col content-col" data-aos="fade-up" data-aos-delay="200">
                            <h1 className="title">
                                <span>Neo</span>
                                <span className="highlight"> Banking</span>
                            </h1>
                           
                            <p className="about-description">
                                Online Saathi revolutionizes banking for the informal workforce by delivering tailored neo-banking services that transcend traditional limitations.
                            </p>
                            <button 
                                className="scroll-down-btn"
                                onClick={() => window.scrollTo({ top: 1000, behavior: 'smooth' })}
                            >
                                Scroll Down
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="saathi-network" className="section">
    <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2 className="section-heading">
            How our Saathi Network <span className="highlight">works</span>
        </h2>

        <div className="content-block">
            <h3 className="content-title">
                Bridging the <span className="highlight">Digital Divide</span>
            </h3>
            <p className="about-description">
                The Saathi Network is the backbone of Online Saathi, featuring a team of dedicated on-the-ground agents known as Sewa Saathis. They provide personalized assistance to informal workers, ensuring seamless access to our tech platform and services.
            </p>
        </div>

        <div className="content-block">
            <h3 className="content-title">
                Personalized <span className="highlight">Support</span>
            </h3>
            <p className="about-description">
                Sewa Saathis are highly trained to guide users through our platform, helping with everything from navigating the mobile app to accessing financial services and job opportunities. They ensure every user gets the support they need.
            </p>
        </div>

        <div className="content-block">
            <h3 className="content-title">
                Community <span className="highlight">Engagement</span>
            </h3>
            <p className="about-description">
            Operating within local communities, Sewa Saathis build trust and foster engagement. Their consistent, reliable assistance bridges the gap between digital technology and real-world interactions, promoting inclusive growth.
            </p>
        </div>

        <div className="content-block">
            <h3 className="content-title">
            Empowering<span className="highlight"> Informal Workers</span>
            </h3>
            <p className="about-description">
            Our network empowers informal workers by equipping them with the tools and resources needed to improve their livelihoods. Join us in creating a more inclusive and sustainable future.
            </p>
        </div>
    </div>
</section>


<section id="saathi-services" className="services-section">
  <div className="container text-center" data-aos="fade-up">
    <h2 className="section-title">
      Explore our services and connect with a <span className="highlight">Sewa Saathi today!</span>
    </h2>

    <div className="grid-container">
      {/* Card 1 */}
      <div className="service-card">
        <img src={img1} alt="Mobile Banking" className="service-img" />
        <h3 className="service-title">Mobile Banking</h3>
        <p className="service-desc">
          Access banking services conveniently through a user-friendly mobile app.
        </p>
      </div>

      {/* Card 2 */}
      <div className="service-card">
        <img src={img2} alt="Remittances" className="service-img" />
        <h3 className="service-title">Remittances</h3>
        <p className="service-desc">
          Send and receive money securely, with minimal fees and hassle.
        </p>
      </div>

      {/* Card 3 */}
      <div className="service-card">
        <img src={img3} alt="Savings Accounts" className="service-img" />
        <h3 className="service-title">Savings Accounts</h3>
        <p className="service-desc">
          Open savings accounts and build financial security for the future.
        </p>
      </div>

      {/* Card 4 */}
      <div className="service-card">
        <img src={img4} alt="Micro-loans" className="service-img" />
        <h3 className="service-title">Micro-loans</h3>
        <p className="service-desc">
          Access micro-loans to support entrepreneurial endeavors or emergencies.
        </p>
      </div>
    </div>
  </div>
</section>


        </>
    );
}

export default NeoBanking;