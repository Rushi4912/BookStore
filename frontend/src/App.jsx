import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { Home } from './pages/Home'
import { Shop } from './pages/Shop'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-[60px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
    </div>
  )
}
