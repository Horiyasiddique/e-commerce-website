import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";


interface CardProps {
  imageSource: StaticImageData;
  
  discount: string;
  newPrice: string | number;
  oldPrice: string | number;
} 

export default function Cards({imageSource,discount,newPrice, oldPrice,}: CardProps) {
  return (
    <div className="">
    <div className=" ml-6 p-4 max-w-sm w-[280px] h-[370px] mx-auto grid place-content-center bg-white border border-gray-200 shadow-lg space-x-4 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex justify-center mb-4">
        <Image
          src={imageSource}
          alt="Product image"
          width={160}
          height={200}
          className="object-cover rounded-md h-[200px] w-[160px] shadow-lg"
        />
      </div>

      

      <div className="w-20 h-6 mb-2 flex items-center justify-center rounded-full text-xs text-white font-medium bg-gradient-to-r from-pink-500 to-red-400">
        {discount}
      </div>

      <div className="mt-2 text-center">
        <p className="text-lg font-semibold text-gray-800">
          ${newPrice}{" "}
          <span className="text-sm text-gray-500 line-through ml-2">
            ${oldPrice}
          </span>
        </p>
      </div>

      <div className="flex justify-between mt-4 gap-2">
        <button className="flex-1 bg-gradient-to-r from-blue-300 to-indigo-300 text-white rounded-md py-2 text-xs font-medium shadow-md transition hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg">
          Buy Now
        </button>

        <button className="flex-1 bg-gradient-to-r from-blue-300 to-indigo-300 text-white rounded-md py-2 text-xs font-medium shadow-md transition hover:from-blue-600 hover:to-indigo-600 hover:shadow-lg">
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
}
