require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const data = require('./data.js');
const cors = require('cors');

console.log(process.env.API_TOKEN);

const app = express();
app.use(morgan('common'));
app.use(cors());

/* app.use(function validateToken(req, res, next) {
  const apiToken = process.env.API_TOKEN;
  const authorizationToken = req.get('Authorization');
  if (!authorizationToken || authorizationToken.split(' ')[1] !== apiToken) {
    return res.status(401).json({ error: 'Unauthorized request'});
  }
  next();
}); */

app.get('/movie', function handleMovieType(req, res) {
  let response = data;

  if (req.query.genre) {
    response = response.filter(movie => 
      movie.genre.toLowerCase().includes(req.query.genre.toLowerCase()));
  }
  if (req.query.country) {
    response = response.filter(movie => 
      movie.country.toLowerCase().includes(req.query.country.toLowerCase()));
  }
  if(req.query.avg_vote){
    response = response.filter(movie =>
      Number(movie.avg_vote)>=Number(req.query.avg_vote));
  }

  res.json(response);
});

module.exports = app;