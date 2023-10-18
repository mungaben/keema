
"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';
type Testimonial = {
  name: string,
  date: string,
  message: string
};

const testimonials: Testimonial[] = [
  {
      name: "Sarah Smith",
      date: "January 15, 2023",
      message: "I had the pleasure of working with Ben to create my website, and I couldn't be happier with the results. Ben is a true professional, delivering a website that perfectly aligns with my vision. The project was completed on time, and communication was excellent throughout."
  },
  {
      name: "John Doe",
      date: "March 22, 2023",
      message: "I highly recommend Ben for website development. Their attention to detail and technical expertise are outstanding. They transformed my website into a user-friendly masterpiece. Working with Ben was a seamless and enjoyable experience."
  },
  {
      name: "Emily Johnson",
      date: "May 7, 2023",
      message: "I reached out to Ben to build my e-commerce website, and the results exceeded my expectations. The website not only looks stunning but also functions flawlessly. Ben is not just a developer but a partner in success. They delivered on time and offered valuable insights along the way."
  },
  {
      name: "David Anderson",
      date: "July 11, 2023",
      message: "Ben is a website development wizard! They created a website for my startup that has been instrumental in attracting customers and investors. The project was completed ahead of schedule, and Ben was always there to address my questions and concerns."
  },
  {
      name: "Megan Lee",
      date: "September 2, 2023",
      message: "I can't thank Ben enough for the fantastic website they built for my personal blog. It's not only aesthetically pleasing but also incredibly responsive and fast. Ben is a talented developer who truly cares about their clients' success. Working with them has been a delight."
  }
];
const Slider = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper justify-center items-center flex flex-col"
      >

        {
          testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className=" flex justify-center items-center flex-col p-10 gap-5">
              <p className="text-[20px]  text-black text-center font-normal text-xl my-10">{testimonial.message}</p>
              <div className="flex text-[20px]  justify-center items-center flex-col mt-5">
                <p className="text-black text-center font-semibold text-xl">{testimonial.name}</p>
                <p className="text-black text-center font-normal text-xl">{testimonial.date}</p>
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
      
    </>
  )
}

export default Slider