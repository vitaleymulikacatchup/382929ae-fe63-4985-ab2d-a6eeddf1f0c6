import React from 'react';

const Hero = () => {
  return (
    <section className="hero-bg py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 leading-tight">
          Starbucks<span className="font-normal">®</span> at Home
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
          Насолоджуйтесь улюбленою кавою Starbucks вдома з нашою колекцією преміальних кавових продуктів
        </p>
        <button className="btn-primary text-lg px-8 py-4">
          Дізнатися більше
        </button>
      </div>
    </section>
  );
};

export default Hero;