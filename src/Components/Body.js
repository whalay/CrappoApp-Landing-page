import React from 'react'

import chart from '../assets/images/Chart.svg';
import statistic from '../assets/images/Statistic.svg';
import table from '../assets/images/Table.svg';

const Body = () => {
    return (
        <div className='bg-[#0D0D2B] w-full h-full p-5 md:px-10 text-white font-Oxanium '>
            <div className=''>
                <h3 data-aos="zoom-in" data-aos-delay="400" data-aos-duration="2000" 
                className='text-center text-4xl md:px-44 py-10'>Market Sentiments, Portfolio,
                    And Run The Infrastructure Of Your Choice</h3>
                <div className='md:flex justify-center gap-10 items-center '>
                    <div className='py-4'>
                        <h3 className='text-2xl font-bold py-3'>Invest Smart</h3>
                        <p className='py-4 text-xm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                        <button data-aos="zoom-in-up" data-aos-delay="450" data-aos-duration="2000"
                            className='px-5 py-3 rounded-full bg-blue-500'>learn more</button>
                    </div>
                    <img src={chart} alt="" data-aos="zoom-in-up" data-aos-delay="500" data-aos-duration="2000" />
                </div>
                <div className='md:flex flex-row-reverse justify-center gap-10 items-center space-x-10  '>
                    <div className='py-4'>
                        <h3 className='text-xl font-bold py-5'>Invest Smart</h3>
                        <p className='py-3  text-xm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                        <button data-aos="zoom-in-up" data-aos-delay="550" data-aos-duration="2000"
                            className='px-5 py-2 rounded-full bg-blue-500 '>learn more</button>
                    </div>
                    <img src={statistic} alt="" className='' data-aos="zoom-in-up" data-aos-anchor-placement="center-center" data-aos-delay="550" data-aos-duration="1000" />
                </div>
                <div className='md:flex  justify-center gap-8 items-center space-x-10 '>
                    <div className='py-4'>
                        <h3 className='text-xl font-bold py-5'>Invest Smart</h3>
                        <p className='py-3  text-xm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                        <button data-aos="zoom-in-up" data-aos-delay="600" data-aos-duration="2000"
                            className='px-5 py-2 rounded-full bg-blue-500 '>learn more</button>
                    </div>
                    <img src={table} alt="" className='' data-aos="zoom-in-up" data-aos-anchor-placement="center-center" data-aos-delay="600" data-aos-duration="2000" />
                </div>
            </div>
            <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-anchor-placement="top-center" data-aos-delay="700" data-aos-duration="2000"
                className='bg-[#3671E9]  md:my-20 mx-5 p-5 mt-24 rounded-3xl'>
                <h3 className='font-bold text-2xl p-3'>Start Mining Now</h3>
                <div className="md:flex justify-between ">
                    <p className='p-2 text-sm md:pr-9  '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem,
                        ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.</p>
                    <div className='md:flex p-4 justify-center items-center gap-10 w-full'>
                        <input type="text" placeholder='enter message' className='border-b p-2 text-2xl md:text-2xl outline-none bg-[#3671E9] w-full text-white placeholder-white' />
                        <button className='bg-white px-5 py-3 text-black rounded-full m-2'>Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Body