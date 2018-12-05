const express = require('express');
const mysql = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'mock_data_nsmain'
})

app.get('/test1', function (req, res, next) {
  console.log(132456798)
  res.send({a: '接口数据', b: 'hello world'})
})
app.get('/test2', function (req, res, next) {
  connection.query(`SELECT * FROM api_goodslist`, function (err, data) {
    if (err) {
      res.send({err, list: []})
    } else {
      res.send({list: data})
    }
  })
  // res.send({a:[1, 2, 3], code: 1})
})
module.exports = app;
