const express = require("express");
const app = express();

require("dotenv").config();

const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

/** mongo db connection */
const connection = require("./mongoConnect");
connection();

/**middleware */
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors());

const PORT = 5000;

app.listen(PORT, (error) => {
  if (error) {
    console.log("an error occurs while starting the server");
  } else {
    console.log("server started successfully!");
  }
});
