
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function myApp() {
    return (
      <>
      <h1>Custom app</h1>
      </>
    )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com">Another google visit</a>
)

const anotheruser = "React Time"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit google',
    anotheruser
)

ReactDOM.createRoot(document.getElementById('root')).
render(

    reactElement  
)
