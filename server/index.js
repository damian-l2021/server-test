const express = require('express');
const path = require('path');
const users = require("./routes/users");

const app = express();
const router = express.Router();

app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.use('/users', users)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/index.html'));
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server running on port " + port);
})