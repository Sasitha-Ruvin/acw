import React, {useEffect, useRef, useState} from 'react'
import hairRituals from '../../Images/hair.webp'
import './PopularCategory.css'
import bodybliss from '../../Images/body.webp'
import face from '../../Images/facial.webp'
import beauty from '../../Images/beauty.webp'
type Category={
    id:number;
    name:string;
    image:string;
}

const categories:Category[] = [
    {id:1,name:'Hair Rituals',image:hairRituals},
    {id:2,name:'Facial Essentials',image:face},
    {id:3,name:'Body Bliss',image:bodybliss},
    {id:4,name:'Beauty Bundles',image:beauty}
];

export default function PopularCategory() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() =>{
        const observer = new IntersectionObserver(
            (entries) =>{
                if (entries[0].isIntersecting){
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold:0.1,
            }
        );
        if(sectionRef.current){
            observer.observe(sectionRef.current)
        }
        return()=>{
            if(sectionRef.current){
                observer.unobserve(sectionRef.current)
            }
        };
    },[]);


  return (
    <section ref={sectionRef} className={`py-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100':'opacity-0'}`}>
        {/* Shop from our */}
        <h2 className='text-center text-gray-800 text-xl font-semibold mb-2'>
                Shop from our
        </h2>
            
            {/* Popular Categories */}
         <h2 className='text-center text-gray-800 text-4xl font-semibold mb-6'>
                <span className='font-bold'>Popular Categories</span>
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center'>
            {categories.map(category =>(
                <div key={category.id} className='text-center'>
                    {/* category image */}
                    <div className='category-card'>
                        <img src={category.image} alt={category.name} className='category-image' />
                    </div>
                    {/* Category name */}
                    <h3 className='mt-4 text-gray-950 text-md font-semibold'>{category.name}</h3>
                </div>
            ))}

        </div>

    </section>
  )
}
