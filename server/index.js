const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js');

app.use (express.static('client/dist'));
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.get('/coffee', (req, res) => {
  db.getResultData()
    .then((result) => {
      res.send(result);
    })
    .catch ((err) => {
      res.sendStatus(500);
      console.log(err);
    })
});

app.listen(port , () => {
  console.log(`your app is listening at http://localhost:${port}`);
});