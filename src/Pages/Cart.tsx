import React, { useState } from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import ShippingSection from '../components/Cart/ShippingSection';
import CartSection from '../components/Cart/ShoppingSection';
import { OrderSummary } from '../components/Cart/OrderSummary';
// Import your OrderSummary component

export default function Cart() {
  const [currentSection, setCurrentSection] = useState<'cart' | 'shipping' | 'order'>('cart');

  const handleContinueToShipping = () => {
    setCurrentSection('shipping');
  };

  const handleBackToCart = () => {
    setCurrentSection('cart');
  };

  const handleContinueToOrderSummary = () => {
    setCurrentSection('order');
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto py-10">
        {currentSection === 'cart' && <CartSection onContinueToShipping={handleContinueToShipping} />}
        {currentSection === 'shipping' && (
          <ShippingSection onBackToCart={handleBackToCart} onContinueToOrderSummary={handleContinueToOrderSummary} />
        )}
        {currentSection === 'order' && <OrderSummary />}
      </main>
      <Footer />
    </div>
  );
}
