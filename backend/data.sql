CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) UNIQUE,
);


CREATE TABLE chats (
  id SERIAL PRIMARY KEY,
  from_username TEXT REFERENCES users(username) ON DELETE CASCADE,
  to_username TEXT REFERENCES users(username) ON DELETE CASCADE,
  message TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT current_timestamp
);
