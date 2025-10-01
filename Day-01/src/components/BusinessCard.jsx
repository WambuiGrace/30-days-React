import React from 'react'
import myImage from '../assets/me.jpeg'

const BusinessCard = () => {
  return (
    <div className='max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl space-y-4  '>
        <img src={myImage} alt="Picture of Grace" className='mx-auto w-32 rounded-full object object-cover'/>
        <h1 className='text-2xl font-bold text-teal-800'>Grace Wambui Mwangi</h1>
        <h2 className='text-lg text-teal-500'>Software engineer and Data scientist</h2>
        <div className="flex justify-center space-x-4 pt-2">
            <a href="" className='text-teal-600 hover:text-teal-300'>Github</a>
            <a href="" className='text-teal-600 hover:text-teal-300'>LinkedIn</a>
            <a href="mailto:professorgee227@gmail.com" className='text-teal-600 hover:text-teal-300'>Email</a>
            <a href="" className='text-teal-600 hover:text-teal-300'>Website</a>
        </div>
    </div>
  )
}

export default BusinessCard