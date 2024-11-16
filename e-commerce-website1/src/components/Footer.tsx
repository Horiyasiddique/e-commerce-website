import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className='bg-blue-300 w-screen h-[200px] flex flex-col'>
      <div className="flex justify-center mt-20 gap-x-3 text-2xl text-slate-600 mx-6">
          <a href="www.linkedin.com/in/hooriya-siddique-b08754301" className="hover:scale-110">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Horiyasiddique" className="hover:scale-110">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/horiyasiddique/profilecard/?igsh=MW9sZTAycXdyaW9ybg==" className="hover:scale-110">
            <FaInstagramSquare />
          </a>
          <a href="https://www.facebook.com/share/19gC7DRe5L/?mibextid=qi2Omg" className="hover:scale-110">
            <FaFacebook />
          </a>
        </div>
        <div className='text-center mt-5 text-xl text-slate-800'>
          All Rights reserved
        </div>
    </div>
   
  )
}

export default Footer
