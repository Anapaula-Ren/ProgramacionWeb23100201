const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cafeteriadb',
});

// A simple SELECT query


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ver', (req, res) => {
  connection.query(
  'SELECT * FROM `inventario` WHERE `IdCategoriaInventario` = 1',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);
})

app.post('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
