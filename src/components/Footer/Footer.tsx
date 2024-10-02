import React from 'react';
import logo from '../../Images/logowhite.png';
import manufacture from '../../Images/manufacturewhite.png';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="bg-[#a188a6] text-white py-4">
      <div className="container mx-auto px-4 md:flex justify-between items-start">
        
        {/* Left Section */}
        <div className="flex flex-col md:w-1/4 md:mb-0 md:pr-8 md:border-r-2 border-white h-96 items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Advanced Classic White Logo" className="h-48 mt-0" />
          <div className="mt-10">
            <h3 className="text-xl font-semibold">STAY IN TOUCH</h3>
            <div className="flex justify-center md:justify-start space-x-2 mt-2">
              <a href="https://www.instagram.com/advanced_classic_white?igsh=Y2d1OXA0NDB3aDZk" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-10 h-10"/>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61557950182110" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="w-10 h-10"/>
              </a>
            </div>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-col md:w-1/4 mb-6 md:mb-0 px-4 md:px-8 md:border-r-2 border-white h-96 text-center md:text-left items-center justify-center">
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:underline text-lg transition duration-75">About us</a></li>
            <li><a href="#" className="hover:underline text-lg transition duration-75">Products</a></li>
            <li><a href="#" className="hover:underline text-lg transition duration-75">Beauty Bundles</a></li>
            <li><a href="#" className="hover:underline text-lg transition duration-75">Contact us</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex flex-col md:w-1/2 px-4 md:px-8 h-96 text-center md:text-left">
          <p className="italic text-center text-xl">
            “At Advanced Classic White, we believe in celebrating individuality through skincare. Inspired by Sri Lankan beauty traditions and advanced skincare science. We’re committed to creating a space where beauty is empowering, authentic, and uniquely yours.”
          </p>
          <div className="mt-7">
            <p className="text-lg font-semibold">Manufactured By:</p>
            <img src={manufacture} alt="Nature Miracle Logo" className="w-96 h-auto mx-auto md:mx-0" />
          </div>
        </div>

      </div>
    </footer>
  );
}
