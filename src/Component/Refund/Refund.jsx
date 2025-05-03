// import React, { useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const PrivacyPolicy = () => {
//   // Add fade-in animation on scroll
//   useEffect(() => {
//     const sections = document.querySelectorAll('.fade-in');
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//           }
//         });
//       },
//       { threshold: 0 }
//     );
//     sections.forEach((section) => observer.observe(section));
//     return () => sections.forEach((section) => observer.unobserve(section));
//   }, []);

//   return (
//     <div className="container py-5">
//       {/* Inline CSS for animations and custom styling */}
//       <style>
//         {`
//           /* Smooth scroll behavior */
//           html {
//             scroll-behavior: smooth;
//           }
//           /* Fade-in animation */
//           .fade-in {
//             opacity: 0;
//             transform: translateY(20px);
//             transition: opacity 0.6s ease-out, transform 0.6s ease-out;
//           }
//           .fade-in.visible {
//             opacity: 1;
//             transform: translateY(0);
//           }
//           /* Custom section styling */
//           .section-card {
//             background: #ffffff;
//             border-radius: 10px;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//             padding: 30px;
//             margin-bottom: 20px;
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//           }
//           .section-card:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
//           }
//           /* Header styling */
//           .header-bg {
//             background: linear-gradient(90deg, #007bff, #0056b3);
//             color: white;
//             padding: 40px 0;
//             border-radius: 10px;
//             margin-bottom: 30px;
//           }
//           /* List styling */
//           .custom-list li {
//             margin-bottom: 10px;
//             position: relative;
//             padding-left: 20px;
//           }
//           .custom-list li::before {
//             content: '✓';
//             position: absolute;
//             left: 0;
//             color: #28a745;
//             font-weight: bold;
//           }
//           /* Link hover effect */
//           a {
//             transition: color 0.3s ease;
//           }
//           a:hover {
//             color: #0056b3 !important;
//           }
//         `}
//       </style>

//       {/* Page Title */}
//       <div className="header-bg text-center">
//         <h1 className="fw-bold mb-3 display-4">Refund Policy</h1>
//         {/* <p className="text-white-50 mb-0">Effective Date: 22 April 2025</p> */}
//       </div>

//       {/* Introduction */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">1. Introduction</h3>
//         <p className="text-muted">
//           At <strong>Online Saathi</strong> ("we", "our", "us"), operated by SHUBHLAXMI MULTISERVICES INDIA PRIVATE LIMITED (SMSIPL), we are committed to protecting your privacy and ensuring the security of your personal information.
//         </p>
//         <p className="text-muted">
//           This Privacy Policy explains how we collect, use, disclose, and safeguard your personal data when you access or use our website <a href="http://www.onlinesaathi.org" className="text-primary">www.onlinesaathi.org</a>, mobile app, or any other services ("Platform").
//         </p>
//         <p className="text-muted">
//           By using our Platform, you consent to the practices described in this Privacy Policy. If you do not agree, please refrain from using our services.
//         </p>
//       </section>

//       {/* Information We Collect */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">2. Information We Collect</h3>
//         <p className="text-muted mb-3">We collect various types of information to provide and improve our services:</p>
//         <div className="mb-4">
//           <h5 className="fw-semibold text-dark">2.1 Personal Information</h5>
//           <ul className="custom-list text-muted">
//             <li>Name, email address, phone number, and address provided during registration or service usage.</li>
//             <li>Government-issued identification details (e.g., Aadhaar, PAN, passport) for KYC compliance.</li>
//             <li>Bank account details or payment information for transactions like remittances or bill payments.</li>
//           </ul>
//         </div>
//         <div className="mb-4">
//           <h5 className="fw-semibold text-dark">2.2 Non-Personal Information</h5>
//           <ul className="custom-list text-muted">
//             <li>IP address, browser type, device information, and operating system.</li>
//             <li>Usage data, such as pages visited, services accessed, and time spent on the Platform.</li>
//           </ul>
//         </div>
//         <div className="mb-4">
//           <h5 className="fw-semibold text-dark">2.3 Cookies and Tracking Technologies</h5>
//           <ul className="custom-list text-muted">
//             <li>We use cookies and similar technologies to enhance user experience and analyze Platform performance.</li>
//             <li>You can manage cookie preferences through your browser settings.</li>
//           </ul>
//         </div>
//       </section>

//       {/* How We Use Your Information */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">3. How We Use Your Information</h3>
//         <p className="text-muted mb-2">We use your information to:</p>
//         <ul className="custom-list text-muted">
//           <li>Facilitate services such as remittances, bill payments, travel bookings, and government scheme applications.</li>
//           <li>Verify your identity and comply with KYC/AML regulations.</li>
//           <li>Personalize your experience and provide tailored recommendations.</li>
//           <li>Communicate with you regarding transactions, updates, or support queries.</li>
//           <li>Analyze usage trends to improve our Platform and services.</li>
//           <li>Prevent fraud, unauthorized access, or illegal activities.</li>
//         </ul>
//       </section>

//       {/* Information Sharing and Disclosure */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">4. Information Sharing and Disclosure</h3>
//         <p className="text-muted mb-2">We may share your information with:</p>
//         <ul className="custom-list text-muted">
//           <li><strong>Third-Party Service Providers:</strong> Authorized partners (e.g., banks, travel operators, bill payment aggregators) to process transactions or deliver services.</li>
//           <li><strong>Saathis and Partners:</strong> Local entrepreneurs or district/state partners to facilitate services like government scheme consultancy.</li>
//           <li><strong>Legal Authorities:</strong> When required by law, court orders, or regulatory bodies to comply with legal obligations.</li>
//           <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or asset sales, your data may be transferred to the acquiring entity.</li>
//         </ul>
//         <p className="text-muted font-italic">
//           <strong>Note:</strong> We do not sell or rent your personal information to third parties for marketing purposes.
//         </p>
//       </section>

//       {/* Data Security */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">5. Data Security</h3>
//         <p className="text-muted mb-2">We implement industry-standard measures to protect your data, including:</p>
//         <ul className="custom-list text-muted">
//           <li>Encryption of sensitive information during transmission and storage.</li>
//           <li>Regular security audits and vulnerability assessments.</li>
//           <li>Access controls to limit data access to authorized personnel only.</li>
//         </ul>
//         <p className="text-muted font-italic">
//           <strong>Important:</strong> Despite our efforts, no online platform can guarantee absolute security. You are responsible for safeguarding your login credentials.
//         </p>
//       </section>

//       {/* Your Rights */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">6. Your Rights</h3>
//         <p className="text-muted mb-2">As a user, you have the following rights regarding your personal data:</p>
//         <ul className="custom-list text-muted">
//           <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
//           <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
//           <li><strong>Deletion:</strong> Request deletion of your data, subject to legal and contractual obligations.</li>
//           <li><strong>Restriction:</strong> Request restriction of data processing in certain cases.</li>
//           <li><strong>Objection:</strong> Object to data processing for specific purposes, such as marketing.</li>
//         </ul>
//         <p className="text-muted">
//           To exercise these rights, contact our Grievance Redressal Officer at <a href="mailto:ceo@onlinesaathi.org" className="text-primary">ceo@onlinesaathi.org</a>.
//         </p>
//       </section>

//       {/* Cookies Policy */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">7. Cookies Policy</h3>
//         <p className="text-muted mb-2">Our Platform uses cookies to:</p>
//         <ul className="custom-list text-muted">
//           <li>Authenticate users and maintain session security.</li>
//           <li>Track user preferences and improve navigation.</li>
//           <li>Analyze Platform performance and user behavior.</li>
//         </ul>
//         <p className="text-muted">
//           You can disable cookies through your browser settings, but this may affect the functionality of our Platform.
//         </p>
//       </section>

//       {/* Third-Party Links */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">8. Third-Party Links</h3>
//         <p className="text-muted">
//           Our Platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third parties. Please review their privacy policies before engaging with them.
//         </p>
//       </section>

//       {/* Children's Privacy */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">9. Children's Privacy</h3>
//         <p className="text-muted">
//           Our Platform is not intended for users under 18 years of age. We do not knowingly collect personal information from minors. If we learn that a minor's data has been collected, we will take steps to delete it promptly.
//         </p>
//       </section>

//       {/* International Data Transfers */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">10. International Data Transfers</h3>
//         <p className="text-muted">
//           For services like Indo-Nepal remittances, your data may be transferred to and processed in countries outside India. We ensure that such transfers comply with applicable data protection laws and include adequate safeguards.
//         </p>
//       </section>

//       {/* Changes to Privacy Policy */}
//       <section className="mb-5 fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">11. Changes to Privacy Policy</h3>
//         <p className="text-muted">
//           We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify users of significant changes via email or Platform notifications. Continued use of the Platform after changes implies acceptance.
//         </p>
//       </section>

//       {/* Contact Us */}
//       <section className="fade-in section-card">
//         <h3 className="fw-bold text-primary mb-3">12. Contact Us</h3>
//         <p className="text-muted mb-3">For questions, concerns, or to exercise your data rights, please contact:</p>
//         <ul className="custom-list text-muted">
//           <li><strong>Registered Office:</strong> 29-421, Bhadreshwar Housing Society, Behind Hajipur Dargah, Kotarpur, Ahmedabad, Gujarat - 382475, India.</li>
//           <li><strong>Corporate Office:</strong> 309, The Atlanta Business Hub, Naroda Ring Road, Ahmedabad, Gujarat - 382330, India.</li>
//           <li><strong>General Inquiries:</strong> <a href="mailto:admin@onlinesaathi.org" className="text-primary">admin@onlinesaathi.org</a></li>
//           <li><strong>Grievance Redressal Officer:</strong> <a href="mailto:ceo@onlinesaathi.org" className="text-primary">ceo@onlinesaathi.org</a></li>
//         </ul>
//         <p className="text-muted mt-3">
//           By using Online Saathi's services, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default PrivacyPolicy;


import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RefundPolicy = () => {
  // Add fade-in animation on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="container py-5">
      {/* Inline CSS for animations and custom styling */}
      <style>
        {`
          /* Smooth scroll behavior */
          html {
            scroll-behavior: smooth;
          }
          /* Fade-in animation */
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          }
          .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
          }
          /* Custom section styling */
          .section-card {
            background: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            padding: 30px;
            margin-bottom: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .section-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          }
          /* Header styling */
          .header-bg {
            background: linear-gradient(90deg, #007bff, #0056b3);
            color: white;
            padding: 40px 0;
            border-radius: 10px;
            margin-bottom: 30px;
          }
          /* List styling */
          .custom-list li {
            margin-bottom: 10px;
            position: relative;
            padding-left: 20px;
          }
          .custom-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: #28a745;
            font-weight: bold;
          }
          /* Link hover effect */
          a {
            transition: color 0.3s ease;
          }
          a:hover {
            color: #0056b3 !important;
          }
        `}
      </style>

      {/* Page Title */}
      <div className="header-bg text-center">
        <h1 className="fw-bold mb-3 display-4">Refund Policy</h1>
        <p className="text-white-50 mb-0">Effective Date: April 22, 2024</p>
      </div>

      {/* Overview */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">1. Overview</h3>
        <p className="text-muted">
          At <strong>Online Saathi</strong>, we act solely as a third-party technology platform connecting users with various service providers. We do not directly provide or control the services delivered by our partners. This Refund Policy outlines the limited scenarios where refunds may be applicable and clarifies our role and responsibility.
        </p>
      </section>

      {/* General Refund Terms */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">2. General Refund Terms</h3>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">2.1 No Refunds for Completed Services</h5>
          <ul className="custom-list text-muted">
            <li>Once a user successfully purchases a service, subscription, or offer through Online Saathi, and the order is processed with the service provider, no refund will be provided.</li>
            <li>Users are requested to carefully verify all details before making a payment.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">2.2 Platform Service Fee</h5>
          <ul className="custom-list text-muted">
            <li>Any platform convenience charges collected by Online Saathi are non-refundable, even if the transaction is later canceled by the user or the service provider.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">2.3 Third-Party Services</h5>
          <ul className="custom-list text-muted">
            <li>Refunds related to the quality, delay, or non-delivery of the service are subject to the respective service provider’s refund or grievance redressal policy.</li>
            <li>Online Saathi will facilitate communication between the user and service provider but is not responsible for any final outcome of refund claims.</li>
          </ul>
        </div>
      </section>

      {/* Refunds for Failed Transactions */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">3. Refunds for Failed Transactions</h3>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">3.1 Automatic Refunds for Failed Transactions</h5>
          <ul className="custom-list text-muted">
            <li>If a user’s payment is deducted but the transaction fails at Online Saathi’s payment gateway level, the amount will be automatically refunded to the user’s original payment method within 3 to 21 working days.</li>
            <li>Refunds will cover only the net transaction amount (excluding any applicable gateway charges, bank fees, or taxes).</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">3.2 Disputed Transactions</h5>
          <ul className="custom-list text-muted">
            <li>If a transaction appears successful but the user does not receive service access:</li>
            <li>The user must raise a support request by emailing <a href="mailto:support@onlinesaathi.org" className="text-primary">support@onlinesaathi.org</a> within 48 hours of the transaction.</li>
            <li>Online Saathi will investigate with the payment gateway and/or service provider.</li>
            <li>Based on the investigation, a refund may be facilitated, but the final decision rests with the service provider.</li>
          </ul>
        </div>
      </section>

      {/* KYC Verification Failure */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">4. KYC Verification Failure</h3>
        <p className="text-muted">
          If a user fails to complete KYC (Know Your Customer) verification, resulting in account non-activation, the payment made will not be refunded.
        </p>
      </section>

      {/* Important Terms */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">5. Important Terms</h3>
        <ul className="custom-list text-muted">
          <li><strong>Role Clarification:</strong> Online Saathi is a facilitator platform. The responsibility for service fulfillment lies with third-party providers.</li>
          <li><strong>Maximum Liability:</strong> Our liability is strictly limited to refunding the transaction amount collected by us, if applicable.</li>
          <li><strong>No Consequential Damages:</strong> Online Saathi is not responsible for any indirect losses, damages, or inconvenience suffered by the user.</li>
        </ul>
      </section>

      {/* Changes to This Policy */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">6. Changes to This Policy</h3>
        <p className="text-muted">
          We may revise this Refund Policy from time to time. Updates will be posted on our website and/or communicated via email or SMS, as appropriate.
        </p>
      </section>

      {/* Contact Us */}
      <section className="fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">7. Contact Us</h3>
        <p className="text-muted mb-3">For any refund-related queries, please reach out to:</p>
        <ul className="custom-list text-muted">
          <li><strong>Email:</strong> <a href="mailto:support@onlinesaathi.org" className="text-primary">support@onlinesaathi.org</a></li>
          <li><strong>Phone:</strong> +91-9099005251</li>
          <li><strong>Website:</strong> <a href="http://www.onlinesaathi.org" className="text-primary">www.onlinesaathi.org</a></li>
        </ul>
        <p className="text-muted mt-3">
          By using Online Saathi, you agree to this Refund Policy.
        </p>
      </section>
    </div>
  );
};

export default RefundPolicy;