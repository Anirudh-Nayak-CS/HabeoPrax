import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export default function WeeklyReport() {
  const [weekData, setWeekData] = useState([
    { day: 'Mon', completed: 3 },
    { day: 'Tue', completed: 5 },
    { day: 'Wed', completed: 4 },
    { day: 'Thu', completed: 6 },
    { day: 'Fri', completed: 7 },
    { day: 'Sat', completed: 2 },
    { day: 'Sun', completed: 3 },
  ]);

  const [completionRate, setCompletionRate] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [totalCompleted, setTotalCompleted] = useState(0);
  const [highlightedDay, setHighlightedDay] = useState('');

  // Calculate overall stats
  useEffect(() => {
    const total = weekData.reduce((sum, day) => sum + day.completed, 0);
    setTotalCompleted(total);
    setCompletionRate(((total / (7 * 7)) * 100).toFixed(1));  // Assuming 7 habits per day
    setBestStreak(Math.max(...weekData.map(day => day.completed)));
  }, [weekData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white px-6 py-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <img src="../public/logo.png" alt="logo" className="w-10 h-10 rounded-full object-contain" />
          <h1 className="text-3xl font-bold text-gray-800 tracking-wide">HabeoPrax</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-purple-500 text-white rounded-full px-4 py-1">
            <span className="text-lg">👤</span>
            <span className="ml-2 font-medium">Ajitesh</span>
          </div>
          <button className="text-2xl text-purple-500" onClick={() => window.location.href = "/home"}>🏠</button>
        </div>
      </header>

      {/* Weekly Report Title */}
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Weekly Report</h2>
      
      {/* Summary */}
      <div className="bg-purple-200 text-purple-800 rounded-xl p-6 mb-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">This Week's Summary</h2>
        <p>Total Habits Completed: {totalCompleted}</p>
        <p>Average Completion Rate: {completionRate}%</p>
        <p>Best Streak: {bestStreak} Days</p>
      </div>

      {/* Completion Graph */}
      <div className="bg-purple-300 text-white rounded-xl p-6 mb-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Habit Completion Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={weekData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="completed" fill="#6b46c1">
              {weekData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.day === highlightedDay ? '#9f7aea' : '#6b46c1'}
                  onMouseEnter={() => setHighlightedDay(entry.day)}
                  onMouseLeave={() => setHighlightedDay('')}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Achievement Badges */}
      <div className="bg-purple-200 text-purple-800 rounded-xl p-6 mb-6 shadow-md flex gap-4 justify-around">
        <div className="flex flex-col items-center">
          <span className="text-4xl">🏆</span>
          <p className="text-sm font-semibold mt-2">Best Streak</p>
          <p className="text-lg font-bold">{bestStreak} Days</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">🔥</span>
          <p className="text-sm font-semibold mt-2">Total Completed</p>
          <p className="text-lg font-bold">{totalCompleted} Habits</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl">🎯</span>
          <p className="text-sm font-semibold mt-2">Consistency</p>
          <p className="text-lg font-bold">{completionRate}%</p>
        </div>
      </div>

      {/* Detailed Stats */}
      <div className="bg-purple-200 text-purple-800 rounded-xl p-6 mb-6 shadow-md">
        <h2 className="text-xl font-semibold mb-2">Detailed Habit Statistics</h2>
        <ul>
          {weekData.map((day, index) => (
            <li key={index} className="mb-2">
              <strong>{day.day}:</strong> {day.completed} habits completed
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

