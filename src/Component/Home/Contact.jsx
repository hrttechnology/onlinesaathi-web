import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="contact-title">Contact us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>D 109 Maruti Hight, Opp Samor Hight Naroda</p>
          <p>Muthiya, Ahmedabad, Gujarat, India, 382330</p>
          <p>+91 - 9099005251</p>
          <p>help@onlinesaathi.org</p>
          <iframe
            title="France Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.255444444444!2d72.566125!3d23.022505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd2df%3A0x4fceda2c4c4c4c4c!2sAhmedabad%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sin!4v1644444444444!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map-iframe"
          ></iframe>
        </div>
        <div className="contact-form">
          <h3 className="form-title">Get in touch</h3>
          <p>Join membership and connect with us</p>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Type your name here" />
            </div>
            <div className="form-group">
              <label>Email id</label>
              <input type="email" placeholder="Type your email id here" />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="tel" placeholder="Type your phone number here" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message here"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;