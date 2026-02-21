import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Welcome from './Welcome'
function App() {

  return (
    <div class="flex-col ">
      <Header/>
      <Welcome/>
    </div>
  )
}

export default App
