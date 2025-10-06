import  React from 'react'
import './App.css'
import Counter from './components/Counter'
import Toggle from './components/Toggle'
import LiveInput from './components/LiveInput'

function App() {
   return (
    <div>
      <Counter />
      <Toggle />
      <br />
      <LiveInput />
    </div>
  )
}

export default App
