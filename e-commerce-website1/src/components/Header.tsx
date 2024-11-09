
import Image from 'next/image';
import logo from "../logo.png"
function Header() {
  return (
    <div className='w-screen h-20 bg-[#B24839] flex justify-between items-center '>
      <div>
        <Image className='w-32 h-16 object-cover ml-4' src={logo} alt="logo"  />
      </div>
      <div className='flex'>
        <input className='rounded-md border-none w-96 h-9 p-4 font-serif hover:border-none hidden md:block ' type="text" placeholder='Search Here....' />
        <button className='bg-[#92B49C] text-white w-20 border-none rounded-md relative right-20 hidden md:block'>Search</button>
      </div>
      <div className='mr-0'>
      <ul className='flex justify-end text-white '>
      <li className='m-3 hover:text-[#92B49C]'><a href="">Home</a></li>
        <li className='m-3 hover:text-[#92B49C]'><a href="">Shop</a></li>
        <li className='m-3 hover:text-[#92B49C]'><a href="">Contact Us</a></li>
        <li className='m-3 hover:text-[#92B49C]'><a href="">Be a new seller</a></li>
      </ul>
      </div>
    </div>
  )
}

export default Header
