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

router.get('/', function(req, res){
  console.log('GET tasks');
  //error connecting is boolean, db is what we query against
  //done is a function that we can when we're done
  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase){
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //we connected to the database!!!
      //Now we're going to GET things from the db
      var queryText = 'SELECT * FROM "todotasks"';
      // errorMakingQuery is a boolean, result is an object
      db.query(queryText, function(errorMakingQuery, result){
        done();
        if(errorMakingQuery){
          console.log('Attempted to query with', queryText);
          console.log('Error making query');

          res.sendStatus(500);
        } else {
          // console.log(result);
          //send back the results
          res.send({taskdata: result.rows});
        }
      });
    }
  });
});

var pool = new pg.Pool(config);

module.exports = router;
