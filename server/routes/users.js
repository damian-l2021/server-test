const express = require('express');
const path = require('path');

const router = express.Router();

router.get("/users", (req, res) => {
    res.send("users route");
})

module.exports = router;