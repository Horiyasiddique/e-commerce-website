import React from "react";
import Link from "next/link";
import { FaInstagramSquare, FaFacebook, FaLinkedin, FaGithub, FaHeart } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { IoCartSharp } from "react-icons/io5";
import { Menu } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

function Footer() {
  return (
    <>
      {/* Footer for Medium and Large Screens */}
      <div className="hidden md:flex bg-blue-300 max-w-screen h-[200px] flex-col">
        <div className="flex justify-center mt-20 gap-x-3 text-2xl text-slate-600 mx-6">
          <a href="www.linkedin.com/in/hooriya-siddique-b08754301" className="hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Horiyasiddique" className="hover:scale-110">
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/horiyasiddique/profilecard/?igsh=MW9sZTAycXdyaW9ybg=="
            className="hover:scale-110"
          >
            <FaInstagramSquare />
          </a>
          <a href="https://www.facebook.com/share/19gC7DRe5L/?mibextid=qi2Omg" className="hover:scale-110">
            <FaFacebook />
          </a>
        </div>
        <div className="text-center mt-5 text-xl text-slate-800">All Rights Reserved</div>
      </div>

      {/* Fixed Bottom Navigation for Small Screens */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t md:hidden flex justify-around items-center h-16 shadow-md">
        {/* Sheet Trigger for Links */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="flex flex-col items-center">
              <Menu className="text-2xl text-slate-600" />
              <span className="text-xs">Menu</span>
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-4 mt-4">
              <li>
                <Link href="/All">All</Link>
              </li>
              <li>
                <Link href="/ForWomen">For Women</Link>
              </li>
              <li>
                <Link href="/Men">For Men</Link>
              </li>
              <li>
                <Link href="/Perfumes">Perfumes</Link>
              </li>
              <li>
                <Link href="/Cosmetics">Cosmetics</Link>
              </li>
              <li>
                <Link href="/Jewellery">Jewellery</Link>
              </li>
              <li>
                <Link href="/Books">Books</Link>
              </li>
              <li>
                <Link href="/Cart">Cart</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>

        {/* Home Icon */}
        <button className="flex flex-col items-center">
          <TiHome className="text-2xl text-slate-600" />
          <span className="text-xs">Home</span>
        </button>

        {/* Heart Icon */}
        <button className="flex flex-col items-center">
          <FaHeart className="text-2xl text-slate-600" />
          <span className="text-xs">Wishlist</span>
        </button>

        {/* Cart Icon */}
        <button className="flex flex-col items-center">
          <IoCartSharp className="text-2xl text-slate-600" />
          <span className="text-xs">Cart</span>
        </button>
      </div>
    </>
  );
}

export default Footer;
