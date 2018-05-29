const mysql = require('mysql');
const key = require('../config/dev');

module.exports = app => {
  app.get('/api/data', (req, res) => {
    const connection = mysql.createConnection({
      host: "192.168.2.161",
      user: "username",
      password: "password",
      database: "peplinks"
    });

    connection.connect(error => {
      if (error) {
        console.log(error);
      }
      console.log('connected');
    });

    connection.query('SELECT * FROM products LIMIT 12', (error, rows, fields) => {
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
