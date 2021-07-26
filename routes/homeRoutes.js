const path = require("path");
const router = require('express').Router();


//Render homepage
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
//Render excercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
//Render stats page
  router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

module.exports =router