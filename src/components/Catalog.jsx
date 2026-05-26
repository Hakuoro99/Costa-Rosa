import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Star, X, Check, Eye, Plus, Minus, Leaf } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Nieve Artesanal de Pitahaya',
    image: '/nieve_pitaya.png',
    category: 'Nieves',
    description: 'Nieve gourmet cremosa elaborada a mano con pulpa natural de pitahaya rosa y un toque de limón fresco.',
    price: 30.0,
    sizes: [
      { label: 'Copa Chica (1 Bola)', price: 30.0 },
      { label: 'Copa Mediana (2 Bolas)', price: 60.0 },
      { label: 'Envase Familiar (1 Litro)', price: 130.0 }
    ],
    ingredients: 'Pulpa de pitahaya rosa orgánica, agua de manantial purificada, miel de agave orgánica, jugo de limón de Colima.',
    rating: 4.9,
    reviews: 124,
    nutrition: { kcal: '78 kcal', carb: '16g', protein: '1.2g', fat: '0.1g' },
    badge: 'Más Vendido',
  },
  {
    id: 2,
    name: 'Chamoy de Pitahaya Natural',
    image: '/chamoy_pitaya.png',
    category: 'Salsas',
    description: 'Chamoy premium artesanal endulzado de forma natural, combinando chiles secos selectos y el dulzor de la pitahaya.',
    price: 50.0,
    ingredients: 'Pitahaya rosa deshidratada, pulpa de tamarindo natural, flor de Jamaica, mezcla de chiles anchos y guajillo, sal de mar.',
    rating: 5.0,
    reviews: 86,
    nutrition: { kcal: '45 kcal', carb: '9g', protein: '0.8g', fat: '0.0g' },
    badge: 'Receta Secreta',
  },
  {
    id: 3,
    name: 'Chile con Pitahaya Gourmet',
    image: '/chile_pitaya.png',
    category: 'Sazonadores',
    description: 'Mezcla única de chiles secos molidos con pitahaya liofilizada. El balance perfecto entre picor y acidez tropical.',
    price: 30.0,
    ingredients: 'Chiles secos seleccionados, pitahaya liofilizada en polvo, sal de mar fina, ácido cítrico natural, toque de limón deshidratado.',
    rating: 4.8,
    reviews: 62,
    nutrition: { kcal: '12 kcal', carb: '2.5g', protein: '0.3g', fat: '0.0g' },
    badge: '100% Artesanal',
  },
  {
    id: 4,
    name: 'Pitahayas Orgánicas Frescas',
    image: '/hero_pitaya.png',
    category: 'Cosecha',
    description: 'Cesta de pitahayas (dragonfruit) frescas orgánicas recién recolectadas de nuestros huertos. Exquisitez jugosa llena de hidratación.',
    price: 80.0,
    unit: 'Kilo',
    ingredients: '100% Pitahayas frescas cosechadas localmente de manera sostenible.',
    rating: 4.9,
    reviews: 98,
    nutrition: { kcal: '50 kcal', carb: '12g', protein: '1.1g', fat: '0.4g' },
    badge: 'Recién Cosechadas',
  },
];

export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    if (product.sizes) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize(null);
    }
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setSelectedSize(null);
  };

  const handleAddToCart = (product, count) => {
    setCartCount(prev => prev + count);
    const details = selectedSize ? ` (${selectedSize.label})` : '';
    setToastMessage(`¡Agregaste ${count} ${product.name}${details} al carrito!`);
    setTimeout(() => setToastMessage(''), 3000);
    handleCloseModal();
  };

  const handleCheckout = () => {
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setCartCount(0);
    }, 4000);
  };

  // Price calculations
  const getProductUnitPrice = (product) => {
    if (product.id === 1 && selectedSize) {
      return selectedSize.price;
    }
    return product.price;
  };

  return (
    <section id="productos" className="py-24 bg-brand-soft-rose/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-brand-green/10 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-brand-rose/5 blur-3xl" />

      {/* Floating cart action button if items are in cart */}
      {cartCount > 0 && (
        <div
          onClick={handleCheckout}
          className="fixed bottom-8 right-8 z-40 bg-brand-rose text-white p-4 rounded-full shadow-2xl flex items-center gap-2 cursor-pointer hover:bg-brand-rose/90 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white"
        >
          <ShoppingCart size={24} />
          <span className="font-sans font-bold text-sm bg-white text-brand-rose w-6 h-6 rounded-full flex items-center justify-center">
            {cartCount}
          </span>
          <span className="font-sans font-bold text-xs pr-1 hidden sm:inline">Comprar ya</span>
        </div>
      )}

      {/* Toast Notification */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        {toastMessage && (
          <div className="bg-brand-dark text-white font-sans font-medium text-sm py-3 px-6 rounded-full shadow-2xl border border-white/10 flex items-center gap-2 animate-bounce">
            <Check size={16} className="text-brand-green" />
            {toastMessage}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-rose/10 text-brand-rose text-xs font-bold tracking-wider mb-4 border border-brand-rose/25">
            <Leaf size={12} />
            CATÁLOGO EXCLUSIVO
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-dark mb-6 leading-tight">
            Nuestros Sabores <span className="text-brand-rose">Artesanales</span>
          </h2>
          <p className="font-sans text-base text-brand-dark/70 leading-relaxed">
            Cada uno de nuestros productos está elaborado con pitahayas frescas cosechadas de manera sostenible,
            ingredientes 100% orgánicos y bajo procesos artesanales tradicionales mexicanos.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-brand-soft-rose/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Container */}
              <div className="relative aspect-square overflow-hidden bg-brand-soft-rose/5 border-b border-brand-dark/5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Custom Badge */}
                <span className="absolute top-4 left-4 bg-brand-dark/80 backdrop-blur-md text-white font-sans font-semibold text-xs px-3 py-1 rounded-full border border-white/10">
                  {product.badge}
                </span>

                {/* Quick View Button overlay */}
                <div className="absolute inset-0 bg-brand-rose/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => handleOpenModal(product)}
                    className="flex items-center gap-2 bg-white text-brand-dark hover:bg-brand-rose hover:text-white font-sans font-semibold text-sm py-2.5 px-5 rounded-full shadow-lg transition-colors duration-300"
                  >
                    <Eye size={16} />
                    Ver Detalles
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-sans text-xs font-semibold text-brand-green tracking-wide uppercase">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-brand-coral text-brand-coral" />
                      <span className="font-sans text-xs font-bold text-brand-dark">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-brand-dark group-hover:text-brand-rose transition-colors duration-300 mb-2">
                    {product.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-dark/60 leading-relaxed line-clamp-2 mb-4">
                    {product.description}
                  </p>
                </div>

                <div>
                  <div className="flex items-center justify-between pt-4 border-t border-brand-dark/5">
                    <span className="font-serif text-lg font-extrabold text-brand-dark">
                      {product.sizes ? `Desde $${product.sizes[0].price.toFixed(2)}` : `$${product.price.toFixed(2)}`}{' '}
                      <span className="text-xs font-sans text-brand-dark/50 font-normal">
                        MXN{product.unit ? ` / ${product.unit}` : ''}
                      </span>
                    </span>
                    <button
                      onClick={() => handleOpenModal(product)}
                      className="p-2.5 rounded-full bg-brand-rose/10 hover:bg-brand-rose text-brand-rose hover:text-white transition-colors duration-300"
                    >
                      <ShoppingCart size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-brand-soft-rose/20 shadow-2xl relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 p-2 rounded-full bg-brand-dark/5 hover:bg-brand-dark/10 text-brand-dark transition-colors duration-300 z-10"
            >
              <X size={18} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
              {/* Product Photo */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-brand-soft-rose/5 border border-brand-dark/5 shadow-inner">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="font-sans text-xs font-bold text-brand-green uppercase tracking-wide">
                    {selectedProduct.category}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-brand-dark mt-1 mb-2 leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-4">
                    <Star size={16} className="fill-brand-coral text-brand-coral" />
                    <span className="font-sans text-sm font-bold text-brand-dark">{selectedProduct.rating}</span>
                    <span className="font-sans text-xs text-brand-dark/40">({selectedProduct.reviews} opiniones)</span>
                  </div>

                  <p className="font-sans text-sm text-brand-dark/70 leading-relaxed mb-4">
                    {selectedProduct.description}
                  </p>

                  {/* Size Selector for Nieves */}
                  {selectedProduct.sizes && (
                    <div className="mb-4">
                      <h4 className="font-serif text-sm font-bold text-brand-dark mb-2">Selecciona el Tamaño:</h4>
                      <div className="flex flex-col gap-2">
                        {selectedProduct.sizes.map((size) => (
                          <label
                            key={size.label}
                            className={`flex items-center justify-between p-2.5 rounded-xl border cursor-pointer transition-all ${
                              selectedSize?.label === size.label
                                ? 'border-brand-rose bg-brand-rose/5 font-semibold text-brand-rose'
                                : 'border-brand-dark/10 hover:border-brand-dark/20 text-brand-dark'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="product-size"
                                checked={selectedSize?.label === size.label}
                                onChange={() => setSelectedSize(size)}
                                className="accent-brand-rose h-4 w-4"
                              />
                              <span className="font-sans text-xs">{size.label}</span>
                            </div>
                            <span className="font-serif text-xs font-bold">${size.price.toFixed(2)} MXN</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="font-serif text-sm font-bold text-brand-dark mb-1">Ingredientes Naturales:</h4>
                    <p className="font-sans text-xs text-brand-dark/60 leading-relaxed">
                      {selectedProduct.ingredients}
                    </p>
                  </div>

                  {/* Nutrition stats */}
                  <div className="bg-brand-green/5 rounded-2xl p-4 border border-brand-green/10 mb-6">
                    <div className="flex items-center gap-1.5 font-serif text-xs font-bold text-brand-green mb-2.5">
                      <Leaf size={14} /> VALOR NUTRICIONAL (Por porción)
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      <div className="bg-white p-2 rounded-xl border border-brand-green/10">
                        <p className="font-sans text-[10px] text-brand-dark/50">Calorías</p>
                        <p className="font-serif text-xs font-extrabold text-brand-green">{selectedProduct.nutrition.kcal}</p>
                      </div>
                      <div className="bg-white p-2 rounded-xl border border-brand-green/10">
                        <p className="font-sans text-[10px] text-brand-dark/50">Carbs</p>
                        <p className="font-serif text-xs font-extrabold text-brand-green">{selectedProduct.nutrition.carb}</p>
                      </div>
                      <div className="bg-white p-2 rounded-xl border border-brand-green/10">
                        <p className="font-sans text-[10px] text-brand-dark/50">Proteína</p>
                        <p className="font-serif text-xs font-extrabold text-brand-green">{selectedProduct.nutrition.protein}</p>
                      </div>
                      <div className="bg-white p-2 rounded-xl border border-brand-green/10">
                        <p className="font-sans text-[10px] text-brand-dark/50">Grasas</p>
                        <p className="font-serif text-xs font-extrabold text-brand-green">{selectedProduct.nutrition.fat}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Purchase interface */}
                <div>
                  <div className="flex items-center justify-between py-4 border-t border-brand-dark/5 mb-4">
                    <span className="font-sans text-xs text-brand-dark/50 font-bold uppercase tracking-wider">Precio Total</span>
                    <span className="font-serif text-2xl font-extrabold text-brand-dark">
                      ${(getProductUnitPrice(selectedProduct) * quantity).toFixed(2)}{' '}
                      <span className="text-xs font-sans font-normal text-brand-dark/50">
                        MXN{selectedProduct.unit ? ` / ${selectedProduct.unit}` : ''}
                      </span>
                    </span>
                  </div>

                  <div className="flex gap-4">
                    {/* Quantity selectors */}
                    <div className="flex items-center gap-1 bg-brand-dark/5 rounded-full p-1 border border-brand-dark/5">
                      <button
                        onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                        className="p-2 rounded-full hover:bg-white text-brand-dark transition-all"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-sans font-bold text-sm w-6 text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(prev => prev + 1)}
                        className="p-2 rounded-full hover:bg-white text-brand-dark transition-all"
                      >
                        <Plus size={14} />
                      </button>
                    </div>

                    <button
                      onClick={() => handleAddToCart(selectedProduct, quantity)}
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-brand-rose hover:bg-brand-rose/90 text-white font-sans font-semibold rounded-full shadow-lg shadow-brand-rose/25 hover:shadow-brand-rose/35 active:scale-95 transition-all duration-300"
                    >
                      <ShoppingCart size={18} />
                      Añadir al Pedido
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Thank You Simulated Checkout modal */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center border border-brand-soft-rose/20 shadow-2xl relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-brand-green/15 blur-2xl" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-brand-rose/15 blur-2xl" />

            <div className="w-16 h-16 rounded-full bg-brand-green/10 border-2 border-brand-green text-brand-green flex items-center justify-center mx-auto mb-6">
              <Check size={36} className="stroke-[3]" />
            </div>

            <h3 className="font-serif text-3xl font-extrabold text-brand-dark mb-3">
              ¡Pedido Simulado con Éxito!
            </h3>
            <p className="font-sans text-sm text-brand-dark/70 leading-relaxed mb-6">
              Muchas gracias por comprar en **Costa Rosa**. Hemos recibido tu simulación de pedido gourmet de pitahaya.
              ¡Pronto estarás saboreando la máxima frescura tropical!
            </p>

            <div className="bg-brand-soft-rose/10 border border-brand-soft-rose/15 rounded-2xl p-4 text-left font-sans text-xs text-brand-dark/65 leading-relaxed">
              <p className="font-serif text-xs font-bold text-brand-rose mb-1.5">Resumen de la Simulación:</p>
              <ul className="list-disc pl-4 space-y-1">
                <li>Boutique: Costa Rosa Guadalajara / CDMX</li>
                <li>Método de envío: Envío Exprés Gourmet (Refrigerado)</li>
                <li>Estado: Procesado</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
