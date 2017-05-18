var test = require('./env/test');
var development = require('./env/development');
var production = require('./env/production');

var env;
var node_env = process.env.NODE_ENV || "test";

if (node_env === 'production') {
    env = production;
} else if (node_env === "development") {
    env = development;
} else {
    env = test;
}

module.exports = env;