

import Image from 'next/image'
import React from 'react'

const Banner2 = () => {
  return (
    <div className=' bg-bottom'>
        <Image
        src={'/images/home.png'}
        alt="Picture of the author"
        width={500}
        height={500}
        className='  object-cover items-center flex justify-center'
        />
    </div>
  )
}

export default Banner2