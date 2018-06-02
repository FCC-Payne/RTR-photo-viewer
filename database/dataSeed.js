const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection({
  user: 'nick',
  password: config.dbPassword,
  database: 'rtr'
});

for (let i = 100; i < 200; i++) {
  connection.query(`INSERT INTO photos (id, picOne, picTwo, picThree, picFour) VALUES (${i}, '${i}-1', '${i}-2', '${i}-3', '${i}-4')`);
}
