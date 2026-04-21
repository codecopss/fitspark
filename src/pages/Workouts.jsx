import React, { useState } from 'react'

const workoutsData = [
  { id: 1, title: "Full Body Burnout", type: "Strength", level: "Intermediate", duration: "20 min" },
  { id: 2, title: "Cardio Blast", type: "Cardio", level: "Beginner", duration: "15 min" },
  { id: 3, title: "Stretch & Flex", type: "Flexibility", level: "All Levels", duration: "10 min" },
  { id: 4, title: "Core Crusher", type: "Strength", level: "Advanced", duration: "25 min" },
  { id: 5, title: "HIIT Quickie", type: "Cardio", level: "Intermediate", duration: "18 min" },
]

export default function Workouts() {
  const [filter, setFilter] = useState("All")
  const [selectedWorkout, setSelectedWorkout] = useState(null)

  const filteredWorkouts = filter === "All"
    ? workoutsData
    : workoutsData.filter(w => w.type === filter)

  const handleStartWorkout = (title) => {
    alert(`Starting "${title}" workout! 💪`)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1b2e] text-gray-900 dark:text-white p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500 text-transparent bg-clip-text mb-5 sm:mb-8">
        Explore Workouts
      </h1>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
        {["All", "Strength", "Cardio", "Flexibility"].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm sm:text-base font-medium transition-all border shadow-sm
              ${filter === type
                ? "bg-purple-600 text-white border-transparent hover:bg-purple-700"
                : "bg-white text-purple-600 border-purple-600 hover:bg-purple-100 dark:bg-transparent dark:text-purple-300 dark:border-purple-500 dark:hover:bg-purple-900/30"}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredWorkouts.map(workout => (
          <div
            key={workout.id}
            className="p-4 sm:p-5 bg-white dark:bg-[#1e1b2e] border border-gray-200 dark:border-purple-800 rounded-2xl shadow-md hover:shadow-lg dark:shadow-purple-900/20 hover:scale-[1.02] transition-all"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-purple-700 dark:text-purple-300">
              {workout.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">⏱ {workout.duration} • 🧩 {workout.level}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Type: {workout.type}</p>

            <div className="mt-4 flex justify-between items-center">
              <button
                onClick={() => setSelectedWorkout(workout)}
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Preview
              </button>
              <button
                onClick={() => handleStartWorkout(workout.title)}
                className="bg-purple-600 text-white text-sm px-4 py-1.5 rounded-md hover:bg-purple-700 shadow-sm"
              >
                Start
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedWorkout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 sm:p-0">
          <div className="bg-white dark:bg-[#1e1e2e] rounded-2xl p-5 w-full max-w-sm shadow-2xl relative animate-fadeIn">
            <h2 className="text-xl sm:text-2xl font-bold text-purple-800 dark:text-purple-300 mb-4">{selectedWorkout.title}</h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">⏱ Duration: {selectedWorkout.duration}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">🧩 Level: {selectedWorkout.level}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6">📂 Type: {selectedWorkout.type}</p>
            <button
              onClick={() => setSelectedWorkout(null)}
              className="text-sm text-red-600 dark:text-red-400 hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
