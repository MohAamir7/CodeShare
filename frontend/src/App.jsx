import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { PingComponent } from './components/atoms/PingComponents'
import CreateProject from './pages/CreateProject'
import { Routes,Route } from 'react-router-dom'
import {io} from "socket.io-client";
import ProjectPlayground from './pages/ProjrctPlayground'

function App() {
  const [count, setCount] = useState(0)
  const socket = io("http://localhost:3000")
  return (
    <>
      {/* <h1>Hello</h1>
      <PingComponent></PingComponent> */}
       <Routes>
      <Route path="/" element={<CreateProject />} />
       <Route path="/project/:projectId" element={<ProjectPlayground />} />
    </Routes>
    </>
  )
}

export default App
