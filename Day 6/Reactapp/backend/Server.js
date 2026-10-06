const express = require("express");
const app = express();
const connectDB = require("./config/db");

require("dotenv").config();

connectDB();

app.get("/", (req, res) => {
  res.send("Server is Running");
});

const port = process.env.app_port;
app.listen(port, () => {
  console.log(`Server is Running in on http://localhost:${port}`);
});
