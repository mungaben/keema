









import { ChevronUpSquare, HeartOff, Trash2 } from 'lucide-react'
import React from 'react'
import Image from 'next/image'

const ProductsPage = () => {
 const ProductsWeSell=[
  
      {
        iamge: "/images/mongobox.png",
        title: "IMagokits Pack",
       price: "ksh 1,000.00",

      },
      {
        iamge: "/images/mongobox.png",
        title: "IMagokits Pack",
       price: "ksh 1,000.00",

      },
      {
        iamge: "/images/mongobox.png",
        title: "IMagokits Pack",
       price: "ksh 1,000.00",

      },
      {
        iamge: "/images/mongobox.png",
        title: "IMagokits Pack",
       price: "ksh 1,000.00",

      },
      {
        iamge: "/images/mongobox.png",
        title: "IMagokits Pack",
       price: "ksh 1,000.00",

      },
      {
        iamge: "/images/mongobox.png",
        title: "IMagokits Pack",
       price: "ksh 1,000.00",

      },
  
  ]
  return (
    <div className=' bg-[#FFFF] z-50  keep-scrolling  mt-10    text-[#222831] flex flex-col justify-evenly items-center'>
      <div className=' flex flex-col justify-center items-center '>
        <h3  className=' font-[400] leading-[42px] text-[28px]  text-[#222831]/70  '>
          Services
        </h3> 
        <h2 className='text-center  font-[600] leading-[54px] text-[36px] bg-[#FFFF] '>
          We offer Best Services
        </h2>

      </div>
      <div className='  md:w-[80vw] w-full mx-10 bg-[#FFF] '>
      <div className='  w-full grid grid-rows-2 keep-scrolling  overflow-scroll  grid-flow-col gap-4 place-content-center  '>
        {
          ProductsWeSell.map((service,index)=>(
            <div key={index} className='flex flex-col overflow-scroll min-w-full  keep-scrolling mx-5 justify-between   items-center    cursor-pointer  shadow-[#000]/30 shadow-inner rounded-lg '>
              <div className='flex justify-center items-center '>
                <Image
                src={"/images/home-biogas.png"}
                width={400}
                height={400}
                alt={service.title}
                />
              </div>
              <div className='    w-full   justify-start items-start rounded-b-2xl'>
              <h3 className='font-[600]  md:ml-5 text-[#0000]/70 mx-2  leading-[30px] text-lg md:text-[20px] mt-2'>
                {service.title}
              </h3>
              <p className='text-[#0000]/70 mx-2  md:ml-5 text-start font-[400] leading-[24px] text-[16px] mt-2'>
                {service.price}
              </p>
              </div>
             
            </div>
          ))

        }

      </div>

      </div>

     
    </div>
  )
}

export default ProductsPage