"use client"
import { FacebookIcon, InstagramIcon } from 'lucide-react'
import { Button } from '../ui/button'
import React, { useState } from "react";
import { collection, getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../app/firbaseConfig";



const Form = () => {

  const [data, setData] = useState({
    name: "",
    email:"",
    message:"",
    date:"",
    bookingType:"",
    activeStatus: false
  })

  const handleClick = async (e) =>{

      const dataList = []
      const querySnapshot = await getDocs(collection(db, "BookingData"));
      querySnapshot.forEach((doc) => {
          dataList.push(doc.data())
      });
      
  
      const id = dataList.length == 0 ? 1 : dataList.pop().id + 1;

      try {
        const docRef = await setDoc(doc(collection(db, "BookingData"), id.toString()), {
          ...data,
          id: id
      });
         console.log('Data Uploaded')
    } catch (error) {
        console.log(error)
    }
}

  

  return (
    <div className='fluid-container mt-[30rem] md:mt-40 grid md:grid-cols-2 px-5 gap-5 gap-y-8'>
      <div className='max-w-[25.625rem] flex flex-col gap-7 justify-center'>
        <h1 className='text-h2 md:text-h1 font-heading text-secondary leading-[100%]'>Write to us!</h1>
        <p className='text-gray'>Lorem ipsum dolor sit amet consectetur. Eget est nunc pharetra turpis et. Gravida neque a risus.</p>
        <div className='flex gap-3'>
            <FacebookIcon className='text-primary hover:text-gray transition duration-300'/>
            <InstagramIcon className='text-primary hover:text-gray transition duration-300' />
        </div>
      </div>

      <div>
        <form className='flex flex-wrap sm:grid grid-cols-2 gap-5 bg-surface p-5'>
            <input className='w-full bg-white p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]'
             placeholder='Name'
             value={data.name}
             onChange={(e)=> setData({...data, name:e.target.value})}
            />
            <input className='w-full bg-white p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]'
             placeholder='Email'
             value={data.email}
             onChange={(e)=> setData({...data, email:e.target.value})}
             />
            <textarea 
            className='w-full h-40  bg-white p-3 col-start-1 col-end-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]'
            placeholder='Message'
            value={data.message}
            onChange={(e)=> setData({...data, message:e.target.value})}
            ></textarea>
            <Button className='col-start-1 col-end-3 !bg-secondary w-full' onClick={handleClick}>
                SEND
            </Button>
        </form>
      </div>
    </div>
  )
}

export default Form