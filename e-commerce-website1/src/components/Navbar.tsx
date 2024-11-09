 import Link from 'next/link';

function Navbar() {
  return (
    <div className='mt-72'>
        <ul className='w-screen h-10 bg-[#ebeff5] text-sm text-slate-800 flex justify-around items-center '>
            <li><Link href="/All" className='hover:font-semibold'>All</Link></li>
            <li><Link href="/ForWomen" className='hover:font-semibold'>For Women</Link></li>
            <li><Link href="/Men" className='hover:font-semibold'>For Men</Link></li>
            <li><Link href="/Perfumes" className='hover:font-semibold'>Perfumes</Link></li>
            <li><Link href="/Cosmetics" className='hover:font-semibold'>Cosmetics</Link></li>
        </ul>
    </div>
  );
}

export default Navbar;
