import React from 'react'
import Image from 'next/image'
import heroimage from "../../images/heroimg.jpg"

function Hero() {
  return (
    <div id="hero">
 <Image
      src={heroimage}
      alt='hero section image'
      
      >

      </Image>
    </div>
  )
}

export default Hero
