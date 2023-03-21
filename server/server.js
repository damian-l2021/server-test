const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, '../frontend/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
})

app.get('/')

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server running on port " + port);
})