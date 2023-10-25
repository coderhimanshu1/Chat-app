"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY;
const PORT = +process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

function getDatabaseUri() {
  return process.env.NODE_ENV === "test" ? "chat_test" : DATABASE_URL;
}

const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

module.exports = {
  SECRET_KEY,
  PORT,
  BCRYPT_WORK_FACTOR,
  getDatabaseUri,
};
