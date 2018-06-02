const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection({
  user: 'nick',
  password: config.dbPassword,
  database: 'rtrPhotoViewer'
});

for (let i = 100; i < 200; i++) {
  connection.query(`INSERT INTO photos (id, picOne, picTwo, picThree, picFour) VALUES (${i}, '${i}-1.jpeg', '${i}-2.jpeg', '${i}-3.jpeg', '${i}-4.jpeg')`);
}
