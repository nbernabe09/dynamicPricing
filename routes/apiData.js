require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

connection.connect(error => {
  if (error) {
    console.log(error);
  }
  console.log('connected');
});

module.exports = app => {
  app.get('/api/data', (req, res) => {

    connection.query('SELECT * FROM products WHERE `discontinued_note` = "FALSE" LIMIT 12;', (error, rows, fields) => {
      if (error) {
        throw error;
      } else {
        res.json(rows);
      }
    });
  });

  
  app.get('/test', (req, res) => {
    res.send('<h1>TEST</h1>')
  });
}
