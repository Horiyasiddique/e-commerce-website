import React from "react";

import img43 from "../../../../images/img43.jpg"
import img44 from "../../../../images/img44.jpg";
import img45 from "../../../../images/img45.jpg";
import img46 from "../../../../images/img46.jpg";
import img47 from "../../../../images/img47.jpg";
import img48 from "../../../../images/img48.jpg";
import img49 from "../../../../images/imh49.jpg";
import img50 from "../../../../images/img50.jpg";
import Cards from "@/components/Cards";

export default function Jewellery() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-black m-8">Blockbuster Deals 🎉</h1>
      <div className="flex justify-around m-7 flex-wrap ">
        <Cards
          imageSource={img43}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img44}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img50}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img49}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
      <div className="flex justify-around m-7 flex-wrap">
        <Cards
          imageSource={img45}
          discount="50% off"
          newPrice="$200.00"
          oldPrice="500"
        />
        <Cards
          imageSource={img47}
          discount="20% off"
          newPrice="$10.00"
          oldPrice="60"
        />
        <Cards
          imageSource={img46}
          discount="45% off"
          newPrice="$250.00"
          oldPrice="300"
        />
        <Cards
          imageSource={img48}
          discount="20% off"
          newPrice="$20.00"
          oldPrice="100"
        />
      </div>
    </div>
  );
}
