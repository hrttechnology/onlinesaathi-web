import React from 'react';
import { useMediaQuery } from 'react-responsive';
import img from "../Partners/homeimg3.png";
import img0 from "../Home/image 6.png";
import img1 from "../Home/image 7.png";
import img2 from "../Home/image 8.png";
import img3 from "../Home/image 9.png";
import img4 from "../Home/image 10.png";
import img5 from "../Home/image 11.png";
import Technology from "../Home/Ourpatner";
import Drop from './Drop'
function Partners() {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
    return (
        <>
            <div id="" className=" mb-6" data-bs-ride="carousel">
                {/* Carousel Items */}
                <div className="carousel-inner">
                    {/* img section 3 */}
                    <div className="" style={{ position: "relative" }}>
                        <img src={img} alt="" style={{ height: '90vh', width: '100%', objectFit: 'cover' }} />

                        {/* Full Black Transparent Overlay */}
                        <div className="overlay"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "rgba(0, 0, 0, 0.5)",
                                display: "flex",
                                alignItems: window.innerWidth < 768 ? "flex-start" : "center", // Align content to top on mobile
                                justifyContent: "center",
                                padding: window.innerWidth < 768 ? "10% 5%" : "20px",
                                flexDirection: "column"
                            }}>

                            <div className="carousel-caption"
                                style={{
                                    position: "absolute",
                                    top: window.innerWidth < 768 ? "40%" : "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    color: "white",
                                    width: "90%",
                                    maxWidth: "1200px",
                                    textAlign: window.innerWidth < 768 ? "center" : "left",
                                }}>

                                {/* Title */}
                                <h1 style={{
                                    fontSize: window.innerWidth < 768 ? "40px" : "62px",
                                    fontWeight: "700",
                                    width: '100%',
                                    marginBottom: "10px"
                                }}>
                                    Collaborating with Trusted Service Providers
                                </h1>

                                {/* Description */}
                                <p style={{
                                    fontSize: window.innerWidth < 768 ? "29px" : "39px",
                                    lineHeight: "1",
                                    fontWeight: '600',
                                    width: '100%',
                                    textAlign: window.innerWidth < 768 ? "center" : "left",
                                    marginBottom: "20px"
                                }}>
                                    By collaborating with multiple service providers, Online Saathi has expanded access to diverse job opportunities across various industries, connecting workers with roles suited to their expertise.
                                </p>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
            
            <Drop />
            <Technology />
            
            <br /><br />
            <div className="container">
                <p style={{ fontSize: window.innerWidth < 768 ? "28px" : "32px", textAlign: 'center' }}>Together, these partnerships drive sustainable growth and community empowerment for informal workers across regions.</p>
                <br />
                <br />
                <div className="py-2 mb-5">
                    <div className="scroll-container">
                        <div className="scroll-content">
                            {/* 🔥 SINGLE image-row repeated twice for seamless effect */}
                            <div className="image-row">
                                <img src={img0} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img1} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img2} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img3} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img4} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img5} className="img-fluid" id="second-marks" alt="companyLogo" />

                                {/* 🔥 Duplicate same row (for infinite seamless scroll) */}
                                <img src={img0} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img1} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img2} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img3} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img4} className="img-fluid" id="second-marks" alt="companyLogo" />
                                <img src={img5} className="img-fluid" id="second-marks" alt="companyLogo" />
                            </div>
                        </div>
                    </div>
                </div>
                <p style={{ fontSize: window.innerWidth < 768 ? "28px" : "32px", textAlign: 'center' }}>Online Saathi collaborates with organizations, government agencies, and private entities to empower informal workers. These partnerships help extend our reach, amplify our impact, and create a supportive ecosystem.</p>
                <br /><br />
                <div style={{display:'flex',justifyContent:'center'}}>
                    <a href="sathi" class="btn btn-primary fs-4 mb-5" style={{ textDecoration: 'none' }}>Partner with us</a>
                </div>
            </div>

        </>
    )
}

export default Partners;