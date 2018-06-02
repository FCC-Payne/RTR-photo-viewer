const mysql = require('mysql');
const config = require('../config');

const connection = mysql.createConnection({
  user: 'nick',
  password: config.dbPassword,
  database: 'rtrPhotoViewer'
});

exports.getEndpoints = (imageId, callback) => {
  connection.query(`SELECT * FROM photos WHERE id=${imageId};`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};
