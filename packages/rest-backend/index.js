const express = require('express');
const movies = require('./data/movies.json');
const actors = require('./data/actors.json');


const app = express();

app.get('/movies', function (req, res) {
  res.json(movies);
});

app.get('/actors', function (req, res) {
  res.json(actors);
});

app.listen(3000, () => {
  console.log('Your REST backend is listening on port 3000!');
});
