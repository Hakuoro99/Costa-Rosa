import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

// Static asset imports
import heroPitaya from '../assets/hero_pitaya.png';
import nievePitaya from '../assets/nieve_pitaya.png';
import chamoyPitaya from '../assets/chamoy_pitaya.png';
import essenceMexican from '../assets/essence_mexican.png';
import chilePitaya from '../assets/chile_pitaya.png';
import snacksPitaya from '../assets/snacks_pitaya.png';

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

const galleryItems = [
  {
    image: heroPitaya,
    title: 'Frescura Silvestre',
    size: 'col-span-1 row-span-2',
    aspect: 'aspect-[9/16]',
  },
  {
    image: nievePitaya,
    title: 'Nieve Cremosa',
    size: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    image: chamoyPitaya,
    title: 'Chamoy Gourmet',
    size: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    image: essenceMexican,
    title: 'Manos Artesanas',
    size: 'col-span-2 row-span-1',
    aspect: 'aspect-[16/9]',
  },
  {
    image: chilePitaya,
    title: 'Toque de Picor',
    size: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
  {
    image: snacksPitaya,
    title: 'Chips Crujientes',
    size: 'col-span-1 row-span-1',
    aspect: 'aspect-square',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-brand-soft-rose/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold tracking-wider mb-4 border border-brand-coral/25">
            <Instagram size={12} />
            MOMENTOS COSTA ROSA
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
            Galería <span className="text-brand-rose">Tropical</span> Gourmet
          </h2>
          <p className="font-sans text-base text-brand-dark/70 leading-relaxed">
            Explora la belleza y el color de nuestra cocina artesanal. Síguenos y comparte tu experiencia
            saludable con el hashtag <span className="text-brand-rose font-semibold">#CostaRosaPitahaya</span>.
          </p>
        </div>

        {/* Masonry/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[200px] lg:auto-rows-[220px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-[2rem] border-2 border-white bg-brand-soft-rose/5 shadow-md group ${item.size}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Hover overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <span className="font-sans text-xs text-brand-soft-rose font-bold uppercase tracking-wider flex items-center gap-1">
                      <Sparkles size={10} />
                      Costa Rosa
                    </span>
                    <h3 className="font-serif text-lg font-bold mt-0.5">{item.title}</h3>
                  </div>
                  <div className="p-2.5 rounded-full bg-white/20 backdrop-blur-sm hover:bg-brand-rose/90 transition-colors cursor-pointer">
                    <Heart size={16} className="fill-white stroke-none" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-brand-dark hover:bg-brand-rose text-white font-sans font-semibold rounded-full shadow-lg transition-colors duration-300"
          >
            <Instagram size={18} />
            Síguenos en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
