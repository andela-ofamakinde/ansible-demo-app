var express = require('express');
var port = 3000;
let app = express();
let db = require('./api/utils/connect');

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

app.listen(port, function(err, res) {
    console.log("listening on this port ", port);
});

module.exports = app;
