var express = require('express');
var app = express();
var path = require('path');
var port = 5000;
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var taskRoute = require('./routes/tasklist.js');

app.use('/tasks', taskRoute);

//Serve back static files by default
app.get('/*', function(req, res){
  var file = req.params[0] || 'views/index.html';
  res.sendFile(path.join(__dirname, '/public', file));
});

//Listening on port defined above
app.listen(port, function(){
  console.log('Server is listening on port', port);
});
