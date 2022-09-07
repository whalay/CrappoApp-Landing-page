import React from 'react'



const Article = () => {
    return (
        <div className='bg-[#0D0D2B] w-full h-64 p-5 md:px-10 text-white font-Oxanium '>
            <div >
                <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className='text-center py-8'>
                    <h2 className='text-2xl  font-semibold'>How Much Can You Earn With Us</h2>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Porro, id similique temporibus dignissimos tempore odio?</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="350" data-aos-duration="1000" data-aos-anchor-placement="bottom-bottom">
                    <div className='text-black bg-white p-6 mx-auto  md:w-[80%] rounded-3xl '>
                        <form action="" className='md:flex justify-between gap-16 items-center p-6  '>
                            <input type="text" name="" id="" placeholder='Enter your hash rate'  className='border-b p-2 mb-5 text-xl md:text-xl outline-none w-full' />
                            <select name="list" id="" form="list"  className='border-b mb-5 p-2 block text-xl outline-none md:w-52  w-full'>
                                <option selected value="THS">TH/S</option>
                                <option value="H/S">H/S</option>
                                <option value="KH/S">KH/S</option>
                                <option value="KH/S">MH/S</option>
                                <option value="KH/S">GH/S</option>
                            </select>
                            <button className='px-9 py-5 rounded-full bg-blue-500 block font-bold text-white'>Calculate</button>
                        </form>
                        <div className='px-6'>
                            <h3 className='text-xl py-5 text-blue-500'>ESTIMATED 24 HOUR REVENUE:</h3>
                            <h2 className=' text-3xl font-bold '>0.055 130 59 ETH <span className="text-blue-500">($1275)</span></h2>
                            <p className='py-5 text-md'>Revenue will change based on mining difficulty and Ethereum price.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Article