import React from 'react'
import Hero from '../components/Banner/Hero'
import Footer from '../components/Footer/Footer'
import AboutHero from '../components/Banner/AboutHero'
import Navbar from '../components/Navbar/Navbar'
import AboutSection from '../components/Sections/AboutSection'
import OwnerHero from '../components/AboutUs/OwnerHero'
import Certification from '../components/AboutUs/Certification'
import Specifics from '../components/Sections/Specifics'
import Explore from '../components/AboutUs/Explore'
import PostSection from '../components/AboutUs/PostSection'

export default function About() {
  return (
    <div>
        <Navbar/>
        <AboutHero/>
        <AboutSection/>
        <OwnerHero/>
        <Specifics/>
        <Explore/>
        <PostSection/>
        <Certification/>
        <Footer/>
    </div>
  )
}
