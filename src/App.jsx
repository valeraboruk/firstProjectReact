import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Welcome from './Welcome'
import MyComponent from './components/MyComponent'
import ProductCard from './components/blocks/ProductCard'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Education from './pages/EducationPage'
import Auth from './pages/Auth'
import ProductPage from './pages/ProductPage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/edu' element={<Education/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/prodcard/:id' element={<ProductPage/>} />
      </Routes>
      {/* <Main/> */}
      {/* <Education/> */}
      
    </div>
  )
}

export default App
