import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-bg-light py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <h1 className="text-4xl font-bold text-text-dark mb-8">Terms of Service</h1>
          <div className="prose prose-lg text-text-medium max-w-none">
            <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using MindFlow Planner, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">2. Digital Products</h2>
            <p className="mb-4">
              Our products are digital downloads. Upon purchase, you are granted a non-exclusive, non-transferable license to use the digital planner for personal use only. You may not resell, redistribute, or share the files.
            </p>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">3. User Conduct</h2>
            <p className="mb-4">
              You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.
            </p>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">4. Intellectual Property</h2>
            <p className="mb-4">
              All content included on this site, such as text, graphics, logos, images, and digital downloads, is the property of MindFlow Planner and protected by international copyright laws.
            </p>

            <h2 className="text-2xl font-bold text-text-dark mt-8 mb-4">5. Limitation of Liability</h2>
            <p className="mb-4">
              MindFlow Planner shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
