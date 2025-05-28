
import React from 'react';
import { Instagram, Phone, MapPin } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/ab78cc66-fe69-471f-8376-b707285e78ad.png" 
              alt="Cidimily Doceria" 
              className="h-16 w-16 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-purple-600">Cidimily</h1>
              <p className="text-sm text-gray-600">Doceria</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition-colors">Início</a>
            <a href="#products" className="text-gray-700 hover:text-purple-600 transition-colors">Produtos</a>
            <a href="#gallery" className="text-gray-700 hover:text-purple-600 transition-colors">Galeria</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">Contato</a>
          </nav>

          <div className="flex items-center space-x-3">
            <a 
              href="https://www.instagram.com/cidimily.doceria/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-700 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="tel:+5564992677817" 
              className="text-purple-500 hover:text-purple-700 transition-colors"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
