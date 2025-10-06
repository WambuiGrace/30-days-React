const Profile = ({avatar, alt}) => {
  return (
    <img src={avatar} alt={alt} className="w-24 h-24 rounded-full mx-auto" />
  )
}

export default Profile
