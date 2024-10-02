import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Banner/Hero'
import PopularCategory from '../components/Categories/PopularCategory'
import HomeHero from '../components/Sections/HomeHero'
import FeaturedSection from '../components/Sections/FeaturedSection'
import IntroSection from '../components/Sections/IntroSection'
import HomeSlider from '../components/Sliders/HomeSlider'
import Certification from '../components/Sections/Certification'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div >
        <Navbar/>
        <Hero/>
        <PopularCategory/>
        <HomeHero/>
        <FeaturedSection/>
        <IntroSection/>
        <HomeSlider/>
        <Certification/>
        <Footer/>
    </div>
  )
}
