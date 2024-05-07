"use client";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { dataUploader } from "@/lib/utils";
import BookModal from "../ui/bookModal";
import { useToast } from "@/components/ui/use-toast"


interface HeroProps {
  heading: string;
  text: string;
}

const Hero: React.FC<HeroProps> = ({ text, heading }) => {

  const pathname = usePathname();
  
  const [disable, setDisable] = useState(false);

  const [bookingData, setBookingData] = useState({
    name: "",
    phone: "",
    date: "",
    bookingType: "",
    activeStatus: false,
  });
  
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
    setBookingData({
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
    if (!bookingData.name || !bookingData.phone || !bookingData.date || !bookingData.bookingType) {
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
    const func = await dataUploader(bookingData);
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

  const data = [
    {
      title: "Address",
      text: "Gali Number 6, jatyal goth Tappo Gadap Gadap Town",
      icon: "/pinIcon.svg",
    },
    { title: "Phone", text: "+92 000 0000000", icon: "/phoneIcon.svg" },
    { title: "Email", text: "booking@farminity.pk", icon: "/mailIcon.svg" },
  ];

  return (
    <div
      className={` relative bg-primary flex flex-wrap flex-col gap-20 px-5 ${
        pathname == "/" ? "pt-[15rem] pb-[10rem]" : "pt-[10rem]"
      }  `}
    >
      {pathname == "/" ? (
        <div>
          <Image
            src={"/heroBg.svg"}
            fill
            alt=""
            className=" w-full object-cover"
          />
          <div className="block absolute w-full h-full bg-black/40 top-0 left-0"></div>
          <div className="fluid-container text-white text-center max-w-[550px] relative">
            <h1 className="text-h2 sm:text-h1 font-heading  leading-[130%]">
              {heading}
            </h1>
            <p className="">{text}</p>
          </div>
          <div>
            <div className="fluid-container relative z-10 lg:bg-white mt-10 p-5 w-fit">
              <div className="block lg:hidden">
              <BookModal type="modalBtnSurface"/>
                </div>
              <div className="block lg:hidden"></div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  bookingDataUploader();
                }}
                className="text-white justify-center gap-5 hidden lg:flex"
              >
                <input
                  placeholder="Name"
                  className="bg-surface p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]"
                  value={bookingData.name}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, name: e.target.value })
                  }
                />
                <input
                  placeholder="Date"
                  type="date"
                  className="bg-surface p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]"
                  value={bookingData.date}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, date: e.target.value })
                  }
                />
                <input
                  placeholder="Phone Number"
                  className="bg-surface p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]"
                  value={bookingData.phone}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, phone: e.target.value })
                  }
                />
                <input
                  placeholder="Booking Type"
                  className="bg-surface p-3 text-secondary placeholder:text-secondary font-sans outline-none text-[12px] placeholder:text-[12px]"
                  value={bookingData.bookingType}
                  onChange={(e) =>
                    setBookingData({ ...bookingData, bookingType: e.target.value })
                  }
                />
                <Button type="submit" disabled={disable && true}>
                  Book Now
                </Button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`fluid-container justify-between relative pt-10 pb-24 lg:py-32 ${
            pathname == "/contact" && "!pb-48"
          } `}
        >
          <div
            className={`text-white max-w-[40rem] px-5 ${
              pathname == "/contact" && "text-center mx-auto"
            }`}
          >
            <h1 className="text-h2 md:text-h1 font-heading">{heading}</h1>
            <p className="">{text}</p>
          </div>
          <div className="absolute w-full h-full bottom-0 right-0 max-h-[488px] max-w-[635px]">
            <Image
              src={"/secondaryHeroBg.svg"}
              fill
              alt=""
              className="object-cover"
            />
          </div>

          {pathname == "/contact" && (
            <div className="flex flex-wrap md:grid grid-cols-3 px-5 gap-5 justify-between absolute z-20 w-full top-[70%] md:bottom-[-70px]">
              {data.map((res, index) => {
                return (
                  <div
                    className="bg-surface flex flex-col justify-center items-center p-10 py-10 cursor-pointer w-full "
                    key={index}
                  >
                    <Image
                      src={res.icon}
                      width={24}
                      height={24}
                      alt={res.title}
                    />
                    <h5 className="text-h5">{res.title}</h5>
                    <p className="text-[12px] text-gray text-center max-w-48">
                      {res.text}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
