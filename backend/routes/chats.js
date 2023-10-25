"use strict";

const express = require("express");
const Chat = require("../models/chat");
const { ensureLoggedIn } = require("../middleware/auth");

const router = express.Router();

/** POST /:to_username => { chat: { id, from_username, to_username, message } }
 *
 * Sends a message to a user.
 *
 * Returns the sent message.
 *
 * Authorization required: logged in
 **/

router.post("/:to_username", async (req, res, next) => {
  try {
    const from_username = res.locals.user.username;
    const to_username = req.params.to_username;
    const { message } = req.body;
    const chat = await Chat.sendMessage(from_username, to_username, message);
    return res.json({ chat });
  } catch (err) {
    return next(err);
  }
});

/** GET /:other_username => { chats: [{ id, from_username, to_username, message }, ...] }
 *
 * Get all messages between the logged-in user and another user.
 *
 * Authorization required: logged in
 **/

router.get("/:other_username", async (req, res, next) => {
  try {
    const user1 = res.locals.user.username;
    const user2 = req.params.other_username;
    const chats = await Chat.getMessages(user1, user2);
    return res.json({ chats });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
