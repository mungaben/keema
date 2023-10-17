









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
    <div className=' bg-[#fff] h-screen mb-40  mt-20  text-[#222831] flex flex-col justify-evenly items-center'>
      <div className=' flex flex-col justify-center items-center '>
        <h3  className=' font-[400] leading-[42px] text-[28px] mt-5 text-[#222831]/70  '>
          Services
        </h3> 
        <h2 className='text-center  font-[600] leading-[54px] text-[36px] mt-3'>
          We offer Best Services
        </h2>

      </div>

      <div className=' grid  md:grid-cols-2 mb-10 lg:grid-cols-3 gap-20 mt-10   '>
        {
          ProductsWeSell.map((service,index)=>(
            <div key={index} className='flex flex-col  mx-0justify-between items-center   min-h-[350px] cursor-pointer  shadow-[#000]/30 shadow-inner rounded-lg '>
              <div className='flex justify-center items-center '>
                <Image
                src={"/images/home-biogas.png"}
                width={400}
                height={400}
                alt={service.title}
                />
              </div>
              <div className=' bg-green-950   p-20 rounded-b-2xl'>
              <h3 className='font-[600] max-w-[348px] text-[#fff]/70  leading-[30px] text-[20px] mt-2'>
                {service.title}
              </h3>
              <p className='text-[#fff]/70 max-w-[250px] text-center font-[400] leading-[24px] text-[16px] mt-2'>
                {service.price}
              </p>
              </div>
             
            </div>
          ))

        }

      </div>
    </div>
  )
}

export default ProductsPage