"use strict";

/** Routes for users. */

const express = require("express");
const { ensureLoggedIn } = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const User = require("../models/user");
const { createToken } = require("../helpers/tokens");

const router = express.Router();

/** GET / => { users: [ {username, firstName, lastName, email }, ... ] }
 *
 * Returns list of all users.
 *
 * Authorization required: admin
 **/

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
});

/** GET /[username] => { user }
 *
 * Returns { username, firstName, lastName }
 *
 * Authorization required: admin or same user-as-:username
 **/

router.get("/:username", async (req, res, next) => {
  try {
    const user = await User.get(req.params.username);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

// route to search users by username
router.get("/search/:usernameQuery", async (req, res, next) => {
  try {
    const users = await User.searchByUsername(req.params.usernameQuery);
    return res.json({ users });
  } catch (err) {
    return next(err);
  }
});

/** PATCH /[username] { user } => { user }
 *
 * Data can include:
 *   { firstName, lastName, password, email }
 *
 * Returns { username, firstName, lastName, email }
 *
 **/

router.patch("/:username", async (req, res, next) => {
  try {
    const user = await User.update(req.params.username, req.body);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[username]  =>  { deleted: username }
 *
 **/

router.delete("/:username", async (req, res, next) => {
  try {
    await User.remove(req.params.username);
    return res.json({ "deleted user": req.params.username });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
