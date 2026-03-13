import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Lock, ShieldCheck, ArrowLeft, CreditCard, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Checkout() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white py-24 md:py-32 min-h-[70vh] flex flex-col items-center justify-center px-4"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
          className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mb-8"
        >
          <CheckCircle2 className="h-12 w-12 text-emerald-500" />
        </motion.div>
        <h1 className="text-4xl font-bold text-text-dark mb-4 text-center">Order Confirmed!</h1>
        <p className="text-xl text-text-medium mb-8 text-center max-w-md">
          Thank you for your purchase. Your digital planner is ready to download. We've also sent a link to your email.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-colors shadow-lg shadow-primary/30">
            Download Now
          </button>
          <Link 
            to="/"
            className="px-8 py-4 bg-white text-text-dark border-2 border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-colors text-center"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-bg-light min-h-screen py-16 md:py-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/cart" className="text-sm font-bold text-text-medium hover:text-primary flex items-center gap-2 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Cart
          </Link>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm"
        >
          <div className="text-center mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Secure Checkout</h1>
            <p className="text-text-medium flex items-center justify-center gap-2 font-medium">
              <Lock className="h-5 w-5 text-emerald-500" /> 256-bit SSL Encryption
            </p>
          </div>

          <form onSubmit={handleCheckout} className="space-y-10">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-bold text-text-dark mb-6">Contact Information</h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">Email address</label>
                  <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" placeholder="For order confirmation and digital delivery" />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="newsletter" className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary" />
                  <label htmlFor="newsletter" className="text-sm font-medium text-text-medium">Email me with news and offers</label>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h2 className="text-xl font-bold text-text-dark mb-4">Payment</h2>
              <p className="text-sm text-text-medium mb-6">All transactions are secure and encrypted.</p>
              
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-5 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
                  <input type="radio" id="credit-card" name="payment" className="w-5 h-5 text-primary focus:ring-primary" defaultChecked />
                  <label htmlFor="credit-card" className="font-bold text-text-dark flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-text-medium" /> Credit Card
                  </label>
                </div>
                <div className="p-6 space-y-5 bg-white">
                  <div>
                    <input type="text" required placeholder="Card number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" />
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <input type="text" required placeholder="Expiration date (MM/YY)" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" />
                    <input type="text" required placeholder="Security code" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" />
                  </div>
                  <div>
                    <input type="text" required placeholder="Name on card" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow" />
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="text-xl font-bold text-text-dark mb-6">Billing Address</h2>
              <div className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="p-5 border-b border-gray-200 flex items-center gap-3 bg-gray-50">
                  <input type="radio" id="billing-same" name="billing" className="w-5 h-5 text-primary focus:ring-primary" defaultChecked />
                  <label htmlFor="billing-same" className="font-bold text-text-dark">Same as shipping address</label>
                </div>
                <div className="p-5 flex items-center gap-3 bg-white">
                  <input type="radio" id="billing-diff" name="billing" className="w-5 h-5 text-primary focus:ring-primary" />
                  <label htmlFor="billing-diff" className="font-bold text-text-dark">Use a different billing address</label>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isProcessing}
                className={`w-full py-5 rounded-2xl font-bold text-xl text-white transition-all shadow-xl flex items-center justify-center gap-3 ${isProcessing ? 'bg-blue-400 cursor-not-allowed shadow-none' : 'bg-primary hover:bg-blue-600 shadow-primary/30'}`}
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Pay Now'
                )}
              </motion.button>
            </div>

            <div className="flex flex-col items-center justify-center gap-2 mt-6">
              <div className="flex items-center gap-2 text-sm text-text-medium font-medium">
                <ShieldCheck className="h-5 w-5 text-emerald-500" />
                Your payment information is processed securely.
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                <Lock className="h-3.5 w-3.5 text-gray-400" />
                Secured by 256-bit SSL encryption
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
