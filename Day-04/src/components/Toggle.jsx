import React from 'react'
import { useState } from 'react'

const Toggle = () => {
    const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
        <p>{isVisible ? "Hello, Grace!" : "Text is hidden."}</p>
        <button onClick={() => setIsVisible(!isVisible)}>Toggle Text</button>
    </div>
  )
}

export default Toggle