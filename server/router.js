const express = require('express');
const app = express();


app.get('/test1', function (req, res, next) {
  console.log(132456798)
  res.send({a: '接口数据', b: 'hello world'})
})

module.exports = app; 