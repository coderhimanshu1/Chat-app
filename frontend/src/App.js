import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import HomePage from "./routes/HomePage";
import ChatPage from "./routes/ChatPage";
import UserSearchPage from "./routes/UserSearchPage";
import UsersPage from "./routes/UsersPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chat/:userId" element={<ChatPage />} />
        <Route path="/search" element={<UserSearchPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
