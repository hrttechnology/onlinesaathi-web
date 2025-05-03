import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import img from "../Service/t1.jpg";
import img1 from "../Service/t2.png";
import img2 from "../Service/t3.jpg";
import img3 from "../Service/t4.png";


const testimonials = [
  {
    name: "Ganesh KC",
    title: "Partner",
    quote: "Thanks to Online Saathi services, I received immediate support during a crisis. Their quick response and empathy made a significance difference in my life.",
    image: img
  },
  {
    name: "Rudra Prasad Acharya",
    title: "Agent",
    quote: "Before, sending money to Nepal required a full day's leave and extra costs. With Online Saathi, it’s now fast, cheap, and hassle-free.",
    image: img3
  },
  {
    name: "Raju Sharma",
    title: "User",
    quote: "The support from Online Saathi was exceptional. They were there when I needed them most, providing guidance and care.",
    image: img1
  },
  {
    name: "Himal Magar",
    title: "User",
    quote: "Online Saathi is a secure and fast platform for sending IME Remit from India to Nepal, with easy deposits to any bank in Nepal.",
    image: img2
  },
  {
    name: "Himal Magar",
    title: "User",
    quote: "Online Saathi is a secure and fast platform for sending IME Remit from India to Nepal, with easy deposits to any bank in Nepal.",
    image: img3
  },
 
];

const Testimonial = () => {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            coverflowEffect: {
              modifier: 1,
              stretch: 10
            }
          },
          640: {
            coverflowEffect: {
              modifier: 1.5,
              stretch: 20
            }
          },
          1024: {
            coverflowEffect: {
              modifier: 2.5,
              stretch: 30
            }
          }
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <h3>{testimonial.name}</h3>
              <p className="title" style={{ textAlign: 'center' }}>{testimonial.title}</p>
              <p className="quote">"{testimonial.quote}"</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;