const request = require('request');
const express = require('express');
const requestAPI = require('./requestAPI');
const bodyParser = require('body-parser');

var app = express();

// Allows Heroku environment to set port
// Process.env has variables regarding users env
var port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.get('/', (req, res) => {
    res.render('pages/home');
});

app.post('/check', (req, res) => {
    console.log('team entered')
    // console.log(req.body.team)
    res.redirect(`/boxscore/${req.body.team}`)
});

app.get('/boxscore/:teamID', (req, res) => {
    var j = requestAPI.getStats(req.params.teamID, (obj) => { // Added callback to be done after box score is retrieved, otherwise goes next and prints none
        res.render('pages/boxscore', {data: obj});
    });
});

var server = app.listen(port, () => {
    console.log('Listening on port: ' + server.address().port)
});