import About from '@/components/section/about'
import Footer from '@/components/section/footer'
import Gallery from '@/components/section/gallery'
import Hero from '@/components/section/hero'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <Hero heading={"Rustic Elegance, Rooted in the Land"} text={"Escape the ordinary and embrace the restorative power of simplicity. Farminity offers a tranquil haven where rustic charm meets modern comfort, allowing you to unwind and create lasting memories."}/> */}
      <About />
      <Gallery />
      <Footer />
    </div>
  )
}

export default page