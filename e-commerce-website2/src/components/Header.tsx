import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div id="header-container">
      {/* first part of header */}
      <div id="header-part-1">
        <div id="header-links">
          <Link
            href="https://www.facebook.com/share/19gC7DRe5L/?mibextid=qi2Omg"
            target="_blank"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/horiyasiddique/profilecard/?igsh=MW9sZTAycXdyaW9ybg=="
            target="_blank"
          >
            <FaInstagram />
          </Link>
          <Link href="#">
            <FaLinkedin />
          </Link>
        </div>
        <div>
          <h1 id="header-heading">Cake Shop</h1>
        </div>
        <div>
          <button id="call-btn">Call Us +92 345-8906568</button>
        </div>
      </div>
      {/* second part of header  */}

      <div id="header-part-2">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li>
          <a href="/Cake">Cakes</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
      </div>
    </div>
  );
}

export default Header;
