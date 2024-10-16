import React from 'react';
import { AiOutlineHeart, AiOutlineShareAlt } from 'react-icons/ai'; 
import { Link } from 'react-router-dom'; 
import image1 from '../../Images/ProductImages/charcoal3.webp';
import image2 from '../../Images/ProductImages/coffee2.webp';
import logo from '../../Images/logo.png';

export default function PostSection() {
    const instagramURL = "https://www.instagram.com/advanced_classic_white?igsh=Y2d1OXA0NDB3aDZk"
  return (
    <div className="flex justify-center gap-6 py-6">
      {/* First Card (Instagram-style card) */}

        <Link to={instagramURL} target='_blank' className="max-w-md bg-white border rounded-lg shadow-md transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg cursor-pointer">
        <div className="flex items-center p-4">
            <img
                className="w-10 h-10 rounded-full"
                src={logo}
                alt="avatar"
            />
            <div className="ml-3">
                <p className="text-sm font-semibold">@advanced_classic_white</p>
            </div>
            </div>
            {/* Image content */}
            <img
            className="w-full h-60 object-cover p-4 transition-transform duration-300 hover:scale-105" 
            src={image2}
            alt="product-1"
            />
            {/* Action icons */}
            <div className="flex items-center justify-between px-4 py-2">
            <div className="flex space-x-3">
                <AiOutlineHeart className="w-6 h-6 text-gray-600" /> 
                <AiOutlineShareAlt className="w-6 h-6 text-gray-600" />
            </div>
            </div>
        </Link>
   
        <Link to={instagramURL} target='_blank' className="max-w-md bg-white border rounded-lg shadow-md p-4 transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg cursor-pointer">
            <h3 className="text-lg font-bold">Advanced Classic White</h3>
            <p className="text-sm text-gray-500">@advanced_classic_white</p>
            <p className="mt-3 text-sm text-gray-600">
            We focus on making every type of skin look radiant, celebrating your
            natural beauty while giving you that goddess or god-like glow.
            </p>
            <img
            className="w-full h-60 object-cover mt-3 transition-transform duration-300 hover:scale-105" 
            src={image1}
            alt="product-2"
            />
        </Link>
    </div>
  );
}
