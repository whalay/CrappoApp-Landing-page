import React, { useState } from 'react';

import vector2 from '../assets/images/Vector2.svg';
import vectorb from '../assets/images/Vectorb.svg';
import bitcoin from '../assets/images/BitcoinIcon.svg';
import litecoin from '../assets/images/lite.svg';
import ethereum from '../assets/images/Ethereum.svg';

const card = [{
    image: bitcoin,
    title: 'Bitcoin',
    text: 'Digital currency in which a record of transactions is maintained.',
    buttonText: 'Start mining',
    bottonIcon1: vectorb,
    bottonIcon2: vector2,
},
{
    image: ethereum,
    title: 'Ethereum',
    text: 'Blockchain technology to create and run decentralized digital applications.',
    buttonText: 'Start Mining',
    bottonIcon1: vectorb,
    bottonIcon2: vector2,
    
},
{
    image: litecoin,
    title: 'Litecoin',
    text: 'Cryptocurrency that enables instant payments to anyone in the world.',
    buttonText: 'Start mining',
    bottonIcon1: vectorb,
    bottonIcon2: vector2,
}]


const Section = () => {

    const [cardTitle, setCardTitle] = useState('Bitcoin');
    
    return (
        <div className='bg-gray-200 w-full h-full font-Oxanium pt-32 '>
            <div className='text-center text-2xl flex flex-col bg-gray-200 items-center pt-[29rem] md:pt-72 '>
                <h3 data-aos="zoom-in-up" data-aos-delay="400" data-aos-duration="3000"
                    className="font-bold" >Trade Securely And Market The High Growth Cryptocurrencies.</h3>
                <div className='flex md:flex-row flex-col justify-between gap-9 md:mx-20 md:my-10 p-5 my-10 '>

                    {card.map((card, index) => {
                        const {image, title, text, buttonText, bottonIcon1, bottonIcon2} = card;
                        return (
                            <div onClick={()=> setCardTitle(title)} key={index} className={`${cardTitle === title ? 'bg-[#2B076E] text-white' : 'bg-white'} p-9 pb-14  text-center rounded-3xl hover:cursor-pointer`}>
                                <img src={image} alt="" className='mx-auto' />
                                <h2 className='text-4xl font-semibold py-7'>{title}</h2>
                                <p className='text-sm py-7'>{text}</p>
                                {cardTitle === title ? <button className='px-5 py-3 rounded-full bg-blue-500'>{buttonText} <img src={bottonIcon2} alt="" className="inline ml-4" /></button>
                                    : <button className="border-gray-400 rounded-full border "><img src={bottonIcon1} alt="" width="50px" height="50px" className="inline  p-4 rounded-full  " /> </button>
                                }

                            </div>);
                    })}

                </div>
            </div>
        </div>
    )
}

export default Section