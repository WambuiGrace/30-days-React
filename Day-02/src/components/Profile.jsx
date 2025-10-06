import React from 'react'

const Profile = ({name, role, avatar}) => {
  return (
    <div className="profile">
        <img className="max-w-sm mx-auto mt-10 p-6" src={avatar} alt={`${name}'s avatar image`} />
        <h2>{name}</h2>
	    <p>{role}</p>
	</div>
  )
}

export default Profile


