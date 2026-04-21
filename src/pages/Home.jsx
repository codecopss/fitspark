import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {
  const [water, setWater] = useState(0)
  const [steps, setSteps] = useState(4200)
  const [quote, setQuote] = useState('Push yourself, because no one else is going to do it for you.')

  const today = new Date().toLocaleDateString()

  const increaseWater = () => setWater(w => Math.min(w + 1, 8))
  const decreaseWater = () => setWater(w => Math.max(w - 1, 0))

  const refreshQuote = () => {
    const quotes = [
      'Push yourself, because no one else is going to do it for you.',
      'Don’t limit your challenges. Challenge your limits.',
      'The pain you feel today will be the strength you feel tomorrow.',
      'Train insane or remain the same.'
    ]
    const random = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[random])
  }

  return (
    <motion.div 
      className="px-4 py-6 sm:px-6 sm:py-8 max-w-4xl mx-auto text-gray-900 dark:text-white transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500 text-transparent bg-clip-text">
          Welcome to FitSpark
        </h1>
        <p className="mt-1 text-yellow-600 dark:text-gray-300 text-base sm:text-lg">Your daily spark to stay fit and healthy!</p>
        <p className="text-sm text-purple-700 dark:text-purple-300 mt-1 font-mono">📅 {today}</p>
      </div>

      {/* Section Cards */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

        {/* Workout Plan */}
        <div className="bg-white dark:bg-[#2b273a] p-5 sm:p-6 rounded-2xl shadow-lg border border-purple-300 dark:border-purple-800">
          <h2 className="text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-400">🔥 Today’s Plan</h2>
          <p className="mt-2 text-purple-700 dark:text-purple-200">Full Body Burnout • 20 min</p>
          <button 
            onClick={() => alert("Workout Started! 🔥")} 
            className="mt-4 w-full sm:w-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md font-medium"
          >
            Start Workout
          </button>
        </div>

        {/* Water Intake */}
        <div className="bg-white dark:bg-[#2b273a] p-5 sm:p-6 rounded-2xl shadow-lg border border-purple-300 dark:border-purple-800">
          <h2 className="text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-400">💧 Water Intake</h2>
          <div className="flex items-center justify-between mt-3 text-base sm:text-lg space-x-4">
            <button 
              onClick={decreaseWater} 
              className="px-3 py-1 rounded-full bg-purple-700 hover:bg-purple-800 text-white"
            >−</button>
            <p className="flex-1 text-center">{water} / 8 glasses</p>
            <button 
              onClick={increaseWater} 
              className="px-3 py-1 rounded-full bg-purple-700 hover:bg-purple-800 text-white"
            >+</button>
          </div>
        </div>

        {/* Steps Progress */}
        <div className="bg-white dark:bg-[#2b273a] p-5 sm:p-6 rounded-2xl shadow-lg border border-purple-300 dark:border-purple-800 md:col-span-2">
          <h2 className="text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-400">👣 Steps Progress</h2>
          <div className="mt-3">
            <div className="w-full bg-purple-100 dark:bg-purple-900/30 rounded-full h-4">
              <div
                className="bg-yellow-400 h-4 rounded-full transition-all"
                style={{ width: `${(steps / 10000) * 100}%` }}
              />
            </div>
            <p className="text-sm text-purple-700 dark:text-purple-200 mt-2 font-mono tracking-wide">{steps} / 10,000 steps</p>
          </div>
        </div>

        {/* Daily Motivation */}
        <div className="bg-white dark:bg-[#2b273a] p-5 sm:p-6 rounded-2xl shadow-lg border border-purple-300 dark:border-purple-800 md:col-span-2">
          <h2 className="text-lg sm:text-xl font-semibold text-purple-600 dark:text-purple-400">✨ Daily Motivation</h2>
          <p className="italic text-orange-500 dark:text-orange-300 mt-3 text-base sm:text-lg">“{quote}”</p>
          <button 
            onClick={refreshQuote} 
            className="mt-4 text-sm text-yellow-600 dark:text-yellow-400 hover:underline underline-offset-4 transition"
          >
            Show Another
          </button>
        </div>

      </div>
    </motion.div>
  )
}
