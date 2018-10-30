var express = require('express');
var mysql = require('mysql');
var path = require('path');
var dbconfig = require(path.join(__dirname,'dbconfig.js'));
var sql = require(path.join(__dirname,'sql.js'));
var router = express.Router();
var pool = mysql.createPool(dbconfig)

router.get('/check',function (req,res,next) {
  pool.getConnection(function(err,connection){
    connection.query(sql.show_employees,[0,5],function(err,result){
      if(err)throw err;
      else console.log(result);
    })
    connection.release();
  })
});

module.exports = router;
