import Image from 'next/image'
import React from 'react'

const DreamSection = () => {
  return (


<div className='fluid-container flex items-start justify-between flex-wrap relative py-20 px-5 sm:h-[900px] gap-10 sm:gap-0'>

<h1 className='text-h2 sm:text-h1 font-heading text-secondary'>It all Started <br />with a Dream</h1>

<Image src={'/dreamImg.svg'} height={700} width={500}  alt='' className='mx-auto md:left-[15rem] sm:absolute z-[-1] self-center justify-self-center'/>

<div className='ml-10 sm:ml-0 flex w-full justify-end self-end'>
<h3 className='text-h4 sm:text-h3 font-heading max-w-[35rem] text-gray '>Lorem ipsum dolor sit amet consectetur. Urna et nunc fringilla enim odio nibh posuere pulvinar. Mauris semper odio vulputate vel sed cras convallis cursus. Quam.</h3>
</div>
</div>

  )
}

export default DreamSection