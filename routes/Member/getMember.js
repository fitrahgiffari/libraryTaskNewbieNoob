const express = require("express");
const app = express.Router();
const db = require("../../controller/dbController");

app.get("/member", (req, res) => {
  res.send(db.get("member"));
});

module.exports = app;
