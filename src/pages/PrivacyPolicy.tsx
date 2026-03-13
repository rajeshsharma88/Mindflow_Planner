import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-bg-light py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <h1 className="text-4xl font-bold text-text-dark mb-8">Privacy Policy</h1>
          <div className="prose prose-lg text-text-medium max-w-none">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us when you create an account, make a purchase, or communicate with us. This may include your name, email address, payment information, and any other details you choose to provide.
            </p>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, offers, and events.
            </p>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not share your personal information with third parties except as necessary to provide our services (e.g., payment processors) or when required by law.
            </p>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">4. Data Security</h2>
            <p className="mb-4">
              We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">5. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at support@mindflowplanner.com.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
