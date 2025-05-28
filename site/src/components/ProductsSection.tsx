
import React from 'react';
import { Cake, Cookie, Heart } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      title: "Bolos Personalizados",
      description: "Bolos únicos para suas celebrações especiais",
      icon: <Cake className="w-12 h-12 text-pink-500" />,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
      title: "Docinhos Gourmet",
      description: "Brigadeiros, beijinhos e muito mais",
      icon: <Heart className="w-12 h-12 text-purple-500" />,
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop"
    },
    {
      title: "Cookies Artesanais",
      description: "Cookies fresquinhos e saborosos",
      icon: <Cookie className="w-12 h-12 text-pink-500" />,
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Nossos Produtos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cada doce é uma obra de arte feita com ingredientes premium e muito amor
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-6">
                {product.icon}
              </div>
              
              <div className="aspect-w-4 aspect-h-3 mb-6 rounded-xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-bold text-purple-800 mb-3 text-center">
                {product.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
