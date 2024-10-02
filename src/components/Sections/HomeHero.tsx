import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import leftImage from '../../Images/heroproduct1.jpg'
import rightTopImg from '../../Images/heroproduct2.jpg'
import rightBottomImg from '../../Images/heroproduct3.webp'

export default function HomeHero() {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  const handleNavigation = (path:string) =>{
    navigate(path)
  }

  useEffect(()=>{
    const observer = new IntersectionObserver(
      (entries) =>{
        if(entries[0].isIntersecting){
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold:0.1
      }
    );
    if(sectionRef.current){
      observer.observe(sectionRef.current);
    }
    return ()=> {
      if(sectionRef.current){
        observer.unobserve(sectionRef.current);
      }

    };
  }, []);

  return (
    <section ref={sectionRef} className="flex flex-col md:flex-row items-center justify-between bg-custom-beige py-8 px-4 md:px-16">
      {/* Left Image */}
      <div className={`flex-1 flex justify-center md:justify-start transform transition-transform duration-5000 ease-in ${isVisible ? 'translate-x-0':'-translate-x-full'}`}>
        <img src={leftImage} alt="Product on Left" className="w-full max-w-xs h-auto md:max-w-sm" />
      </div>

      {/* Text Content */}
      <div className={`flex-1 text-center justify-center items-center md:text-left md:px-8 py-4 opacity-0 transition-opacity duration-5000 ease-in ${ isVisible  ? 'opacity-100': ''}`}>
        <h2 className="text-gray-500 text-lg text-center">Best of Relaunch 2024</h2>
        <h1 className="text-gray-900 text-3xl md:text-4xl font-semibold py-4 text-center">
          Discover the Best of SriLankan Beauty
        </h1>
        <p className="text-gray-700 text-lg md:text-xl py-2">
          Our skincare brand embodies the essence of Sri Lankan beauty, crafted with care for radiant skin.
        </p>
        <div className="flex justify-center">
          <button className="bg-purple-500 text-white text-lg font-medium py-2 px-6 rounded mt-4 hover:bg-purple-700 transition duration-75" onClick={()=>handleNavigation('/about')}>
            Read More
            </button>
        </div>
      </div>

       {/* Right Images */}
      <div className="flex-1 flex flex-col justify-end relative mt-8 md:mt-0 space-y-4 md:space-y-0">
        {/* Right Top Image */}
        <img
          src={rightTopImg}
          alt="Product Right Top"
          className={`w-full max-w-xs h-auto md:relative md:-top-14 transform transition-transform duration-5000 ease-in ${isVisible ? 'translate-x-0':'translate-x-full'}`}
        />
        {/* Right Bottom Image */}
        <img
          src={rightBottomImg}
          alt="Product Right Bottom"
          className={`w-full max-w-xs h-auto md:absolute md:-bottom-24 md:right-0 transform md:-translate-x-36 transition-transform duration-5000 ease-in ${ isVisible ? 'translate-x-0':'translate-x-full'}`}
        />
      </div>
    </section>
    
  )
}
