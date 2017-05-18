'use strict';
require('dotenv').config();

var express = require('express');
var app = express();
var db = require('./api/utils/connect');
var config = require('./config');

app.use('/', function(req, res) {
    res.status(200).json({message: "Application Running"});
});

app.use('/users', function(req, res) {
    db.any('SELECT * FROM users').then(
        function(users) {
            console.log(users)
            res.status(200).json({message: "Get Route here"});
        },
        function(error) {
            console.log(error);
            res.status(400).json({message: error});
    });
});

app.listen(config.PORT, function(err, res) {
    console.log("listening on this port ", config.PORT);
});

module.exports = app;
