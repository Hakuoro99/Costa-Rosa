import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Activity, Droplet, Heart, HelpCircle } from 'lucide-react';

export default function PitayaInfo() {
  const benefits = [
    {
      icon: <Shield size={28} className="text-brand-rose" />,
      title: 'Antioxidantes Poderosos',
      description: 'Cargada de betalaínas que neutralizan radicales libres, protegiendo tus células y retardando el envejecimiento natural.',
      stat: 'Alta Dosis',
      bg: 'bg-brand-rose/5 border-brand-rose/10',
    },
    {
      icon: <Activity size={28} className="text-brand-green" />,
      title: 'Rica en Vitamina C',
      description: 'Fortalece activamente tu sistema inmunológico y estimula la producción de colágeno para una piel luminosa.',
      stat: '85% VD',
      bg: 'bg-brand-green/5 border-brand-green/10',
    },
    {
      icon: <Sparkles size={28} className="text-brand-coral" />,
      title: 'Fibra Digestiva',
      description: 'Contiene fibra prebiótica natural que favorece el crecimiento de bacterias intestinales saludables y mejora la digestión.',
      stat: '7g por porción',
      bg: 'bg-brand-coral/5 border-brand-coral/10',
    },
    {
      icon: <Droplet size={28} className="text-brand-soft-rose" />,
      title: 'Hidratación Activa',
      description: 'Una de las frutas tropicales con mayor contenido de agua y electrolitos esenciales, perfecta para refrescarte saludablemente.',
      stat: '90% Agua',
      bg: 'bg-brand-soft-rose/5 border-brand-soft-rose/10',
    },
    {
      icon: <Heart size={28} className="text-brand-rose" />,
      title: 'Bajo Índice Calórico',
      description: 'Disfruta de su dulce sabor natural sin culpa. Perfecta para planes de nutrición limpios y saludables.',
      stat: '60 kcal',
      bg: 'bg-brand-rose/5 border-brand-rose/10',
    },
  ];

  return (
    <section id="pitaya" className="py-24 bg-white relative overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-green/5 blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-soft-rose/5 blur-3xl translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold tracking-wider mb-4 border border-brand-green/20"
          >
            <HelpCircle size={12} />
            CONOCE EL FRUTO
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight"
          >
            ¿Qué es la <span className="text-brand-rose">Pitahaya</span> y por qué es un superalimento?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-base text-brand-dark/70 leading-relaxed"
          >
            También conocida como la "fruta del dragón", la pitahaya es un regalo tropical silvestre
            originario de México. Su pulpa rosa brillante no solo cautiva a la vista, sino que está repleta
            de nutrientes esenciales, enzimas digestivas y un sabor único, dulce e increíblemente refrescante.
          </motion.p>
        </div>

        {/* Asymmetrical Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`p-8 rounded-3xl border shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${benefit.bg}`}
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 border border-brand-dark/5">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-dark mb-4">
                  {benefit.title}
                </h3>
                <p className="font-sans text-sm text-brand-dark/65 leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-brand-dark/5">
                <span className="font-sans text-xs text-brand-dark/50 font-medium">Estadística Clave</span>
                <span className="font-serif text-base font-extrabold text-brand-rose bg-white px-3 py-1 rounded-full border border-brand-dark/5 shadow-sm">
                  {benefit.stat}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Callout Card (Final Grid Item) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 rounded-3xl bg-brand-dark text-white border border-brand-dark flex flex-col justify-between shadow-lg"
          >
            <div>
              <span className="font-sans text-xs font-bold text-brand-soft-rose tracking-wider uppercase">
                Costa Rosa Esencial
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-4 mb-4 leading-tight">
                Salud, Sabor y Tradición Mexicana
              </h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                Llevamos las propiedades nutritivas de la pitahaya del campo mexicano directo a tu paladar,
                respetando la producción artesanal y utilizando ingredientes 100% naturales.
              </p>
            </div>
            <a
              href="#esencia"
              className="inline-flex items-center gap-2 text-brand-soft-rose hover:text-white text-sm font-semibold transition-colors duration-300 self-start group"
            >
              Conoce nuestro proceso
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
