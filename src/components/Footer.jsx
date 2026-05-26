import React, { useState } from 'react';
import { Leaf, Mail, MapPin, MessageCircle, Send, Check } from 'lucide-react';

import logo from '../assets/logo.jpg';

const Instagram = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 20, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-brand-dark text-white relative pt-20 pb-8 overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-rose/10 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-brand-green/10 blur-3xl -z-10" />

      {/* Curves on top */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[30px] fill-white"
        >
          <path d="M1200,0H0V120H1200V0Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 pt-6">
        {/* Brand block */}
        <div className="md:col-span-1 text-left">
          <div className="flex items-center mb-6 group">
            <img
              src={logo}
              alt="Logo Costa Rosa"
              className="h-16 w-auto object-contain rounded-xl shadow-md border border-white/10 hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">
            Sabores tropicales gourmet y saludables a base de pitahaya orgánica mexicana cultivada de forma sustentable.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/costarosa.mzo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-brand-rose hover:text-white transition-all duration-300 border border-white/10"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-brand-rose hover:text-white transition-all duration-300 border border-white/10"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Quick Menu */}
        <div className="text-left md:pl-8">
          <h4 className="font-serif text-lg font-bold mb-6 text-brand-soft-rose">Menú Rápido</h4>
          <ul className="space-y-3 font-sans text-sm text-white/70">
            <li>
              <a href="#inicio" className="hover:text-brand-rose transition-colors">Inicio</a>
            </li>
            <li>
              <a href="#pitaya" className="hover:text-brand-rose transition-colors">¿Qué es la Pitahaya?</a>
            </li>
            <li>
              <a href="#productos" className="hover:text-brand-rose transition-colors">Productos</a>
            </li>
            <li>
              <a href="#esencia" className="hover:text-brand-rose transition-colors">Nuestra Esencia</a>
            </li>
            <li>
              <a href="#galeria" className="hover:text-brand-rose transition-colors">Galería</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h4 className="font-serif text-lg font-bold mb-6 text-brand-green">Contacto Gourmet</h4>
          <ul className="space-y-4 font-sans text-sm text-white/70">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-brand-rose shrink-0" />
              <span>Cualata, Félix Díaz #5 Manzanillo Colima</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={18} className="text-brand-green shrink-0" />
              <a href="mailto:hola@costarosa.mx" className="hover:text-brand-green transition-colors">
                hola@costarosa.mx
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <MessageCircle size={18} className="text-brand-coral shrink-0" />
              <a
                href="https://wa.me/523131373515"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-coral transition-colors flex items-center gap-1 font-semibold"
              >
                WhatsApp: 3131373515
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="text-left">
          <h4 className="font-serif text-lg font-bold mb-6 text-brand-coral">Newsletter</h4>
          <p className="font-sans text-sm text-white/60 leading-relaxed mb-4">
            Suscríbete para recibir recetas saludables, nuevos lanzamientos y promociones exclusivas.
          </p>

          <form onSubmit={handleSubscribe} className="relative">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-rose focus:ring-1 focus:ring-brand-rose transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 p-2 bg-brand-rose hover:bg-brand-rose/90 text-white rounded-full transition-colors"
              aria-label="Suscribir"
            >
              {isSubscribed ? <Check size={16} /> : <Send size={16} />}
            </button>
          </form>

          {isSubscribed && (
            <div className="mt-3 font-sans text-xs text-brand-green font-semibold flex items-center gap-1 animate-fade-in">
              <Check size={14} /> ¡Suscripción simulada con éxito!
            </div>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 text-center font-sans text-xs text-white/40 flex flex-col sm:flex-row justify-between gap-4">
        <p>© 2026 Costa Rosa. Todos los derechos reservados. Hecho con amor artesanal mexicano.</p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="hover:text-white/60 transition-colors">Aviso de Privacidad</a>
          <span>•</span>
          <a href="#" className="hover:text-white/60 transition-colors">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
}
