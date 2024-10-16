import React, {useRef} from 'react';
import image from '../../Images/ProductImages/coffee2.webp';
import emailjs from 'emailjs-com';

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_nqsm0xo', //service ID
          'template_yx5dbae', //template ID
          form.current,
          'XnoWvLpePBYR2r11y' // public key (user ID)
        )
        .then(
          (result) => {
           
            alert('Message sent successfully!');
          },
          (error) => {
            alert('An error occurred, please try again.');
          }
        );
    }
  };
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

          <form ref={form} onSubmit={sendEmail} className='space-y-4'>
            {/* Name Input */}
            <div>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
              <input 
                type="text"
                name='name'
                placeholder='Your Name'
                className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>E-mail</label>
              <input 
                type="text"
                name='email'
                placeholder='Your Email'
                className='w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name='subject'
                placeholder="Title.."
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
              name='message'
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
