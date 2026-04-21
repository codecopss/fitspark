// File: src/App.jsx
import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import Progress from './pages/Progress'
import Nutrition from './pages/Nutrition'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <Router>
<div className="min-h-screen bg-white text-black dark:bg-[#1e1b2e] dark:text-white flex flex-col transition-colors duration-300">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex-1 p-6 max-w-5xl w-full mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}
