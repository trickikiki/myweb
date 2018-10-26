var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var router=require(path.join(__dirname,'server/router'));

app.use(express.static(path.join(__dirname, 'static')));
app.use('/',router);


app.listen(8888,function () {
  console.log('server run on 127.0.0.1:8888');
})
