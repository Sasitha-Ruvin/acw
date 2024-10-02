import React, {useState, useEffect} from 'react';
import banner from '../../Images/mainbanner.png';
import mobileBanner from '../../Images/mobile.png';
import './Hero.css';

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section className='text-center relative z-10'> {/* Lower z-index than navbar */}
      <picture>
        <source media='(max-width:800px)' srcSet={mobileBanner} />
        <img 
          src={banner} 
          alt="banner" 
          className={`mx-auto w-full h-85 object-cover ${animate ? 'hero-slide-up' : 'opacity-0'}`} 
          style={{ height: '80vh', objectFit: 'cover' }} 
        />
      </picture>
    </section>
  );
}
