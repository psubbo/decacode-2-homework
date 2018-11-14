const path = require('path');
const fetch =  require('node-fetch');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const url = "https://blog.decathlon.ru/assets/json/opinions.json";
const db = require('./db.js');

// Body parser
app.use(bodyParser.json());

// Path logger
app.use((request, response, next) => {
  console.log('Path: ' + request.path);
  response.setHeader('Content-Type', 'application/json');
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/data', (req, res) => {
  db.get((json) => res.send(JSON.stringify(json, '', 2)));
});

app.get('/ping', function (req, res) {
    return res.send('pong');
   });
   
/* app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
}); */

app.listen(port, () => {
  console.log(`App listening on port ${port}!`)

fetch(url, {
    headers:{
        "Content-Type":"application/json"
    }
})
    .then(res => res)
    .then(data => data.json())
    .then(data => db.save(data.opinions))
    .catch(err => console.log(err))
});