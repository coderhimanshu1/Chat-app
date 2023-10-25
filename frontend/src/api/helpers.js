import axios from "axios";

const API_BASE_URL = "http://localhost:3000/";

export const login = (username, password) => {
  return fetch(`${API_BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
};

export const searchUsers = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/search`, {
      params: { q: query },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching users:", error);
    throw error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error("Error getting all users:", error);
    throw error;
  }
};

export const register = async (username, password, email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      username,
      password,
      email,
    });
    return response.data;
  } catch (error) {
    console.error("Error registering:", error);
    throw error;
  }
};

export const getMessages = async (user1, user2) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/chats`, {
      params: { user1, user2 },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
};

export const sendMessage = async (from_username, to_username, message) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chats/send`, {
      from_username,
      to_username,
      message,
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message:", error);
    throw error;
  }
};
