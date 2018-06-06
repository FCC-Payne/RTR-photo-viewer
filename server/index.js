const express = require('express');
const helpers = require('../database/helpers.js');

const app = express();

app.use(express.static(__dirname + '/../public'));

app.get('/*', (req, res) => {
  helpers.getEndpoints(req.path.slice(1), (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      helpers.getPhotos(data, (err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.send(data);
        }
      });
    }
  });
});

app.listen(3001);
