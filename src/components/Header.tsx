import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm border-b border-gray-100 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <Link to="/" className="text-2xl font-bold tracking-tight text-text-dark flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
              <span className="text-white text-sm font-black">M</span>
            </div>
            MindFlow <span className="text-primary">Planner</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-md px-6 py-2 rounded-full border border-gray-100 shadow-sm"
        >
          {['Home', 'Shop', 'Customize', 'Blog', 'About', 'Contact'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className={`text-sm font-medium transition-colors hover:text-primary relative group ${
                (location.pathname === '/' && item === 'Home') || location.pathname === `/${item.toLowerCase()}` 
                  ? 'text-primary' 
                  : 'text-text-medium'
              }`}
            >
              {item}
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full transform origin-left transition-transform duration-300 ${
                (location.pathname === '/' && item === 'Home') || location.pathname === `/${item.toLowerCase()}` 
                  ? 'scale-x-100' 
                  : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          ))}
        </motion.nav>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <Link to="/cart" className="relative p-2 text-text-dark hover:text-primary transition-colors group">
            <ShoppingCart className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm"
            >
              2
            </motion.span>
          </Link>
          <button 
            className="md:hidden p-2 text-text-dark hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl absolute w-full overflow-hidden shadow-xl"
          >
            <nav className="flex flex-col px-4 py-6 space-y-2">
              {['Home', 'Shop', 'Customize', 'Blog', 'About', 'Contact'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="block px-4 py-3 text-base font-medium text-text-dark hover:bg-blue-50 hover:text-primary rounded-xl transition-colors"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
