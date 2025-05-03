import React from 'react';
import { useMediaQuery } from 'react-responsive';
import img from '../Social/homeimg3.png'


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
                                <h4 style={{
                                    fontSize: window.innerWidth < 768 ? "28px" : "52px",
                                    fontWeight: "700",
                                    width: '100%',
                                    marginBottom: "10px",
                                    marginTop:"120px",
                                    marginLeft:"300px"
                                }}>
                                    Discover Govenment Scheme for you
                                </h4>

                                {/* Description */}
                                <p style={{
                                    fontSize: window.innerWidth < 768 ? "29px" : "39px",
                                    lineHeight: "1",
                                    fontWeight: '600',
                                    width: '100%',
                                    textAlign: window.innerWidth < 768 ? "center" : "center",
                                    marginBottom: "20px",
                                    marginLeft:"100px"
                                }}>
                                    Find Personalized Schemes based on your eligibilty.
                                </p>
                            </div>

                        </div>
                    </div>


                </div>

            </div>
            
         
           

        </>
    )
}

export default Partners;