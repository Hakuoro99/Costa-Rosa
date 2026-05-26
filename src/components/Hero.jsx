import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-gradient-to-br from-brand-white via-brand-soft-rose/10 to-brand-green/10 overflow-hidden"
    >
      {/* Floating Tropical Leaves/Petals Decor */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-10 text-brand-green/30 pointer-events-none hidden md:block"
      >
        <Leaf size={48} className="rotate-45 fill-brand-green/10" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/4 right-10 text-brand-rose/25 pointer-events-none hidden md:block"
      >
        <Leaf size={60} className="-rotate-12 fill-brand-rose/10" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 right-1/3 text-brand-coral/20 pointer-events-none"
      >
        <Sparkles size={24} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Brand values and text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          {/* Brand Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-rose/10 text-brand-rose text-sm font-semibold tracking-wide mb-6 border border-brand-rose/25"
          >
            <Sparkles size={14} className="animate-pulse" />
            PRODUCTOS ARTESANALES DE PITAHAYA
          </motion.div>

          {/* Main Slogan */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-dark leading-[1.1] mb-6 text-glow"
          >
            Naturalmente <span className="text-brand-rose">rosa.</span>
            <br />
            Naturalmente <span className="text-brand-green">deliciosa.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="font-sans text-lg text-brand-dark/70 max-w-xl mb-8 leading-relaxed"
          >
            Costa Rosa combina la frescura de la costa mexicana con el sabor exótico
            y saludable de la pitahaya orgánica. Descubre nuestras nieves premium, chamoy
            natural y chiles artesanales gourmet.
          </motion.p>

          {/* Call-to-actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#productos"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-rose hover:bg-brand-rose/90 text-white font-semibold rounded-full shadow-lg shadow-brand-rose/25 hover:shadow-brand-rose/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              Descubre nuestros sabores
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#pitaya"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/70 hover:bg-white text-brand-dark border border-brand-dark/10 font-semibold rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 backdrop-blur-sm"
            >
              ¿Qué es la Pitahaya?
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Hero Image display */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Background Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 rounded-full bg-brand-soft-rose/30 blur-3xl -z-10 animate-pulse" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-80 h-64 md:h-80 rounded-full border border-brand-green/20 -z-10 animate-float-fast" />

          {/* Premium Image Container */}
          <div className="relative max-w-md md:max-w-lg w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform hover:rotate-2 transition-transform duration-500 bg-brand-soft-rose/5">
            <img
              src="/hero_pitaya.png"
              alt="Pitahaya fresca cortada gourmet Costa Rosa"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Overlay Gradient tag */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl flex items-center justify-between border border-white/40 shadow-lg">
              <div>
                <p className="font-serif text-sm font-bold text-brand-dark">100% Natural</p>
                <p className="font-sans text-xs text-brand-dark/60">Sin conservadores ni colorantes</p>
              </div>
              <span className="px-3 py-1 bg-brand-green text-white font-sans text-xs font-bold rounded-full">
                Gourmet
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Organic Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[50px] fill-white"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
}
