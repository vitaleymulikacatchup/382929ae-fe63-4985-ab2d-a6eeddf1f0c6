import React from 'react';
import { Search, Globe, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-starbucks-green font-medium">
              Про каву Starbucks®
            </a>
            <a href="#" className="text-gray-700 hover:text-starbucks-green font-medium">
              Зробити вдома
            </a>
            <a href="#" className="text-gray-700 hover:text-starbucks-green font-medium">
              Дізнатися більше
            </a>
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/images/starbucks-logo.png" 
              alt="Starbucks" 
              className="h-12 w-12"
            />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Пошук" 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-starbucks-green focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
            <button className="p-2 text-gray-700 hover:text-starbucks-green">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-700 hover:text-starbucks-green">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;