import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api/helpers"; // Assuming you've added a register function in helpers.
import "../style/auth.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await register(username, email, password);
    // Handle registration response. If successful, redirect to home.
    if (response.success) {
      navigate("/home");
    } else {
      // Handle errors or show messages.
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <p>
          Already have account? <Link to="/login">Login Now</Link>
        </p>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="register-button" type="submit">
          Register
        </button>
        <Link to="/">
          <p>Go back</p>
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
