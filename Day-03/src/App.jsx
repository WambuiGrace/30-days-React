import './App.css'
import Heading from './components/Heading';
import Profile from './components/Profile';
import Message from './components/Message';
import myImage from './assets/me.jpeg'

function App() {
  const username = "Grace Wambui";
  const isLoggedIn = true;

  return (
    <div className='text-center p-6'>
	    <Heading greeting={`Hello, ${username}`} />
	    <Profile avatar={myImage} alt="Grace's profile image" />
      <Message isLoggedIn={isLoggedIn} />
    </div>
  )
}

export default App
