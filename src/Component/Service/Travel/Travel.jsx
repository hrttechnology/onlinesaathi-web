import React, { useRef, useEffect, useState } from 'react';
import './Travel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import img1 from './t1.gif'
import img2 from './t2.gif'
import img3 from './t3.gif'
import img4 from './t4.gif'
import img5 from './t5.gif'
const Travel = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(4); // Start at slide 4 as per design

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      swiperInstance.on('slideChange', () => {
        const progress = document.querySelector('.slider-progress');
        const current = swiperInstance.realIndex + 1;
        const totalSlides = swiperInstance.slides.length;
        setCurrentSlide(current);
        progress.style.width = `${(current / totalSlides) * 100}%`;
      });
    }
  }, []);

  const handleSlideNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  return (
    <div className="travel-container">
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="travel-swiper"
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        effect="slide" 
      
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="content-left">
              <h1>
              Bus Ticket Booking <br /> Agents
              </h1>
              <p>
              There are times when there is no availability of train tickets. In those cases, our bus ticket solutions are the best alternative for our customers. To provide this service, we have a link with tour operators and tours. The agent can book and confirm tickets instantly using this interface and get attractive margins on each reserved ticket.
              </p>
            </div>
            <div className="content-right">
              <div className="image-container">
                <img src={img5} alt="Travel Agent Illustration (Agent with Laptop)" />
              </div>
              <div className="feature-cards">
                <div className="card">
                  <span className="card-icon">💸</span>Best Prices Guaranteed
                </div>
                <div className="card">
                  <span className="card-icon">⏳</span>Last minute booking
                </div>
                <div className="card">
                  <span className="card-icon">🌐</span>Search over 20,000 destinations worldwide
                </div>
                <div className="card">
                  <span className="card-icon">✅</span>Trusted booking resources
                </div>
                <div className="card">
                  <span className="card-icon">🤝</span>We are on your side
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="content-left">
              <h1>
              Train/IRCTC Ticket
               <br /> Booking Agent
              </h1>
              <p>
              Our agents reserve a train ticket for the customers or traveller, provide a medium for becoming an IRCTC authorized train ticketing agent, and get an instant commission on the sale of any ticket. All training and explanations will be provided to the new IRCTC ticket agent that offers best-in-class customer service.
              </p>
            </div>
            <div className="content-right">
              <div className="image-container">
                <img src={img2} alt="Train Illustration (Train at Station with Passengers)" />
              </div>
              <div className="feature-cards">
                <div className="card">
                  <span className="card-icon">💸</span>Best Prices Guaranteed
                </div>
                <div className="card">
                  <span className="card-icon">⏳</span>Last minute booking
                </div>
                <div className="card">
                  <span className="card-icon">🌐</span>Search over 20,000 destinations worldwide
                </div>
                <div className="card">
                  <span className="card-icon">✅</span>Trusted booking resources
                </div>
                <div className="card">
                  <span className="card-icon">🤝</span>We are on your side
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="content-left">
              <h1>
              Hotel Booking
               <br /> Agent
              </h1>
              <p>
              We have a huge database of hotels across cities. We cater to all budget and star categories and offer instant booking and confirmation in a single interface. The USP of this service is that we guaranteed room availability at highly discounted prices which are a great value to our.
              </p>
            </div>
            <div className="content-right">
              <div className="image-container">
                <img src={img3} alt="Ticket Illustration (Train Ticket with Barcode)" />
              </div>
              <div className="feature-cards">
                <div className="card">
                  <span className="card-icon">💸</span>Best Prices Guaranteed
                </div>
                <div className="card">
                  <span className="card-icon">⏳</span>Last minute booking
                </div>
                <div className="card">
                  <span className="card-icon">🌐</span>Search over 20,000 destinations worldwide
                </div>
                <div className="card">
                  <span className="card-icon">✅</span>Trusted booking resources
                </div>
                <div className="card">
                  <span className="card-icon">🤝</span>We are on your side
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="content-left">
              <h1>
                Online Travel <br /> Agent
              </h1>
              <p>
              Online Saathi's online travel agents excel in curating unforgettable journeys. With access to a wide range of travel options and advanced technology, we handle every aspect of travel planning. From booking flights and accommodations to arranging transfers, our agents ensure seamless experiences. With a deep passion for travel and a commitment to exceptional service, Online Saathi online travel agents are your trusted partners in creating cherished memories on your adventures.
              </p>
            </div>
            <div className="content-right">
              <div className="image-container">
                <img src={img4} alt="Support Illustration (Headset with Support Agent)" />
              </div>
              <div className="feature-cards">
                <div className="card">
                  <span className="card-icon">💸</span>Best Prices Guaranteed
                </div>
                <div className="card">
                  <span className="card-icon">⏳</span>Last minute booking
                </div>
                <div className="card">
                  <span className="card-icon">🌐</span>Search over 20,000 destinations worldwide
                </div>
                <div className="card">
                  <span className="card-icon">✅</span>Trusted booking resources
                </div>
                <div className="card">
                  <span className="card-icon">🤝</span>We are on your side
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="swiper-slide-content">
            <div className="content-left">
              <h1>
              Flight/Air Ticket
              Booking  <br /> Agent
              </h1>
              <p>
              We offer domestic and international ticketing solutions with all available combinations and airlines.
              This service offers the best routing options with an easy-to-reserve interface. This is a complete trip management solution with a single interface. Agents can instantly book and confirm tickets and earn attractive flight booking commission.
              </p>
            </div>
            <div className="content-right">
              <div className="image-container">
                <img src={img1} alt="Money Illustration (Wallet with Coins)" />
              </div>
              <div className="feature-cards">
                <div className="card">
                  <span className="card-icon">💸</span>Best Prices Guaranteed
                </div>
                <div className="card">
                  <span className="card-icon">⏳</span>Last minute booking
                </div>
                <div className="card">
                  <span className="card-icon">🌐</span>Search over 20,000 destinations worldwide
                </div>
                <div className="card">
                  <span className="card-icon">✅</span>Trusted booking resources
                </div>
                <div className="card">
                  <span className="card-icon">🤝</span>We are on your side
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Slider Footer */}
      <div className="slider-footer">
        <div className="slider-controls">
          <span className="slider-number">{currentSlide.toString().padStart(2, '0')}</span>
          <div className="slider-bar">
            <div className="slider-progress"></div>
          </div>
          <span className="slider-number">05</span>
          <button className="slider-button" onClick={handleSlideNext}>
            Click to slide
          </button>
        </div>
      </div>
    </div>
  );
};

export default Travel;