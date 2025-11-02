import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import APICall from './components/APICall'

function App() {
  const [count, setCount] = useState(0)

  return (<>
  
    <APICall />
  
  </>)
}

export default App
