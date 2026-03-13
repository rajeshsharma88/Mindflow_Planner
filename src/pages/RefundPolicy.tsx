import { motion } from 'motion/react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-bg-light py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <h1 className="text-4xl font-bold text-text-dark mb-8">Refund Policy</h1>
          <div className="prose prose-lg text-text-medium max-w-none">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">1. Digital Products</h2>
            <p className="mb-4">
              Due to the nature of digital products, all sales of digital planners, stickers, and inserts are generally considered final and non-refundable once the download link has been accessed or the files have been delivered.
            </p>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">2. Exceptions</h2>
            <p className="mb-4">
              We want you to be completely satisfied with your purchase. We may offer refunds or exchanges within 14 days of purchase under the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The file is corrupted or cannot be opened.</li>
              <li>The product significantly differs from its description.</li>
              <li>You accidentally purchased the same product twice.</li>
            </ul>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">3. Requesting a Refund</h2>
            <p className="mb-4">
              To request a refund, please contact our support team at support@mindflowplanner.com with your order number and a detailed explanation of the issue. We will review your request and respond within 2-3 business days.
            </p>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">4. Processing Refunds</h2>
            <p className="mb-4">
              If your refund is approved, it will be processed, and a credit will automatically be applied to your credit card or original method of payment within a certain amount of days, depending on your card issuer's policies.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
