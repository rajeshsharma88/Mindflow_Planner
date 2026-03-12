import { Link } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';

const products = [
  { id: 1, name: "Minimalist Life Planner", price: 24.99, category: "Minimal", img: "https://picsum.photos/seed/planner1/600/800" },
  { id: 2, name: "Ultimate Productivity Suite", price: 29.99, category: "Productivity", img: "https://picsum.photos/seed/planner2/600/800" },
  { id: 3, name: "Aesthetic Student Planner", price: 19.99, category: "Aesthetic", img: "https://picsum.photos/seed/planner3/600/800" },
  { id: 4, name: "Business & Goals Tracker", price: 27.99, category: "Productivity", img: "https://picsum.photos/seed/planner4/600/800" },
  { id: 5, name: "Wellness & Habit Journal", price: 22.99, category: "Wellness", img: "https://picsum.photos/seed/planner5/600/800" },
  { id: 6, name: "Custom Builder Starter", price: 29.99, category: "Custom", img: "https://picsum.photos/seed/planner6/600/800" },
];

export default function Shop() {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl font-bold text-text-dark mb-2">Shop Planners</h1>
            <p className="text-text-medium">Find the perfect layout for your lifestyle.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-text-dark hover:bg-gray-50">
              <Filter className="h-4 w-4" /> Filters
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-text-dark hover:bg-gray-50">
              Sort by <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} to="/customize" className="group flex flex-col">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-100 mb-4 border border-gray-100">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full text-text-dark">
                    {product.category}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-text-dark mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-text-medium font-medium">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
