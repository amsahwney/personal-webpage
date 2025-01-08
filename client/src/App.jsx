import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Newsletter from './Components/Newsletter'

function App() {

  return (
    <div>
      <Outlet />
      
      <Newsletter />
    </div>
  )
}

export default App
