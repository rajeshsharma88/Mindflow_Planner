import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-light border-t border-gray-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Link to="/" className="text-xl font-bold tracking-tight text-text-dark mb-4 block">
              MindFlow <span className="text-primary">Planner</span>
            </Link>
            <p className="text-sm text-text-medium mb-6 max-w-xs">
              Empowering you to design your perfect digital planner, tailored to your unique goals, habits, and productivity style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-medium hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-medium hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-text-medium hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-text-medium hover:text-primary transition-colors">All Planners</Link></li>
              <li><Link to="/customize" className="text-sm text-text-medium hover:text-primary transition-colors">Custom Builder</Link></li>
              <li><Link to="/shop" className="text-sm text-text-medium hover:text-primary transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-text-medium hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-text-medium hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-sm text-text-medium hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-medium hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-text-medium hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-text-medium hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">Subscribe</h3>
            <p className="text-sm text-text-medium mb-4">
              Get the latest updates, articles, and resources sent to your inbox weekly.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm w-full transition-all"
                required
              />
              <button 
                type="submit" 
                className="px-4 py-2.5 bg-primary text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-colors w-full shadow-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-text-medium">
            &copy; {new Date().getFullYear()} MindFlow Planner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
