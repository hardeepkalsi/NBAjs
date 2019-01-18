const request = require('request');
const express = require('express');
const requestAPI = require('./requestAPI');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('pages/index');
})


app.get('/get', (req, res) => {
    var j = requestAPI.getStats((obj) => { // Added callback to be done after box score is retrieved, otherwise goes next and prints none
        res.render('pages/index', {data: obj});
    });
});

var server = app.listen(8000, () => {
    console.log('Listening on port: ' + server.address().port)
});