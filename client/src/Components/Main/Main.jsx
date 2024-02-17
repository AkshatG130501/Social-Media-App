import React,{useState, useRef, useContext, useReducer, useEffect} from 'react'
import { Avatar, Button, Alert } from '@material-tailwind/react'\
import addImage from '../../assets/addImage.png'

const Main = () => {
  return (
    <div className='flex flex col items-center'>
      <div className='flex flex-col py-4 w-full bg-white rounded-3xl shadow-lg'>
        <div className='flex items-center border-b-2 border-gray-300 pb-4 pl-4 w-full'>
          <Avatar size='sm' variant='circular' src='https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png' alt='avatar'></Avatar>
          <form className='w-full'>
            <div className='flex justify-between items-center'>
              <div className='w-full ml-4'>
                <input type='text' name='text' className='outline-none w-full bg-white rounded-md'></input>
              </div>
              <div className='mx-4'>{/*put previewImage */}</div>
              <div className='mr-4'>  
                <Button variant='text' type='submit'>Share</Button>
              </div>
            </div>
          </form>
        </div>
        <span>{/*ProgressBar */}</span>
        <div className='flex justify-around items-center pt-4'>
          <div className='flex items-center'>
            <label htmlFor='addImage' className='cursor-pointer flex items-center'>
              <img className='h-10 mr-4' src={addImage} alt='addImage'/>
              <input id='addImage' type='file' style={{display:"none"}}></input>
            </label>
          </div>
          <div className='flex items-center'>
            <img className='h-10 mr-4' src='' alt='live'/>
            <p className='font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none'>Live</p>
          </div>
          <div className='flex items-center'>
            <img className='h-10 mr-4' src='' alt='feeling'/>
            <p className='font-roboto font-medium text-md text-gray-700 no-underline tracking-normal leading-none'>Feeling</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col py-4 w-full'>{/* Posts */}</div>
      <div>{/* Reference for later */}</div>  
    </div>
  )
}

export default Main