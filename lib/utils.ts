import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { collection, getDocs, setDoc, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../app/firbaseConfig";
import { v4 as uuid } from "uuid";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface BookingData {
  name: string;
  phone: string;
  date: string;
  bookingType: string;
  activeStatus: boolean;
}


const dataUploader = async (data:BookingData) => {
  const dataList = []
  const querySnapshot = await getDocs(collection(db, "BookingData"));
  querySnapshot.forEach((doc) => {
      dataList.push(doc.data())
  });
  
  const today = new Date();
  const submittedDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const submittedTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  const id = uuid().slice(0, 8);

  try {
    const docRef = await setDoc(doc(collection(db, "BookingData"), id.toString()), {
      ...data,
      submittedDate,
      submittedTime,
      id: id
  });
     return 'Data Uploaded'
} catch (error) {
    console.log(error)
}
}

export { dataUploader }