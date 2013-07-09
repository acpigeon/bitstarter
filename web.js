var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var filePath = '/Users/aaron/Dropbox/coding/startupengineering/hw3/bitstarter/index.html';

app.get('/', function(request, response) {
  response.send(fs.readFileSync(filePath).toString('utf8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
