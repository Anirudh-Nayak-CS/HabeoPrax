import React, { useState } from "react";
import "../Styles/AuthForm.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "",
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      console.log(data);

      if (data.success) {
        localStorage.setItem("token", data.token);
        alert("Login successful!");
         navigate("/home"); 
      } else {
        alert(data.message || data || "Login failed!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login to HabeoPrax</h2>
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
        <button type="submit">Log In</button>
        <p className="auth-link">Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  );
};

export default LoginPage;
