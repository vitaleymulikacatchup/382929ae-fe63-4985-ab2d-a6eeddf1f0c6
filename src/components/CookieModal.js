import React from 'react';
import { X } from 'lucide-react';

const CookieModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 modal-overlay flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="flex items-center mb-4">
          <img 
            src="/images/starbucks-logo.png" 
            alt="Starbucks" 
            className="h-8 w-8 mr-3"
          />
          <h2 className="text-lg font-semibold text-gray-900">STARBUCKS</h2>
        </div>
        
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Ми використовуємо файли cookie та подібні технології, щоб надати вам персоналізований досвід роботи з веб-сайтом. Продовжуючи користуватися нашим веб-сайтом, ви погоджуєтеся з використанням файлів cookie відповідно до нашої Політики конфіденційності та Умов використання. Ви можете керувати налаштуваннями файлів cookie, натиснувши кнопку "Налаштування файлів cookie".
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={onClose}
            className="btn-primary flex-1"
          >
            Прийняти все
          </button>
          <button 
            onClick={onClose}
            className="btn-secondary flex-1"
          >
            Налаштування файлів cookie
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;