import React from "react";

import img2 from "../../../../images/img2.jpg";
import img5 from "../../../../images/img5.jpg";
import img17 from "../../../../images/img17.jpg";
import img18 from "../../../../images/img18.jpg";
import img19 from "../../../../images/img19.jpg";
import img20 from "../../../../images/img20.jpg";
import img21 from "../../../../images/img21.jpg";
import img22 from "../../../../images/img22.jpg"

import Cards from "@/components/Cards";

export default function ForWomen() {
  return (
    <div>
      <h1 className="text-3xl text-black font-bold m-8">Blockbuster Deals 🎉</h1>
      <div className="flex justify-around  flex-wrap ">
        <Cards
          imageSource={img2}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img5}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img17}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img18}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
      <div className="flex justify-around m-7 flex-wrap">
        <Cards
          imageSource={img19}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img20}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img21}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img22}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
    </div>
  );
}
