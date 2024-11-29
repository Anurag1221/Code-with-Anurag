import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let Counter = 5;
  const [Counter,setCounter] = useState(15)

  const addValue = () => {
    // console.log("value added", Math.random());
    setCounter(Counter => Counter + 1)
    setCounter(Counter => Counter + 1)
    setCounter(Counter => Counter + 1)
    setCounter(Counter => Counter + 1)
  }

  const removeValue = () => {
    // console.log("value added", Math.random());
    setCounter(Counter - 1)
  }

  return (
    <>
    <h1>Chai oue react</h1>
    <h2>Counter Value : {Counter}</h2>

    <button
    onClick={addValue}
    >Add Value {Counter}</button>
    <br />
    <button
    onClick={removeValue}
    >remove Value {Counter}</button>
    <p>footer : {Counter}</p>
    </>
  )
}

export default App
