import React from 'react'

import logo from '../assets/images/Logo.svg';
import visa from '../assets/images/Visa.svg';
import mastercard from '../assets/images/Mastercard.svg';
import bitcoin from '../assets/images/Bitcoin.svg'

import instargram from '../assets/images/instagram.svg';
import linkedin from '../assets/images/linkedin.svg';
import twitter from '../assets/images/twitter.svg';
import youtube from '../assets/images/youtube.svg';


const Footer = () => {
    return (
        <div className='bg-[#0D0D2B] w-full h-full p-5 md:px-10  text-white font-Oxanium '>
            <div className='text-center md:flex justify-between items-start m-5 text-base'>
                
                <img src={logo} alt="" className='mx-auto md:m-0' />
                
                <ul className='p-10 md:p-0'>
                    <li className='text-lg pt-8'>Quick Links</li>
                    <li className='pt-8'>Product</li>
                    <li className='pt-8'>About</li>
                    <li className='pt-8'>Features</li>
                    <li className='pt-8'>Contact</li>
                </ul>
                <ul className='p-10 md:p-0 m-0'>
                    <li className='text-lg pt-8'>Resources Links</li>
                    <li className='pt-8'>Download Whitepaper</li>
                    <li className='pt-8'>Smart Token</li>
                    <li className='pt-8'>Blockchain Explore</li>
                    <li className='pt-8'>crtpto ApI</li>
                    <li className='pt-8'>Interest</li>
                </ul>
                <div>
                    <h2>We accept following payment systems</h2>
                    <div className='flex  justify-center  gap-5 p-10'>
                        <img src={visa} alt="" className='' />
                        <img src={mastercard} alt="" />
                        <img src={bitcoin} alt="" className='' />
                    </div>
                </div>
            </div>
            <div className='md:flex justify-between m-10 '>
                <p className='text-center p-5'>© 2022 CRAPPO. All rights reserved.</p>
                <div className='flex m-10 justify-center gap-10'>
                    <img src={youtube} alt="" />
                    <img src={instargram} alt="" />
                    <img src={twitter} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer