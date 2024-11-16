 import React from 'react'
 import Image from 'next/image'
import heroImage from "../app/(public)/cupcake-hero.jpg.jpg"


function Hero() {
  return (
    <div id="hero">
 <Image id='hero-image'
      src={heroImage}
      alt='hero section image'     
      >

      </Image>
    </div>
  )
}

export default Hero;
