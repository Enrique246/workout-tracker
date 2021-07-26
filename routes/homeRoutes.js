const path = require("path");
const router = require('express').Router();


router.get("/", (res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

router.get("/exercise", (res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  router.get("/stats", (res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

module.exports =router