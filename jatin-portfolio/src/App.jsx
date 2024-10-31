import React from 'react'
import Home from './Pages/Home'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const router = BrowserRouter()
  return (
    <BrowserRouter>
    <Routes>
      <Route path="header" element={<Header />} />
      <Route path="/" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App

