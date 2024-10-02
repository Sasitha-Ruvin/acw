import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Banner/Hero'
import PopularCategory from '../components/Categories/PopularCategory'
import ProductGrid from '../components/Grids/ProductGrid'
import Footer from '../components/Footer/Footer'

export default function Products() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <PopularCategory/>
        <ProductGrid/>
        <Footer/>
    </div>
  )
}
