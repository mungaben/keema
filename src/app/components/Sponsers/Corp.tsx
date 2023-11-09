





import Image from 'next/image'
import React from 'react'

const sponsersImages=[
    {
        image:"/images/logo.png",
},
{
    image:"/images/joja.png",

},
{
    image:"/images/Dinas.png",
}

]




const Corp = () => {
  return (
    <div  className=' text-black md:mx-60 flex-row w-full  flex gap-10 md:gap-20 justify-center items-center'>
        {
            sponsersImages.map((sponser,idex)=>(
                <div  key={idex} className=' flex justify-center items-center'>
                    <Image src={sponser.image} alt="sponser image" width={100} height={200} className=' object-contain'/>
                </div>
            ))
        }

    </div>
  )
}

export default Corp