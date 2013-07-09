var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var filePath = '/Users/aaron/Dropbox/coding/startupengineering/hw3/bitstarter/index.html';

var greeting = fs.readFile(filePath, function(err, data) {
	if(err) throw err;
	console.log(data.toString('utf8'));

});

app.get('/', function(request, response) {
  response.send(greeting);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
