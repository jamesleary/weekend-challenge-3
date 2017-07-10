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
      var queryText = 'SELECT * FROM "todotasks" ORDER BY "complete" ASC';
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

router.post('/', function(req, res){

  var task = req.body;

  //error connecting is boolean, db is what we query against
  //done is a function that we can when we're done
  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase){
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //we connected to the database!!!
      //Now we're going to GET things from the db
      var queryText = 'INSERT INTO todotasks ("task", "complete")'+
      ' VALUES ($1,false);';
      // errorMakingQuery is a boolean, result is an object
      db.query(queryText, [task.task], function(errorMakingQuery, result){
        done();
        if(errorMakingQuery){
          console.log('Attempted to query with', queryText);
          console.log('Error making query');
          res.sendStatus(500);
        } else {
          // console.log(result);
          //send back the results
          res.sendStatus(200);
        }
      });
    }
  });
});
router.delete('/:id', function(req, res){
var id = req.params.id;
console.log('Delete', id);
  //error connecting is boolean, db is what we query against
  //done is a function that we can when we're done
  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase){
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //we connected to the database!!!
      //Now we're going to GET things from the db
      var queryText = 'DELETE FROM "todotasks" WHERE id = $1';
      // errorMakingQuery is a boolean, result is an object
      db.query(queryText, [id], function(errorMakingQuery, result){
        done();
        if(errorMakingQuery){
          console.log('Attempted to query with', queryText);
          console.log('Error making query');

          res.sendStatus(500);
        } else {
          // console.log(result);
          //send back the results
          res.sendStatus(200);
        }
      });
    }
  });
});
router.put('/:id', function(req, res){
  var id = req.params.id;
  pool.connect(function(errorConnectingToDatabase, db, done){
    if(errorConnectingToDatabase){
      console.log('Error connecting to the database.');
      res.sendStatus(500);
    } else {
      //we connected to the database!!!
      //Now we're going to GET things from the db
      var queryText = 'UPDATE "todotasks" SET "complete" = true WHERE id =$1;';
      // errorMakingQuery is a boolean, result is an object
      db.query(queryText,[id], function(errorMakingQuery, result){
        done();
        if(errorMakingQuery){
          console.log('Attempted to query with', queryText);
          console.log('Error making query');

          res.sendStatus(500);
        } else {
          // console.log(result);
          //send back the results
          res.sendStatus(200);
        }
      });
    }
  });
});



module.exports = router;
