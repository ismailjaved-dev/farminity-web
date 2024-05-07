"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';

const InfluncerSlider = () => {

  const data = [
    {name:"Areeka Haq",text:"Lorem ipsum dolor sit amet consectetur. Eget est nunc pharetra turpis et. Gravida neque a risus.",occupation:"Influncer",img:"/influc=ncerImg.svg"},
    {name:"Areeka Haq",text:"Lorem ipsum dolor sit amet consectetur. Eget est nunc pharetra turpis et. Gravida neque a risus.",occupation:"Influncer",img:"/influc=ncerImg.svg"},
    {name:"Areeka Haq",text:"Lorem ipsum dolor sit amet consectetur. Eget est nunc pharetra turpis et. Gravida neque a risus.",occupation:"Influncer",img:"/influc=ncerImg.svg"},
  ]

  return (
    <div className='fluid-container py-10 px-5'>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true} 
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
          data.map((res,index)=>{
            return(
              <SwiperSlide key={index} className='bg-surface px-5 sm:px-10 pt-4 !flex items-center'>
                <Image src={"/influncerImg.svg"} width={200} height={200} alt='' className='!w-[30%] self-end	hidden lg:block'/>
               <div>
               <div className='flex justify-between gap-2 sm:gap-5 items-start'>
               <Image src={'./apostrophe.svg'} width={69} height={49} alt='' className='w-10 md:w-[69px]'/>
                <h4 className='text-[20px] sm:text-h5 lg:text-h4 mt-[40px]'>{res.text}</h4>
               </div>
                 <div className='flex flex-col items-end py-5'>
                 <h2 className='text-h3 sm:text-h2 font-heading'>{res.name}</h2>
                <p className='text-primary'> {res.occupation}</p>
                 </div>
               </div>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </div>
  )
}

export default InfluncerSlider