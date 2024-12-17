import React from "react";

import img51 from "../../../../images/img51.jpg"
import img52 from "../../../../images/img52.jpg";
import img53 from "../../../../images/img53.jpg";
import img54 from "../../../../images/img54.jpg";

import Cards from "@/components/Cards";

export default function Jewellery() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black m-8">Blockbuster Deals 🎉</h1>
      <div className="flex justify-around m-7 flex-wrap ">
        <Cards
          imageSource={img53}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img51}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img52}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img54}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
     
    </div>
  );
}
