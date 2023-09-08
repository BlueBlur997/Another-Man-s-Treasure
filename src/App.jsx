import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './Components/Navbar'
import './App.css'

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' />
        <Route path='cart' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
