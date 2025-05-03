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
//         <h1 className="fw-bold mb-3 display-4">Privacy Policy</h1>
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

const PrivacyPolicy = () => {
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
        <h1 className="fw-bold mb-3 display-4">Privacy Policy</h1>
        {/* <p className="text-white-50 mb-0">Effective Date: April 22, 2024</p> */}
      </div>

      {/* Commitment to Privacy */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">1. Commitment to Privacy</h3>
        <p className="text-muted">
          At <strong>Online Saathi</strong>, operated by SHUBHLAXMI MULTI SERVICES INDIA PRIVATE LIMITED, we are committed to safeguarding your privacy. Your trust is at the heart of our services. We strictly follow applicable Indian laws, regulations, and guidelines to protect your personal information.
        </p>
      </section>

      {/* Information We Collect */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">2. Information We Collect</h3>
        <p className="text-muted mb-3">We collect necessary personal and business information to provide a secure, seamless experience:</p>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">2.1 User Information</h5>
          <ul className="custom-list text-muted">
            <li>Full Name</li>
            <li>Mobile Number</li>
            <li>Email Address</li>
            <li>Date of Birth</li>
            <li>Gender</li>
            <li>Profile Photo</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">2.2 Member Information</h5>
          <ul className="custom-list text-muted">
            <li>Current and Permanent Address</li>
            <li>Identity Proof (Aadhar Card, PAN Card, Passport, Citizenship, Driver’s License)</li>
            <li>Occupation and Education Details</li>
            <li>Marital Status and Location</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">2.3 Business Information (For Saathi, Partners, Companies)</h5>
          <ul className="custom-list text-muted">
            <li>Business Name (only registered names)</li>
            <li>Business Registration Certificates</li>
            <li>Director Personal Details</li>
            <li>Type of Business</li>
            <li>Registered Address (State, District, City, Municipality, Ward, Street/Tole)</li>
            <li>Secondary Contact Information</li>
            <li>Bank Details (optional)</li>
            <li>Business Documents (PAN, MOA, AOA, licenses, if applicable)</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">2.4 Job Applicant Information</h5>
          <ul className="custom-list text-muted">
            <li>Resume and Cover Letter</li>
            <li>Educational and Professional Qualifications</li>
            <li>References</li>
          </ul>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">2.5 App Permissions</h5>
          <ul className="custom-list text-muted">
            <li>Camera and Photos: For KYC and profile verification</li>
            <li>SMS Access: To send and receive transaction confirmations</li>
            <li>Contacts Access: To simplify number selection (no storage or sharing)</li>
            <li>Location Access: To locate nearby agents and services</li>
            <li>Internet Access: For a seamless transaction experience</li>
          </ul>
        </div>
      </section>

      {/* How We Use Your Information */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">3. How We Use Your Information</h3>
        <p className="text-muted mb-2">We use the collected data to:</p>
        <ul className="custom-list text-muted">
          <li>Verify your identity</li>
          <li>Facilitate services and transactions</li>
          <li>Communicate service updates and promotions</li>
          <li>Provide customer support</li>
          <li>Improve our platform and services</li>
          <li>Detect fraud and unauthorized activities</li>
          <li>Ensure compliance with Indian regulatory authorities</li>
        </ul>
      </section>

      {/* Sharing and Disclosure */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">4. Sharing and Disclosure</h3>
        <p className="text-muted mb-2">Your information remains confidential and is not shared without your consent, except:</p>
        <ul className="custom-list text-muted">
          <li>When required by law (government, legal authorities)</li>
          <li>For fraud prevention and security measures</li>
          <li>When collaborating with trusted partners (under strict data protection agreements)</li>
        </ul>
      </section>

      {/* Data Retention & Account Deletion */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">5. Data Retention & Account Deletion</h3>
        <p className="text-muted mb-2">We manage your data as follows:</p>
        <ul className="custom-list text-muted">
          <li><strong>Retention:</strong> We keep your information only as long as needed for operational, legal, and regulatory purposes.</li>
          <li><strong>Deletion:</strong> Inactive accounts (6 months to 3 years) may be deleted if:
            <ul className="custom-list text-muted mt-2">
              <li>The account balance is zero</li>
              <li>No pending transactions exist</li>
              <li>Fraudulent/misuse activities are detected</li>
            </ul>
          </li>
          <li>For job applicants, data may be retained for evaluation even after recruitment closure.</li>
        </ul>
      </section>

      {/* Data Protection */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">6. Data Protection</h3>
        <p className="text-muted">
          We employ industry-standard security practices, including encryption, secure servers, and regular audits, to protect your data.
        </p>
      </section>

      {/* Changes to This Policy */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">7. Changes to This Policy</h3>
        <p className="text-muted mb-2">We may update this Privacy Policy to reflect changes in our practices or legal obligations. Significant changes will be communicated via:</p>
        <ul className="custom-list text-muted">
          <li>SMS</li>
          <li>Email</li>
          <li>In-app notifications</li>
-audio
        </ul>
        <p className="text-muted">
          The latest version will be posted on our website.
        </p>
      </section>

      {/* Contact Information */}
      <section className="fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">8. Contact Information</h3>
        <p className="text-muted mb-3">
          If you have any queries, concerns, or feedback regarding this privacy policy, or if you wish to exercise your rights under applicable law:
        </p>
        <ul className="custom-list text-muted">
          <li><strong>Registered Office:</strong> 109, Maruti Heights, Naroda Ring Road, Near Muthiya Toll Plaza, Ahmedabad, Gujarat 382345, India</li>
          <li><strong>Email:</strong> <a href="mailto:support@onlinesaathi.org" className="text-primary">support@onlinesaathi.org</a></li>
          <li><strong>Website:</strong> <a href="http://www.onlinesaathi.org" className="text-primary">www.onlinesaathi.org</a></li>
          <li><strong>Phone:</strong> +91 84888 56251</li>
        </ul>
        <p className="text-muted mt-3">
          Your continued use of Online Saathi services means you agree to the terms outlined in this Privacy Policy.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;