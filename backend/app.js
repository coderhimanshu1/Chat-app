// app.js
const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");

const app = express();
const port = 3000;

const connectionString = "YOUR_POSTGRES_CONNECTION_STRING"; // Replace with your connection string
const client = new pg.Client(connectionString);
client.connect();

app.use(bodyParser.json());

// <<<< Routes >>>>

// Create an account
app.post("/createAccount", (req, res) => {
  const { username, password } = req.body;
  client.query(
    "INSERT INTO users(username, password) VALUES($1, $2)",
    [username, password],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Account created!");
    }
  );
});

// Get all users
app.get("/users", (req, res) => {
  client.query("SELECT username FROM users", (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result.rows);
  });
});

// Store a message
app.post("/message", (req, res) => {
  const { sender, receiver, message } = req.body;
  client.query(
    "INSERT INTO messages(sender, receiver, message) VALUES($1, $2, $3)",
    [sender, receiver, message],
    (err) => {
      if (err) return res.status(500).send(err);
      res.send("Message stored!");
    }
  );
});

// Get all messages
app.get("/messages", (req, res) => {
  client.query("SELECT * FROM messages", (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result.rows);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
