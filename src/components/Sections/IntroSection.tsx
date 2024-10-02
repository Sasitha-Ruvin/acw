import React from 'react'
import aboutImg from '../../Images/introgroup.jpeg'

export default function IntroSection() {
  return (
   <section className='flex flex-col md:flex-row items-center justify-center p-8 bg-white'>
    {/* Image Section */}
    <div className='md:w-1/2 flex justify-center mb-6 md:mb-0'>
    <img src={aboutImg} alt="Group of Models" className='w-96 h-96 rounded-full object-cover' />
    </div>
     {/* Text Section */}
     <div className='md:w-1/2 text-center md:text-left md:pl-8'>
        <h2 className='text-4xl font-semibold text-gray-900 mb-4'>WHAT MAKES US UNIQUE</h2>
        <p className='text-gray-600 text-2xl'>
            We are creating a sanctuary for authentic beauty and self-expression. Our skincare enhances your natural glow without masking your uniqueness. A fusion of Sri Lankan Heritage and modern skincare science, delivering authentic beauty with every product.
        </p>
     </div>

   </section>
  )
}
