import React from 'react';
import { Phone, Instagram, MapPin, Clock, Heart } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Entre em Contato</h2>
          <p className="text-lg text-gray-600">
            Vamos tornar seu momento ainda mais especial
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
              <div className="bg-pink-500 p-3 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-800">Telefone/WhatsApp</h3>
                <a href="tel:+5564992677817" className="text-gray-600 hover:text-purple-600">
                  (64) 99267-7817
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <div className="bg-purple-500 p-3 rounded-full">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-800">Instagram</h3>
                <a 
                  href="https://www.instagram.com/cidimily.doceria/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-purple-600"
                >
                  @cidimily.doceria
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl">
              <div className="bg-pink-500 p-3 rounded-full">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-800">Atendimento</h3>
                <p className="text-gray-600">Segunda a Sábado<br />10h às 19h</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
            <div className="text-center mb-8">
              <img 
                src="/lovable-uploads/ab78cc66-fe69-471f-8376-b707285e78ad.png" 
                alt="Cidimily Doceria" 
                className="w-32 h-32 mx-auto object-contain mb-4"
              />
              <h3 className="text-2xl font-bold text-purple-800 mb-2">Cidimily Doceria</h3>
              <p className="text-gray-600 leading-relaxed">
                Criamos doces únicos para momentos especiais. 
                Entre em contato e vamos juntos planejar sua encomenda perfeita!
              </p>
            </div>
            
            <div className="flex justify-center">
              <a 
                href="tel:+5564992677817" 
                className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors font-semibold shadow-lg flex items-center gap-2"
              >
                <Heart size={20} />
                Fazer Pedido
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
