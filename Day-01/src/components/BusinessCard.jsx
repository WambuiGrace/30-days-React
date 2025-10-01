import React from 'react'
import myImage from '../assets/me.jpeg'

const BusinessCard = () => {
  return (
    <div className='card'>
        <img src={myImage} alt="Picture of Grace" className='card-photo' />
        <h1>Grace Wambui Mwangi</h1>
        <h2>Software engineer and Data scientist</h2>
        <div className="card-links">
            <a href="">Github</a>
            <a href="">LinkedIn</a>
            <a href="mailto:professorgee227@gmail.com">professorgee227@gmail.com</a>
            <a href="">Personal website</a>
        </div>
    </div>
  )
}

export default BusinessCard