import React from "react";
import Image from "next/image";
import img1 from "../../../../../images/img1.jpg";

export default function Cards({ imageSource, discount, newPrice, oldPrice }) {
  return (
    <div className="p-4 max-w-sm w-[300px] h-[400px] mx-auto grid place-content-center bg-white shadow-xl shadow-slate-500 space-x-4 rounded-2xl  transition-transform duration-300 hover:scale-110  ">
      <div>
        <Image
          src={imageSource}
          alt="Description of the image"
          width={150}
          height={200}
          className="object-cover"
        />
      </div>

      <div className="w-16 h-6 p-1 mt-4 rounded-md text-sm text-white bg-pink-600">
        {discount}
      </div>
      <div className="mt-3">
        <p className="text-xm text-black font-bold ">
          {newPrice} <del className="text-sm text-slate-600">{oldPrice}</del>
        </p>
      </div>
      <div className="flex justify-around">
        <button className=" mt-2 bg-[#92B49C] rounded-md p-2 w-full h-7 text-white text-sm hover:bg-[#B24839]">
          Buy now
        </button>
      </div>
      <div>
        <button className=" mt-2 bg-[#92B49C] rounded-md p-2 w-full h-7 text-white text-sm hover:bg-[#B24839] ">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
