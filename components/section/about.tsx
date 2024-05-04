"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/navigation';
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react"; 
import { ChevronLeft } from "lucide-react"; 
import { Navigation } from 'swiper/modules';

const About = () => {
  const data = [
    {
      title: "Swimming Pool",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      icon: "/swingPoolIcon.svg",
    },
    {
      title: "Snooker",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      icon: "/gamingIcon.svg",
    },
    {
      title: "Cricket",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      icon: "/cricketIcon.svg",
    },
    {
      title: "Foosball",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      icon: "/foosballIcon.svg",
    },
    {
      title: "Caromboard",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      icon: "/caromboradIcon.svg",
    },
    {
      title: "Badminton",
      desc: "Lorem ipsum dolor sit amet consectetur.",
      icon: "badmintonIcon.svg",
    },
    {
        title: "Badminton",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        icon: "badmintonIcon.svg",
      },
      {
        title: "Badminton",
        desc: "Lorem ipsum dolor sit amet consectetur.",
        icon: "badmintonIcon.svg",
      },

  ];

  return (
    <div className="bg-surface w-full py-20 overflow-x-hidden">
      <div className="fluid-container flex justify-center px-5">
        <h2 className="text-h3 md:text-h2 max-w-[900px] font-heading text-center text-secondary">
          From tranquil moments to hands-on experiences, discover the activities
          that will make your Farminity escape truly special.
        </h2>
      </div>

      <div className="fluid-container flex justify-between py-4 my-9 sm:py-9 px-5 border-b border-[#ECEDF0]">
            <Button size="icon" variant="secondary" className="hidden sm:flex">
              <ChevronLeft />
            </Button>
            <Button size="icon"  className="hidden sm:flex"><ChevronRight /></Button>
      </div>

      <div className="fluid-container overflow-visible">
        <Swiper
          slidesPerView={6}
          spaceBetween={30}
          
          className="mySwiper !overflow-visible min-h-[12.5rem]"
        >
          {data.map((res, index) => {
            return (
              <SwiperSlide className="bg-white p-[1.25rem]" key={index}>
                <Image src={res.icon} width={24} height={24} alt="" />
                <p className="text-lg text-secondary mb-4 mt-10">{res.title}</p>
                <p className="text-gray text-sm">{res.desc}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default About;
