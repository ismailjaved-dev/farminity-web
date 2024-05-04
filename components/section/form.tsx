import { FacebookIcon, InstagramIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const Form = () => {
  return (
    <div className='fluid-container mt-40 grid grid-cols-2'>
      <div className='max-w-[25.625rem] flex flex-col gap-7 justify-center'>
        <h1 className='text-h1 font-heading text-secondary leading-[100%]'>Write to us!</h1>
        <p className='text-gray'>Lorem ipsum dolor sit amet consectetur. Eget est nunc pharetra turpis et. Gravida neque a risus.</p>
        <div className='flex gap-3'>
            <FacebookIcon className='text-primary hover:text-gray transition duration-300'/>
            <InstagramIcon className='text-primary hover:text-gray transition duration-300' />
        </div>
      </div>

      <div>
        <form className='grid grid-cols-2 gap-5 bg-surface p-5'>
            <input className='w-full bg-white p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]' placeholder='Name'/>
            <input className='w-full bg-white p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]' placeholder='Email'/>
            <textarea 
            className='w-full h-40  bg-white p-3 col-start-1 col-end-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]'
            placeholder='Message'></textarea>
            <Button className='col-start-1 col-end-3 !bg-secondary'>
                SEND
            </Button>
        </form>
      </div>
    </div>
  )
}

export default Form