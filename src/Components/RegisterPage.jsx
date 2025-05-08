import React, { useState } from "react";
import "../Styles/AuthForm.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();   // prevents the default reloading of a page on submission of the register form,e is event object representing submission

    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: name,  
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
    
      if (response.ok) {
        alert("Registration successful! Please log in.");
      navigate('/login')
      setName(""); 
      setEmail("");
      setPassword("");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleRegister}>
        <h2>Create your HabeoPrax account</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <p className="auth-link">Already have an account? <a href="/login">Log in</a></p>
      </form>
    </div>
  );
};

export default RegisterPage;
