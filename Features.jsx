import React, { useEffect, useState } from "react";
import ProgressBar from "../Effects-Misc-components/ProgressBar.jsx";
import "../Styles/Features.css"; 
// import "./Styles/MonthlyProgress.css";


const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("features-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      title: "Habit Tracking",
      description: "Track daily, weekly, or monthly habits with just a tap. Mark them complete and watch your progress grow",
      icon: "☑️"
    },
    {
      title: "Detailed Analytics",
      description: "Visualize your progress with beautiful charts and gain insights into your habit-forming patterns",
      icon: "📊"
    },
    {
      title: "Rewards & Badges",
      description: "Earn badges and rewards as you build streaks and achieve consistency with your habits",
      icon: "🏆"
    },
    {
      title: "Smart Reminders",
      description: "Get timely notifications that adapt to your schedule, helping you stay consistent.",
      icon: "⏰"
    },
    {
      title: "Progress Tracking",
      description: "See your daily, weekly, and monthly trends to understand your habit-forming journey.",
      icon: "📈"
    },
    {
      title: "Customizable Goals",
      description: "Set personalized goals based on frequency, duration, and other parameters that matter to you.",
      icon: "🗓️"
    }
  ];
  const progressData = [
    { label: "Morning Meditation", percentage: 92, color: "#a682ff" },
    { label: "Daily Exercise", percentage: 78, color: "#5daaff" },
    { label: "Reading", percentage: 85, color: "#35c173" }
  ];

  return (
    <div id="features-section" className={`features-section ${isVisible ? "slide-in" : ""}`}>
      <h1 className="features-title">
        Everything you need to build <span className="highlight">lasting habits</span>
      </h1>
      <h3 className="features-text">
        HabeoPrax comes packed with powerful features designed to make habit building a delightful experience.
      </h3>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-box">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>

      <div id="features-section" className={`features-section-2 ${isVisible ? "slide-in" : ""}`}>
        <div className="features-desc">
            <h1 className="features-title-2">
               Make data-driven decisions with <span className="highlight">comprehensive insights</span>
            </h1>
            <h3 className="features-text-2">
               Visualize your progress, identify trends, and gain a deeper understanding of how your habits evolve over time.
            </h3>
            <p className="features-list-2">📊  Track progress with beautiful interactive charts</p>
            <p className="features-list-2">↔️  Compare habits and identify correlations</p>
            <p className="features-list-2">⌚  See time allocation across different habit categories</p>
            <p className="features-list-2">📈  Analyze streak data to boost consistency</p>
        </div>
        <div>
         <div className="progress-card">
           <div className="progress-header">
            <h3>Monthly Progress</h3>
            <h5>Last 30 days</h5>
            </div>

            {progressData.map((item, index) => (
            <ProgressBar key={index} label={item.label} percentage={item.percentage} color={item.color} />
            ))}

         <div className="progress-footer">
         <div><strong>42 days</strong><br />Longest Streak</div>
         <div><strong>85%</strong><br />Completion Rate</div>
         <div><strong>12</strong><br />Total Habits</div>
         </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Features;






