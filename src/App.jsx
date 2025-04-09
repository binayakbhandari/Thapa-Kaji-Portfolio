import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Indrajit Sir's Portfolio is Under Maintenance</h1>
      <div className="card">
        <p>
          Will be avaliable soon ...
        </p>
      </div>
      <p className="read-the-docs">
        <pre>
        Portfolio will be built in vite and React.<br />
        So, Click on Vite and React logos to learn more
        </pre>
      </p>
    </>
  )
}

export default App
