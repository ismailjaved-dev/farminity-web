import InfluncerCard from '@/components/section/influncerSlider'
import Hero from '@/components/section/hero'
import React from 'react'
import About from '@/components/section/about'
import Footer from '@/components/section/footer'
import DreamSection from '@/components/section/dreamSection'

const page = () => {
  return (
    <div>
        <Hero heading={"About our Farmhouse"} text={"Escape the ordinary and embrace the restorative power of simplicity. Farminity offers a tranquil haven where rustic charm meets modern comfort, allowing you to unwind and create lasting memories."} />
        <InfluncerCard />
        <About />
        <DreamSection />
        <Footer />
    </div>
  )
}

export default page