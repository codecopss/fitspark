import React, { useState } from 'react'
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts'

const dummyMeals = {
  Monday: [
    { name: 'Breakfast', meal: 'Oatmeal with berries' },
    { name: 'Lunch', meal: 'Grilled chicken with quinoa' },
    { name: 'Dinner', meal: 'Salmon with steamed veggies' }
  ],
  Tuesday: [
    { name: 'Breakfast', meal: 'Scrambled eggs & toast' },
    { name: 'Lunch', meal: 'Veggie wrap with hummus' },
    { name: 'Dinner', meal: 'Tofu stir-fry with rice' }
  ],
  Wednesday: [
    { name: 'Breakfast', meal: 'Yogurt with granola' },
    { name: 'Lunch', meal: 'Turkey sandwich' },
    { name: 'Dinner', meal: 'Grilled steak with sweet potato' }
  ],
  Thursday: [
    { name: 'Breakfast', meal: 'Smoothie with protein' },
    { name: 'Lunch', meal: 'Pasta with marinara' },
    { name: 'Dinner', meal: 'Chicken curry with rice' }
  ],
  Friday: [
    { name: 'Breakfast', meal: 'Avocado toast' },
    { name: 'Lunch', meal: 'Paneer wrap with salad' },
    { name: 'Dinner', meal: 'Grilled fish & roasted veggies' }
  ],
  Saturday: [
    { name: 'Breakfast', meal: 'Banana pancakes' },
    { name: 'Lunch', meal: 'Biryani with raita' },
    { name: 'Dinner', meal: 'Pizza with veggie toppings' }
  ],
  Sunday: [
    { name: 'Breakfast', meal: 'French toast' },
    { name: 'Lunch', meal: 'Buddha bowl with tofu' },
    { name: 'Dinner', meal: 'Spaghetti & meatballs' }
  ]
}

const dummyMacros = {
  Monday: [
    { name: 'Protein', value: 40 },
    { name: 'Carbs', value: 35 },
    { name: 'Fat', value: 25 }
  ],
  Tuesday: [
    { name: 'Protein', value: 30 },
    { name: 'Carbs', value: 50 },
    { name: 'Fat', value: 20 }
  ],
  Wednesday: [
    { name: 'Protein', value: 35 },
    { name: 'Carbs', value: 45 },
    { name: 'Fat', value: 20 }
  ],
  Thursday: [
    { name: 'Protein', value: 25 },
    { name: 'Carbs', value: 55 },
    { name: 'Fat', value: 20 }
  ],
  Friday: [
    { name: 'Protein', value: 38 },
    { name: 'Carbs', value: 40 },
    { name: 'Fat', value: 22 }
  ],
  Saturday: [
    { name: 'Protein', value: 20 },
    { name: 'Carbs', value: 60 },
    { name: 'Fat', value: 20 }
  ],
  Sunday: [
    { name: 'Protein', value: 32 },
    { name: 'Carbs', value: 48 },
    { name: 'Fat', value: 20 }
  ]
}

const COLORS = ['#6366F1', '#F59E0B', '#10B981']

export default function Nutrition() {
  const [selectedDay, setSelectedDay] = useState('Monday')

  const meals = dummyMeals[selectedDay]
  const macros = dummyMacros[selectedDay]

  return (
    <div className="px-4 py-6 sm:px-6 md:px-10 lg:px-16 text-gray-800 bg-white rounded-lg dark:bg-[#1e1b2e] min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-600 mb-8 text-center md:text-left">
        Nutrition Dashboard
      </h1>

      {/* Day Selector */}
      <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
        {Object.keys(dummyMeals).map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-300 
              ${selectedDay === day
                ? 'bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-[#2c2738] dark:text-white'}`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Responsive Grid: Meal Plan + Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Meal Plan */}
        <div className="bg-white dark:bg-[#27233a] border border-gray-200 dark:border-[#3e3758] p-6 rounded-xl shadow">
          <h2 className="text-lg sm:text-xl font-bold text-orange-500 mb-5">
            Meal Plan – {selectedDay}
          </h2>
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {meals.map((item, idx) => (
              <li key={idx} className="flex justify-between py-3 text-sm sm:text-base">
                <span className="font-medium text-purple-600">{item.name}</span>
                <span className="text-gray-700 dark:text-purple-400 text-right max-w-[60%]">
                  {item.meal}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Macros Chart */}
        <div className="bg-white dark:bg-[#27233a] border border-gray-200 dark:border-[#3e3758] p-6 rounded-xl shadow">
          <h2 className="text-lg sm:text-xl font-bold text-purple-500 mb-6 text-center">
            Macronutrient Breakdown
          </h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={macros}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                >
                  {macros.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #ccc',
                    borderRadius: '8px'
                  }}
                  itemStyle={{ color: '#374151', fontWeight: 500 }}
                  cursor={{ fill: '#f3f4f6' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
