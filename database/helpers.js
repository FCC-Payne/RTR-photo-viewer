const mysql = require('mysql');
const config = require('../config');
const AWS = require('aws-sdk');

const s3 = AWS.S3({
  accessKeyId: config.awsAccessKey,
  secretAccessKey: config.awsSecretKey,
  region: 'us-west-1'
});

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
      let endpoints = [results.picOne, results.picTwo, results.picThree, results.picFour]
      callback(null, endpoints);
    }
  });
};

exports.getPhotos = (endpoints, callback) => {
  let promises = endpoints.map((endpoint) => {
    if (endpoint !== null) {
      return new Promise((resolve, reject) => {
        s3.getObject({
          Bucket: 'fcc-payne-run-the-rentway',
          key: endpoint
        }, (err, object) => {
          if (err) {
            reject(err);
          } else {
            resolve(object);
          }
        });
      })
    }
  });
  Prmoise.all(promises).then(photos => callback(null, photos)).catch(err => callback(err, null));
};