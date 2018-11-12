
const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = require('./db.js');

const pathToJSON = path.resolve(__dirname, 'index.json');

// Body parser
app.use(bodyParser.json());

// Path logger
app.use((request, response, next) => {
  console.log('Path: ' + request.path);
  response.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/items', (req, res) => {
  db.get((json) => res.send(JSON.stringify(json, '', 2)));
});

app.post('/items', (req, res) => {
    db.save(req.body);
    res.send(JSON.stringify(req.body, '', 2));
});

app.delete('/items/:id', (req, res) => {

db.remove(req.params.id);
res.send({
    message : `Удален элемент с id ${req.params.id}`
});
});

app.put('/items/:id', (req, res) => {

  db.update(req.params.id, req.body);
  res.send({
      message : `Изменен элемент с id ${req.params.id}`,
      newItem: req.body
  });
  });


app.listen(port, () => {
  console.log(`App listening on port ${port}!`)
});