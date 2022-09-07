import React from 'react'

import icon from '../assets/images/Icon.svg';
import icon1 from '../assets/images/Icon1.svg';
import icon2 from '../assets/images/Icon2.svg';
import illustration from '../assets/images/Illustrations.svg'


const Hero2 = () => {
    return (
        <div className='bg-[#0D0D2B] w-full h-full p-5 md:px-10 text-white font-Oxanium '>
            <div data-aos="fade-up"
                data-aos-easing="ease-in-back"
                data-aos-delay="200"
                data-aos-offset="0" data-aos-duration="1000"
                className='md:flex justify-between items-center p-5' >
                <div className='flex md:justify-between justify-center items-center gap-5 p-4'>
                    <img src={icon} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>$30B</h2>
                        <p className='text-xs'>Digital Currency Exchange</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5 p-4'>
                    <img src={icon1} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>190+</h2>
                        <p className='text-xs'>Countries Around The World</p>
                    </div>
                </div>
                <div className='flex md:justify-between justify-center items-center gap-5 p-4'>
                    <img src={icon2} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>$10M</h2>
                        <p className='text-xs'>Trusted Wallet Investor</p>
                    </div>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300" className='flex justify-center flex-col-reverse md:flex-row items-center md:p-5'>
                <img src={illustration} alt="" />
                <div data-aos="fade-up"
                    data-aos-delay="150" data-aos-duration="3000" className='p-5'>
                    <h2 className='text-6xl py-5'>Why you should use <span className='block'>CHAPPO</span></h2>
                    <p className='text-lg py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laboriosam? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. In, praesentium.</p>
                    <button className='px-5 py-2 rounded-full bg-blue-500'>learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Hero2