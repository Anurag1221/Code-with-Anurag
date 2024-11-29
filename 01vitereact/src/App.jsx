import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Chai from './chai'

function App() {
  const username = "chai aur code"
  
  return (
    <>
     <Chai/>
     <h1>chai aur code {username}</h1>
     <p>test page</p>
    </>
   
  )
}

export default App
