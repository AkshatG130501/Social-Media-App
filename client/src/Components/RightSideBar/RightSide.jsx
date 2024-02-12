import React, {useState} from 'react'

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
    </div>
  )
}

export default RightSide