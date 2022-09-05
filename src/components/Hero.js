import React from 'react'

import illustration from '../assets/images/Illustration.svg';
import icon from '../assets/images/Icon.svg';
import icon1 from '../assets/images/Icon1.svg';
import icon2 from '../assets/images/Icon2.svg';
const Hero = () => {
    return (
        <div className='bg-[#0D0D2B] w-full h-full p-5 md:px-10 text-white font-Oxanium '>
            <div className='md:flex md:pr-20'>
                <div className='mt-24 w-[410px] md:mx-12' >
                    <button  className='bg-gray-500 p-4 pl-5 rounded-full text-xs '> <span data-aos="zoom-in"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine" className='bg-blue-200 mr-5  p-2 px-3 text-black rounded-full'>70% SAVE</span>for the best black friday deals</button>
                    <h1 className='py-5 text-4xl font-bold '>Fastest & Secure <span className=''>Platform To Invvest In Crypto</span></h1>
                    <p className='py-6 text-xs'>buy and sell cryptocurrencies by truustted IDM wallets, in over 100m transaction</p>
                    <button className='px-5 py-2 rounded-full bg-blue-500'>Try For free</button>
                </div>

                <div>
                    <img src={illustration} alt="" />
                </div>


            </div>
            <div className='md:flex justify-between items-center p-5'>
                <div className='flex md:justify-between justify-center items-center gap-5 p-4'>
                    <img src={icon} alt="" />
                    <div>
                        <h2 className='text-lg font-normal'>$30B</h2>
                        <p className='text-xs'>Digital Currency Exchange</p>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5 p-4'>
                    <img src={icon1} alt="" />
                    <div>
                        <h2 className='text-lg font-normal'>190+</h2>
                        <p className='text-xs'>Countries Around The World</p>
                    </div>
                </div>
                <div className='flex md:justify-between justify-center items-center gap-5 p-4'>
                    <img src={icon2} alt="" />
                    <div>
                        <h2 className='text-lg font-normal'>$10M</h2>
                        <p className='text-xs'>Trusted Wallet Investor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero