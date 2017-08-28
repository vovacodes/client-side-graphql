const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const movies = require('./data/movies.json');
const actors = require('./data/actors.json');


const app = express();

// enable CORS
app.use(cors());

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.post('/movies/by-ids', (req, res) => {
  const foundMovies = req.body.ids.map((movieId) => movies.find((movie) => movie.id === movieId));

  res.json(foundMovies);
});

app.get('/actors', (req, res) => {
  res.json(actors);
});

app.post('/actors/by-ids', (req, res) => {
  const foundActors = req.body.ids.map((actorId) => actors.find((actor) => actor.id === actorId));

  res.json(foundActors);
});

app.listen(3000, () => {
  console.log('Your REST backend is listening on port 3000!');
});
