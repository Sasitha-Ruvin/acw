import React from 'react'
import Hero from '../components/Banner/Hero'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import ContactForm from '../components/Forms/ContactForm'
import ContactsSection from '../components/Sections/ContactsSection'

export default function () {
  return (
    <div>
        <Navbar/>
        <ContactForm/>
        <ContactsSection/>
        <Footer/>
    </div>
  )
}
