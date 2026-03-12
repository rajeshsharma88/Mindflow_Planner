import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold tracking-tight text-text-dark">
            MindFlow <span className="text-primary">Planner</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-text-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/shop" className="text-sm font-medium text-text-medium hover:text-primary transition-colors">Shop</Link>
          <Link to="/customize" className="text-sm font-medium text-text-medium hover:text-primary transition-colors">Customize</Link>
          <Link to="/about" className="text-sm font-medium text-text-medium hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="text-sm font-medium text-text-medium hover:text-primary transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative p-2 text-text-dark hover:text-primary transition-colors">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
              2
            </span>
          </Link>
          <button 
            className="md:hidden p-2 text-text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-lg absolute w-full">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium text-text-dark" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="text-sm font-medium text-text-dark" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/customize" className="text-sm font-medium text-text-dark" onClick={() => setIsMenuOpen(false)}>Customize</Link>
            <Link to="/about" className="text-sm font-medium text-text-dark" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-sm font-medium text-text-dark" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
