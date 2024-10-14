import React from 'react'
import Hero from '../components/Banner/Hero'
import Footer from '../components/Footer/Footer'
import AboutHero from '../components/Banner/AboutHero'
import Navbar from '../components/Navbar/Navbar'
import AboutSection from '../components/Sections/AboutSection'
import OwnerHero from '../components/AboutUs/OwnerHero'
import Certification from '../components/Sections/Certification'

export default function About() {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
        <AboutSection/>
        <OwnerHero/>
        <Certification/>
        <Footer/>
    </div>
  )
}
