var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var router=require(path.join(__dirname,'server/router'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'dist')));
app.use('/',router);

app.listen(8888,function () {
  console.log('server run on 127.0.0.1:8888');
})
