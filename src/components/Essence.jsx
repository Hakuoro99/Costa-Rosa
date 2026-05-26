import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Leaf, Heart, Sun, Award } from 'lucide-react';

import essenceMexican from '../assets/essence_mexican.png';

export default function Essence() {
  const values = [
    {
      icon: <Leaf className="text-brand-green" size={20} />,
      title: 'Ingredientes 100% Orgánicos',
      description: 'Sin químicos, endulzantes artificiales, ni conservadores. Saboreas la fruta en su máxima pureza.',
    },
    {
      icon: <Award className="text-brand-rose" size={20} />,
      title: 'Comercio Justo y Artesanal',
      description: 'Apoyamos directamente a agricultores de cooperativas locales de Jalisco y Michoacán.',
    },
    {
      icon: <Heart className="text-brand-coral" size={20} />,
      title: 'Pasión Healthy Gourmet',
      description: 'Creamos combinaciones deliciosas pensadas para nutrir tu cuerpo y deleitar tu paladar gourmet.',
    },
  ];

  return (
    <section id="esencia" className="py-24 bg-white relative overflow-hidden">
      {/* Top curved wave border to transition from the products color */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-[0] -translate-y-px">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[40px] fill-brand-soft-rose/10"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Brand Story & Values */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-rose/10 text-brand-rose text-xs font-bold tracking-wider mb-6 border border-brand-rose/20">
              <Compass size={12} />
              NUESTRA ESENCIA
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight text-glow">
              Hecho a Mano con Amor, <br />
              Inspiración y Alma <span className="text-brand-rose">Mexicana</span>
            </h2>

            <p className="font-sans text-base text-brand-dark/75 leading-relaxed mb-8">
              En **Costa Rosa**, celebramos la exuberancia de la naturaleza mexicana. Nuestro viaje comenzó
              en los campos de pitahaya roja silvestres, donde descubrimos la maravillosa versatilidad
              de esta increíble fruta. Con una visión healthy-gourmet moderna, transformamos ingredientes
              ancestrales en delicias refrescantes, respetando el ciclo de la tierra y el trabajo de nuestra gente.
            </p>

            {/* Showcase Values List */}
            <div className="space-y-6">
              {values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-brand-dark/5 border border-brand-dark/10 flex items-center justify-center shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-brand-dark mb-1">
                      {val.title}
                    </h3>
                    <p className="font-sans text-sm text-brand-dark/60 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: High-End Food Styling Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Background glowing/pastel decorative frames */}
            <div className="absolute top-4 -left-4 w-full h-full border border-brand-green/20 rounded-[2.5rem] -z-10 animate-float-slow" />
            <div className="absolute -top-4 left-4 w-full h-full border border-brand-rose/25 rounded-[2.5rem] -z-10 animate-float-fast" />

            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform hover:-rotate-1 transition-transform duration-500 bg-brand-rose/5">
              <img
                src={essenceMexican}
                alt="Manos cortando pitahayas orgánicas de forma artesanal en México"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent flex items-end p-8 text-white">
                <div>
                  <span className="font-sans text-xs font-bold text-brand-soft-rose tracking-widest uppercase">
                    Cosecha Sustentable
                  </span>
                  <p className="font-serif text-xl font-bold mt-1">
                    Directo del campo mexicano a tu hogar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
