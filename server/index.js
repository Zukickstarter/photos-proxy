const express = require('express');
const path = require('path');
const morgan = require('morgan');
const Desc = require('../description/database/model.js');
const { PhotoModel } = require('../photos/db/photo.js');
const { cleanMany } = require('../photos/server/clean.js');
const { getPledgeData } = require('../pledges/server/model.js');

const app = express();
const port = 6822;

app.use(morgan('tiny'));

const api = function (res, idn) {
  if (idn === undefined) {
    idn = 0;
  }
  PhotoModel.find({id: idn})
    .then((data) => {
      res.send(cleanMany(data));
    });
};

app.get('/', function (req, res) {
  res.sendfile('index.html', { root: __dirname + "./../pub/" });
});

app.get('/index.html', function (req, res) {
  res.sendFile('index.html', { root: __dirname + "./../pub/" });
});

app.get('/photos/bundle.js', function (req, res) {
  res.sendfile('bundle.js', { root: __dirname + "./../photos/pub/" });
});

app.get('/pledges/bundle.js', function (req, res) {
  res.sendfile('bundle.js', { root: __dirname + "./../pledges/dist/" });
});

app.get('/description/bundle.js', function (req, res) {
  res.sendfile('bundle.js', { root: __dirname + "./../description/public/" });
});

app.get('/api/description', (req, res) => {
  Desc.find((err, desc) => {
    res.send(desc);
  });
});

app.get('/api/description/:id', (req, res) => {
  Desc.find({ id: req.params.id }, (err, desc) => {
    res.send(desc);
  });
});

app.get('/api/pledges/:id', (req, res) => {
  let { id } = req.params;
  return getPledgeData(id)
    .then((response) => {
      if (response.length < 1) {
        res.status(404).send('id not found in database');
      } else {
        res.status(200).json(response);
      }
    })
    .catch((err) => {
      console.log('error inside GET /api/pledges/:id endpoint: ', err);
      res.status(500).send('there was an error: ', err);
    });
});

app.get('/api/photos', function(req, res) {
  api(res, 0);
});

app.get('/api/photos/:id', function (req, res) {
  api(res, req.params.id);
});


app.listen(port, () => console.log(`Description app listening at http://localhost:${port}`));