import React from "react";


import img32 from "../../../../images/img32.jpg"
import img33 from "../../../../images/img33.jpg";
import img34 from "../../../../images/img34.jpg";
import img35 from "../../../../images/img35.jpg";
import img36 from "../../../../images/img36.jpg";
import img37 from "../../../../images/img37.jpg";
import img38 from "../../../../images/img38.jpg"
import img39 from "../../../../images/img39.jpg"

import Cards from "@/components/Cards";

export default function Cosmetics() {
  return (
    <div className="min-h-screen w-screen">
      <h1 className="text-3xl text-black font-bold m-8">Blockbuster Deals 🎉</h1>
      <div className="flex justify-around m-7 flex-wrap ">
        <Cards
          imageSource={img32}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img33}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img34}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img35}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
      <div className="flex justify-around m-7 flex-wrap">
        <Cards
          imageSource={img36}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img37}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img38}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img39}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
    </div>
  );
}
