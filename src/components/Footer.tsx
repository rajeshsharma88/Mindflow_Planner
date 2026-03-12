import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg-light border-t border-gray-200 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
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
          
          <div>
            <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-3">
              <li><Link to="/shop" className="text-sm text-text-medium hover:text-primary transition-colors">All Planners</Link></li>
              <li><Link to="/customize" className="text-sm text-text-medium hover:text-primary transition-colors">Custom Builder</Link></li>
              <li><Link to="/shop" className="text-sm text-text-medium hover:text-primary transition-colors">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-text-medium hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-text-medium hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-sm text-text-medium hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-dark uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-medium hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-text-medium hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-text-medium hover:text-primary transition-colors">Refund Policy</a></li>
            </ul>
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
