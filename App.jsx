import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingSite from './LandingSite.jsx';
import LoginPage from './Components/LoginPage.jsx';
import RegisterPage from './Components/RegisterPage.jsx';


import './App.css';


function App() {
  useEffect(() => {
    document.title = "HabeoPrax - Smart Habit Tracking";
  }, []);

  return (<>
<Router>
  <Routes>
      <Route path="/" element={<LandingSite />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
  </Routes>
</Router>
</>
  );
}

export default App;




