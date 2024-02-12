import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(2)
  
  const addValue = ()=> {
    setCounter(counter++)
  }

  const removeValue = () => {
    setCounter(counter--)
  }
  

  return(
    <>

    <h1>Lets Make it counter</h1>
    <h2>Counter Vlaue is: {counter}</h2>
    <br />
    <button onClick={addValue}>Add Vlaue</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Vlaue</button>

    </>
  )
}

export default App