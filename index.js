const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./src/config/server-config");
const sequelize = require("sequelize");
const db = require("./src/models");
const { User, Role } = require("./src/models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routes
 *
 */

app.use("/api", require("./src/routes"));

const start = async () => {
  app.listen(PORT, () => {
    // db.sequelize.sync({ alter: true });
    //console.log(user);
    console.log(`Server is running on port  ${PORT}`);
  });
};
start();
