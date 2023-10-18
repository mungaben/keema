







import { Search } from 'lucide-react'
import React from 'react'
import GoogleMps from './GoogleMps'

const WasteBankPage = () => {
  return (
    <div className=' h-screen flex justify-center items-center mx-10 flex-col md:flex-row bg-blue-500'>
     <div className=' bg-green-700  md:w-1/2'>
       <GoogleMps/>

     </div>
     <div className='   md:w-1/2 flex  flex-col mt-12 gap-5 ml-5' >
      <h4 className=' text-start font-[400] text-[28px]'>
        Maps
      </h4>
      <h2 className=' font-[600] text-[36px] leading-snug '>
      Find your nearest waste bank
      </h2>
      <p className=' text-[20px]'>
      Lorem ipsum dolor sit amet consectetur. Nisl donec tortor volutpat id pharetra ultricies mauris. Eget augue at egestas et consequat quis ultricies. At vel aenean posuere neque a fermentum donec eros ut. Nullam mi egestas sed facilisis.
      </p>

      <div className=' w-full flex flex-row justify-center items-center text-white'>
        <input type="search"  placeholder='Search your waste bank here!' className='  flex justify-center border-none  w-full
         rounded-md p-2 '/>
        {/* <Search size={ 30}  /> */}
      </div>
     </div>
    </div>
  )
}

export default WasteBankPage