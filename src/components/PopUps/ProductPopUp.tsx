import React, { useState } from 'react';
import { Product } from '../../Data/products';

interface ProductPopupProps {
  product: Product;
  onClose: () => void;
}

export default function ProductPopup({ product, onClose }: ProductPopupProps) {
  const [selectedImage, setSelectedImage] = useState(product.image); // Default to main image
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleImageClick = (image: string) => {
    setIsLoading(true); // Start loading animation
    setTimeout(() => {
      setSelectedImage(image); // Set the clicked image as the main image
      setIsLoading(false); // Stop loading animation after a delay
    }, 800); // Simulate a loading delay (800ms)
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-4xl flex relative">
        {/* Close Button */}
        <span
          className="absolute top-1 right-4 text-gray-500 text-2xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>

        {/* Left Section: Thumbnails with Hover Effect */}
        <div className="flex flex-col space-y-4">
          <img
            src={product.image}
            alt={product.name}
            onClick={() => handleImageClick(product.image)}
            className={`w-16 h-16 rounded-md border-2 cursor-pointer transition-transform transform hover:scale-105 hover:border-pink-400 ${
              selectedImage === product.image ? 'border-pink-400' : 'border-transparent'
            }`}
          />
          {product.additionalImgaes.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} additional ${index + 1}`}
              onClick={() => handleImageClick(img)}
              className={`w-16 h-16 rounded-md border-2 cursor-pointer transition-transform transform hover:scale-105 hover:border-pink-400 ${
                selectedImage === img ? 'border-pink-400' : 'border-transparent'
              }`}
            />
          ))}
        </div>

        {/* Main Image with Loading Animation */}
        <div className="flex-1 mx-4 flex justify-center items-center">
          {isLoading ? (
            <div className="flex items-center justify-center w-full h-80">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500"></div>
            </div>
          ) : (
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-80 object-cover rounded-md"
            />
          )}
        </div>

        {/* Right Section: Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.desc}</p>
          </div>
          <div>
            <p className="text-xl font-semibold mb-4">Rs. {product.price}</p>
            <button className="w-full py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
