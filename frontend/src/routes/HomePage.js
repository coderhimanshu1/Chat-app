import React from "react";
import { Link } from "react-router-dom";
import "../style/HomePage.css";

function HomePage() {
  return (
    <div className="HomePage">
      <header>
        <h1>Welcome to ChatApp</h1>
        <div className="Homepage-user-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </header>
      <div className="Homepage-links">
        <Link to="/users">View All Users</Link>
        <Link to="/search">Search Users</Link>
      </div>

      <div>
        {/* TODO:show some basic info here */}
        {/* <h2>Your Recent Chats</h2>  */}
        {/* TODO:List recent chats. This could be another component or fetched data */}
      </div>
    </div>
  );
}

export default HomePage;
