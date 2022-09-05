import React from 'react'

import bitcoin from '../assets/images/Bitcoin.svg';
import litecoin from '../assets/images/Vector1.svg'

const Section = () => {
    return (
        <div className='bg-gray-200 w-full h-full font-Oxanium '>
            <div className='text-center text-2xl flex flex-col items-center pt-56 '>
                <h3>Trade Securely And Market The High Growth Cryptocurrencies.</h3>
            
            <div className='flex md:flex-row flex-col justify-between gap-9 md:m-20 p-5 '>
                <div className='bg-white p-9 py-14  text-center rounded-3xl hover:bg-[#2B076E] hover:cursor-pointer'>
                    <img src={bitcoin} alt="" className='mx-auto'/>
                    <h2 className='text-4xl font-semibold py-7'>Bitcoin</h2>
                    <p className='text-sm py-7'>Digital currency in which a
                        record of transactions is maintained.</p>
                    <button className='px-5 py-2 rounded-full bg-blue-500 '>Start Mining</button>
                </div>
                <div className='bg-white p-9 py-14  text-center rounded-3xl '>
                <img src={bitcoin} alt="" className='mx-auto'/>
                    <h2 className='text-4xl font-semibold py-7'>Ethereum</h2>
                    <p className='text-sm py-7'>Blockchain technology to create and run
                        decentralized digital applications.</p>
                    <button className='px-5 py-2 rounded-full bg-blue-500 '>Start Mining</button>
                </div>
                <div className='bg-white p-9 py-14  text-center rounded-3xl'>
                    <img src={litecoin} alt="" className='mx-auto' />
                    <h2 className='text-4xl font-semibold py-7'>Litecoin</h2>
                    <p className='text-sm py-7'>Cryptocurrency that enables
                        instant payments to anyone in the world.</p>
                    <button className='px-5 py-2 rounded-full bg-blue-500 '>Start Mining</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Section