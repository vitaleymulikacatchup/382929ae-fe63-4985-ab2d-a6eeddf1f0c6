import React, { useState } from 'react';
import Header from './components/Header';
import CookieModal from './components/CookieModal';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';

function App() {
  const [showCookieModal, setShowCookieModal] = useState(true);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ProductShowcase />
      </main>
      <Footer />
      {showCookieModal && (
        <CookieModal onClose={() => setShowCookieModal(false)} />
      )}
    </div>
  );
}

export default App;