import { Link } from 'react-router-dom';
import { Lock, ShieldCheck, ArrowLeft } from 'lucide-react';

export default function Checkout() {
  return (
    <div className="bg-bg-light min-h-screen py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/cart" className="text-sm font-medium text-text-medium hover:text-primary flex items-center gap-2 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Cart
          </Link>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-12 shadow-sm">
          <div className="text-center mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-3xl font-bold text-text-dark mb-2">Secure Checkout</h1>
            <p className="text-text-medium flex items-center justify-center gap-2">
              <Lock className="h-4 w-4 text-emerald-500" /> 256-bit SSL Encryption
            </p>
          </div>

          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-bold text-text-dark mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-dark mb-2">Email address</label>
                  <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="For order confirmation and digital delivery" />
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="newsletter" className="rounded border-gray-300 text-primary focus:ring-primary" />
                  <label htmlFor="newsletter" className="text-sm text-text-medium">Email me with news and offers</label>
                </div>
              </div>
            </div>

            {/* Payment Information (Placeholder) */}
            <div>
              <h2 className="text-xl font-bold text-text-dark mb-4">Payment</h2>
              <p className="text-sm text-text-medium mb-4">All transactions are secure and encrypted.</p>
              
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center gap-3">
                  <input type="radio" id="credit-card" name="payment" className="text-primary focus:ring-primary" defaultChecked />
                  <label htmlFor="credit-card" className="font-medium text-text-dark">Credit Card</label>
                </div>
                <div className="p-6 space-y-4 bg-white">
                  <div>
                    <input type="text" placeholder="Card number" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Expiration date (MM/YY)" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                    <input type="text" placeholder="Security code" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                  <div>
                    <input type="text" placeholder="Name on card" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
                  </div>
                </div>
              </div>
            </div>

            {/* Billing Address */}
            <div>
              <h2 className="text-xl font-bold text-text-dark mb-4">Billing Address</h2>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-200 flex items-center gap-3">
                  <input type="radio" id="billing-same" name="billing" className="text-primary focus:ring-primary" defaultChecked />
                  <label htmlFor="billing-same" className="font-medium text-text-dark">Same as shipping address</label>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <input type="radio" id="billing-diff" name="billing" className="text-primary focus:ring-primary" />
                  <label htmlFor="billing-diff" className="font-medium text-text-dark">Use a different billing address</label>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <button 
                className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  alert("This is a placeholder checkout. Payment processing is not implemented.");
                }}
              >
                Pay Now
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-text-medium mt-6">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Your payment information is processed securely.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
