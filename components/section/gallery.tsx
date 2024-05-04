import Image from 'next/image'
import React from 'react'


const Gallery = () => {
  return (
    <div className='relative min-h-[25rem] md:min-h-[35rem] flex justify-center items-center'>
        <Image src={'/playCircle.svg'} height={110} width={110} alt='play-circle' className='relative z-10 cursor-pointer rounded-full'/>
        <Image src={"/videoImg.svg"} fill alt='video-thumbnail' className='object-cover'/>
    </div>
  )
}

export default Gallery