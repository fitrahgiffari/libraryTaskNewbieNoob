const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.get("/employee", (req, res) => {
  res.send(db.get("employee"));
});

module.exports = app;
