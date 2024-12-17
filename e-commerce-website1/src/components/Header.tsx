import React from "react";
import Link from "next/link";
import { FaInstagramSquare, FaFacebook, FaLinkedin, FaGithub, FaCartPlus } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
} from "@/components/ui/sheet";

function Header() {
  return (
    <div>
      {/* First Part of Navbar */}
      <div className="justify-between items-center max-w-full h-14 hidden md:flex">
        <div className="flex gap-x-3 text-2xl text-slate-600 mx-6">
          <a href="www.linkedin.com/in/hooriya-siddique-b08754301" className="hover:text-blue-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Horiyasiddique" className="hover:text-blue-300">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/horiyasiddique/profilecard/?igsh=MW9sZTAycXdyaW9ybg==" className="hover:text-blue-300">
            <FaInstagramSquare />
          </a>
          <a href="https://www.facebook.com/share/19gC7DRe5L/?mibextid=qi2Omg" className="hover:text-blue-300">
            <FaFacebook />
          </a>
        </div>
        <div>
          <p className="font-sans text-xl text-slate-600">
            <span className="text-slate-600 font-medium hover:text-blue-300">
              Transform Your Lifestyle
            </span>{" "}
            with Our Latest Products!
          </p>
        </div>
        <div>
          <select className="mx-6">
            <option value="$USD">$USD</option>
            <option value="PKR">PKR</option>
            <option value="INR">INR</option>
            <option value="YEN">YEN</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
      </div>
      <hr className="hidden md:block" />

      {/* Second Part of Navbar */}
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center my-4 gap-4">
        <div className="text-5xl text-black font-bold">HS</div>
        <div className="w-full max-w-xs md:max-w-md">
          <input
            type="text"
            placeholder="Search Here ....."
            className="w-full h-9 rounded-lg p-3 border-solid border-2 border-slate-500"
          />
        </div>
        <div className="hidden md:flex gap-x-5 text-2xl text-slate-600">
          <FaCartPlus />
          <GiSelfLove />
        </div>
      </div>
      <hr />

      {/* Third Part of Navbar */}
      <div className="hidden md:flex my-4">
        <ul className="w-full h-10 font-semibold text-slate-950 flex justify-center items-center gap-8">
          <li>
            <Link href="/All" className="hover:text-blue-300">
              All
            </Link>
          </li>
          <li>
            <Link href="/ForWomen" className="hover:text-blue-300">
              For Women
            </Link>
          </li>
          <li>
            <Link href="/Men" className="hover:text-blue-300">
              For Men
            </Link>
          </li>
          <li>
            <Link href="/Perfumes" className="hover:text-blue-300">
              Perfumes
            </Link>
          </li>
          <li>
            <Link href="/Cosmetics" className="hover:text-blue-300">
              Cosmetics
            </Link>
          </li>
          <li>
            <Link href="/Jewellery" className="hover:text-blue-300">
              Jewellery
            </Link>
          </li>
          <li>
            <Link href="/Books" className="hover:text-blue-300">
              Books
            </Link>
          </li>
          <li>
            <Link href="/Cart" className="hover:text-blue-300">
              Cart
            </Link>
          </li>
        </ul>
      </div>

      {/* Responsive Sheet Navigation for Small Screens */}
      <div className="flex md:hidden justify-start items-start">
        <Sheet>
          <SheetTrigger asChild>
            <button className="">
              <Menu/>
            </button>
          </SheetTrigger>
          <SheetContent>
           
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
      </div>
    </div>
  );
}

export default Header;
