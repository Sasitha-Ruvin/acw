import React from 'react'
import { Product } from '../../Data/products'

interface ProductCardProps{
  product:Product;
}



export default function ProductCard({product}:ProductCardProps) {
  return (
    <div className="border border-gray-400 p-4 rounded-lg flex flex-col justify-between h-full cursor-pointer">
      {/* Product Image */}
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />

      {/* Product Name */}
      <h2 className="text-lg font-semibold mt-4 mb-2">{product.name}</h2>

      {/* Spacer for consistent layout */}
      <div className="flex-grow"></div>

      {/* Price and Button */}
      <div className="mt-4">
        <p className="text-gray-700 text-xl font-semibold">RS.{product.price}</p>
        <button className="bg-purple-500 text-white py-2 rounded mt-2 w-full hover:bg-purple-700 cursor-pointer">Add to Cart</button>
      </div>
    </div>
  )
}
