import React, { useState } from 'react';

const ShippingSection: React.FC = () => {
  const [shippingData, setShippingData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    district: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Shipping Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="firstName"
          value={shippingData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="border rounded-md p-2"
        />
        <input
          type="text"
          name="lastName"
          value={shippingData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="border rounded-md p-2"
        />
        <input
          type="email"
          name="email"
          value={shippingData.email}
          onChange={handleChange}
          placeholder="E-mail"
          className="border rounded-md p-2"
        />
        <input
          type="tel"
          name="phone"
          value={shippingData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border rounded-md p-2"
        />
        <input
          type="text"
          name="address"
          value={shippingData.address}
          onChange={handleChange}
          placeholder="Address"
          className="border rounded-md p-2"
        />
        <input
          type="text"
          name="city"
          value={shippingData.city}
          onChange={handleChange}
          placeholder="City"
          className="border rounded-md p-2"
        />
        <input
          type="text"
          name="postalCode"
          value={shippingData.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          className="border rounded-md p-2"
        />
        <input
          type="text"
          name="district"
          value={shippingData.district}
          onChange={handleChange}
          placeholder="District"
          className="border rounded-md p-2"
        />
      </div>

      <div className="mt-6">
        <button className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-700 transition">
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default ShippingSection;
