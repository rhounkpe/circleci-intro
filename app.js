'use strict';

const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Hello!!!');
});

app.listen(8083);
module.exports = app;