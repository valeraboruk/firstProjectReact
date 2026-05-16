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
import Register from './pages/Register'
import AddProduct from './pages/AddProduct'
import AdminPanel from './pages/AdminPanel'
import ProductsListAdmin from './components/blocks/ProductsListAdmin'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/edu' element={<Education/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/prodcard/:id' element={<ProductPage/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/products-list" element={<ProductsListAdmin />} />
      </Routes>
      {/* <Main/> */}
      {/* <Education/> */}
      
    </div>
  )
}

export default App
