import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // let myObj = {
  //   username : "hitesh",
  //   age :22
  // }
  // let newArr = [1,2,3]

  return (
   <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="chai or code" btnText="Click me" />
      <Card username="Anurag code" btnText="Visit me"/>
   </>
  )
}

export default App
