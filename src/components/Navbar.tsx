import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Is portion ko replace karein (Line 23 se):
return (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
    }`}
  >
    {/* px-4 ko responsive karke mobile par thoda kam (px-3) kiya taake elements overlap na hon */}
    <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group min-w-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary-500/25 transition-all duration-300">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          {/* truncate lagaya taake text bohot choti screen par overflow na kare */}
          <span className="text-lg sm:text-xl font-bold text-white truncate">
            Sana Khan<span className="text-primary-400">.</span>
          </span>
        </Link>

        {/* Baki ka code (Desktop links, button aur burger menu) bilkul same rahega */}

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary-400'
                    : 'text-dark-300 hover:text-white'
                }`}
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-primary-500/10 rounded-lg"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link to="/contact" className="btn-primary text-sm">
              Let's Talk
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-dark-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'text-primary-400 bg-primary-500/10'
                      : 'text-dark-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="btn-primary w-full justify-center mt-3 text-sm"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
