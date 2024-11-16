import React from "react";
import Image from "next/image";
import heroimage from "../../images/Hero-image.png";

function Hero() {
  return (
    <div className="w-screen h-[500px] rounded-lg object-cover">
      <Image src={heroimage} alt="hero section image"></Image>
    </div>
  );
}

export default Hero;
