"use strict";

const db = require("../db");

/** Related functions for chat. */

class Chat {
  /** Send a message from one user to another.
   *
   * Returns { id, from_username, to_username, message }
   **/

  static async sendMessage(from_username, to_username, message) {
    const result = await db.query(
      `INSERT INTO chats (from_username, to_username, message)
       VALUES ($1, $2, $3)
       RETURNING id, from_username, to_username, message`,
      [from_username, to_username, message]
    );

    return result.rows[0];
  }

  /** Get all messages between two users.
   *
   * Returns [{ id, from_username, to_username, message }, ...]
   **/

  static async getMessages(user1, user2) {
    const result = await db.query(
      `SELECT id, from_username, to_username, message, timestamp
       FROM chats
       WHERE (from_username = $1 AND to_username = $2)
         OR (from_username = $2 AND to_username = $1)
       ORDER BY id`,
      [user1, user2]
    );

    return result.rows;
  }
}

module.exports = Chat;
