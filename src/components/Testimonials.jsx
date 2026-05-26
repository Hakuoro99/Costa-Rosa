import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MessageSquare } from 'lucide-react';

const reviews = [
  {
    name: 'Sofía Valenzuela',
    role: 'Nutrióloga y Creadora de Contenido',
    location: 'Guadalajara, Jal.',
    quote: 'La nieve de pitahaya de Costa Rosa es una obra de arte. Tiene el balance perfecto de dulzura natural sin azúcares añadidos. ¡Mis pacientes y yo la amamos por completo!',
    stars: 5,
    avatarColor: 'bg-brand-rose/10 text-brand-rose',
  },
  {
    name: 'Mateo Cárdenas',
    role: 'Chef de Repostería Creativa',
    location: 'CDMX, México',
    quote: 'El chamoy de pitahaya es verdaderamente revolucionario. Aporta una acidez y dulzura frutal única que eleva cualquier platillo o snack tropical. Calidad impecable.',
    stars: 5,
    avatarColor: 'bg-brand-green/10 text-brand-green',
  },
  {
    name: 'Valentina Mendoza',
    role: 'Entusiasta del Fitness y Estilo de Vida',
    location: 'Monterrey, N.L.',
    quote: 'Las pitahayas frescas son mis favoritas para después de entrenar. Se siente la frescura y naturalidad de la fruta real en cada jugoso bocado. 100% recomendado.',
    stars: 5,
    avatarColor: 'bg-brand-coral/10 text-brand-coral',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-white relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-rose/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold tracking-wider mb-4 border border-brand-green/20">
            <MessageSquare size={12} />
            TESTIMONIOS REALES
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
            Opiniones de Nuestra <span className="text-brand-green">Comunidad</span>
          </h2>
          <p className="font-sans text-base text-brand-dark/70 leading-relaxed">
            Descubre por qué los amantes de la comida saludable y los profesionales gastronómicos prefieren la frescura
            y artesanía mexicana de Costa Rosa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl border border-brand-soft-rose/20 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote icon watermark */}
              <div className="absolute top-6 right-8 text-brand-rose/5 pointer-events-none group-hover:scale-110 transition-transform">
                <Quote size={56} className="fill-brand-rose/5" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-brand-coral text-brand-coral stroke-[1.5]"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-sans text-base text-brand-dark/75 italic leading-relaxed mb-8">
                  "{rev.quote}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-4 pt-6 border-t border-brand-dark/5">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-serif text-lg font-bold ${rev.avatarColor}`}>
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-brand-dark">{rev.name}</h4>
                  <p className="font-sans text-xs text-brand-dark/50">{rev.role}</p>
                  <p className="font-sans text-[10px] text-brand-green font-bold tracking-wider uppercase mt-0.5">{rev.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
