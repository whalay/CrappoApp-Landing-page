import React from 'react'

import illustration from '../assets/images/Illustration.svg';
import icon from '../assets/images/Icon.svg';
import icon1 from '../assets/images/Icon1.svg';
import icon2 from '../assets/images/Icon2.svg';
import vector3 from '../assets/images/Vector3.svg';
import vector from '../assets/images/Vector2.svg';
const Hero = () => {
    return (
        <div className='bg-[#0D0D2B] w-full h-full p-5 md:px-10 text-white font-Oxanium '>
            <div className='md:flex md:pr-20 md:m-4 items-center'>
                <div className='md:w-[50%] px-14  ' >
                    <button className='bg-gray-500 p-2 text-left     rounded-full text-xs '> <span
                        data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="3000"
                        className='bg-gray-100 mr-10  px-4 ml-0 p-1 text-left text-black rounded-full'>70% SAVE</span>for the best black friday deals</button>
                    <h1 data-aos="fade-up"
                        data-aos-duration="3000" className='py-5 text-4xl md:text-5xl mx-auto font-bold '>Fastest & Secure <span className=''>Platform To Invest In Crypto</span></h1>
                    <p data-aos="fade-up" data-aos-duration="3000" className='pb-6 text-xs'>
                        buy and sell cryptocurrencies by trustted IDM wallets, in over 100m transaction</p>
                    <button className=' py-1 px-3 rounded-full bg-blue-500 text-2xl'>Try For free <img src={vector3} alt="" data-aos="fade-right" data-aos-easing="linear"
                        data-aos-duration="1500" className="inline bg-white p-3  rounded-full ml-5" /></button>
                </div>

                <div data-aos="zoom-in-up" data-aos-duration="3000" className="md:mx-15">
                    <img src={illustration} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Hero