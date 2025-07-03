import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome CSS
import './Footer.css'; // Custom CSS
import googleplay from '../Footer/googleplay.png';
import apple from '../Footer/appstore.png';

function Footer() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  return (
    <>
      {/* Top Banner */}
      <div
        className="bg-primary text-white d-flex align-items-center py-2"
        style={{ height: isMobile ? 'auto' : isTablet ? 'auto' : '60px' }}
      >
        <div
          className="container d-flex flex-column flex-md-row justify-content-between align-items-center"
          style={{ flexDirection: isMobile ? 'column' : isTablet ? 'column' : 'row' }}
        >
          <h3
            className="fw-bold text-center text-md-start mb-2 mb-md-0"
            style={{ color: '#fff' }}
          >
            Become a Saathi Partner and earn up to 20k per Month
          </h3>
          <div
            className="bg-success rounded-pill d-flex align-items-center justify-content-center px-2 py-1"
            style={{
              gap: '100px',
              height: isMobile ? '28px' : '36px',
              width: isMobile ? '90px' : '120px',
              cursor: 'pointer',
            }}
          >
            <NavLink
              to="https://admin.onlinesaathi.org/#/auth/registeruser" target='_blank'
              className="text-white fw-bold text-decoration-none d-flex align-items-center"
              style={{ fontSize: isMobile ? '11px' : '13px' }}
            >
              <i className="fas fa-user me-1"></i> Apply Now
            </NavLink>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="saathi-footer" className="saathi-footer bg-#f40b7c text-white">
        <div className="container saathi-footer-top position-relative py-4">
          <div className="row gy-2 gx-2">
            {/* Download Application */}
            <div className="col-lg-3 col-md-6 saathi-footer-about">
              <NavLink to="/" className="saathi-logo d-flex align-items-center text-decoration-none">
                <span className="saathi-sitename text-white fs-5 fw-bold">Download Application</span>
              </NavLink>
              <div className="saathi-footer-contact pt-2">
                <p>
                  <a href="https://play.google.com/store/apps/details?id=com.recharge.online_saathi&hl=en_IN" target='_blank'><img src={googleplay} style={{ height: '40px' }} alt="Google Play" /></a> 
                </p>
                <p>
                  <a href="https://www.apple.com/in/app-store/onlinesaathi" target='_blank'><img src={apple} style={{ height: '40px', marginTop: '8px' }} alt="App Store" /></a>
                </p>
              </div>
              <div className="saathi-social-links d-flex mt-3">
                <a href="https://www.youtube.com/@onlinesaathi" target='youtube' className="text-white rounded-circle border d-flex align-items-center justify-content-center me-2">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="https://facebook.com/onlinesaathi" target='_blank' className="text-white rounded-circle border d-flex align-items-center justify-content-center me-2">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://whatsapp.com/channel/0029VaVLYnq6LwHfwUg2SK2c" target='_blank' className="text-white rounded-circle border d-flex align-items-center justify-content-center me-2">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/company/online-saathi/" target='_blank' className="text-white rounded-circle border d-flex align-items-center justify-content-center">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            {/* Important Links */}
            <div className="col-lg-2 col-md-3 saathi-footer-links">
              <h4 className="text-white">Important Links</h4>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/" className="text-white text-decoration-none"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  >
                    Home</NavLink>
                </li>

                <li>
                  <NavLink to="/about" className="text-white text-decoration-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/partner" className="text-white text-decoration-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Partner
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/tech" className="text-white text-decoration-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Technology
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/sathi" className="text-white text-decoration-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Saathi
                  </NavLink>
                </li>

              </ul>
            </div>

            {/* Our Services */}
            <div className="col-lg-5 col-md-2 saathi-footer-links">
              <h4 className="text-white">Our Services</h4>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="/safe" className="text-white text-decoration-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Safe Job Connect
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/social" className="text-white text-decoration-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Social Welfare Schemes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/micro-atm" className="text-white text-decoration-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Micro-ATM
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/community" className="text-white text-decoration-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Community
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pan-card" className="text-white text-decoration-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    PAN Card Center
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/partner" className="text-white text-decoration-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    Insurance
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Get In Touch (Top-Right) */}
          <div className="saathi-get-in-touch-top-right">
            <h4 className="text-white">Get In Touch</h4>
            <div className="saathi-footer-contact">
              <p>
                <a href="#" className="text-white text-decoration-none">
                  309 3rd Floor The Atlanta Business Hub, Nana Chiloda, Ahmedabad, Gujarat 302330
                </a>
              </p>
              <p>
                <a href="tel:+919099005251" className="text-white text-decoration-none">
                  +91 909 900 5251
                </a>
              </p>
              <p>
                <a href="mailto:support@onlinesaathi.org" className="text-white text-decoration-none">
                  support@onlinesaathi.org
                </a>
              </p>
            </div>
          </div>


        </div>
      </footer>

      {/* Copyright */}
    <div
  className="bg-primary text-white py-0"
>
  <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-2">
    
    <h5 className="mb-0">
      © 2018-2025 Online Saathi. All Rights Reserved.
    </h5>

    <div className="d-flex flex-column flex-md-row align-items-center gap-2">
      <NavLink
        to="/refund-policy"
        className="text-white text-decoration-underline"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <h5 className="mb-0">Refund Policy || </h5>
      </NavLink>

      <NavLink
        to="/terms-condition"
        className="text-white text-decoration-underline"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <h5 className="mb-0">Terms & Conditions || </h5>
      </NavLink>

      <NavLink
        to="/privacy-policy"
        className="text-white text-decoration-underline"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <h5 className="mb-0">Privacy Policy</h5>
      </NavLink>
    </div>

  </div>
</div>


    </>
  );
}

export default Footer;