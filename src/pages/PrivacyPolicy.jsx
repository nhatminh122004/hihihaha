import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Welcome to our Privacy Policy page! Your privacy is important to us, and we are committed to protecting your personal data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect the following types of information when you use our website:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Personal details (name, email, phone number, etc.)</li>
        <li>Account information and preferences</li>
        <li>Device and browsing information (cookies, IP address, etc.)</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        Your data is used for the following purposes:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>To provide and improve our services</li>
        <li>To personalize user experience</li>
        <li>To send promotional emails (only if subscribed)</li>
        <li>For security and fraud prevention</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">4. Cookies & Tracking Technologies</h2>
      <p className="mb-4">
        We use cookies to enhance your experience. You can choose to disable cookies in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">5. Third-Party Services</h2>
      <p className="mb-4">
        We may use third-party services (such as Google Analytics) to improve our website functionality. These services have their own privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our Privacy Policy, feel free to contact us at <span className="font-semibold">support@yourwebsite.com</span>.
      </p>

      <p className="text-sm text-gray-500 mt-6">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default PrivacyPolicy;
