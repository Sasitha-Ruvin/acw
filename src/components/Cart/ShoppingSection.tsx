import React from 'react';
import { useCart } from '../../context/CartContext';

interface CartSectionProps {
  onContinueToShipping: () => void;
}

const CartSection: React.FC<CartSectionProps> = ({ onContinueToShipping }) => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Function to handle 'Continue to Shipping' and save cart data to local storage
  const handleContinueToShipping = () => {
    localStorage.setItem('cartData', JSON.stringify(cart));
    onContinueToShipping(); // Trigger the next step to go to the Shipping section
  };

  if (cart.length === 0) {
    return <div className="text-center py-10">Your cart is empty.</div>;
  }


  // Calculate total quantity of items in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const isFreeShipping = totalQuantity >= 3; // Free shipping if total quantity is 3 or more
  const shippingCost = isFreeShipping ? 0 : 400;
  const subtotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);
  const total = subtotal + shippingCost;
  return (
    <div className="container py-10 px-10">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="flex flex-col md:flex-row justify-between">
        {/* Cart Items */}
        <div className="w-full md:w-1/2 space-y-6">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <img src={product.image} alt={product.name} className="w-28 h-28 object-cover rounded-md" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-gray-600">Rs. {product.price}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button onClick={() => updateQuantity(product.id, product.quantity - 1)} disabled={product.quantity === 1}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8 bg-gray-100 p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          {/* Subtotal */}
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>Rs. {subtotal}</span>
          </div>

          {/* Shipping */}
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>{isFreeShipping ? "Free" : `Rs. ${shippingCost}`}</span>
          </div>

          {/* Total */}
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>Rs. {total}</span>
          </div>

          <button
            className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-700 transition"
            onClick={handleContinueToShipping}
          >
            Continue to Shipping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
