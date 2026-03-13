import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, ShieldCheck, Download, Lock, Star, StarHalf, Plus, Settings, Palette, Type, Maximize, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import PaymentMethods from '../components/PaymentMethods';
import TrustpilotBadge from '../components/TrustpilotBadge';

export default function Customize() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [style, setStyle] = useState('minimal');
  const [duration, setDuration] = useState('12');
  const [theme, setTheme] = useState('light');
  const [addons, setAddons] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState(0);

  // Meal Planner specific states
  const [mealPlannerColor, setMealPlannerColor] = useState('pastel');
  const [mealPlannerFont, setMealPlannerFont] = useState('sans');
  const [mealPlannerSize, setMealPlannerSize] = useState('A4');

  // Dynamic Reviews State
  const [reviews, setReviews] = useState([
    { id: 1, rating: 5, text: "Amazing planner!" },
    { id: 2, rating: 4, text: "Very good, but missing one feature." },
    { id: 3, rating: 5, text: "Perfect for my needs." },
    { id: 4, rating: 5, text: "Highly recommend." },
    { id: 5, rating: 4, text: "Great design." }
  ]);

  const averageRating = reviews.length > 0 
    ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length 
    : 0;
  const totalReviews = reviews.length + 123; // Simulated total reviews

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-current text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-5 w-5 fill-current text-yellow-400" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
    }
    return stars;
  };

  const getBasePrice = () => {
    let price = 19.99; // Base for 3 months
    if (duration === '6') price = 24.99;
    if (duration === '12') price = 29.99;
    
    // Add premium for specific styles
    if (style === 'aesthetic') price += 4.99;
    if (style === 'productivity') price += 9.99;
    
    return price;
  };

  const basePrice = getBasePrice();
  const addonPrice = 4.99;
  const totalPrice = basePrice + (addons.length * addonPrice);

  const images = [
    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop", // Meal planner image
  ];

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter(a => a !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  const handleAddToCart = () => {
    const addonNames = addons.map(a => {
      if (a === 'habits') return 'Advanced Habit Trackers';
      if (a === 'goals') return 'Goal Planning Framework';
      if (a === 'finance') return 'Finance & Budgeting';
      if (a === 'meal_planner') return 'Meal Planner Insert';
      return a;
    });

    const optionsString = `${style.charAt(0).toUpperCase() + style.slice(1)}, ${duration} Months, ${theme.charAt(0).toUpperCase() + theme.slice(1)} Theme${addons.length > 0 ? ', + ' + addonNames.join(', ') : ''}`;

    addToCart({
      id: Date.now(), // Generate a unique ID for the customized item
      name: "MindFlow Custom Digital Planner",
      options: optionsString,
      price: totalPrice,
      quantity: 1,
      img: images[0]
    });
    navigate('/cart');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Product Images */}
          <div className="flex-1">
            <div className="sticky top-32">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 mb-6 border border-gray-200 shadow-xl relative">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeImage}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    src={images[activeImage]} 
                    alt="MindFlow Custom Digital Planner" 
                    className="w-full h-full object-cover absolute inset-0"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-[4/5] rounded-xl overflow-hidden border-2 transition-all duration-300 ${activeImage === idx ? 'border-primary ring-4 ring-primary/20 scale-95' : 'border-transparent hover:border-gray-300 hover:scale-105'}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="flex-1">
            <div className="mb-8 border-b border-gray-100 pb-8">
              <motion.h1 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-5xl font-bold text-text-dark mb-4 leading-tight"
              >
                MindFlow Custom Digital Planner
              </motion.h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center" title={`${averageRating.toFixed(1)} out of 5 stars`}>
                  {renderStars(averageRating)}
                </div>
                <span className="text-sm text-text-medium underline cursor-pointer hover:text-primary transition-colors">
                  {totalReviews} Reviews
                </span>
              </div>
              <motion.p 
                key={totalPrice}
                initial={{ scale: 1.1, color: '#1877F2' }}
                animate={{ scale: 1, color: '#202124' }}
                className="text-4xl font-bold mb-6"
              >
                ${totalPrice.toFixed(2)}
              </motion.p>
              
              <TrustpilotBadge />

              <p className="text-lg text-text-medium leading-relaxed mt-4">
                Design your perfect digital planner. Choose your layout style, duration, color theme, and add specific pages to match your unique workflow. Delivered instantly as an interactive PDF optimized for GoodNotes and Notability.
              </p>
              
              <ul className="mt-8 space-y-3 text-text-medium">
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-emerald-500" /> Fully hyperlinked for easy navigation</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-emerald-500" /> Monday & Sunday start options included</li>
                <li className="flex items-center gap-3"><Check className="h-5 w-5 text-emerald-500" /> Instant digital download</li>
              </ul>
            </div>

            <div className="space-y-12 mb-12">
              {/* Style Selection */}
              <div>
                <h3 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-4 flex justify-between items-center">
                  <span>1. Planner Style</span>
                  <span className="text-primary font-semibold capitalize bg-blue-50 px-3 py-1 rounded-full">{style}</span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: 'minimal', label: 'Minimal', price: 0 },
                    { id: 'aesthetic', label: 'Aesthetic', price: 4.99 },
                    { id: 'productivity', label: 'Productivity', price: 9.99 }
                  ].map((s) => (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={s.id}
                      onClick={() => setStyle(s.id)}
                      className={`py-4 px-4 rounded-2xl border-2 text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 ${style === s.id ? 'border-primary bg-blue-50 text-primary shadow-md shadow-blue-100' : 'border-gray-200 text-text-medium hover:border-gray-300 hover:bg-gray-50'}`}
                    >
                      <span>{s.label}</span>
                      {s.price > 0 && <span className="text-xs font-normal opacity-80">(+${s.price})</span>}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Duration Selection */}
              <div>
                <h3 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-4 flex justify-between items-center">
                  <span>2. Duration</span>
                  <span className="text-primary font-semibold bg-blue-50 px-3 py-1 rounded-full">{duration} Months</span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { id: '3', label: '3 Months', price: 19.99 },
                    { id: '6', label: '6 Months', price: 24.99 },
                    { id: '12', label: '12 Months', price: 29.99 }
                  ].map((d) => (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      key={d.id}
                      onClick={() => setDuration(d.id)}
                      className={`py-4 px-4 rounded-2xl border-2 text-sm font-bold transition-all flex flex-col items-center justify-center gap-1 ${duration === d.id ? 'border-primary bg-blue-50 text-primary shadow-md shadow-blue-100' : 'border-gray-200 text-text-medium hover:border-gray-300 hover:bg-gray-50'}`}
                    >
                      <span>{d.label}</span>
                      <span className="text-xs font-normal opacity-80">From ${d.price}</span>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Theme Selection */}
              <div>
                <h3 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-4 flex justify-between items-center">
                  <span>3. Color Theme</span>
                  <span className="text-primary font-semibold capitalize bg-blue-50 px-3 py-1 rounded-full">{theme}</span>
                </h3>
                <div className="flex gap-4">
                  {[
                    { id: 'light', color: 'bg-white border-gray-200' },
                    { id: 'dark', color: 'bg-gray-900 border-gray-900' },
                    { id: 'latte', color: 'bg-[#E5D3B3] border-[#E5D3B3]' },
                    { id: 'sage', color: 'bg-[#9CAF88] border-[#9CAF88]' },
                  ].map((t) => (
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`w-14 h-14 rounded-full border-2 transition-all flex items-center justify-center shadow-sm ${t.color} ${theme === t.id ? 'ring-4 ring-offset-4 ring-primary' : ''}`}
                      aria-label={`Select ${t.id} theme`}
                    >
                      <AnimatePresence>
                        {theme === t.id && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <Check className={`h-6 w-6 ${t.id === 'light' ? 'text-text-dark' : 'text-white'}`} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h3 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-4">
                  4. Additional Pages (+${addonPrice} each)
                </h3>
                <div className="space-y-4">
                  {[
                    { id: 'habits', name: 'Advanced Habit Trackers', desc: 'Monthly, weekly, and daily habit tracking matrices.' },
                    { id: 'goals', name: 'Goal Planning Framework', desc: 'SMART goal templates and quarterly review pages.' },
                    { id: 'finance', name: 'Finance & Budgeting', desc: 'Expense trackers, savings goals, and monthly budgets.' },
                    { id: 'meal_planner', name: 'Meal Planner Insert', desc: 'Weekly meal planning, grocery lists, and recipe cards.' },
                  ].map((addon) => (
                    <div key={addon.id} className="flex flex-col relative">
                      <motion.div 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={() => toggleAddon(addon.id)}
                        className={`relative z-10 flex items-start p-5 rounded-2xl border-2 cursor-pointer transition-all ${addons.includes(addon.id) ? 'border-primary bg-blue-50 shadow-md shadow-blue-100' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
                      >
                        <div className={`mt-1 flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center mr-4 transition-colors ${addons.includes(addon.id) ? 'bg-primary border-primary text-white' : 'border-gray-300 bg-white'}`}>
                          {addons.includes(addon.id) && <Check className="h-4 w-4" />}
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-base font-bold ${addons.includes(addon.id) ? 'text-primary' : 'text-text-dark'}`}>{addon.name}</h4>
                          <p className="text-sm text-text-medium mt-1">{addon.desc}</p>
                        </div>
                      </motion.div>
                      
                      {/* Granular Options for Meal Planner */}
                      <AnimatePresence>
                        {addon.id === 'meal_planner' && addons.includes('meal_planner') && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -20 }}
                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -20 }}
                            className="overflow-hidden relative z-0"
                          >
                            <div className="p-5 bg-blue-50/50 border-x-2 border-b-2 border-primary/20 rounded-b-2xl -mt-4 pt-8 shadow-inner space-y-5 mx-2">
                              <h4 className="font-bold text-text-dark flex items-center gap-2 text-sm mb-4">
                                <Settings className="h-4 w-4 text-primary" /> Meal Planner Customization
                              </h4>
                              
                              {/* Color */}
                              <div>
                                <label className="text-xs font-bold text-text-medium uppercase tracking-wider mb-2 flex items-center gap-2"><Palette className="h-3 w-3" /> Accent Color</label>
                                <div className="flex flex-wrap gap-2">
                                  {['pastel', 'vibrant', 'monochrome'].map(c => (
                                     <button key={c} onClick={(e) => { e.stopPropagation(); setMealPlannerColor(c); }} className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize border-2 transition-all ${mealPlannerColor === c ? 'border-primary bg-primary/10 text-primary' : 'border-gray-200 bg-white text-text-medium hover:border-gray-300'}`}>{c}</button>
                                  ))}
                                </div>
                              </div>

                              {/* Font */}
                              <div>
                                <label className="text-xs font-bold text-text-medium uppercase tracking-wider mb-2 flex items-center gap-2"><Type className="h-3 w-3" /> Typography</label>
                                <div className="flex flex-wrap gap-2">
                                  {['sans', 'serif', 'handwriting'].map(f => (
                                     <button key={f} onClick={(e) => { e.stopPropagation(); setMealPlannerFont(f); }} className={`px-3 py-1.5 rounded-lg text-xs font-bold capitalize border-2 transition-all ${mealPlannerFont === f ? 'border-primary bg-primary/10 text-primary' : 'border-gray-200 bg-white text-text-medium hover:border-gray-300'}`}>{f}</button>
                                  ))}
                                </div>
                              </div>

                              {/* Size */}
                              <div>
                                <label className="text-xs font-bold text-text-medium uppercase tracking-wider mb-2 flex items-center gap-2"><Maximize className="h-3 w-3" /> Page Size</label>
                                <div className="flex flex-wrap gap-2">
                                  {['A4', 'A5', 'US Letter'].map(s => (
                                     <button key={s} onClick={(e) => { e.stopPropagation(); setMealPlannerSize(s); }} className={`px-3 py-1.5 rounded-lg text-xs font-bold border-2 transition-all ${mealPlannerSize === s ? 'border-primary bg-primary/10 text-primary' : 'border-gray-200 bg-white text-text-medium hover:border-gray-300'}`}>{s}</button>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  className="flex-1 py-5 bg-primary text-white rounded-2xl font-bold text-xl hover:bg-blue-600 transition-colors shadow-xl shadow-primary/30 flex items-center justify-center gap-3"
                >
                  Add to Cart - ${totalPrice.toFixed(2)}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-auto flex items-center justify-center bg-gray-50 border-2 border-gray-200 rounded-2xl text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-all"
                  title="Add to Wishlist"
                >
                  <Heart className="h-6 w-6" />
                </motion.button>
              </div>
              <Link 
                to="/checkout"
                className="w-full py-5 bg-white text-text-dark border-2 border-gray-200 rounded-2xl font-bold text-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
              >
                Buy It Now
              </Link>
              <PaymentMethods />
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-gray-100 pt-8">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-6 w-6 text-emerald-500 mb-2" />
                <span className="text-xs text-text-medium font-medium">30-Day Money Back Guarantee</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Download className="h-6 w-6 text-emerald-500 mb-2" />
                <span className="text-xs text-text-medium font-medium">Instant Download</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="h-6 w-6 text-emerald-500 mb-2" />
                <span className="text-xs text-text-medium font-medium">Secure Payment</span>
              </div>
            </div>

          </div>
        </div>

        {/* Upsells */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 border-t border-gray-100 pt-16"
        >
          <h2 className="text-3xl font-bold text-text-dark mb-10">Frequently Bought Together</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { id: 101, name: "Digital Sticker Pack - Minimal", price: 9.99, img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=400&auto=format&fit=crop" },
              { id: 102, name: "Digital Notebook Bundle", price: 14.99, img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=400&auto=format&fit=crop" },
              { id: 103, name: "Meal Planning Insert", price: 5.99, img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop" },
            ].map((product) => (
              <div key={product.id} className="group flex flex-col bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-5">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-lg font-bold text-text-dark mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-text-medium font-medium text-lg">${product.price.toFixed(2)}</p>
                  <button className="p-3 bg-gray-100 text-text-dark rounded-xl hover:bg-primary hover:text-white transition-colors shadow-sm">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
