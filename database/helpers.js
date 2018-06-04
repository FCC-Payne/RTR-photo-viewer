const mysql = require('mysql');
const config = require('../config');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
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
  connection.query(`SELECT picOne, picTwo, picThree, picFour FROM photos WHERE id=${imageId};`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      let endpoints = [results[0].picOne, results[0].picTwo, results[0].picThree, results[0].picFour];
      callback(null, endpoints);
    }
  });
  connection.end();
};

exports.getPhotos = (endpoints, callback) => {
  let promises = endpoints.map((endpoint) => {
    if (endpoint !== null) {
      return new Promise((resolve, reject) => {
        s3.getObject({
          Bucket: 'fcc-payne-run-the-rentway',
          Key: endpoint
        }, (err, object) => {
          resolve(object);
          reject(err);
        });
      })
    }
  });
  Promise.all(promises).then(photos => callback(null, photos)).catch(err => callback(err, null));
};
