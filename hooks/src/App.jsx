// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  let addValue = () => {
    if (counter === 20) {
      console.log("done")
    } else {
      setCounter(counter + 1)
    }
  }

  let removeValue = () => {
    if (counter === 0) {
      console.log("no")
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai our react</h1>
      <h2>counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
        onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
