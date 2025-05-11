import React, { useState, useEffect} from 'react';
import quotes from './quotes';

export default function HabitTracker() {
  const [habits, setHabits] = useState([
    { title: 'Meditate', icon: '🧘', duration: '15 mins', time: '4:30 p.m', done: false },
    { title: 'Walking', icon: '🚶', duration: '30 mins', time: '6:00 p.m', done: false },
    { title: 'Skipping', icon: '🤸', duration: '10 mins', time: '7:00 p.m', done: false }
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [selectedMood, setSelectedMood] = useState('😊');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    icon: '💡',
    duration: '',
    time: '',
    days: ''
  });
  const [editIndex, setEditIndex] = useState(null);

  // Handle input changes in the modal
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Open the modal for adding a new habit
  const openAddModal = () => {
    setFormData({ title: '', icon: '💡', duration: '', time: '', days: '' });
    setEditIndex(null);
    setShowModal(true);
  };

  // Open the modal for editing a habit
  const openEditModal = (index) => {
    const habit = habits[index];
    setFormData({
      title: habit.title || '',
      icon: habit.icon || '💡',
      duration: habit.duration || '',
      time: habit.time || '',
      days: habit.days || ''
    });
    setEditIndex(index);
    setShowModal(true);
  };

  // Add or edit a habit
  const saveHabit = () => {
    if (formData.title.trim() === '') {
      alert("Habit title cannot be empty.");
      return;
    }

    const updatedHabits = [...habits];
    if (editIndex !== null) {
      updatedHabits[editIndex] = { ...formData, done: habits[editIndex].done };
    } else {
      updatedHabits.push({ ...formData, done: false });
    }

    setHabits(updatedHabits);
    setShowModal(false);
  };

  // Delete a habit
  const deleteHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  // Toggle habit completion
  const toggleHabitDone = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].done = !updatedHabits[index].done;
    setHabits(updatedHabits);
  };

  const today = new Date();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();

  // Setting a quote
  const [quote, setQuote] = useState({});

  // Fetch a random quote on component mount
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

    // Dark Mode State
    const [isDarkMode, setIsDarkMode] = useState(() => {
      // Check local storage for saved mode
      return localStorage.getItem('dark-mode') === 'true';
  });

  // Apply dark mode on first load
  useEffect(() => {
      const root = document.documentElement;
      if (isDarkMode) {
          root.classList.add('dark');
      } else {
          root.classList.remove('dark');
      }
  }, [isDarkMode]);

  // Toggle dark mode
  const toggleDarkMode = () => {
      const newMode = !isDarkMode;
      setIsDarkMode(newMode);
      localStorage.setItem('dark-mode', newMode.toString());
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300 px-4 sm:px-8">
          {/* Header */}
          <header className="flex justify-between items-center mb-6 bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-md transition-colors duration-300">
              <div className="flex items-center gap-3">
                  <img src="/logo.png" alt="logo" className="w-12 h-12 rounded-full object-contain" />
                  <h1 className="text-3xl font-bold tracking-wide">HabeoPrax</h1>
              </div>
              <div className="flex items-center gap-3">
                  <div className="flex items-center bg-purple-500 text-white rounded-full px-4 py-2">
                      <span className="text-lg">👤</span>
                      <span className="ml-2 font-medium">Ajitesh</span>
                  </div>
                  {/* Dark Mode Toggle */}
                  <button onClick={toggleDarkMode} className="text-2xl transition-all">
                      {isDarkMode ? '🌞' : '🌙'}
                  </button>
              </div>
          </header>
      {/* Quote Section */}
        <section className="bg-purple-500 text-white rounded-xl p-6 mb-6 shadow-md">
          <h2 className="text-xl font-semibold mb-2">Good Morning, Ajitesh 🌞</h2>
          <p className="text-base leading-relaxed italic">{quote.text}</p>
          <p className="text-right mt-2 text-sm">– {quote.author}</p>
        </section>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Habit List */}
        <section className="flex-1 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold text-purple-800">Your Habits</h3>
            <button onClick={openAddModal} className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-all shadow">+ Add a New Habit</button>
          </div>

          <div className="space-y-4">
            {habits.map((habit, index) => (
              <div key={index} className={`rounded-xl p-4 shadow-md flex justify-between items-center ${habit.done ? 'bg-purple-200 text-purple-800' : 'bg-purple-300 text-white'}`}>
                <div>
                  <h4 className={`text-lg font-semibold ${habit.done ? 'line-through' : ''}`}>{habit.title}</h4>
                  <p>{habit.duration} | {habit.time}</p>
                </div>
                <div className="flex gap-3 items-center">
                  <button onClick={() => openEditModal(index)}>✏️</button>
                  <button onClick={() => deleteHabit(index)}>🗑️</button>
                  <button onClick={() => toggleHabitDone(index)}>✔️</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal for Adding / Editing Habits */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
              <h2 className="text-lg font-semibold mb-4">{editIndex !== null ? 'Edit Habit' : 'Add a New Habit'}</h2>
              <input
                type="text"
                placeholder="Habit title"
                name="title"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                value={formData.title}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Duration (e.g., 15 mins)"
                name="duration"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                value={formData.duration}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder="Time (e.g., 4:30 p.m)"
                name="time"
                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                value={formData.time}
                onChange={handleInputChange}
              />
              <div className="flex justify-end gap-3">
                <button onClick={() => setShowModal(false)} className="text-gray-500">Cancel</button>
                <button onClick={saveHabit} className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">{editIndex !== null ? 'Update' : 'Add'}</button>
              </div>
            </div>
          </div>
        )}

        {/* Calendar and Mood Tracker */}
        <aside className="w-full lg:w-1/3 space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-purple-600 text-lg mb-2 text-center">{month} {year}</h3>
            <div className="grid grid-cols-7 gap-2 text-sm text-center">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <div key={i} className="font-medium text-gray-700">{d}</div>)}
              {Array.from({ length: 31 }, (_, i) => (
                <div
                  key={i + 1}
                  onClick={() => setSelectedDate(i + 1)}
                  className={`cursor-pointer py-1 rounded-full transition-all ${selectedDate === i + 1 ? 'bg-purple-500 text-white font-bold' : 'text-gray-700 hover:bg-purple-200'}`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Mood Tracker */}
          <div className="bg-purple-500 text-white p-4 rounded-xl shadow-sm text-center">
            <h3 className="mb-3 font-semibold">How is your mood today?</h3>
            <div className="flex justify-center gap-3 text-2xl">
              {['😞', '😐', '😊', '😁', '🤩'].map((mood, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedMood(mood)}
                  className={`cursor-pointer ${selectedMood === mood ? 'border-b-4 border-white scale-110' : ''}`}
                >
                  {mood}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-full px-6 py-3 flex items-center gap-8">
        <button title="Home" onClick={() => window.location.href = "/"}>🏠</button>
        <button title="Weekly Report" onClick={() => window.location.href = "/weekly-report"}>📈</button>
        <button title="Reminders">🔔</button>
        <button title="Settings">⚙️</button>
      </nav>
    </div>
  );
}

