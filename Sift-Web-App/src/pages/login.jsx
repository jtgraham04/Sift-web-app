// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset any previous error

    try {
      // Call the backend API to log in
      const response = await fetch("https://sift-web-app-fbrm.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // In your backend, if "identifier" can be username OR email,
          // pick one field. For example, if the backend checks "username" first:
          username: identifier,
          password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful login
        
        alert("Login successful!")
        navigate("/home");
        localStorage.setItem('token', data.token); // or wherever you want to redirect the user
      } else {
        // Handle errors from the backend
        setError(data.error || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Network error:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username or Email:</label>
        <input
          type="text"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
    </div>
  );
}

export default Login;
