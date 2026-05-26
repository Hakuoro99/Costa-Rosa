import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react';

import logo from '../assets/logo.jpg';

export default function Navbar({ onCartClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: '¿Qué es?', href: '#pitaya' },
    { name: 'Productos', href: '#productos' },
    { name: 'Nuestra Esencia', href: '#esencia' },
    { name: 'Galería', href: '#galeria' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/80 backdrop-blur-md border-b border-brand-soft-rose/20 py-3 shadow-sm'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Brand */}
          <a href="#inicio" className="flex items-center group">
            <img
              src={logo}
              alt="Logo Costa Rosa"
              className="h-12 w-auto object-contain rounded-xl shadow-sm border border-brand-dark/5 hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-brand-dark/80 hover:text-brand-rose transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-rose transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Utilities (Cart) */}
          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2.5 rounded-full bg-brand-soft-rose/10 hover:bg-brand-rose text-brand-rose hover:text-white transition-colors duration-300 shadow-sm"
              aria-label="Carrito de compras"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand-coral rounded-full border border-white animate-pulse" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full bg-brand-dark/5 hover:bg-brand-dark/10 text-brand-dark md:hidden transition-colors duration-300"
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-b border-brand-soft-rose/20 shadow-lg md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-4 py-6 px-6">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-lg font-medium text-brand-dark py-2 border-b border-brand-dark/5 hover:text-brand-rose transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
