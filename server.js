var express = require('express');
var app = express();
var path = require('path');

app.use('/', express.static(path.join(__dirname, 'dist')));

// Kubernetes
app.get('/actuator/isAlive', (req, res) => {
    res.send('is Alive!');
});

app.get('/actuator/isReady', (req, res) => {
    res.send('is Ready!');
});

// Set PORT
app.listen(8080, () => console.log('Gator app listening on port 8080!'));
