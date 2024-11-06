
function App() {

  return (
    <>
      <div
      className="bg-gray-700 text-white max-w-md"
      >
        <h1>Password Generator</h1>
        <div>
          <input type="text"/>
          <button>copy</button>
        </div>
        <div>
          <div>
            <input type="range"/>
            <label>length 8</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label htmlFor="numberInput">Number</label>
            <input type="checkbox"/>
            <label htmlFor="characterInput">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
