require('dotenv').config();

const axios = require('axios');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/movieInfo/:inputValue', (req, res) => {
    axios({
      url: `http://omdbapi.com/?s=${req.params.inputValue}&apikey=${process.env.OMDB_API_KEY}`,
      method: 'get'
    })
    .then((response) => {
      res.send(response.data);
    })
    .catch(err => res.status(400).json({}));
  });

app.get('/movie/:id', (req, res) => {
    axios({
        url: `http://omdbapi.com/?i=${req.params.id}&apikey=${process.env.OMDB_API_KEY}`,
        method: 'get'
    })
    .then((response) => {
        res.send(response.data);
    })
    .catch(err => res.status(400).json({}));;
});

module.exports = app;
