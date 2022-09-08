//requirements for the route file
const express = require('express');
const router = express.Router();
const path = require('path');

//display main page
router.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
})

//display notes page
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
})

module.exports = router