import React from 'react'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactsSection() {
  return (
    <div className='flex justify-center items-center py-10'>
        <div className='grid grid-cols-2 gap-6'>
            {/* Hotline */}
            <a href="tel:+94762110111" className='bg-gray-200 p-6 rounded-lg flex flex-col justify-center items-center shadow-md transform hover:scale-105 hover:-translate-y-2 transition-transform duration-300'>
                <FaPhoneAlt className='text-4xl text-gray-600 mb-4'/>
                <p className='text-lg font-semibold text-gray-700'>Hotline</p>
                <p className='text-gray-600'>+94 76 211 0111</p>
            </a>

            {/* Whatsapp */}
            <a href="https://wa.me/94762110111" className='bg-gray-200 p-6 rounded-lg flex flex-col justify-center items-center shadow-md'>
                <FaWhatsapp className='text-4xl text-gray-600 mb-4'/>
                <p className='text-lg font-semibold text-gray-700'>WhatsApp</p>
                <p className='text-gray-600'>+94 76 211 0111</p>
            </a>
                
            {/* Mail */}
            <a href="mailto:acw@gmail.com" className='bg-gray-200 p-6 rounded-lg flex flex-col justify-center items-center shadow-md'>
                <FaEnvelope className='text-4xl text-gray-600 mb-4'/>
                <p className='text-lg font-semibold text-gray-700'>E-mail</p>
                <p className='text-gray-600'>acw@gmail.com</p>
            </a>

            {/* Location */}
            <div className='bg-gray-200 rounded-lg flex flex-col justify-center items-center shadow-md'>
                <FaMapMarkerAlt className=' text-4xl text-gray-600 mb-4'/>
                <p className='text-lg font-semibold text-gray-700'>Location</p>
                <p className='text-gray-600'>11/B, Pallekale, Kandy</p>
            </div>
        </div>
    </div>
  )
}
