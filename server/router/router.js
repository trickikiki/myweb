var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./../db/dbconfig');
var sql = require('./../db/sql');
var router = express.Router();
var pool = mysql.createPool(dbconfig.mysql)

router.post('/check',function (req,res,next) {
  pool.getConnection(function (err,connection) {
    connection.query(sql.select,function (err,rows) {
      if(err){
        throw err;
      }else{
        console.log(rows);
      }
    })
    connection.release();
  })
  )
});

module.exports = router;
