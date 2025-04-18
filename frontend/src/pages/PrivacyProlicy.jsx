import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <>
    <Header />
    <motion.div
     initial={{ opacity: 0, y: 30 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.6 }}
    className='p-4 bg-gradient-to-b from-blue-700 to-white'>
    <div className="max-w-4xl mx-auto my-10 p-6 sm:p-10 bg-white shadow-2xl rounded-2xl text-gray-800">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2 text-center">Privacy Policy</h1>
      <p className="italic text-gray-500 mb-6">Updated on 15-04-2025</p>

      <section className="mb-6">
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Introduction</h2>
        <p className="mb-2">We at XpertSwap are committed to safeguarding the privacy of our website visitors and users; in this policy, we explain how we will treat your personal information.</p>
        <p>By using our website and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Collecting Personal Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Information you provide during registration, such as your name, email address, mobile number, and skill interests.</li>
          <li>Information related to your use of the services offered by XpertSwap, including skill exchanges, bookings, session history, and payment transactions.</li>
          <li>Information you provide for subscribing to notifications or newsletters (including name and email).</li>
          <li>Communication details and content shared through messages, enquiry forms, feedback, or any form of interaction.</li>
          <li>Any other personal information you choose to share with us.</li>
        </ul>
        <p>Before sharing any personal information of another person, you must obtain that person’s consent for both the disclosure and the processing of their data according to this policy.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Using Your Personal Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Administer and operate the XpertSwap platform;</li>
          <li>Enable your participation in skill exchanges and paid learning services;</li>
          <li>Personalise the website for a better user experience;</li>
          <li>Send you notifications, reminders, or other communications you’ve opted into;</li>
          <li>Process payments and bookings securely;</li>
          <li>Handle enquiries, complaints, or feedback;</li>
          <li>Maintain the security of the platform and prevent fraud.</li>
        </ul>
        <p>If you submit content for publication (e.g., reviews, profiles), we will use and display that information under the license you grant us.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Disclosing Personal Information</h2>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Our employees, partners, advisers, and agents where reasonably necessary for the purposes of this policy;</li>
          <li>Legal authorities if required by law;</li>
          <li>Enforce or defend our legal rights (including sharing info with fraud prevention agencies);</li>
          <li>Potential buyers or investors in case of a business sale or reorganisation;</li>
          <li>Any person we believe may apply to a competent authority or court for disclosure, where such disclosure is likely to be ordered.</li>
        </ul>
        <p>We will not share your personal information with third parties except as stated above or where you’ve given specific consent.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">International Data Transfers</h2>
        <p className="mb-2">Information we collect may be stored or processed in countries where we or our partners operate. By using our website, you agree to these international transfers of your data.</p>
        <p>Content or personal data published on the site may be accessible globally, and we cannot control how others use such information.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Retaining Personal Information</h2>
        <p className="mb-2">We retain personal information only as long as necessary for the purposes outlined in this policy.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>As required by law;</li>
          <li>If relevant to ongoing or future legal proceedings;</li>
          <li>To protect, establish, or enforce our legal rights.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Security of Your Personal Information</h2>
        <p className="mb-2">We take reasonable technical and organisational precautions to prevent the loss, misuse, or alteration of your personal data.</p>
        <p className="mb-2">Your data is stored on secure servers with appropriate password and firewall protection.</p>
        <p>However, internet-based data transmission is not fully secure, and we cannot guarantee the complete security of your information.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Payment Information</h2>
        <p className="mb-2">We do not store your credit or debit card information.</p>
        <p>All transactions are securely processed through trusted third-party payment gateways that comply with PCI-DSS and industry security standards.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Your Rights</h2>
        <p className="mb-2">You have the right to:</p>
        <ul className="list-disc list-inside space-y-2 mb-2">
          <li>Access, update, or delete your personal data;</li>
          <li>Request data portability (a copy of your personal data in a structured format).</li>
        </ul>
        <p>To exercise these rights, please contact us at: <a href="mailto:xpertswap.official@gmail.com" className="text-blue-600 hover:underline">xpertswap.official@gmail.com</a></p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Third-Party Websites</h2>
        <p className="mb-2">Our platform may include links to external websites.</p>
        <p>We are not responsible for the privacy practices or content of any third-party sites.</p>
      </section>

      <section>
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Cookies</h2>
        <p className="mb-2">We use cookies to enhance user experience, improve site functionality, and analyze user behavior.</p>
        <p>Cookies are small files stored on your device. By continuing to use XpertSwap, you consent to our use of cookies as described.</p>
      </section>

      <section>
        <h2 className="text-2xl text-blue-600 font-semibold mb-2">Updates to this Policy</h2>
        <p>This Privacy Policy may be updated without prior notice. We encourage you to periodically review this policy to stay informed about how we protect your information. When updated, the last updated date at the top will be changed accordingly.</p>
      </section>
    </div>
    </motion.div>
    <Footer />
    </>
  );
};

export default PrivacyPolicy;