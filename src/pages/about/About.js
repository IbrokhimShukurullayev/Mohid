import React from 'react'
import Header from '../../components/header/Header'
import Watch from '../../components/watch/Watch'
import Home from '../../components/home/Home'

import Card from '../../components/card/Card'
import Footer from '../../components/footer/Footer'
import Faqs from '../../components/faqs/Faqs'
const About = () => {
  return (
    <div>
      <Header />
      <Watch />
      <Home />
      <Card/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default About