import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Pike Place Roast',
      type: 'Мелена кава',
      image: '/images/pike-place.png',
      description: 'Наша фірмова суміш з багатим смаком'
    },
    {
      id: 2,
      name: 'Veranda Blend',
      type: 'Цільні зерна',
      image: '/images/veranda-blend.png',
      description: 'М\'яке та збалансоване обсмаження'
    },
    {
      id: 3,
      name: 'Breakfast Blend',
      type: 'K-Cup® капсули',
      image: '/images/breakfast-blend.png',
      description: 'Ідеальний початок дня'
    }
  ];

  return (
    <section className="py-20 bg-starbucks-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Наша колекція
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Відкрийте для себе різноманітність смаків Starbucks у зручному домашньому форматі
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-8 text-center product-shadow hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-48 h-48 mx-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-starbucks-green font-medium mb-3">
                {product.type}
              </p>
              <p className="text-gray-600 mb-6">
                {product.description}
              </p>
              <button className="btn-secondary">
                Дізнатися більше
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;