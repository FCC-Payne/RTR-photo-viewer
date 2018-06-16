const mysql = require('mysql');
const config = require('../config');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: 'us-west-1',
});

const connection = mysql.createConnection({
  host: process.env.RDS_HOSTNAME,
  port: process.env.RDS_PORT,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_DB_NAME,
});

exports.getEndpoints = (imageId, callback) => {
  connection.query(`SELECT picOne, picTwo, picThree, picFour FROM photos WHERE id=${imageId};`, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      const endpoints = [data[0].picOne, data[0].picTwo, data[0].picThree, data[0].picFour];
      callback(null, endpoints);
    }
  });
};

exports.getPhotos = (endpoints, callback) => {
  const promises = endpoints.map((endpoint) => {
    if (endpoint !== null) {
      return new Promise((resolve, reject) => {
        s3.getSignedUrl('getObject', {
          Bucket: 'fcc-payne-run-the-rentway',
          Key: endpoint,
        }, (err, data) => {
          resolve(data);
          reject(err);
        });
      });
    }
    return null;
  });
  Promise.all(promises).then(photos => callback(null, photos)).catch(err => callback(err, null));
};
