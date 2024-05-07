import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import BookModal from './bookModal'

const Navbar = () => {

const data =[
    {title:"About", pathname:"/about"},
    {title:"Gallery", pathname:"/gallery"},
    {title:"Contact", pathname:"/contact"},
]

  return (
    <div className='fluid-container relative z-20'>
            <div className='absolute top-10 flex justify-between w-full items-center px-5'>
               <Link href={"/"}>
               <Image src={'/Logo.svg'} width={200} height={60} alt=''/>
               </Link>
                <div className='hidden lg:flex justify-between gap-10 '>
                   {
                    data.map((res,index)=>{
                        return(
                            <Link href={res.pathname} key={index} className='text-white cursor-pointer'>
                              {res.title}
                            </Link>
                        )
                    })
                   }
                </div>
                 <div className='hidden lg:block'>
                  <BookModal  type="modalBtnSurface"/>
                 </div>
            </div>
    </div>
  )
}

export default Navbar