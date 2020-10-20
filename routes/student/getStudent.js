const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.get("/student", (req, res) => {
  res.send(db.get("student"));
});

module.exports = app;
