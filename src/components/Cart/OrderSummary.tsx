import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export const OrderSummary = () => {
  const [cartData, setCartData] = useState<Product[]>([]);
  const navigate = useNavigate();
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    email: '',
    paymentMethod: 'Cash on Delivery', // Default value
    transferSlip: null, // Add transfer slip here
  });

  // Fetch saved data from localStorage
  useEffect(() => {
    const storedCartData = localStorage.getItem('cartData');
    const storedShippingDetails = localStorage.getItem('shippingDetails');
    const storedTransferSlip = localStorage.getItem('transferSlip');

    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }

    if (storedShippingDetails) {
      const parsedShippingDetails = JSON.parse(storedShippingDetails);
      setShippingDetails({
        ...parsedShippingDetails,
        transferSlip: storedTransferSlip ? JSON.parse(storedTransferSlip) : null,
      });
    }
  }, []);

  const isFreeShipping = cartData.length >= 3 || cartData.some((item) => item.quantity >= 3);
  const shippingCost = isFreeShipping ? 0 : 400;
  const subtotal = cartData.reduce((total, product) => total + product.price * product.quantity, 0);
  const total = subtotal + shippingCost;

  const handleConfirmOrder = () => {
    const emailData = {
      name: shippingDetails.name,
      email: shippingDetails.email,
      address: shippingDetails.address,
      phone: shippingDetails.phone,
      paymentMethod: shippingDetails.paymentMethod, // Include payment method
      transferSlip: shippingDetails.transferSlip ? shippingDetails.transferSlip : 'No transfer slip uploaded', 
      products: cartData.map((product) => `${product.name} (x${product.quantity})`).join(', '),
      shippingCost: shippingCost,
      total: total,
    };

    // Send email using EmailJS
    emailjs
      .send('service_nqsm0xo', 'template_vidhnc3', emailData, 'XnoWvLpePBYR2r11y')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // Clear local storage after sending email successfully
        Swal.fire({
          icon: 'success',
          title: 'Order Confirmed!',
          text: 'Your order was placed successfully, your order will be delivered soon.',
          confirmButtonText: 'OK',
          timer: 3000,
          toast: true,
          position: 'center',
          showConfirmButton: true,
          timerProgressBar: true,
        }).then(() => {
          localStorage.removeItem('cartData');
          localStorage.removeItem('shippingDetails');
          localStorage.removeItem('transferSlip');
          navigate('/products');
        });
      })
      .catch((error) => {
        console.error('Failed to send email. Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again.',
        });
      });
  };

  return (
    <div className="w-full md:w-3/4 lg:w-3/4 mx-auto py-10 px-4 md:px-10"> 
      <h2 className="text-3xl font-bold mb-6 flex justify-center items-center text-center">Your Order</h2>
      <div className="bg-gray-100 p-6 rounded-md w-full">
      <div className="mb-6">
        <h3 className="font-bold mb-2 flex justify-center items-center text-xl">Shipping Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Section - Name, Email, Phone */}
          <div className="flex flex-col justify-center text-left md:mb-2">
            <p className="text-xl mb-1">Name: {shippingDetails.name}</p>
            <p className="text-xl mb-1">E-mail: {shippingDetails.email}</p>
            <p className="text-xl mb-1">Phone: {shippingDetails.phone}</p>
          </div>

          {/* Right Section - Address, City, Postal Code */}
          <div className="flex flex-col justify-center text-left">
            <p className="text-xl mb-1">Address: {shippingDetails.address}</p>
            <p className="text-xl mb-1">City: {shippingDetails.city}</p>
            <p className="text-xl mb-1">Postal Code: {shippingDetails.postalCode}</p>
          </div>
        </div>
      </div>


        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2">Products</h3>
          {cartData.map((product) => (
            <div key={product.id} className="flex flex-col md:flex-row items-center justify-between mb-4">
              <img src={product.image} alt={product.name} className="w-[50%] h-[50%] object-cover mb-2 md:mb-0 md:w-[10%] md:h-[10%] md:mr-2" />
              <div className="flex flex-col md:flex-row md:justify-between w-full">
                <span className="flex-grow text-lg">{product.name} (x{product.quantity})</span>
                <span className="text-lg">Rs. {product.price * product.quantity}</span>
              </div>
            </div>
          ))}

          <div className="flex justify-between mb-2">
            <span className="text-lg">Subtotal</span>
            <span className="text-lg">Rs. {subtotal}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span className="text-lg">Shipping</span>
            <span className="text-lg">{isFreeShipping ? 'Free' : `Rs. ${shippingCost}`}</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span className="text-lg">Total</span>
            <span className="text-lg">Rs. {total}</span>
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
