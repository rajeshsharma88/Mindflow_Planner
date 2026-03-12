import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, ShieldCheck, Download, Lock, Star, Plus } from 'lucide-react';

export default function Customize() {
  const navigate = useNavigate();
  const [style, setStyle] = useState('minimal');
  const [duration, setDuration] = useState('12');
  const [theme, setTheme] = useState('light');
  const [addons, setAddons] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState(0);

  const basePrice = 29.99;
  const addonPrice = 4.99;
  const totalPrice = basePrice + (addons.length * addonPrice);

  const images = [
    "https://picsum.photos/seed/plannerMain/800/1000",
    "https://picsum.photos/seed/plannerThumb1/800/1000",
    "https://picsum.photos/seed/plannerThumb2/800/1000",
    "https://picsum.photos/seed/plannerThumb3/800/1000",
  ];

  const toggleAddon = (id: string) => {
    if (addons.includes(id)) {
      setAddons(addons.filter(a => a !== id));
    } else {
      setAddons([...addons, id]);
    }
  };

  const handleAddToCart = () => {
    // In a real app, this would dispatch to a global store
    navigate('/cart');
  };

  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Product Images */}
          <div className="flex-1">
            <div className="sticky top-24">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 mb-6 border border-gray-200">
                <img 
                  src={images[activeImage]} 
                  alt="MindFlow Custom Digital Planner" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`aspect-[4/5] rounded-xl overflow-hidden border-2 transition-all ${activeImage === idx ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-gray-300'}`}
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
              <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">MindFlow Custom Digital Planner</h1>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center text-yellow-400">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-sm text-text-medium underline cursor-pointer">128 Reviews</span>
              </div>
              <p className="text-3xl font-bold text-text-dark mb-6">${totalPrice.toFixed(2)}</p>
              <p className="text-text-medium leading-relaxed">
                Design your perfect digital planner. Choose your layout style, duration, color theme, and add specific pages to match your unique workflow. Delivered instantly as an interactive PDF optimized for GoodNotes and Notability.
              </p>
              
              <ul className="mt-6 space-y-2 text-sm text-text-medium">
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Fully hyperlinked for easy navigation</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Monday & Sunday start options included</li>
                <li className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-500" /> Instant digital download</li>
              </ul>
            </div>

            <div className="space-y-10 mb-10">
              {/* Style Selection */}
              <div>
                <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4 flex justify-between">
                  <span>1. Planner Style</span>
                  <span className="text-text-medium font-normal capitalize">{style}</span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {['minimal', 'aesthetic', 'productivity'].map((s) => (
                    <button
                      key={s}
                      onClick={() => setStyle(s)}
                      className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all capitalize ${style === s ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 text-text-medium hover:border-gray-300'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration Selection */}
              <div>
                <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4 flex justify-between">
                  <span>2. Duration</span>
                  <span className="text-text-medium font-normal">{duration} Months</span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {['3', '6', '12'].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all ${duration === d ? 'border-primary bg-blue-50 text-primary' : 'border-gray-200 text-text-medium hover:border-gray-300'}`}
                    >
                      {d} Months
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Selection */}
              <div>
                <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4 flex justify-between">
                  <span>3. Color Theme</span>
                  <span className="text-text-medium font-normal capitalize">{theme}</span>
                </h3>
                <div className="flex gap-4">
                  {[
                    { id: 'light', color: 'bg-white border-gray-200' },
                    { id: 'dark', color: 'bg-gray-900 border-gray-900' },
                    { id: 'latte', color: 'bg-[#E5D3B3] border-[#E5D3B3]' },
                    { id: 'sage', color: 'bg-[#9CAF88] border-[#9CAF88]' },
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setTheme(t.id)}
                      className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${t.color} ${theme === t.id ? 'ring-2 ring-offset-2 ring-primary' : ''}`}
                      aria-label={`Select ${t.id} theme`}
                    >
                      {theme === t.id && <Check className={`h-5 w-5 ${t.id === 'light' ? 'text-text-dark' : 'text-white'}`} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <div>
                <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">
                  4. Additional Pages (+${addonPrice} each)
                </h3>
                <div className="space-y-3">
                  {[
                    { id: 'habits', name: 'Advanced Habit Trackers', desc: 'Monthly, weekly, and daily habit tracking matrices.' },
                    { id: 'goals', name: 'Goal Planning Framework', desc: 'SMART goal templates and quarterly review pages.' },
                    { id: 'finance', name: 'Finance & Budgeting', desc: 'Expense trackers, savings goals, and monthly budgets.' },
                  ].map((addon) => (
                    <div 
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${addons.includes(addon.id) ? 'border-primary bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <div className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center mr-4 ${addons.includes(addon.id) ? 'bg-primary border-primary text-white' : 'border-gray-300 bg-white'}`}>
                        {addons.includes(addon.id) && <Check className="h-3 w-3" />}
                      </div>
                      <div className="flex-1">
                        <h4 className={`text-sm font-semibold ${addons.includes(addon.id) ? 'text-primary' : 'text-text-dark'}`}>{addon.name}</h4>
                        <p className="text-xs text-text-medium mt-1">{addon.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <button 
                onClick={handleAddToCart}
                className="w-full py-4 bg-primary text-white rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
              >
                Add to Cart - ${totalPrice.toFixed(2)}
              </button>
              <Link 
                to="/checkout"
                className="w-full py-4 bg-white text-text-dark border-2 border-gray-200 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
              >
                Buy It Now
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-6 w-6 text-emerald-500 mb-2" />
                <span className="text-xs text-text-medium font-medium">30-Day Money Back</span>
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
        <div className="mt-32 border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-bold text-text-dark mb-8">Frequently Bought Together</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { id: 101, name: "Digital Sticker Pack - Minimal", price: 9.99, img: "https://picsum.photos/seed/sticker1/400/400" },
              { id: 102, name: "Digital Notebook Bundle", price: 14.99, img: "https://picsum.photos/seed/notebook1/400/400" },
              { id: 103, name: "Meal Planning Insert", price: 5.99, img: "https://picsum.photos/seed/meal1/400/400" },
            ].map((product) => (
              <div key={product.id} className="group flex flex-col">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-4 border border-gray-100">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-md font-semibold text-text-dark mb-1">{product.name}</h3>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-text-medium font-medium">${product.price.toFixed(2)}</p>
                  <button className="p-2 bg-gray-100 text-text-dark rounded-full hover:bg-primary hover:text-white transition-colors">
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
