import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ShippingSection from '../components/Cart/ShippingSection';
import CartSection from '../components/Cart/ShoppingSection';

export default function Cart() {
  const [isShipping, setIsShipping] = useState(false);

  const handleContinueToShipping = () => {
    setIsShipping(true);
  };
  return (
    <div>
        <Navbar/>
        <main className="container mx-auto py-10">
        {isShipping ? (
          <ShippingSection />
        ) : (
          <CartSection onContinueToShipping={handleContinueToShipping} />
        )}
      </main>
        <Footer/>
    </div>
  )
}
