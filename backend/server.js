const express = require('express');

const db = require('../backend/db/connect.js');

const server = express();
require('dotenv').config();

server.get('/test', function(req, res) {
    res.send('tested');
});

server.listen(process.env.PORT, console.log('Express now listening :D'));