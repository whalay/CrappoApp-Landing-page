import React from 'react'

import illustration from '../assets/images/Illustrations.svg'

const Article = () => {
    return (
        <div className='bg-[#0D0D2B] w-full h-full p-5 md:px-10 text-white font-Oxanium '>
            <div className='flex justify-center flex-col-reverse md:flex-row items-center md:p-5'>
                <img src={illustration} alt="" />
                <div className='p-5'>
                    <h2 className='text-4xl py-5'>Why You Should use <span className='block'>CHAPPO</span></h2>
                    <p className='text-xs py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laboriosam? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. In, praesentium.</p>
                    <button className='px-5 py-2 rounded-full bg-blue-500'>learn more</button>
                </div>
            </div>
            <div >
                <div className='text-center py-8'>
                    <h2 className='text-2xl py-5 font-semibold'>How Much Can You Earn With Us</h2>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro, id similique temporibus dignissimos tempore odio?</p>

                </div>
                <div className='text-black bg-white md:p-6 m-5 mx-auto  md:w-[80%] rounded-3xl  translate-y-32'>
                    <form action="" className='md:flex justify-between items-center p-6  '>
                        <input type="text" name="" id="" placeholder='Enter your hash rate' className='border-b p-2 mb-5 text-2xl md:text-2xl' />
                        <select name="list" id="" form="list" className='border-b mb-5 block'>

                            <option selected value="THS">TH/S</option>
                            <option value="H/S">H/S</option>
                            <option value="KH/S">KH/S</option>
                            <option value="KH/S">MH/S</option>
                            <option value="KH/S">GH/S</option>
                        </select>
                        <button className='px-5 py-2 rounded-full bg-blue-500 block'>Calculate</button>
                    </form>
                    <div className='px-6'>
                        <h3 className='text-xl py-5'>ESTIMATED 24 HOUR REVENUE:</h3>
                        <h2 className=' text-2xl font-semibold'>0.055 130 59 ETH <span>($1275)</span></h2>
                        <p className='py-5 '>Revenue will change based on mining difficulty and Ethereum price.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article