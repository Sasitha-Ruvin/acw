import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import image1 from '../../Images/AboutUs/skintype1.jpg';
import image2 from '../../Images/AboutUs/skintype2.jpg';
import image3 from '../../Images/AboutUs/skin type3.webp';
import image4 from '../../Images/AboutUs/skintype4.jpg';

export default function Explore() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true });

  const handleNavigation = (path:string) => {
    navigate(path);
  };

  const skinTones = [
    { color: '#dcb396', id: 'tone1' },
    { color: '#c0896e', id: 'tone2' },
    { color: '#ab6b4c', id: 'tone3' },
    { color: '#8f4b2e', id: 'tone4' },
  ];

  // Image data for easy mapping
  const images = [
    { src: image1, alt: "Image 1" },
    { src: image2, alt: "Image 2" },
    { src: image3, alt: "Image 3" },
    { src: image4, alt: "Image 4" },
  ];

  return (
    <motion.section
      ref={ref}
      className='bg-gray-300 py-12'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className='container mx-auto px-4'>
        <h2 className='text-center text-3xl font-medium text-gray-600'>
          Where every skin type transforms into{' '}
          <span className='italic text-gray-800'>timeless beauty</span>
        </h2>

        {/* Skin Tone Circles */}
        <div ref={inViewRef} className="flex justify-center mt-6 space-x-4">
          {skinTones.map((tone, index) => (
            <motion.span
              key={tone.id}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ backgroundColor: tone.color }}
              className="block h-8 w-8 rounded-full"
            />
          ))}
        </div>

        {/* Images with staggered animation */}
        <div className='mt-8 grid grid-cols-2 md:grid-cols-3 gap-4'>
          <div className='col-span-2 grid grid-cols-1 gap-4'>
            {images.slice(0, 2).map((image, index) => (
              <motion.img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="rounded-md object-cover h-64 w-full"
                initial={{ opacity: 0, y: 20 }} // Initial state
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate on scroll into view
                transition={{ duration: 0.5, delay: index * 0.3 }} // Staggered delay
              />
            ))}
          </div>
          <div className='grid grid-rows-2 gap-4'>
            {images.slice(2, 4).map((image, index) => (
              <motion.img
                key={image.alt}
                src={image.src}
                alt={image.alt}
                className="rounded-md object-cover h-64 w-full"
                initial={{ opacity: 0, y: 20 }} // Initial state
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate on scroll into view
                transition={{ duration: 0.5, delay: (index + 2) * 0.3 }} // Staggered delay
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 bg-gray-800 text-white text-lg rounded-full hover:bg-gray-700"
            onClick={() => handleNavigation('/products')}
          >
            Explore Products
          </button>
        </div>

        <div className="flex justify-start mt-8">
          <span className="mr-2 text-2xl">Talk to us at...</span>
          <div className="flex space-x-4 text-gray-800">
            <a href="https://www.instagram.com/advanced_classic_white?igsh=Y2d1OXA0NDB3aDZk" target="_blank" aria-label="Instagram">
              <FaInstagram className="w-10 h-10 cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61557950182110" target="_blank" aria-label="Facebook">
              <FaFacebook className="w-10 h-10 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
