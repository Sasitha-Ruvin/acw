import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const OrderSummary = () => {
  const [cartData, setCartData] = useState<Product[]>([]);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    email: '',
    paymentMethod: 'Cash on Delivery', // Default value
  });
  const [transferSlipBase64, setTransferSlipBase64] = useState<string | null>(null);

  // Fetch saved data from localStorage
  useEffect(() => {
    const storedCartData = localStorage.getItem('cartData');
    const storedShippingDetails = localStorage.getItem('shippingDetails');
    const storedTransferSlip = localStorage.getItem('transferSlip');

    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }

    if (storedShippingDetails) {
      setShippingDetails(JSON.parse(storedShippingDetails));
    }

    if (storedTransferSlip) {
      setTransferSlipBase64(JSON.parse(storedTransferSlip));
    }
  }, []);

  const isFreeShipping = cartData.length >= 3 || cartData.some((item) => item.quantity >= 3);
  const shippingCost = isFreeShipping ? 0 : 400;
  const subtotal = cartData.reduce((total, product) => total + product.price * product.quantity, 0);
  const total = subtotal + shippingCost;

  // OrderSummary.tsx
const handleConfirmOrder = () => {
    const emailData = {
        name: shippingDetails.name,
        email: shippingDetails.email,
        address: shippingDetails.address,
        phone: shippingDetails.phone,
        paymentMethod: shippingDetails.paymentMethod, // Include payment method
        // transferSlip: transferSlipBase64 ? `data:image/png;base64,${transferSlipBase64}` : null, // Include transfer slip
        products: cartData.map((product) => `${product.name} (x${product.quantity})`).join(', '),
        shippingCost: shippingCost,
        total: total,
    };

    // Send email using EmailJS
    emailjs.send('service_nqsm0xo', 'template_vidhnc3', emailData, 'XnoWvLpePBYR2r11y')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
         // Clear local storage after sending email successfully
         localStorage.removeItem('cartData');
         localStorage.removeItem('cart');
         localStorage.removeItem('shippingDetails');
      })
      .catch((error) => {
        console.error('Failed to send email. Error:', error);
      });
};


  return (
    <div className="container mx-auto py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold mb-6 flex justify-center items-center text-center">Your Order</h2>
      <div className="bg-gray-100 p-6 rounded-md w-4/5 mx-auto">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Shipping Details</h3>
          <p className='text-lg'>Name: {shippingDetails.name}</p>
          <p className='text-lg'>E-mail: {shippingDetails.email}</p>
          <p className='text-lg'>Phone: {shippingDetails.phone}</p>
          <p className='text-lg'>Address: {shippingDetails.address}</p>
          <p className='text-lg'>City: {shippingDetails.city}</p>
          <p className='text-lg'>Postal Code: {shippingDetails.postalCode}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Products</h3>
          {cartData.map((product) => (
            <div key={product.id} className="flex items-center justify-between mb-4">
              <img src={product.image} alt={product.name} className="w-[10%] h-[10%] object-cover mr-2" />
              <span className="flex-grow text-lg">{product.name} (x{product.quantity})</span>
              <span>Rs. {product.price * product.quantity}</span>
            </div>
          ))}

          <div className="flex justify-between mb-2">
            <span className='text-lg'>Subtotal</span>
            <span className='text-lg'>Rs. {subtotal}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className='text-lg'>Shipping</span>
            <span className='text-lg'>{isFreeShipping ? 'Free' : `Rs. ${shippingCost}`}</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span className='text-lg'>Total</span>
            <span className='text-lg'>Rs. {total}</span>
          </div>
        </div>

        <button
          onClick={handleConfirmOrder}
          className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-700 transition"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
};
