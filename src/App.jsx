import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './posts'
import './PostStyle.css'
import post from './post'

function App() {
  const [count, setCount] = useState(0)


  const olstyle = {
    border: "2px solid purple",


    margin: "10px",
    padding: "5px",
    borderRadius: "10px"
  }

  return (
    <>

      <h2>react-six-core-concept-recap</h2>
      <div style={olstyle}>
        <ol >
          <li>Components</li>
          <li>JSX</li>
          <li>Props</li>
          <li>Event Handler</li>
          <li>State</li>
          <li>load data</li>
        </ol>
        <hr />
        <Posts></Posts>
        <post></post>

      </div>
    </>
  )
}

export default App
