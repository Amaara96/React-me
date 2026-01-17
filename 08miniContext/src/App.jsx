import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return(
    <>
    <h1>React Video for context API</h1>
    <Login/>
    <Profile/>
    </>
  )
 
}

export default App
