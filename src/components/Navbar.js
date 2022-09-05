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
    <div className="bg-[#0D0D2B] w-full p-5 px-10 text-white font-Oxanium ">
      <div className="flex justify-between px-4 items-center">
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
        <div className='md:hidden'>
          <button onClick={navHandler}>
            <img
              src={navbar ? close : hamburger}
              alt={navbar ? "hamburger" : "close"} />
          </button>
        </div>
      </div>
  

        <div className={navbar ? "md:hidden flex flex-col justify-start items-center gap-9 transition-all" : "hidden"} >
          <ul className='flex flex-col justify-between gap-5 transition-all duration-500'>
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
  )
}

export default Navbar