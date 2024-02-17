import React, { useState, useRef, useContext, useReducer, useEffect } from 'react';
import { Avatar, Button, Alert } from '@material-tailwind/react';

const Main = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg'>
        <div className='flex items-center border-b-2 border-gray-300 pb-4 pl-4 w-full'>
          <Avatar size='sm' variant='circular' src='https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png' alt='avatar'></Avatar>
          <form className='w-full'>
            <div className='flex justify-between items-center'>
              <div className='w-full ml-4'>
                <input type='text' name='text' placeholder='Whats on your mind ?' className='outline-none w-full bg-white rounded-md'></input>
              </div>
              <div className='mx-4'>{/*put previewImage */}</div>
              <div className='mr-4'>
                <Button className='bg-blue-500 text-white' variant='text' type='submit'>Share</Button>
              </div>
            </div>
          </form>
        </div>
        <span>{/*ProgressBar */}</span>
        <div className='flex justify-around items-center pt-4'>
          <div className='flex items-center'>
            <label htmlFor='addImage' className='cursor-pointer flex items-center'>
              {/* <img className='h-10 mr-4' src={addImage} alt='addImage'/> */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
              </svg>
              <input id='addImage' type='file' style={{ display: "none" }}></input>
            </label>
          </div>
          <div className='flex items-center'>
            {/* BEGIN: ed8c6549bwf9 */}
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="6" fill="#f44336"></circle>
              <path fill="#f44336" d="M17.09,16.789L14.321,13.9C11.663,16.448,10,20.027,10,24s1.663,7.552,4.321,10.1l2.769-2.889 C15.19,29.389,14,26.833,14,24C14,21.167,15.19,18.61,17.09,16.789z"></path>
              <path fill="#f44336" d="M33.679,13.9l-2.769,2.889C32.81,18.611,34,21.167,34,24c0,2.833-1.19,5.389-3.09,7.211l2.769,2.889 C36.337,31.552,38,27.973,38,24S36.337,16.448,33.679,13.9z"></path>
              <g>
                <path fill="#f44336" d="M11.561,11.021l-2.779-2.9C4.605,12.125,2,17.757,2,24s2.605,11.875,6.782,15.879l2.779-2.9 C8.142,33.701,6,29.1,6,24S8.142,14.299,11.561,11.021z"></path>
                <path fill="#f44336" d="M39.218,8.121l-2.779,2.9C39.858,14.299,42,18.9,42,24s-2.142,9.701-5.561,12.979l2.779,2.9 C43.395,35.875,46,30.243,46,24S43.395,12.125,39.218,8.121z"></path>
              </g>
            </svg>
            <p className='font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none ml-4'>Live</p>
            {/* END: ed8c6549bwf9 */}
          </div>
          <div className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
          </svg>
            <p className='font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none ml-4'>Feeling</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col py-4 w-full'>{/* Posts */}</div>
      <div>{/* Reference for later */}</div>
    </div>
  );
}

export default Main;
