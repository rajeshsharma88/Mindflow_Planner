import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
  // Mock cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "MindFlow Custom Digital Planner",
      options: "Minimal, 12 Months, Light Theme, + Advanced Habit Trackers",
      price: 34.98,
      quantity: 1,
      img: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Digital Sticker Pack - Minimal",
      options: "Instant Download",
      price: 9.99,
      quantity: 1,
      img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=400&auto=format&fit=crop"
    }
  ]);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items => 
      items.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-bg-light min-h-screen py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold text-text-dark mb-12"
        >
          Your Cart
        </motion.h1>

        {cartItems.length > 0 ? (
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Cart Items */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="hidden sm:grid grid-cols-12 gap-4 p-6 border-b border-gray-100 text-sm font-bold text-text-medium uppercase tracking-wider">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-3 text-right">Total</div>
                </div>
                
                <div className="divide-y divide-gray-100">
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 flex flex-col sm:grid sm:grid-cols-12 gap-6 items-center"
                      >
                        <div className="col-span-6 flex items-center gap-6 w-full">
                          <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-text-dark mb-1">{item.name}</h3>
                            <p className="text-sm text-text-medium mb-3">{item.options}</p>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1 transition-colors font-medium"
                            >
                              <Trash2 className="h-4 w-4" /> Remove
                            </button>
                          </div>
                        </div>
                        
                        <div className="col-span-3 flex justify-center w-full sm:w-auto">
                          <div className="flex items-center border border-gray-200 rounded-xl bg-white shadow-sm">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 text-text-medium hover:text-primary transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-12 text-center font-bold text-text-dark">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 text-text-medium hover:text-primary transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="col-span-3 text-right w-full sm:w-auto">
                          <p className="font-bold text-text-dark text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-96 flex-shrink-0">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-32"
              >
                <h2 className="text-2xl font-bold text-text-dark mb-6">Order Summary</h2>
                
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
                    <span className="text-3xl font-bold text-text-dark">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                
                <Link 
                  to="/checkout"
                  className="w-full py-5 bg-primary text-white rounded-2xl font-bold text-xl hover:bg-blue-600 transition-colors shadow-xl shadow-primary/30 flex items-center justify-center gap-3 group"
                >
                  Proceed to Checkout 
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="mt-6 text-center">
                  <Link to="/shop" className="text-sm text-text-medium hover:text-primary underline transition-colors">
                    Continue Shopping
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center min-h-[50vh]"
          >
            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-text-dark mb-4">Your cart is empty</h2>
            <p className="text-text-medium mb-8 text-lg">Looks like you haven't added anything to your cart yet.</p>
            <Link 
              to="/shop" 
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-blue-600 transition-colors inline-block shadow-lg shadow-primary/30"
            >
              Start Shopping
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
