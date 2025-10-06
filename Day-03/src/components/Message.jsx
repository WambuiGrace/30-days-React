import React from 'react'

const Message = ({isLoggedIn}) => {
  return (
    <p className='text-gray-600'>
        {isLoggedIn ? "You're logged in!" : "Access restricted."}
    </p>
  )
}

export default Message