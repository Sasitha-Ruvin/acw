import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Product } from '../../Data/products';
import { useCart } from '../../context/CartContext';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';


interface ProductPopupProps {
  product: Product;
  onClose: () => void;
}

export default function ProductPopup({ product, onClose }: ProductPopupProps) {
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [isLoading, setIsLoading] = useState(false);
  const[quantity, setQuantity] = useState(1);
  const {addToCart } = useCart();

  const handleImageClick = (image: string) => {
    setIsLoading(true); // Start loading animation
    setTimeout(() => {
      setSelectedImage(image); // Set the clicked image as the main image
      setIsLoading(false); // Stop loading animation after a delay
    }, 300); // Simulate a loading delay (800ms)
  };

  const incrementQuantity = () =>{
    if(quantity <10){
      setQuantity(quantity+1)
    }
  };

  const decrementQuantity = () =>{
    if(quantity > 1){
      setQuantity(quantity-1);
    }
  }

  const handleAddToCart = () =>{
    addToCart({...product, quantity});
    onClose();
    Swal.fire({
      position:'top',
      icon:'success',
      title:`${product.name} added to cart`,
      showConfirmButton:false,
      timer:2000,
      toast:true,
      background:'#0f0f0f0',
      customClass:{
        popup:'swal-popup-class'
      }
    })
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <motion.div
      initial={{ opacity: 0, y: 200 }}  // Start from below the screen
      animate={{ opacity: 1, y: 0 }}    // Animate to center
      exit={{ opacity: 0, y: 200 }}     // Exit back downwards
      transition={{ type: 'spring', stiffness: 100, damping: 20, duration: 0.5 }}  // Smooth spring animation
      className="bg-white rounded-lg p-6 w-full max-w-4xl flex relative" >

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

          {/* Quantity */}
          <div className='flex items-center space-x-4 mb-4'>
            <button onClick={decrementQuantity} className='px-4 py-2 bg-gray-200 text-lg rounded-md hover:bg-gray-300 transition'>
              -
            </button>
            <span className='text-xl font-semibold'>{quantity}</span>
            <button onClick={incrementQuantity} className='px-4 py-2 bg-gray-200 text-lg rounded-md hover:bg-gray-300 transition'>
              +
            </button>

          </div>
          <div>
            <p className="text-xl font-semibold mb-4">Rs. {product.price}</p>
            <button className="w-full py-3 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
              onClick={handleAddToCart}
              >
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
