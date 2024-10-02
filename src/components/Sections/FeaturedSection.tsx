import React from 'react'
import product1 from '../../Images/trending1.png'
import product2 from '../../Images/trending2.png'
import product3 from '../../Images/trending3.png'

export default function FeaturedSection() {
    type Product ={
        id:number;
        name:string;
        price:string;
        image:string;
    };

    const products:Product[] = [
        {id:1, name:'Rejuvenating and Brightning Night Cream',price:'Rs.2850',image:product1},
        {id:2, name:'Golden Radiance Fairness Face Wash',price:'Rs.600', image:product2},
        {id:3, name:'Anti Blemish Pigmentation Control Cream',price:'Rs.3850', image:product3}
    ]

  return (
    <section className='py-8'>
        {/* Section Title */}
        <h2 className='text-center text-gray-800 text-2xl font-semibold mb-6'>
            Trending Products
        </h2>

        {/* Products Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
            {products.map(product =>(
                <div key={product.id} className='border border-dashed border-gray-800 p-4 rounded-lg shadow-xl text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer'>
                    {/* Product Image */}
                    <img src={product.image} alt={product.name}  className='w-full h-60 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out hover:scale-105'/>
                    {/* Product Name */}
                    <h3 className='text-gray-700 text-sm font-semibold mb-2'>{product.name}</h3>
                    {/* Product Price */}
                    <p className='text-gray-600 text-sm mb-4'>{product.price}</p>
                    {/* Shop Button */}
                    <button className='bg-purple-500 text-white py-2 px-6 rounded-full text-sm font-semibold hover:bg-purple-700 transition duration-150'>
                        Shop Now
                    </button>

                </div>
            ))}

        </div>

    </section>
  )
}
