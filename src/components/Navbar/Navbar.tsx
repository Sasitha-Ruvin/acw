import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../Images/logo.png';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpenNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 
  const isActive = (path: string) => location.pathname === path;

  const handleNavigation = (path:string) =>{
    setIsOpenNav(false)
    navigate(path)
  }

  const handleNavToggle = () => {
    setIsOpenNav(!isOpen);
  };

  return (
    <>
      <div className='bg-purple-300 text-white py-2 text-center'>
        Buy 3, Get free Shipping!!!
      </div>
      <header className='bg-custom-beige py-3 shadow-md relative z-50'> {/* Ensure z-index is higher */}
        <div className="flex items-center justify-between px-4">
          {/* Logo */}
          <img src={logo} alt="logo" className='h-11 object-contain' style={{ height: '10vh', objectFit: 'cover' }}  />

          {/* Hamburger + Cart Icon for Mobile */}
          <div className='flex md:hidden items-center space-x-4'>
            {/* Hamburger Icon */}
            <div onClick={handleNavToggle}>
              {isOpen ? <FaTimes className='text-gray-700 text-2xl'/> : <FaBars className='text-gray-700 text-2xl'/>}
            </div>
          </div>

          {/* Nav Links for Desktop */}
          <nav className="hidden md:flex flex-1 mx-8">
            <ul className="flex justify-center w-full space-x-32">
              <li><a href="#home" className={`nav-link text-xl ${isActive('/') ? 'active' : ''}`} onClick={()=>handleNavigation('/')}>Home</a></li>
              <li><a href="#store" className={`nav-link text-xl ${isActive('/products') ? 'active' : ''}`} onClick={()=>handleNavigation('/products')}>Store</a></li>
              <li><a href="#about" className={`nav-link text-xl ${isActive('/about') ? 'active' : ''}`} onClick={()=> handleNavigation('/about')}>About Us</a></li>
              <li><a href="#contact" className={`nav-link text-xl ${isActive('/contact') ? 'active' : ''}`} onClick={()=> handleNavigation('/contact')}>Contact Us</a></li>
            </ul>
          </nav>

          {/* Shopping Cart Icon for Desktop */}
          <FaShoppingCart className='text-gray-700 cursor-pointer text-2xl hidden md:block mr-4' onClick={()=>handleNavigation('/cart')} />
        </div>

        {/* Mobile Nav Links */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-gray-100 shadow-md z-50`}>
          <nav>
            <ul className="flex flex-col items-center py-8 space-y-4">
              <li><a href="#home" className="text-gray-700" onClick={()=>handleNavigation('/')}>Home</a></li>
              <li><a href="#store" className="text-gray-700" onClick={()=>handleNavigation('/products')}>Store</a></li>
              <li><a href="#about" className="text-gray-700" onClick={()=> handleNavigation('/about')}>About Us</a></li>
              <li><a href="#contact" className="text-gray-700" onClick={()=> handleNavigation('/contact')}>Contact Us</a></li>
              {/* Mobile Cart Icon */}
              <li><FaShoppingCart className='text-gray-700 text-2xl' onClick={() => handleNavigation('/cart')} /></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
