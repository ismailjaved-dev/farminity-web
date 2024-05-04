"use client"
import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button';

interface HeroProps {
  heading: string;
  text: string;
}

const Hero: React.FC<HeroProps> = ({text,heading}) => {

 
  const pathname = usePathname()

  const data = [
    {title:"Address",text:"Gali Number 6, jatyal goth Tappo Gadap Gadap Town",icon:"/pinIcon.svg"},
    {title:"Phone",text:"+92 000 0000000",icon:"/phoneIcon.svg"},
    {title:"Email",text:"booking@farminity.pk",icon:"/mailIcon.svg"},
  ]

  return (
    <div className={` relative bg-primary flex flex-wrap flex-col gap-20 + ${pathname == "/" ? " pt-[15rem] pb-[10rem]" :"pt-[10rem]"}  `}>
      {
        pathname == '/' ? 
     <>
     <Image src={"/heroBg.svg"} fill alt='' className=' w-full object-cover'/>
        <div className='block absolute w-full h-full bg-black/40 top-0 '></div>
        <div className='fluid-container text-white text-center max-w-[550px] relative'>
            <h1 className='text-h1 font-heading  leading-[130%]'>{heading}</h1>
            <p className=''>{text}</p>
        </div>
        <div>
        <div className='fluid-container relative z-10 bg-white p-5 w-fit'>
        <div className='text-white flex justify-center gap-5 '>
          <input placeholder='Name' className='bg-surface p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]'/>
          <input placeholder='Date' className='bg-surface p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]'/>
          <input placeholder='Phone Number' className='bg-surface p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]'/>
          <input placeholder='Booking Type' className='bg-surface p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]'/>
          <Button>Book Now</Button>
        </div>
        </div>
        </div>
     </>
        :
        <div className={`fluid-container justify-between relative py-32  ${pathname == '/contact' && "pb-48"} `}>
          <div className={`text-white max-w-[40rem] ${pathname == '/contact' && "text-center mx-auto"}`}>

          <h1 className='text-h1 font-heading'>{heading}</h1>
          <p className=''>{text}</p>
          </div>
            <div className='absolute w-full h-full bottom-0 right-0 max-h-[488px] max-w-[635px]'>
            <Image src={'/secondaryHeroBg.svg'} fill alt='' className='object-cover'/>
            </div>
      

         {
          pathname == '/contact' &&
          <div className='grid grid-cols-3 gap-5 justify-between absolute z-20 w-full bottom-[-70px]'>
          {
            data.map((res,index)=>{
              return(
                <div className='bg-surface flex flex-col justify-center items-center p-10 py-10 cursor-pointer' key={index}>
                    <Image src={res.icon} width={24} height={24} alt={res.title}/>
                    <h5 className='text-h5'>{res.title}</h5>
                    <p className='text-[12px] text-gray text-center max-w-48'>{res.text}</p>
                </div>
              )
            })
          }
          </div>

         }
          </div>
      }
    </div>
  )
}

export default Hero