import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';

export default function Cart() {
  // Mock cart data
  const cartItems = [
    {
      id: 1,
      name: "MindFlow Custom Digital Planner",
      options: "Minimal, 12 Months, Light Theme, + Advanced Habit Trackers",
      price: 34.98,
      quantity: 1,
      img: "https://picsum.photos/seed/plannerMain/400/500"
    },
    {
      id: 2,
      name: "Digital Sticker Pack - Minimal",
      options: "Instant Download",
      price: 9.99,
      quantity: 1,
      img: "https://picsum.photos/seed/sticker1/400/400"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="bg-bg-light min-h-screen py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-text-dark mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden">
                <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 text-sm font-semibold text-text-medium uppercase tracking-wider">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-3 text-right">Total</div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:grid sm:grid-cols-12 gap-6 items-center">
                      <div className="col-span-6 flex items-center gap-6 w-full">
                        <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100">
                          <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-text-dark mb-1">{item.name}</h3>
                          <p className="text-sm text-text-medium mb-2">{item.options}</p>
                          <button className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 transition-colors">
                            <Trash2 className="h-4 w-4" /> Remove
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-3 flex justify-center w-full sm:w-auto">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button className="p-2 text-text-medium hover:text-primary transition-colors">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="w-8 text-center font-medium text-text-dark">{item.quantity}</span>
                          <button className="p-2 text-text-medium hover:text-primary transition-colors">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-3 text-right w-full sm:w-auto">
                        <p className="font-semibold text-text-dark text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-96">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 sticky top-24">
                <h2 className="text-xl font-bold text-text-dark mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6 text-text-medium">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="text-text-dark font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span className="text-text-dark font-medium">Calculated at checkout</span>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6 mb-8">
                  <div className="flex justify-between items-end">
                    <span className="text-lg font-bold text-text-dark">Total</span>
                    <span className="text-2xl font-bold text-text-dark">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link 
                  to="/checkout"
                  className="w-full py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                >
                  Proceed to Checkout <ArrowRight className="h-5 w-5" />
                </Link>
                
                <div className="mt-6 text-center">
                  <Link to="/shop" className="text-sm text-text-medium hover:text-primary underline transition-colors">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <h2 className="text-2xl font-bold text-text-dark mb-4">Your cart is empty</h2>
            <p className="text-text-medium mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-blue-600 transition-colors inline-block">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
