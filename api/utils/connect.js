var pg = require('pg-promise');
var promise = require('bluebird');

var options = {
    promiseLib: promise
};

var connectionString = "postgres://localhost/test_db"

var db = pg(options)(connectionString);

module.exports = db;
