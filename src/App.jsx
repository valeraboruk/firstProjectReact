import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Welcome from './Welcome'
import MyComponent from './components/MyComponent'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
import Main from './pages/Main'
import Education from './pages/EducationPage'
function App() {

  return (
    <div>
      <Header/>
      <ProductList/>
    </div>
  )
}

export default App
