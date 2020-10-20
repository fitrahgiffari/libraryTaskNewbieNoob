const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.post("/student", (req, res) => {
  const body = req.body;
  const result = db.add("student", body);
  res.send(result);
  return;
});

module.exports = app;
