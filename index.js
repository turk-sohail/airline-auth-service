const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./src/config/server-config");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Routes
 *
 */

app.use("/api", require("./src/routes"));

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port  ${PORT}`);
  });
};
start();
