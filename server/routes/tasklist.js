var express = require('express');
var router = express.Router();
var pg = require('pg');
console.log('Router Online');

var config = {
  database: 'antares',  //name of database
  host: 'localhost',  //where is your database
  port: 5432,  // port for the database
  max: 10, //how many connections at one time
  idleTimeoutMillis: 30000 //30 second time out
};

var pool = new pg.Pool(config);

module.exports = router;
