
import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-purple-100 via-pink-50 to-purple-200 min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 text-pink-300 opacity-60">
        <Heart size={40} />
      </div>
      <div className="absolute top-40 right-20 text-purple-300 opacity-60">
        <Sparkles size={35} />
      </div>
      <div className="absolute bottom-40 left-20 text-pink-300 opacity-40">
        <Heart size={30} />
      </div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-800 mb-6 leading-tight">
              Doces que
              <span className="text-pink-500 block">Encantam</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Criamos momentos especiais com nossos doces artesanais. 
              Cada receita é feita com carinho e ingredientes selecionados 
              para tornar sua ocasião ainda mais doce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#products" 
                className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors font-semibold shadow-lg"
              >
                Ver Produtos
              </a>
              <a 
                href="tel:+5564992677817" 
                className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors font-semibold shadow-lg"
              >
                Fazer Pedido
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/ab78cc66-fe69-471f-8376-b707285e78ad.png" 
                alt="Cidimily Doceria Logo" 
                className="w-80 h-80 object-contain animate-pulse"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
