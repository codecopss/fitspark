import React, { useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const dummyProgress = [
  { date: 'Jul 1', minutes: 20 },
  { date: 'Jul 3', minutes: 35 },
  { date: 'Jul 5', minutes: 25 },
  { date: 'Jul 7', minutes: 40 },
  { date: 'Jul 10', minutes: 30 },
]

const activityLog = [
  { date: 'Jul 10', workout: 'HIIT Quickie', duration: '18 min' },
  { date: 'Jul 7', workout: 'Full Body Burnout', duration: '20 min' },
  { date: 'Jul 5', workout: 'Stretch & Flex', duration: '10 min' },
]

export default function Progress() {
  const [range, setRange] = useState('7')
  const totalMinutes = dummyProgress.reduce((sum, entry) => sum + entry.minutes, 0)

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <h1 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500 text-transparent bg-clip-text mb-6">
        Your Progress
      </h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Workouts Completed', value: dummyProgress.length },
          { label: 'Total Minutes', value: `${totalMinutes} min` },
          { label: 'Average per Session', value: `${(totalMinutes / dummyProgress.length).toFixed(1)} min` },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-md dark:shadow-none text-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</p>
            <h2 className="text-xl font-bold text-purple-700 dark:text-purple-400">{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Date Filter */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:space-x-3 gap-2">
        <label className="text-sm font-medium text-yellow-700 dark:text-yellow-400">Date Range:</label>
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="px-4 py-2 rounded-md border-2 border-purple-300 bg-white dark:bg-zinc-900 text-purple-700 dark:text-purple-400 font-medium shadow-sm dark:shadow-none hover:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all w-full sm:w-auto"
        >
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 3 Months</option>
        </select>
      </div>

      {/* Progress Chart */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-md dark:shadow-none mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2 text-center sm:text-left">
          Workout Duration Over Time
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dummyProgress}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis dataKey="date" stroke="#888" />
            <YAxis label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} stroke="#888" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                borderColor: '#c084fc',
                borderRadius: '8px',
                color: '#6b21a8'
              }}
              wrapperStyle={{
                color: '#6b21a8',
                fontSize: '0.85rem'
              }}
              labelStyle={{ color: '#6b21a8' }}
              itemStyle={{ color: '#6b21a8' }}
            />
            <Line type="monotone" dataKey="minutes" stroke="#9333ea" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Log */}
      <div className="bg-white dark:bg-zinc-900 rounded-xl p-4 shadow-md dark:shadow-none">
        <h2 className="text-base sm:text-lg font-semibold text-purple-700 dark:text-purple-400 mb-3 text-center sm:text-left">
          Recent Activity
        </h2>
        <ul className="space-y-2">
          {activityLog.map((entry, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row justify-between text-sm text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-zinc-800 px-2 py-2 rounded-md transition-all"
            >
              <span>{entry.date} — {entry.workout}</span>
              <span className="font-medium text-purple-700 dark:text-purple-400">{entry.duration}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
