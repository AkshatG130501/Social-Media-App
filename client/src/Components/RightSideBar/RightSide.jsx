import React, {useState} from 'react'
import { cardData } from '../../assets/CardData';

const RightSide = () => {
    const [input, setInput] = useState("");

    return (
    <div className='flex flex-col h-screen bg-white shadow-lg border-2 rounded-l-xl'>
        <div className='mx-2 mt-10'>
            <p className='font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none friends-text'>
                Friends:{" "}
            </p>
            <input className='w-full border-0 outline-none mt-4 input-box'
                name='input'
                value={input}
                type='text'
                placeholder='Search Friends'
                onChange={(e)=>setInput(e.target.value)}
            ></input>
        </div>
        <div>
            <div className='flex flex-col mt-10'>
                {cardData.map((card) => {
                    if(card.status === "Online"){
                        return (
                            <div className='flex items-center justify-between px-2 py-2'>
                                <div className='flex items-center'>
                                    <img className='h-12 w-12 rounded-full' src={card.image} alt={card.name}></img>
                                    <p className='font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none ml-2'>{card.name}</p>
                                </div>
                                <p className='font-roboto font-medium text-sm text-green-600 no-underline tracking-normal leading-none'>{card.status}</p>
                            </div>
                        );
                    }else{
                        return (
                            <div className='flex items-center justify-between px-2 py-2'>
                                <div className='flex items-center'>
                                    <img className='h-12 w-12 rounded-full' src={card.image} alt={card.name}></img>
                                    <p className='font-roboto font-medium text-sm text-gray-700 no-underline tracking-normal leading-none ml-2'>{card.name}</p>
                                </div>
                                <p className='font-roboto font-medium text-sm text-red-600 no-underline tracking-normal leading-none'>{card.status}</p>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default RightSide