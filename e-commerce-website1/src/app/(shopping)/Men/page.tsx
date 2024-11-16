import React from "react";

import img23 from "../../../../images/img23.jpg"
import img24 from "../../../../images/img24.jpg";
import img25 from "../../../../images/img25.jpg";
import img9 from "../../../../images/img9.jpg";
import img10 from "../../../../images/img10.jpg";
import img11 from "../../../../images/img11.jpg";
import img12 from "../../../../images/img12.jpg";
import img13 from "../../../../images/img13.jpg";

import Cards from "@/components/Cards";

export default function Men() {
  return (
    <div>
      <h1 className="text-3xl font-bold m-8">Blockbuster Deals 🎉</h1>
      <div className="flex justify-around m-7 flex-wrap ">
        <Cards
          imageSource={img23}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img24}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img25}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img9}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
      <div className="flex justify-around m-7 flex-wrap">
        <Cards
          imageSource={img10}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img11}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img12}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img13}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
    </div>
  );
}
