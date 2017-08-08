'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const mtg = require('mtgsdk');
const bcrypt = require('bcrypt');
const PORT = process.env.PORT || 6060;

const app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

app.listen(PORT, () => {console.log(`You are on port: ${PORT}. Enjoy the Storm.`)});


//MTG SDK REQUESTS

app.get('/card/:name', (req, res) => {
  mtg.card.where({name: req.params.name}).
    then(data => res.send(data));
});

app.get('/cards/:name/:set', (req, res) => {
  res.links({
    next: `http://api.magicthegathering.io/v1/cards?setName=${req.params.set}?name=${req.params.name}?page=2`
  });
  res.append('Page-Size', 50);
  res.append('Count', 50);
  mtg.card.where({name: req.params.name, setName: req.params.set, pageSize: 50}).
    then(data => {
      res.send(data);
    });
});

app.get('/set/:set', (req, res) => {
  res.links({
    next: `http://api.magicthegathering.io/v1/cards?setName=${req.params.set}?page=2`
  });
  res.append('Page-Size', 50);
  res.append('Count', 50);
  mtg.card.where({setName: req.params.set, pageSize: 50}).
    then(data => {
      res.send(data);
    });
});
