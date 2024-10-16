import React from 'react';
import image from '../../Images/ProductImages/coffee2.webp';

export default function ContactForm() {
  return (
    <div className='flex justify-center py-10 px-5'>
      <div className='flex max-w-6xl w-full bg-white rounded-lg shadow-lg overflow-hidden'>
        {/* Image Section */}
        <div className='w-1/2 flex items-center'>
          <img src={image} alt="Contact Image" className='w-full h-full object-cover' />
        </div>

        {/* Form Section */}
        <div className='w-1/2 bg-gray-100 p-8 flex flex-col justify-center'>
          <h2 className='text-3xl font-bold mb-6'>Get in Touch</h2>

          <form action="#" className='space-y-4'>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
              <input 
                type="text"
                placeholder='Your Name'
                className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>E-mail</label>
              <input 
                type="text"
                placeholder='Your Email'
                className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                placeholder="Title.."
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                placeholder="Type Your Message here..."
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 h-32"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button 
                type='submit'
                className='w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
