import React, { useState, useEffect } from "react";
import { getMessages, sendMessage } from "../api/helpers";

function ChatPage({ match }) {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const currentUser = "YourUsername"; // Should be fetched based on logged-in user
  const chatPartner = match.params.username; // Assuming you're using react-router and have a route like '/chat/:username'

  useEffect(() => {
    async function fetchMessages() {
      const chatMessages = await getMessages(currentUser, chatPartner);
      setMessages(chatMessages);
    }
    fetchMessages();
  }, [currentUser, chatPartner]);

  const handleSend = async () => {
    if (currentMessage) {
      await sendMessage(currentUser, chatPartner, currentMessage);
      setCurrentMessage("");
      // Refresh the messages or add the new one to the list.
    }
  };

  return (
    <div>
      <h2>Chat with {chatPartner}</h2>
      <div>
        {messages.map((message) => (
          <div key={message.id}>
            <strong>{message.from_username}:</strong> {message.message}
            <span>{message.timestamp}</span>
          </div>
        ))}
      </div>
      <input
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatPage;
