import React from 'react'
import Image from 'next/image'
import heroimage from "../../images/hero.jpg"

function Hero() {
  return (
    <div className='w-screen h-[500px] object-cover'>
      <Image
      src={heroimage}
      alt='hero section image'
      
      >

      </Image>
      
     
    </div>
  )
}

export default Hero
