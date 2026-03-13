import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

const products = [
  { id: 1, name: "Minimalist Life Planner", price: 24.99, category: "Minimal", img: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Ultimate Productivity Suite", price: 29.99, category: "Productivity", img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Aesthetic Student Planner", price: 19.99, category: "Aesthetic", img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=600&auto=format&fit=crop" },
  { id: 4, name: "Business & Goals Tracker", price: 27.99, category: "Productivity", img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Wellness & Habit Journal", price: 22.99, category: "Wellness", img: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=600&auto=format&fit=crop" },
  { id: 6, name: "Custom Builder Starter", price: 29.99, category: "Custom", img: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=600&auto=format&fit=crop" },
  { id: 7, name: "Weekly Meal Planner", price: 14.99, category: "Wellness", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Shop() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-bg-light min-h-screen py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold text-text-dark mb-3">Shop Planners</h1>
            <p className="text-lg text-text-medium">Find the perfect layout for your lifestyle.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-text-dark hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
              <Filter className="h-4 w-4" /> Filters
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-text-dark hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
              Sort by <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Link to="/customize" className="group flex flex-col bg-white p-4 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-5">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-wider rounded-full text-text-dark shadow-sm">
                      {product.category}
                    </span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-white text-text-dark font-semibold px-6 py-3 rounded-full shadow-lg">
                      Customize
                    </span>
                  </div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="text-xl font-bold text-text-dark mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-text-medium font-medium text-lg">${product.price.toFixed(2)}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
