// FAQ.jsx
import { useState } from 'react';
import faqImage from '../PanCard/faq.png'; // Update the path to your image
import './Faqs.css';

const faqData = [
  {
    question: "How can I check my PAN card status?",
    answer: "You can check it on the UTIITSL or NSDL website by entering your acknowledgement number."
  },
  {
    question: "How do I apply for UTI e-PAN?",
    answer: "Visit the UTIITSL portal and follow the steps to apply online using your Aadhaar number."
  },
  {
    question: "How to download a UTI PAN card?",
    answer: "Log in to the UTIITSL website and use the download e-PAN option with your PAN/Aadhaar."
  },
  {
    question: "How can I make corrections to my UTIITSL PAN card details?",
    answer: "Fill out the PAN correction form on the UTI portal and submit the required documents."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-container">
      <h1 className="faq-main-title">FAQ'S</h1>
      <div className="faq-content">
        <div className="faq-image-section">
          <img src={faqImage} alt="FAQ illustration" className="faq-illustration" />
        </div>
        <div className="faq-list-section">
          <h2 className="faq-header">Frequently Asked Questions</h2>
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-block ${activeIndex === index ? 'expanded' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-q">
                {item.question}
                <span className="faq-toggle">{activeIndex === index ? '▲' : '▼'}</span>
              </div>
              <div className="faq-a">{item.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;