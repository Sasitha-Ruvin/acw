import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const ShippingSection: React.FC<{ onBackToCart: () => void; onContinueToOrderSummary: () => void; }> = ({ onBackToCart, onContinueToOrderSummary }) => {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState<Product[]>([]);
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
    email: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery');
  const [transferSlip, setTransferSlip] = useState<File | null>(null);
  const [transferSlipBase64, setTransferSlipBase64] = useState<string | null>(null); // Separate state for base64
  const [isTransferSlipRequired, setIsTransferSlipRequired] = useState(false);
  const [transferSlipError, setTransferSlipError] = useState('');

  // Fetch cart data from localStorage
  useEffect(() => {
    const storedCartData = localStorage.getItem('cartData');
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPaymentMethod = e.target.value;
    setPaymentMethod(selectedPaymentMethod);
    setIsTransferSlipRequired(selectedPaymentMethod === 'Bank Transfer');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setTransferSlip(file); // Store the raw file
  
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result?.toString().split(',')[1]; // Get the base64 string part
        setTransferSlipBase64(base64String || null); // Store the base64 string
        setTransferSlipError(''); // Clear error on valid upload
  
        // Save the transfer slip base64 to localStorage
        localStorage.setItem('transferSlip', JSON.stringify(base64String));
      };
      reader.readAsDataURL(file); // Read the file as data URL
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the full shipping and payment details
    const shippingAndPaymentDetails = {
      ...shippingDetails,
      paymentMethod,
      transferSlip: transferSlipBase64, // Use the base64 string here
    };

    // Save shipping and payment details to localStorage
    localStorage.setItem('shippingDetails', JSON.stringify(shippingAndPaymentDetails));
    localStorage.setItem('cartData', JSON.stringify(cartData));

    // Redirect to order summary page
    onContinueToOrderSummary();
  };

  const isFreeShipping = cartData.length >= 3 || cartData.some((item) => item.quantity >= 3);
  const shippingCost = isFreeShipping ? 0 : 400;
  const subtotal = cartData.reduce((total, product) => total + product.price * product.quantity, 0);
  const total = subtotal + shippingCost;

  return (
    <div className="container mx-auto py-10 px-4 md:px-10">
      <h2 className="text-3xl font-bold mb-6">Shipping Information</h2>
      <div className="flex flex-col md:flex-row justify-between">
        {/* Shipping Details Form */}
        <div className="w-full md:w-1/2 space-y-4">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={shippingDetails.name}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Address</label>
              <input
                type="text"
                name="address"
                value={shippingDetails.address}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">City</label>
              <input
                type="text"
                name="city"
                value={shippingDetails.city}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={shippingDetails.postalCode}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={shippingDetails.phone}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={shippingDetails.email}
                onChange={handleInputChange}
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>

            {/* Payment Section */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-4">Payment Method</h3>

              <div className="mb-4">
                <label className="block mb-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={paymentMethod === 'Cash on Delivery'}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  Cash on Delivery
                </label>

                <label className="block mb-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Bank Transfer"
                    checked={paymentMethod === 'Bank Transfer'}
                    onChange={handlePaymentMethodChange}
                    className="mr-2"
                  />
                  Bank Transfer
                </label>
              </div>

              {paymentMethod === 'Bank Transfer' && (
                <div className="mb-4">
                  <p className="mb-2">
                    <strong>Make Payment to:</strong><br />
                    Nature Miracle Beauty Cosmetics (Pvt) Ltd<br />
                    037100320065869<br />
                    People's Bank, Bandarawela Branch
                  </p>

                  <label className="block font-semibold mb-2">Upload Transfer Slip:</label>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    accept="image/*"
                    className="block w-full border p-2"
                  />
                  {transferSlipError && (
                    <p className="text-red-500 text-sm mt-1">{transferSlipError}</p>
                  )}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-700 transition mt-4"
            >
              Check Out
            </button>
          </form>

          {/* Back to Cart Button */}
          <button
            onClick={onBackToCart}
            className="w-full bg-gray-300 text-black py-3 rounded-md hover:bg-gray-400 transition mt-4"
          >
            Back to Cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8 bg-gray-100 p-6 rounded-md">
          <h3 className="text-xl font-semibold mb-4">Order Summary</h3>

          {/* Product List */}
          {cartData.map((product) => (
            <div key={product.id} className="flex items-center justify-between mb-2">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover mr-2" />
              <span className="flex-grow">{product.name} (x{product.quantity})</span>
              <span>Rs. {product.price * product.quantity}</span>
            </div>
          ))}

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
        </div>
      </div>
    </div>
  );
};

export default ShippingSection;
