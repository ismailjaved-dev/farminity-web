import Image from 'next/image'
import React from 'react'

const DreamSection = () => {
  return (
    <div className='fluid-container flex items-start justify-between flex-wrap relative py-20 h-[900px]'>
    
        <h1 className='text-h1 font-heading text-secondary'>It all Started <br />with a Dream</h1>
        
        <Image src={'/dreamImg.svg'} height={700} width={500}  alt='' className='left-[15rem] absolute z-[-1] self-center justify-self-center'/>
    
        <h3 className='text-h3 font-heading max-w-[35rem] text-gray self-end'>Lorem ipsum dolor sit amet consectetur. Urna et nunc fringilla enim odio nibh posuere pulvinar. Mauris semper odio vulputate vel sed cras convallis cursus. Quam.</h3>
    </div>
  )
}

export default DreamSection