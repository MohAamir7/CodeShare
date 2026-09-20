import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { PingComponent } from './components/atoms/PingComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <PingComponent></PingComponent>
    </>
  )
}

export default App
