import Image from 'next/image';  // ✅ Import Next.js Image component
import { assets } from '@/assets/assets';
import React from 'react';

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50'>
        <a href="">
          <Image src={assets.logo} alt="Logo" className="w-28 cursor-pointer mr-14" width={112} height={28} /> 
        </a>
        <ul>
          <li><a href="#top">Home</a></li>
          <li><a href="#about">Ab me</a></li>
          <li><a href="#servises">Services</a></li> 
          <li><a href="#work">My Work</a></li>
          <li><a href="#contact">Coact Me</a></li>
        </ul>
        <div>
          <a href="#contact">Contact  
            <Image src={assets.arrow_icon} alt="Arrow Icon" className="w-3" width={12} height={12} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
