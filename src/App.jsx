import { useEffect, useState } from 'react';
import {BrowserRouter as Router,Routes, Route } from "react-router-dom";
import LandingSite from './LandingSite.jsx';
import LoginPage from './Components/LoginPage.jsx';
import RegisterPage from './Components/RegisterPage.jsx';
import HabitTracker from './Components/HabitTracker.jsx';
import WeeklyReport from './Components/WeeklyReport.jsx';
import './index.css';



function App() {
  useEffect(() => {
    document.title = "HabeoPrax - Smart Habit Tracking";
  }, []);

  return (<>

   <Routes>
      <Route path="/" element={<LandingSite />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<HabitTracker />} />
      <Route path="/weekly-report" element={<WeeklyReport />} />
  </Routes>

</>
  );
}

export default App;




