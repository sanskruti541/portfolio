import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nevbar from './component/Nevbar.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
          <Nevbar />
    </>
  )
}

export default App
