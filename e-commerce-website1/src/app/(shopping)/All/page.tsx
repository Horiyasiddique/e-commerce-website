import React from "react";


import img1 from "../../../../images/img1.jpg";
import img2 from "../../../../images/img2.jpg";
import img3 from "../../../../images/img3.jpg";
import img4 from "../../../../images/img4.jpg";
import img5 from "../../../../images/img5.jpg";
import img6 from "../../../../images/img6.jpg";
import img7 from "../../../../images/img7.jpg";
import img8 from "../../../../images/img8.jpg";
import Cards from "@/components/Cards";


export default function All() {
  return (
    
    <div>
    <h1 className="text-3xl font-bold m-8">Blockbuster Deals 🎉</h1>
    <div className="flex justify-around m-7 flex-wrap " >
      <Cards imageSource={img1} discount="50% off" newPrice="$200.00" oldPrice="500"/>
      <Cards imageSource={img2} discount="20% off"  newPrice="$10.00" oldPrice="60"/>
      <Cards imageSource={img3} discount="45% off"  newPrice="$250.00" oldPrice="300"/>
      <Cards imageSource={img4} discount="20% off"  newPrice="$20.00" oldPrice="100"/>
      
    </div>
    <div className="flex justify-around m-7 flex-wrap">
      <Cards imageSource={img5} discount="50% off" newPrice="$200.00" oldPrice="500"/>
      <Cards imageSource={img6} discount="20% off"  newPrice="$10.00" oldPrice="60"/>
      <Cards imageSource={img7} discount="45% off"  newPrice="$250.00" oldPrice="300"/>
      <Cards imageSource={img8} discount="20% off"  newPrice="$20.00" oldPrice="100"/>
      
    </div>
    </div>
   
  )
}



