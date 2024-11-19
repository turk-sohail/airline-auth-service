const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

module.exports = {
  PORT,
  JWT_SECRET: process.env.JWT_SECRET,
};
