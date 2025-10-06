import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Profile from './components/Profile'
import Footer from './components/Footer'
import myImage from './assets/me.jpeg'

function App() {
  return (
    <>
      <Greeting name="Grace Wambui"/>
      <Profile name="Grace Wambui" role="Software engineer & Data scientist" avatar={myImage}/>
      <Footer year={2025} name="Grace Wambui"/>
    </>
  )
}

export default App
