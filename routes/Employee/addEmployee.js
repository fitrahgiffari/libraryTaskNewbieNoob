const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.post("/employee", (req, res) => {
  const body = req.body;
  const result = db.add("employee", body);
  res.send(result);
  return;
});

module.exports = app;
