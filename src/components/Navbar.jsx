// File: src/components/Navbar.jsx
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Dumbbell,
  LineChart,
  User,
  Utensils,
  Home,
  Sun,
  Moon,
  Menu,
  X,
} from 'lucide-react'

export default function Navbar() {
  const location = useLocation()
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleDarkMode = () => {
    const html = document.documentElement
    html.classList.toggle('dark')
    setIsDark(html.classList.contains('dark'))
  }

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/workouts', label: 'Workouts', icon: <Dumbbell size={18} /> },
    { path: '/progress', label: 'Progress', icon: <LineChart size={18} /> },
    { path: '/nutrition', label: 'Nutrition', icon: <Utensils size={18} /> },
    { path: '/profile', label: 'Profile', icon: <User size={18} /> },
  ]

  return (
    <nav className="bg-purple-700 dark:bg-[#1e1b2e] shadow-lg rounded-xl mx-4 mt-4 px-6 py-4 transition-colors duration-300">
      {/* Top Row */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500 text-transparent bg-clip-text">
          FitSpark
        </h1>

        <div className="flex items-center gap-3 md:hidden">
          {/* Theme Toggle Button (Mobile) */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-white hover:bg-purple-800 dark:hover:bg-gray-700 transition"
            title="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-full text-white hover:bg-purple-800 dark:hover:bg-gray-700 transition"
            title="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Links */}
      <div
        className={`flex-col md:flex-row md:flex items-center gap-4 bg-gray-200 dark:bg-[#2c2738] rounded-xl mt-4 px-4 py-3 md:py-2 md:px-6 transition-all duration-300 ${
          mobileOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        {navItems.map(({ path, label, icon }) => (
          <Link
            key={path}
            to={path}
            onClick={() => setMobileOpen(false)}
            className={`relative group flex items-center gap-2 w-full md:w-auto px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
              location.pathname === path
                ? 'text-yellow-500 dark:text-yellow-400'
                : 'text-gray-700 dark:text-white hover:text-yellow-400'
            }`}
          >
            {icon}
            <span>{label}</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-400 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </Link>
        ))}

        {/* Theme Toggle Button (Desktop) */}
        <button
          onClick={toggleDarkMode}
          className="hidden md:block p-2 rounded-full text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          title="Toggle Theme"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  )
}
