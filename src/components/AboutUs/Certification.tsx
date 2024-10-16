import React from 'react'
import gmp from '../../Images/gmp.png'
import manufacture from '../../Images/manufacture.png'

export default function Certification() {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center py-8 px-4'>
        {/* Certification Badge */}
        <div className='flex justify-center items-center mb-4 md:mb-0 md:mr-8'>
            <img src={gmp} alt="Certification" className='h-72 w-auto md:mr-8' />
        </div>

        {/* Manufacture */}
        <div className='flex justify-center items-center'>
            <img src={manufacture} alt="Manufacture" className='h-96 w-auto' />
        </div>
    </section>
  )
}
