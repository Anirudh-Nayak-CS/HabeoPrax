import React from "react";
import "../Styles/Features.css"; // Import styles

const ProgressBar = ({ label, percentage, color }) => {
  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>{label}</span>
        <span>{percentage}% completed</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%`, backgroundColor: color }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
