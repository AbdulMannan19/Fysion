import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link to="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-200 mb-8">
          Privacy Policy
        </h1>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">1. Information We Collect</h2>
            <p>We collect information to operate our AI automation services, including:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, and phone number when provided directly or via our AI interfaces.</li>
              <li><strong>WhatsApp Interaction Data:</strong> When you interact with our AI agents (e.g., for food ordering), we collect your phone number, profile name, and the content of your messages.</li>
              <li><strong>Order Details:</strong> Specific preferences, order history, and delivery details necessary to fulfill requests.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">2. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong>Service Facilitation:</strong> To process food orders, manage reservations, and answer customer queries via our AI agents.</li>
              <li><strong>Quality Assurance & AI Training:</strong> We review chat histories to ensure our AI agent answers queries accurately and to improve the performance of our automation systems.</li>
              <li><strong>Communication:</strong> To send order confirmations, status updates, and service notifications.</li>
              <li><strong>Compliance:</strong> To comply with legal obligations and Meta's platform policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">3. Data Storage and Third-Party Processors</h2>
            <p>To provide our services, we utilize secure third-party infrastructure:</p>
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li><strong>Supabase:</strong> We use Supabase to securely store chat histories, logs, and order data. This data is retained to maintain service history and strictly for quality assurance purposes.</li>
              <li><strong>AI Providers:</strong> Message content is processed by Large Language Models (LLMs) to generate responses. These providers are bound by strict data privacy agreements.</li>
            </ul>
            <p className="mt-2">We do not sell or trade your personal information to outside parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">4. Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information stored in our databases. Access to chat logs for quality assurance is restricted to authorized personnel only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">5. User Rights and Data Deletion</h2>
            <p>You have the right to access, correct, or delete your personal information. If you wish to have your chat history or personal data removed from our systems (Supabase), please contact us. We will process deletion requests in accordance with applicable laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">6. Changes to This Policy</h2>
            <p>We may update this privacy policy to reflect changes in our data processing practices or platform requirements. We encourage users to review this page periodically.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-cyan-400 mb-4">7. Contact Us</h2>
            <p>For questions regarding this Privacy Policy or to request data deletion, please contact us at:</p>
            <p className="mt-2">Email: <a href="mailto:fysion3@gmail.com" className="text-cyan-400 hover:text-cyan-300">fysion3@gmail.com</a></p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;