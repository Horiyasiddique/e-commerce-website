import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface CardProps {
  imageSource: StaticImageData;

  cakeName: string;
  cakeDescription: string;
}

export default function Cards({
  imageSource,
  cakeName,
  cakeDescription,
}: CardProps) {
  return (
    <div id="card-container">
      <div>
        <Image src={imageSource} alt="Description of the image" />
      </div>

      <div id="CakeName">{cakeName}</div>
      <div id="cakeDescript">{cakeDescription}</div>

      <div id="card-buttons">
        <button className="action-button">Buy Now</button>
        <button className="action-button">Add to Cart</button>
      </div>
    </div>
  );
}
