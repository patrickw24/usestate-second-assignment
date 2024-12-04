import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LightSwitch } from './Component/LightSwitch'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LightSwitch />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
