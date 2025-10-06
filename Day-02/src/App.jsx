import './App.css'
import Greeting from './components/Greeting'
import Profile from './components/Profile'
import Footer from './components/Footer'
import myImage from './assets/me.jpeg'

function App() {
    const username = "Grace Wambui"
  return (
    <>
      <Greeting name={username}/>
      <Profile name={username} role="Software engineer & Data scientist" avatar={myImage}/>
      <Footer year={2025} name={username}/>
    </>
  )
}

export default App
