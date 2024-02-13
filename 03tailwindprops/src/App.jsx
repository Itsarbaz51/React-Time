import Card from './components/Card'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black p-10 rounded-xl mb-4'>Tailwind & props</h1>

    <Card username="chai our code" btnText="click me"/>
    <Card username="arbaz"/>
    </>
  )
}

export default App
