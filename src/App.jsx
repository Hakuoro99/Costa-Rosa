import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PitayaInfo from './components/PitayaInfo';
import Catalog from './components/Catalog';
import Essence from './components/Essence';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  const [showCheckoutNotice, setShowCheckoutNotice] = useState(false);

  const triggerSimulatedCartNotice = () => {
    setShowCheckoutNotice(true);
    setTimeout(() => {
      setShowCheckoutNotice(false);
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-white text-brand-dark selection:bg-brand-soft-rose selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Premium blur decorations */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] aspect-square rounded-full bg-brand-green/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-[60%] right-[-10%] w-[50%] aspect-square rounded-full bg-brand-rose/5 blur-[120px] pointer-events-none -z-10" />

      {/* Navigation */}
      <Navbar onCartClick={triggerSimulatedCartNotice} />

      {/* Main Sections */}
      <main>
        <Hero />
        <PitayaInfo />
        <Catalog />
        <Essence />
        <Gallery />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />

      {/* Custom Global Simulated Toast */}
      {showCheckoutNotice && (
        <div className="fixed bottom-8 left-8 z-50 max-w-sm bg-white border-2 border-brand-rose/30 rounded-3xl p-5 shadow-2xl flex flex-col gap-2 animate-slide-in">
          <div className="flex justify-between items-start">
            <span className="font-serif text-sm font-bold text-brand-rose">Bolsa Costa Rosa</span>
            <button
              onClick={() => setShowCheckoutNotice(false)}
              className="text-brand-dark/40 hover:text-brand-dark transition-colors font-bold text-xs"
            >
              ✕
            </button>
          </div>
          <p className="font-sans text-xs text-brand-dark/70 leading-relaxed">
            Tu carrito cuenta con productos seleccionados. Haz click en el botón de carrito flotante abajo a la derecha para realizar tu pago gourmet simulado.
          </p>
        </div>
      )}
    </div>
  );
}
