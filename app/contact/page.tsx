import Footer from '@/components/section/footer'
import Form from '@/components/section/form'
import Hero from '@/components/section/hero'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero heading={"Contact Us"} text={"Escape the ordinary and embrace the restorative power of simplicity. Farminity offers a tranquil haven where rustic charm meets modern comfort, allowing you to unwind and create lasting memories."}/>
        <Form />
        <Footer />
    </div>
  )
}

export default page