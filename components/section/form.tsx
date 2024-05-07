"use client"
import { FacebookIcon, InstagramIcon } from 'lucide-react'
import { Button } from '../ui/button'
import React, { useState } from "react";
import { collection, getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../app/firbaseConfig";
import { useToast } from "@/components/ui/use-toast"



const Form = () => {

  const { toast } = useToast()

  const [data, setData] = useState({
    name: "",
    email:"",
    message:"",
  })

  const [disable, setDisable] = useState(false);

  const dataUploaded = () => {
    toast({
      description: "Your data has been submitted.",
      style: {
        backgroundColor: "#FFF", // Red background color
        color: "#9AA6B6", // White text color
        border: "2px solid #FFF", // Red border
      }
    })
    console.log("data Uploaded");
    setData({
      name: "",
      email:"",
      message: ""
    })
    setDisable(false);
  };

  const handleClick = async () =>{

    if (!data.name || !data.email || !data.message) {
      toast({
        variant: "destructive",
        description: "Please fill in all fields.",
        style: {
          backgroundColor: "#FF5B5B", // Red background color
          color: "#FFFFFF", // White text color
          border: "2px solid #FF5B5B", // Red border
        }
      });
      return; // Exit function early if any field is empty
    }
 
      const dataList = []
      const querySnapshot = await getDocs(collection(db, "Form-Contact"));
      querySnapshot.forEach((doc) => {
          dataList.push(doc.data())
      });
      
  
      const id = dataList.length == 0 ? 1 : dataList.length + 1;

      try {
        const docRef = await setDoc(doc(collection(db, "Form-Contact"), id.toString()), {
          ...data,
          id: id
      });
      dataUploaded()
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Form not submitted",
        style: {
          backgroundColor: "#FF5B5B", // Red background color
          color: "#FFFFFF", // White text color
          border: "2px solid #FF5B5B", // Red border
        }
      });
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
        <div className='flex flex-wrap sm:grid grid-cols-2 gap-5 bg-surface p-5'>
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
            <Button className='col-start-1 col-end-3 !bg-secondary w-full' disabled={disable && true} onClick={()=> handleClick()}>
                SEND
            </Button>
        </div>
      </div>
    </div>
  )
}

export default Form