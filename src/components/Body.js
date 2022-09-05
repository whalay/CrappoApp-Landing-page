import React from 'react'

import chart from '../assets/images/Chart.svg';
import statistic from '../assets/images/Statistic.svg';
import table from '../assets/images/Table.svg';

const Body = () => {
    return (
        <div className='bg-[#0D0D2B] w-full h-full p-5 md:px-10 text-white font-Oxanium '>
            <div className=''>
                <h3 className='text-center'>Market Sentiments, Portfolio,
                    And Run The Infrastructure Of Your Choice</h3>
                <div className='md:flex justify-center items-center m-5'>
                    <div className='py-3'>
                        <h3 className='text-xl font-bold py-3'>Invest Smart</h3>
                        <p className='py-2  text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                        <button className='px-5 py-2 rounded-full bg-blue-500 '>learn more</button>
                    </div>
                    <img src={chart} alt="" />
                </div>
                <div className='md:flex flex-row-reverse justify-center items-center m-5'>

                    <div className='py-3'>
                        <h3 className='text-xl font-bold py-5'>Invest Smart</h3>
                        <p className='py-3  text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                        <button className='px-5 py-2 rounded-full bg-blue-500 '>learn more</button>
                    </div>
                    <img src={statistic} alt="" className='' />
                </div>
                <div className='md:flex justify-center items-center m-5'>
                    <div className='py-3'>
                        <h3 className='text-xl font-bold py-5'>Invest Smart</h3>
                        <p className='py-5  text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                        <button className='px-5 py-2 rounded-full bg-blue-500 '>learn more</button>
                    </div>
                    <img src={table} alt="" />
                </div>
            </div>
            <div className='bg-[#3671E9] mx-auto p-5 rounded-3xl'>
                <h3 className='font-bold text-xl p-5'>Start Mining Now</h3>
                <p className='p-5 text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem, 
                    ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.</p>
            <div className='p-5 text-center'>
            <input type="text"  placeholder='enter message' className='w-full p-3 text-black'/>
            <button className='bg-white p-5 text-black rounded-full m-5'>Subscribe</button>
            </div>
            </div>
        </div>
    )
}

export default Body