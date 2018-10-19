var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname, 'dist')));

//var port = process.env.PORT || 80     HEROKU
var port = process.env.PORT || 8080
app.listen(port)
console.log('starting project at ' + port)
