




import { ChevronUpSquare, HeartOff, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  

  const serviceWeProvide=[
  
    {
      icon: HeartOff,
      title: "Information & Education",
      description: "Built Wicket longer admire do barton vanity itself do in it."

    },
    {
      icon: ChevronUpSquare,
      title:"Course & Training",
      description:"Built Wicket longer admire do barton vanity itself do in it."



    },
    {
      icon:Trash2,
      title:"Waste Management",
      description:"Built Wicket longer admire do barton vanity itself do in it."
    }

]
return (
  <div className=' bg-[#fff] h-[70dvh]  mt-20  text-[#222831] flex flex-col justify-evenly items-center'>
    <div className=' flex flex-col justify-center items-center '>
      <h3  className=' font-[400] leading-[42px] text-[28px] mt-5 text-[#222831]/70  '>
        Services
      </h3> 
      <h2 className='text-center  font-[600] leading-[54px] text-[36px] mt-3'>
        We offer Best Services
      </h2>

    </div>

    <div className=' md:grid mx-2 md:grid-cols-2   lg:grid-cols-3 gap-20 mt-10   '>
      {
        serviceWeProvide.map((service,index)=>(
          <div key={index} className='flex flex-col justify-between items-center mt-4  p-14  min-h-[350px]  hover:shadow-2xl shadow-[#000]/30 shadow-inner rounded-lg '>
            <div className='flex justify-center items-center'>
              <service.icon size={80} color='#222831'/>
            </div>
            <h3 className='font-[600] max-w-[348px] leading-[30px] text-[20px] mt-2'>
              {service.title}
            </h3>
            <p className='text-[#222831]/70 max-w-[250px] text-center font-[400] leading-[24px] text-[16px] mt-2'>
              {service.description}
            </p>
          </div>
        ))

      }

    </div>
  </div>
  )
}

export default Services