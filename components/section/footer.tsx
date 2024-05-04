import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Footer = () => {

    const data = [
        {title:"Family Celebrations",desc:"We know how important is your event for you, whether it is a jubileum, anniversary, leisure trip or wedding.",path:"/"},
        {title:"For Companies",desc:"Experience formal business meetings with a completely different atmosphere. Beautiful spaces, accommodation and quality food.",path:"/"},
    ]

    const footerData = [
        {title:"Address",text1:"Gali Number 6, jatyal goth Tappo Gadap Gadap Town, Karachi, Karachi City, Sindh"},
        {title:"Contact",text1:"Phone: +92 000 0000000",text2:"booking@farminity.pk"},
        {title:"follow us",link1:{path:"/",title:"Facebook"},link2:{path:"/",title:"Instagram"}},
    ]

  return (
    <>
        <div>
          <div className='fluid-container py-20 px-5'>
             <h1 className='text-h1 text-center font-heading text-secondary'>Book your Stay</h1>
            <div className='grid grid-cols-2 gap-10 mt-10'>
            {
                data.map((res,index)=>{
                    return(
                    <div className='relative flex' key={index}>
                        <Image src={'/bookNowCardImg.svg'} fill alt='' className='object-cover'/>
                        <div className='relative z-10 bg-white max-w-[75%] mt-[25%] px-10 py-5'>
                            <h2 className='text-h2 font-heading'>{res.title}</h2>
                            <p className='text-gray mb-5'>{res.desc}</p>
                            <Button variant="surface">Book Now</Button>
                        </div>
                    </div>
                )
                })
             }
            </div>
          </div>
          {/* <div className='bg-secondary py-11'>
             <div className='fluid-container justify-between grid grid-cols-4'>
               <Image src={"/footerLogo.svg"} width={160} height={130} alt=''/>
               {
                footerData.map((res,index)=>{
                    return(
                        <div className='max-w-60' key={index}>
                            <h5 className='text-h5 font-heading uppercase text-[#84999F]'>{res.title}</h5>
                            <p className='text-sm text-white'>{res.text1}</p>
                            <p className='text-sm text-white'>{res.text2}</p>
                            { res.link1 && <Link className='text-sm text-white' href={res.link1.path}>{res.link1.title}</Link> }<br/>
                            { res.link2 && <Link className='text-sm text-white' href={res.link2.path}>{res.link2.title}</Link> }
                        </div>
                    )
                })
               }
             </div>

             <div className='flex mx-auto max-w-[25.75rem] justify-between mt-36 flex-wrap'>
                <p className='text-[0.75rem] text-white cursor-pointer'>TERMS & CONDITIONS</p>  
                <p className='text-[0.75rem] text-white cursor-pointer'>PRIVACY POLICY</p>  
                <p className='text-[0.75rem] text-white cursor-pointer'>COOKIE POLICY</p>  
                <p className='text-[0.75rem] text-white cursor-pointer'>FAQ</p>  
             </div>
          </div> */}
        </div>
    </>
  )
}

export default Footer