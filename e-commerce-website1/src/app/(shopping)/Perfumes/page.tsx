import React from "react";

import img27 from "../../../../images/img27.jpg"
import img28 from "../../../../images/img28.jpg";
import img29 from "../../../../images/img29.jpg";
import img30 from "../../../../images/img30.jpg";
import img31 from "../../../../images/img31.jpg";
import img40 from "../../../../images/img40.jpg";
import img41 from "../../../../images/img41.jpg";
import img42 from "../../../../images/img42.jpg";
import Cards from "@/components/Cards";

export default function Perfumes() {
  return (
    <div>
      <h1 className="text-3xl font-bold m-8">Blockbuster Deals 🎉</h1>
      <div className="flex justify-around m-7 flex-wrap ">
        <Cards
          imageSource={img27}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img28}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img29}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img30}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
      <div className="flex justify-around m-7 flex-wrap">
        <Cards
          imageSource={img31}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img40}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img41}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img42}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
    </div>
  );
}
