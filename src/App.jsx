

import './App.css'
import Navbar from './component/Navbar'
import MainContent from './component/Maincontent'
import { useState } from 'react'

function App() {
 const [darkMode, setDarkMode] = useState(true)

 function toggleDarkMode() {
  setDarkMode(prevMode => !prevMode)
 }

  return (
    <div className='container'>
    <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
    <MainContent  darkMode={darkMode}/>
    </div>
  )
}

export default App
