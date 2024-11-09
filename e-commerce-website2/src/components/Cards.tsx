import React from "react";
import Image from "next/image";
import img1 from "../../../../../images/img1.jpg";

export default function Cards({ imageSource, discount, newPrice, oldPrice }) {
  return (
    <div id="card-container">
      <div>
        <Image
          src={imageSource}
          alt="Description of the image"
          width={150}
          height={200}
          className="object-cover"
        />
      </div>

      <div id="discount">
        {discount}
      </div>
      <div id="price-cont">
        <p id="price-para">
        <del>{oldPrice}</del> {newPrice} 
        </p>
      </div>
      <div id="button-cont">
        <button className="cards-button">
          Buy now
        </button>
      </div>
      <div>
        <button className="cards-button ">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
