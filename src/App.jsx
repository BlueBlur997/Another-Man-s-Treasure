import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Products from './Components/Products'
import SignIn from './Components/SignIn'
import Home from './Components/Home'
import { SingleProduct } from './Components/SingleProduct';

import './App.css'

function App() {
  

  return (

    <>
      <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='cart' />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/products/:id' element={<SingleProduct />} />
      </Routes>
      </div>
      </>
  )
}

export default App
