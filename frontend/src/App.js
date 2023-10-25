// App.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";

function App() {
  // const [users, setUsers] = useState([]);
  // const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/users")
  //     .then((response) => setUsers(response.data));
  //   axios
  //     .get("http://localhost:3000/messages")
  //     .then((response) => setMessages(response.data));
  // }, []);

  return (
    <div>
      <h1>Users</h1>
      {/* {users.map((user) => (
        <div key={user.username}>{user.username}</div>
      ))} */}

      <h1>Messages</h1>
      {/* {messages.map((message) => (
        <div key={message.id}>
          <strong>
            {message.sender} - {message.receiver}:
          </strong>
          {message.message}
        </div>
      ))} */}
    </div>
  );
}

export default App;
