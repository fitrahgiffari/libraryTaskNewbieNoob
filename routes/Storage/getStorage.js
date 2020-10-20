const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.get("/storage", (req, res) => {
  res.send(db.get("storage"));
});

module.exports = app;
