import React, { useState } from 'react'

export default function Profile() {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    age: 25,
    gender: 'Male',
    height: 175,
    weight: 70,
    goal: 'Lose Fat'
  })

  const [editing, setEditing] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfile(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = () => {
    setEditing(false)
    console.log('Saved Profile:', profile)
  }

  const Field = ({ label, name, type = 'text', isSelect, options, suffix }) => (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
      <label className="text-base text-gray-800 dark:text-gray-200 font-medium sm:w-32">{label}</label>
      {editing ? (
        isSelect ? (
          <select
            name={name}
            value={profile[name]}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            {options.map((opt, idx) => (
              <option key={idx}>{opt}</option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            value={profile[name]}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        )
      ) : (
        <span className="text-sm sm:text-base text-gray-900 dark:text-gray-100 font-medium">
          {profile[name]} {suffix}
        </span>
      )}
    </div>
  )

  return (
    <div className="p-4 sm:p-6 max-w-xl mx-auto text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl sm:text-3xl font-bold text-center bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500 text-transparent bg-clip-text mb-6">
        Your Profile
      </h1>

<div className="w-[70%] max-w-lg mx-auto space-y-4 sm:space-y-6 bg-white dark:bg-[#1e1b2e] p-5 sm:p-6 rounded-2xl shadow-lg border dark:border-gray-700">
        <Field label="Name:" name="name" />
        <Field label="Age:" name="age" type="number" suffix="years" />
        <Field label="Gender:" name="gender" isSelect options={['Male', 'Female', 'Other']} />
        <Field label="Height:" name="height" type="number" suffix="cm" />
        <Field label="Weight:" name="weight" type="number" suffix="kg" />
        <Field label="Goal:" name="goal" isSelect options={['Lose Fat', 'Build Muscle', 'Maintain']} />

        <div className="flex justify-center pt-2">
          {editing ? (
            <button
              onClick={handleSave}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg text-sm sm:text-base"
            >
              Save
            </button>
          ) : (
            <button
              onClick={() => setEditing(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg text-sm sm:text-base"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
