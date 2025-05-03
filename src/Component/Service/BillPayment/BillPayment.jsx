


import React from 'react';
import "../BillPayment/BillPayment.css";
import about1 from "../BillPayment/bill.jpeg";

function BillPayment() {
    return (
        <section id="about" className="about section">
            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="row gy-4 align-items-center justify-content-between">
                    <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="about-title responsive-title">
                            <span className="highlight-blue">Bill Payments</span>
                            <span>: BBPS</span>
                        </h2>
                        <p className="about-description">
                            Online Saathi revolutionizes utility bill payments with the Bharat Bill Payment System (BBPS), 
                            <b className="highlight-inline">providing a fast, secure, and convenient platform to pay electricity, water, gas, and telecom bills</b> 
                            from anywhere. It eliminates queues and delays, offering real-time confirmations and digital receipts. Additionally, Online Saathi agents transform local shops into bill payment centers, fostering financial inclusion and digital empowerment in their communities.
                        </p>
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

            <div className="feature-cards-container">
                <div className="feature-card">
                    Connecting users to a comprehensive network of billers
                </div>
                <div className="feature-card">
                    Saves time and provides real-time payment confirmations and digital receipts.
                </div>
                <div className="feature-card">
                    Empowers the informal workforce by turning their shops into one-stop bill payment centers
                </div>
            </div>
        </section>
    )
}

export default BillPayment;
