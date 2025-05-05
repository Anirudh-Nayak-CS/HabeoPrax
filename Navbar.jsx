import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Navbar.css"

const Navbar = ({onScrollToFeatures,onScrollToFaqs,onScrollToPricing}) =>{
  const navigate = useNavigate();
    return(
    <nav className="navbar">
        <h1 className="logo">HabeoPrax</h1>
        <div className="navbar-categories">
          <div className="category" onClick={onScrollToFeatures}>Features</div>
          <div className="category" onClick={onScrollToFaqs}>FAQs</div>
          <div className="category" onClick={onScrollToPricing}>Pricing</div>
        </div>
        <div>
          <button className="login-button" onClick={() => navigate("/login")}>Log in</button>
          <button className="get-started-button" onClick={() => navigate("/register")}>Get Started</button>
        </div>
    </nav>
    )
}
export default Navbar;