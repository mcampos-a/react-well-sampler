import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <MainPage></MainPage>
   </div>
  )
}

export default App
