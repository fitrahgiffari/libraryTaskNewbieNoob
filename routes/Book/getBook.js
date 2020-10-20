const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.get("/book", (req, res) => {
  res.send(db.get("book"));
});

module.exports = app;
