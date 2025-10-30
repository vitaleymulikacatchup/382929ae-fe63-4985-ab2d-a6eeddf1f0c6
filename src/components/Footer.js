import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-starbucks-dark-green text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Про нас</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Наша компанія</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Наша кава</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Історії та новини</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Інвестори</a></li>
            </ul>
          </div>
          
          {/* Careers */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Кар'єра</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Культура та цінності</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Інклюзивність та різноманітність</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Студентські можливості</a></li>
            </ul>
          </div>
          
          {/* Social Impact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Соціальний вплив</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Люди</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Планета</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Екологічна відповідальність</a></li>
            </ul>
          </div>
          
          {/* For Business Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Для бізнес-партнерів</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Постачальники</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Корпоративні продажі</a></li>
            </ul>
          </div>
        </div>
        
        {/* Social Media and Bottom Links */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Політика конфіденційності</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Умови використання</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">CA Supply Chain Act</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Preferences</a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-400">
            <p>© 2024 Starbucks Coffee Company. Всі права захищені.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;