import React, { useState } from "react";
import { login } from "../api/helpers";
import { Link } from "react-router-dom";
import "../style/auth.css";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(username, password);
    // Handle login response
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <p>
          Don't have account? <Link to="/register">Register Now</Link>
        </p>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">
          Login
        </button>
        <Link to="/">
          <p>Go back</p>
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
