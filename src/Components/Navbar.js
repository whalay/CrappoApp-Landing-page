import React, { useState } from 'react';
import logo from '../assets/images/Logo.svg';
// import logo1 from '../assets/images/Logo1.svg';

import hamburger from '../assets/images/hamburger.svg';
import close from '../assets/images/close.svg';



const Navbar = () => {

  const [navbar, setNavbar] = useState(false);

  const navHandler = () => {
    setNavbar((navbar) => !navbar);
  }
  return (
    <div className="bg-[#0D0D2B] w-full   md:block p-5 px-5  text-white font-Oxanium ">
      <div className="flex justify-between  items-center md:mx-10">
        <img src={logo} alt="" />

        <div className='hidden md:flex justify-start items-center gap-9'>
          <ul className='flex justify-between gap-5'>
            <li className="">Product</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className=''>
            <button className='mr-5'>Login</button>
            <button className=' px-5 py-2 rounded-full bg-blue-500'>Register</button>
          </div>
        </div>
        <div className='md:hidden z-20'>
          <button onClick={navHandler}>
            <img
              src={navbar ? close : hamburger}
              alt={navbar ? "hamburger" : "close"} />
          </button>
        </div>
      </div>

      <div data-aos="fade-right" data-aos-duration="200"  data-aos-anchor-placement="top-bottom"
       className={navbar ? " md:hidden fixed top-0 left-0 w-full h-full  bg-[#0D0D2B] z-10" : "hidden"}>
        <div className={"space-y-14 my-32 translate-x-52 transition-all duration-50 text-2xl" } >
          <ul className='flex flex-col justify-between space-y-14  transition-all duration-50'>
            <li className="">Product</li>
            <li>Features</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <div className=''>
            <button className='mr-5'>Login</button>
            <button className=' px-5 py-2 rounded-full bg-blue-500'>Register</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;