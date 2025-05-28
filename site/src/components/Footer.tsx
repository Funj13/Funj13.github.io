
import React from 'react';
import { Heart, Instagram, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-pink-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img 
                src="/lovable-uploads/ab78cc66-fe69-471f-8376-b707285e78ad.png" 
                alt="Cidimily Doceria" 
                className="h-12 w-12 object-contain bg-white rounded-full p-1"
              />
              <div>
                <h3 className="text-xl font-bold">Cidimily</h3>
                <p className="text-pink-200">Doceria</p>
              </div>
            </div>
            <p className="text-purple-100">
              Doces artesanais feitos com amor
            </p>
          </div>
          
          <div className="text-center">
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <a href="tel:+5564992677817" className="flex items-center justify-center gap-2 text-purple-100 hover:text-white">
                <Phone size={16} />
                (64) 99267-7817
              </a>
              <a 
                href="https://www.instagram.com/cidimily.doceria/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-purple-100 hover:text-white"
              >
                <Instagram size={16} />
                @cidimily.doceria
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-purple-100 mb-2">
              © 2024 Cidimily Doceria
            </p>
            <p className="text-pink-200 flex items-center justify-center md:justify-end gap-1">
              Feito com <Heart size={16} className="text-pink-300" /> para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
