const express = require('express');
const helpers = require('../database/helpers.js');

const app = express();

app.use('/:id/photo-viewer', express.static('public/', { 
  setHeaders: function(res) {
    res.set({
      'Access-Control-Allow-Origin': '*',
    });
  }
}));

app.get('/:id/photos/photo-viewer', (req, res) => {
  helpers.getEndpoints(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      helpers.getPhotos(data, (err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.set({
            'Access-Control-Allow-Origin': '*',
          });
          res.send(data);
        }
      });
    }
  });
});

app.listen(process.env.PORT);
