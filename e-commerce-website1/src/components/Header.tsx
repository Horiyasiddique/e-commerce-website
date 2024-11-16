import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
function Header() {
  return (
    // main div for navbar
    <div className=" ">
      {/* first part of navbar */}
      <div className="flex justify-between items-center w-full h-14">
        <div className="flex gap-x-3 text-2xl text-slate-600 mx-6 ">
          <a
            href="www.linkedin.com/in/hooriya-siddique-b08754301"
            className=" hover:text-blue-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Horiyasiddique"
            className="hover:text-blue-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/horiyasiddique/profilecard/?igsh=MW9sZTAycXdyaW9ybg=="
            className="hover:text-blue-300"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.facebook.com/share/19gC7DRe5L/?mibextid=qi2Omg"
            className="hover:text-blue-300"
          >
            <FaFacebook />
          </a>
        </div>

        <div>
          <p className="font-sans text-xl text-slate-600">
            {" "}
            <span className="text-slate-600 font-medium hover:text-blue-300">
              {" "}
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
      <hr />

      {/* second part of navbar */}
      <div className="flex justify-around items-center my-4">
        <div className="text-5xl text-black font-bold">HS</div>
        <div>
          <input
            type="text"
            placeholder="Search Here ....."
            className="w-[500px] h-9 rounded-lg p-3 border-solid border-2 border-slate-500"
          />
        </div>

        <div className="flex gap-x-5 text-2xl text-slate-600 ">
          <FaCartPlus />
          <GiSelfLove />
        </div>
      </div>
      <hr />

      {/* third part of navbar */}
      <div className="my-4">
        <ul className="w-screen h-10  font-semibold text-slate-950 flex justify-center items-center gap-8  ">
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
    </div>
  );
}

export default Header;
