

import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TermsAndConditions = () => {
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
        <h1 className="fw-bold mb-3 display-4">Terms & Conditions (T&C)</h1>
        {/* <p className="text-white-50 mb-0">Effective Date: 22 April 2025</p> */}
      </div>

      {/* Introduction */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">1. Introduction</h3>
        <p className="text-muted">
          Welcome to <strong>Online Saathi</strong> ("we", "our", "us"), operated by SHUBHLAXMI MULTISERVICES INDIA PRIVATE LIMITED (SMSIPL).
        </p>
        <p className="text-muted">
          By accessing or using our website <a href="http://www.onlinesaathi.org" className="text-primary">www.onlinesaathi.org</a>, mobile app, or any other services ("Platform"), you ("User", "you", "your") agree to be legally bound by these Terms and Conditions ("Terms").
        </p>
        <p className="text-muted">
          If you do not agree to these Terms, please do not use our Platform.
        </p>
        <p className="text-muted">
          Online Saathi is a platform operated and managed by Shubhlaxmi Multiservices India Private Limited, a company incorporated under the Companies Act, 2013, having its registered office at 29-421, Bhadreshwar Housing Society, Behind Hajipur Dargah, Kotarpur, Ahmedabad, Gujarat - 382475, India ("Online Saathi" or "Company").
        </p>
        <p className="text-muted">
          Online Saathi provides a technology-based marketplace and facilitation platform enabling users to access a range of services including but not limited to financial services, remittance, travel bookings, bill payments, job discovery, government scheme consultancy, and community engagement support.
        </p>
        <p className="text-muted">
          Online Saathi operates solely as a facilitator between users and third-party service providers and does not directly deliver, control, or guarantee the end services or outcomes offered by such service providers.
        </p>
        <p className="text-muted">
          The Company's role is limited to providing information, technology tools, and access to third-party services through its platform comprising the website, mobile applications, and associated technologies.
        </p>
      </section>

      {/* Definitions */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">2. Definitions and Interpretations</h3>
        <p className="text-muted mb-3">In this Agreement, unless the context otherwise requires:</p>
        <ul className="custom-list text-muted">
          <li>Terms defined in this section shall have the meanings assigned to them below.</li>
          <li>Headings are for reference purposes only and shall not affect the interpretation of any provision.</li>
          <li>Words importing the singular shall include the plural and vice versa.</li>
          <li>References to persons include individuals, bodies corporate, unincorporated associations, partnerships, and government authorities.</li>
        </ul>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">Platform:</h5>
          <p className="text-muted">
            "Platform" means the digital ecosystem operated by Online Saathi, including its website, mobile applications, and all associated services offered to users.
          </p>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">User:</h5>
          <p className="text-muted">
            "User" refers to any individual, entity, or organization that accesses, browses, registers, or avails services through the Online Saathi Platform.
          </p>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">Third-Party Service Providers:</h5>
          <p className="text-muted">
            "Third-Party Service Providers" means independent vendors, companies, or organizations offering their services through the Online Saathi Platform, including but not limited to remittance, travel bookings, bill payments, insurance, and other services.
          </p>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">Saathi:</h5>
          <p className="text-muted">
            "Saathi" means an independent local community entrepreneur affiliated with Online Saathi, who facilitates access to social welfare schemes, financial services, employment opportunities, and other essential services to citizens. A Saathi operates on a commission or incentive basis and is not an employee of Online Saathi.
          </p>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">District Partner:</h5>
          <p className="text-muted">
            "District Partner" refers to an organization, agency, or individual formally engaged by Online Saathi to recruit, manage, and support Saathis within a specified district, ensuring operational compliance, training delivery, and service quality monitoring.
          </p>
        </div>
        <div className="mb-4">
          <h5 className="fw-semibold text-dark">State Partner:</h5>
          <p className="text-muted">
            "State Partner" refers to a senior-level partner entity engaged to oversee the expansion, governance, and coordination of Online Saathi's network and services across an entire State or Union Territory, including management of District Partners and strategic partnerships.
          </p>
        </div>
      </section>

      {/* Scope of Services */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">3. Scope of Services</h3>

        <div className="mb-4">
          <h5 className="fw-semibold text-dark">3.1 Indo-Nepal Remittance Services</h5>
          <p className="text-muted mb-2">We facilitate Indo-Nepal remittance services through our partnered service providers.</p>
          <ul className="custom-list text-muted">
            <li>Online Saathi acts only as a reseller and technology platform.</li>
            <li>Users are responsible for entering accurate beneficiary details.</li>
            <li>Transactions once processed cannot be reversed.</li>
            <li>Refunds are not available if incorrect details are provided by the user.</li>
            <li>Compliance with AML (Anti-Money Laundering) and KYC norms is mandatory.</li>
          </ul>
          <p className="text-muted font-italic">
            <strong>Important:</strong> All disputes related to delivery, exchange rate, or transaction errors must be directly taken up with the service provider. Online Saathi will only provide facilitation support.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold text-dark">3.2 Travel Services (Bus, Train, Air Tickets)</h5>
          <p className="text-muted mb-2">Online Saathi enables booking of bus, train, and flight tickets through authorized aggregators and operators.</p>
          <ul className="custom-list text-muted">
            <li>We do not operate any transport services ourselves.</li>
            <li>We assist only with ticket booking, issuance, cancellation, and refund processing (as per partner policies).</li>
            <li>Users are advised to verify travel details carefully before confirming bookings.</li>
            <li>Any issues during travel (like delays, cancellations, missing services) are between the user and the travel operator.</li>
          </ul>
          <p className="text-muted font-italic">
            <strong>Note:</strong> Refunds and rescheduling are strictly governed by the service provider's policies.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold text-dark">3.3 Bill Payments & Insurance Premium Payments</h5>
          <p className="text-muted mb-2">Users can pay utility bills (electricity, water, gas), mobile/DTH recharges, and insurance premiums via Online Saathi.</p>
          <ul className="custom-list text-muted">
            <li>We act as a Distributor Technology Platform.</li>
            <li>We do not guarantee instant success of bill payments. It depends on the respective service provider's server and systems.</li>
            <li>Users must double-check bill details before proceeding.</li>
            <li>Online Saathi is not responsible for delays or rejections caused by banks, payment processors, or billing entities.</li>
          </ul>
          <p className="text-muted font-italic">
            <strong>Tip:</strong> Always maintain proof of payment (receipt or transaction ID) for any follow-up.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold text-dark">3.4 Domestic Money Remittance Services</h5>
          <p className="text-muted mb-2">We offer domestic money transfer (DMT) services, allowing users to send money within India to bank accounts.</p>
          <ul className="custom-list text-muted">
            <li>Services are provided via authorized partner banks and payment systems.</li>
            <li>Users must ensure that funds originate from legitimate sources.</li>
            <li>Online Saathi is not responsible for transaction failures caused by:</li>
            <ul className="custom-list text-muted ms-4">
              <li>Bank server issues</li>
              <li>Regulatory interventions (NPCI, RBI)</li>
              <li>Incorrect account information entered by the user</li>
            </ul>
          </ul>
          <p className="text-muted font-italic">
            <strong>Important:</strong> Refunds in case of transaction failures are subject to banking regulations and may take 3-21 working days.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold text-dark">3.5 Job Discovery Services</h5>
          <p className="text-muted mb-2">Online Saathi provides access to curated job listings sourced from third-party employers and job boards.</p>
          <ul className="custom-list text-muted">
            <li>We do not guarantee placement, interview calls, or employment offers.</li>
            <li>We strongly recommend users conduct background checks on employers before accepting any offer.</li>
            <li>Job listings are provided for informational purposes only.</li>
          </ul>
          <p className="text-muted font-italic">
            <strong>Note:</strong> Online Saathi is not liable for job scams, fake offers, salary disputes, or working condition issues.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold text-dark">3.6 Government Schemes Discovery and Consultancy</h5>
          <p className="text-muted mb-2">We help users by providing guidance and application assistance for various government schemes.</p>
          <ul className="custom-list text-muted">
            <li>We do not have any official tie-up with any government department.</li>
            <li>We only offer consultancy services to assist in understanding eligibility, documents required, and application process.</li>
            <li>We do not guarantee approval, disbursement of benefits, or processing speed.</li>
            <li>Consultancy fees are charged only for informational support, not for success outcomes.</li>
          </ul>
          <p className="text-muted font-italic">
            <strong>Warning:</strong> Never make unauthorized payments directly to agents or outsiders claiming guaranteed approval. Always pay only via official Online Saathi channels.
          </p>
        </div>

        <div className="mb-4">
          <h5 className="fw-semibold text-dark">3.7 Community Engagement Services</h5>
          <p className="text-muted mb-2">Our community platform connects users to share updates, opportunities, and social interactions.</p>
          <ul className="custom-list text-muted">
            <li>Users are responsible for the content they share.</li>
            <li>Abuse, harassment, spamming, or sharing misleading information is strictly prohibited.</li>
            <li>Online Saathi reserves the right to remove objectionable content and suspend accounts without notice.</li>
          </ul>
          <p className="text-muted font-italic">
            <strong>Advice:</strong> Exercise caution when acting upon advice or information shared by other users within the community.
          </p>
        </div>
      </section>

      {/* User Obligations */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">4. User Obligations</h3>
        <p className="text-muted mb-2">By using the Platform, you agree that:</p>
        <ul className="custom-list text-muted">
          <li>You are at least 18 years old and legally competent.</li>
          <li>You will provide true, accurate, current, and complete information.</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
          <li>You will not use the Platform for any unlawful activities.</li>
          <li>You will avoid making double payments or speculative transactions without confirmation.</li>
        </ul>
      </section>

      {/* Registration and Account */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">5. Registration and Account</h3>
        <ul className="custom-list text-muted">
          <li>To access some services, you must register an account.</li>
          <li>Online Saathi reserves the right to reject or suspend any account if:</li>
          <ul className="custom-list text-muted ms-4">
            <li>False information is provided,</li>
            <li>Fraudulent activities are suspected,</li>
            <li>Required KYC verification is incomplete.</li>
          </ul>
        </ul>
      </section>

      {/* Payment Terms */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">6. Payment Terms</h3>
        <ul className="custom-list text-muted">
          <li>All payments must be made through Online Saathi's official payment methods.</li>
          <li>Consultancy fees for government schemes are charged separately and do not guarantee scheme approval.</li>
          <li>We do not collect any government application fees.</li>
          <li>Refunds are processed only as per our Refund Policy.</li>
        </ul>
      </section>

      {/* Role as a Third-Party Facilitator */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">7. Role as a Third-Party Facilitator</h3>
        <ul className="custom-list text-muted">
          <li>Online Saathi is only a facilitator.</li>
          <li>Actual services (remittance, ticket bookings, etc.) are provided by third-party service providers.</li>
          <li>All disputes regarding services must be directly addressed with the respective provider.</li>
        </ul>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">8. Limitation of Liability</h3>
        <ul className="custom-list text-muted">
          <li>Online Saathi's liability is strictly limited to the transaction value or ₹500, whichever is lesser.</li>
          <li>We are not responsible for:</li>
          <ul className="custom-list text-muted ms-4">
            <li>Delays, cancellations, errors, or failures by service providers.</li>
            <li>Financial loss, emotional distress, or indirect damages.</li>
            <li>Failures due to banking systems (RBI, NPCI, partner banks).</li>
          </ul>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">9. Intellectual Property</h3>
        <p className="text-muted">
          All content, trademarks, service marks, and logos on the Platform belong exclusively to Online Saathi. No User may copy, distribute, reproduce, or exploit any material without our prior written permission.
        </p>
      </section>

      {/* Privacy Policy */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">10. Privacy Policy</h3>
        <p className="text-muted">
          Your use of the Platform is also governed by our <a href="#" className="text-primary">Privacy Policy</a>, which explains how we collect, use, and protect your data.
        </p>
      </section>

      {/* Prohibited Conduct */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">11. Prohibited Conduct</h3>
        <p className="text-muted mb-2">You agree NOT to:</p>
        <ul className="custom-list text-muted">
          <li>Engage in fraudulent activities</li>
          <li>Share or post misleading, offensive, or illegal content</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Attempt to breach Platform security</li>
          <li>Copy, scrape, or misuse Platform data using bots or any automated tools</li>
        </ul>
        <p className="text-muted">
          Violations will result in account termination and legal action.
        </p>
      </section>

      {/* Force Majeure */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">12. Force Majeure</h3>
        <p className="text-muted">
          Online Saathi shall not be liable for any failure or delay due to reasons beyond reasonable control, including natural disasters, strikes, pandemics, network failures, government actions, etc.
        </p>
      </section>

      {/* Termination */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">13. Termination</h3>
        <p className="text-muted mb-2">Online Saathi reserves the right to suspend or terminate any user account without notice if:</p>
        <ul className="custom-list text-muted">
          <li>The Terms are violated,</li>
          <li>Fraud or misuse is detected,</li>
          <li>Required by law enforcement or regulatory bodies.</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">14. Disclaimer</h3>
        <p className="text-muted">
          All services are provided on an "as-is" and "as-available" basis. Online Saathi makes no warranties regarding the availability, accuracy, or reliability of any content or services.
        </p>
      </section>

      {/* Jurisdiction and Governing Law */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">15. Jurisdiction and Governing Law</h3>
        <p className="text-muted">
          These Terms shall be governed by and construed in accordance with the laws of India. Courts located in Ahmedabad, Gujarat shall have exclusive jurisdiction for all disputes arising out of or relating to the Platform.
        </p>
      </section>

      {/* Indemnity */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">16. Indemnity</h3>
        <p className="text-muted mb-2">You agree to indemnify and hold harmless Online Saathi, its officers, directors, employees, and agents from any claims, losses, liabilities, or demands arising from:</p>
        <ul className="custom-list text-muted">
          <li>Your use of the Platform,</li>
          <li>Violation of these Terms,</li>
          <li>Infringement of third-party rights.</li>
        </ul>
      </section>

      {/* Changes to Terms */}
      <section className="mb-5 fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">17. Changes to Terms</h3>
        <p className="text-muted">
          Online Saathi may amend these Terms at any time without prior notice. Users are advised to review the Terms periodically. Continued use of the Platform after changes implies acceptance.
        </p>
      </section>

      {/* Contact Us */}
      <section className="fade-in section-card">
        <h3 className="fw-bold text-primary mb-3">18. Contact Us</h3>
        <p className="text-muted mb-3">For queries, complaints, or grievances, please reach out to:</p>
        <ul className="custom-list text-muted">
          <li><strong>Registered Office:</strong> 29-421, Bhadreshwar Housing Society, Behind Hajipur Dargah, Kotarpur, Ahmedabad, Gujarat - 382475, India.</li>
          <li><strong>Corporate Office:</strong> 309, The Atlanta Business Hub, Naroda Ring Road, Ahmedabad, Gujarat - 382330, India.</li>
          <li><strong>General Inquiries:</strong> <a href="mailto:admin@onlinesaathi.org" className="text-primary">admin@onlinesaathi.org</a></li>
          <li><strong>Grievance Redressal Officer:</strong> <a href="mailto:ceo@onlinesaathi.org" className="text-primary">ceo@onlinesaathi.org</a></li>
        </ul>
        <p className="text-muted mt-3">
          By continuing to use Online Saathi's services, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;