import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Effects-Misc-components/Navbar.jsx"
import "../Styles/FirstPart.css"; 

const FirstPart = ({onScrollToFeatures,onScrollToFaqs,onScrollToPricing}) => {
  const navigate=useNavigate();
  return (
    <div className="container">
      <Navbar
        onScrollToFeatures={onScrollToFeatures}
        onScrollToFaqs={onScrollToFaqs}
        onScrollToPricing={onScrollToPricing} />
      
      <div className="main-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Build habits that <span className="highlight">last forever</span></h1>
        <p className="hero-text">
        <span className="highlight">HabeoPrax</span> makes building positive habits a delightful experience with smart tracking, insightful stats, and rewarding achievements.
        </p>
        <div className="hero-buttons">
          <button className="get-started-button" onClick={() => navigate("/register")}>Get started for free</button>
          <button className="see-how-button">See how it works</button>
        </div>
        <div className="extraInfo">
          <div>✔️No Credit Card Required</div>
          <div>✔️Team Collaboration</div>
          <div>✔️Customisable and User Friendly</div>
        </div>
      </section>

      {/* Features */}
      <section className="habits-section">
        <h3 className="section-title">My Habits</h3>
        <div className="habits-list">
          <div className="habit-item">
            <span>🌅 Morning Meditation<span className="tick">✅</span></span>
            <span className="streak">🔥15 day streak </span>
            
          </div>
          <div className="habit-item">
            <span>🏃 Daily Exercise<span className="tick">✅</span></span>
            <span className="streak">🔥8 day streak </span>
          </div>
          <div className="habit-item">
            <span>📖 Read 20 Pages<span className="tick">✅</span></span>
            <span className="streak">🔥21 day streak </span>
          </div>
          <div className="habit-item">
            <span>💧 Drink Water<span className="tick">✅</span></span>
            <span className="streak">🔥30 day streak</span>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};
export default FirstPart;












