import { useState,useEffect } from "react";
import "./Styles/slide-from-right.css"

const HabitSection = () => {
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
    return (
        <div id="features-section" className={`features-section ${isVisible ? "slide-in" : ""}`}>
          {/* Your existing text content here
          <h2>Everything you need to build <span className="highlight">lasting habits</span></h2>
          <p>HabeoPrax comes packed with powerful features designed to make habit building a delightful experience.</p> */}
        </div>
      );
    };
    export default HabitSection