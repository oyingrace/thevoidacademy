import React from 'react'
import Navbar from './Navbar'
import './style.css'
import Container from './Container'
import Section from './Section'
import Testimonial from './Testimonial'
import Footer from './Footer'
import Whatsapp from './Whatsapp'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Container/>
        <Section/>
        <Whatsapp/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default Home