var pg = require('pg-promise');
var promise = require('bluebird');
var config = require('../../config');

var options = {
    promiseLib: promise
};

var connectionString = config.DATABASE_URL

var db = pg(options)(connectionString);

module.exports = db;
