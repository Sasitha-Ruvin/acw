import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import sliderData from '../../Data/SlideData';

export default function HomeSlider() {
    interface ArrowProps {
        onClick?: React.MouseEventHandler<HTMLDivElement>;
    }

    const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
        return (
            <div
                className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-purple-500 text-white rounded-full p-2 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowLeft size={20} />
            </div>
        );
    };

    const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
        return (
            <div
                className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-purple-500 text-white rounded-full p-2 cursor-pointer"
                onClick={onClick}
            >
                <FaArrowRight size={20} />
            </div>
        );
    };

    const navigate = useNavigate();
  
    const handleNavigation = (path:string) =>{
      navigate(path)
    }
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-8 px-4 bg-gray-50 text-center">
            <h1 className="text-gray-800 text-4xl font-semibold mb-2">
                THE BEAUTY BUNDLES
            </h1>

            {/* Slider */}
            <div className="w-full max-w-4xl mx-auto">
                <Slider {...settings}>
                    {sliderData.map((slide) => (
                        <div key={slide.id} className="p-4">
                            <div className="border border-gray-600 p-4 rounded-lg shadow-md h-full flex flex-col justify-between">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                                <h2 className="text-lg font-medium mt-2">{slide.title}</h2>
                            </div>
                        </div>
                    ))}
                </Slider>
                {/* Shop Now */}
                <button className="bg-purple-500 text-white py-2 px-6 my-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-150"
                    onClick={()=>handleNavigation('/bundle')}>
                    Shop Now
                </button>
            </div>
        </section>
    );
}
