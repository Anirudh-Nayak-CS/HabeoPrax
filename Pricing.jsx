import { useState,useEffect } from "react";
import "../Styles/Pricing.css"

const Pricing = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById("pricing-container");
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

    const plans = [
        {
          name: "Free",
          price: "$0",
          duration: "/month",
          description: "Perfect for getting started with habit building.",
          features: [
            "Track up to 5 habits",
            "Basic streak tracking",
            "7-day habit history",
            "Daily reminders",
            "Basic achievements",
          ],
          buttonText: "Get Started",
        },
        {
          name: "Premium",
          price: "$4.99",
          duration: "/month",
          description: "Everything you need for serious habit building.",
          features: [
            "Unlimited habit tracking",
            "Advanced streak tracking",
            "Full habit history",
            "Smart reminders",
            "All achievements",
            "Detailed analytics",
            "Priority support",
          ],
          buttonText: "Choose Premium",
          popular: true,
        },
        {
          name: "Teams",
          price: "$9.99",
          duration: "/user/month",
          description: "For organizations building team habits together.",
          features: [
            "All Premium features",
            "Team habit tracking",
            "Group analytics",
            "Admin dashboard",
            "Team challenges",
            "Custom rewards",
            "API access",
            "Dedicated support",
          ],
          buttonText: "Contact Sales",
        },
      ];

      return (
        <div id="pricing-container" className={`pricing-container ${isVisible ? "slide-in" : ""}`}>
          <h2 className="pricing-title">Start building <span className="highlight">better habits</span> today</h2>
          <p className="pricing-subtitle">Join thousands of users who have transformed their lives with HabeoPrax.</p>
          <div className="pricing-grid">
            {plans.map((plan, index) => (
              <div key={index} className="pricing-card">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-price">{plan.price}<span>{plan.duration}</span></p>
                <p className="plan-description">{plan.description}</p>
                <ul className="plan-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>✔️{feature}</li>
                  ))}
                </ul>
                <button className="plan-button">{plan.buttonText}</button>
              </div>
            ))}
          </div>
        </div>
      );  
}

export default Pricing;