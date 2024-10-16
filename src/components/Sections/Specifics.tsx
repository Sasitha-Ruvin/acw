import React from 'react'
import crueltyfree from '../../Images/Certifications/crueltyfree.png';
import local from '../../Images/Certifications/local.png';
import gmp from '../../Images/Certifications/gmp.png'

export default function Specifics() {
  return (
    <section className='text-center py-8'>
        <h2 className='text-4xl font-semibold mb-6'>Why Choose Us?</h2>
        <div className='flex justify-center space-x-10'>
            <div className='flex flex-col items-center'>
                <img src={crueltyfree} alt="Cruelty Free" />
            </div>
            <div className='flex flex-col items-center'>
                <img src={gmp} alt="GMP Certified" />
            </div>
            <div className='flex flex-col items-center'>
                <img src={local} alt="Local Product" />
            </div>
        </div>
    </section>
  );
}
