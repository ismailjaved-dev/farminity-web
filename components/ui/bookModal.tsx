"use client"
import React,{ useState } from 'react'
import { useToast } from "@/components/ui/use-toast"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { dataUploader } from '@/lib/utils';
  

interface HeroProps {
  type: string;
}

const BookModal: React.FC<HeroProps> = ({type}) => {
  
    const [data, setData] = useState({
      name: "",
      phone:"",
      date:"",
      bookingType:"",
      activeStatus: false
    })

    const [disable, setDisable] = useState(false);

    const { toast } = useToast()
  
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
        phone:"",
        date:"",
        bookingType:"",
        activeStatus: false
      })
      setDisable(false);
    };
  
  
    const bookingDataUploader = async () => {
     // Check if any field is empty
  if (!data.name || !data.phone || !data.date || !data.bookingType) {
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

  setDisable(true);
  const func = await dataUploader(data);
  (await func) === "Data Uploaded"
    ? dataUploaded()
    : toast({
        variant: "destructive",
        description: "Data not submitted",
        style: {
          backgroundColor: "#FF5B5B", // Red background color
          color: "#FFFFFF", // White text color
          border: "2px solid #FF5B5B", // Red border
        }
      });
    };
 

  return (
    <AlertDialog>
    <AlertDialogTrigger className={type}>Book Now</AlertDialogTrigger>
    <AlertDialogContent className='!bg-surface'>
      <AlertDialogHeader>
        <AlertDialogTitle>Booking</AlertDialogTitle>
        <AlertDialogDescription className='flex flex-col gap-3'>
            <input className='w-full bg-white p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px] rounded'
             placeholder='Name'
             value={data.name}
             onChange={(e)=> setData({...data, name:e.target.value})}
            />
             <input className='w-full bg-white p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px] rounded'
              type="date"
            placeholder='Date'
            value={data.date}
            onChange={(e)=> setData({...data, date:e.target.value})}
            />
            <input className='w-full bg-white p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px] rounded'
             placeholder='Phone Number'
             value={data.phone}
             onChange={(e)=> setData({...data, phone:e.target.value})}
             />
             <input 
             className='w-full bg-white p-3 col-start-1 col-end-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px] rounded'
             placeholder='Booking Type'
             value={data.bookingType}
             onChange={(e)=> setData({...data, bookingType:e.target.value})}
             />
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel className='modalBtnSecondary'>Cancel</AlertDialogCancel>
        <AlertDialogAction disabled={disable && true} onClick={()=> bookingDataUploader()}>Save</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}

export default BookModal
