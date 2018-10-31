var express = require('express')
var mysql = require('mysql');
var path = require('path');
var dbconfig = require(path.join(__dirname,'dbconfig.js'));
var sql = require(path.join(__dirname,'sql.js'));
var router = express.Router();
var pool = mysql.createPool(dbconfig)

router.post('/addtable',function (req,res,next) {
  let sql1='create table';
  let sql3= ')engine=InnoDB default charset=utf8';
      let sql = sql1+' '+req.body.tablename+'(';
      let i=0;
      for(i;i<req.body.rows.length-1;i++)
      {
        sql=sql+req.body.rows[i]+' '+req.body.rowtype[i]+','
      }
      sql=sql+req.body.rows[i]+' '+req.body.rowtype[i]+sql3;
  pool.getConnection(function(err,connection){
    connection.query(sql,function(err,result){
      if(err){
        console.log(err);
        res.send('建表失败');
      }else{
        console.log(result);
        res.send('建表成功');
      }
    })
    connection.release();
  })
});//建表传入表名，列名数组，数据类型数组{tablename:string,rows:[string],rowtype:[string]}
router.post('/droptable',function (req,res) {
  let sql='drop table ';
  sql+=req.body.tablename;
  pool.getConnection(function (err,connection) {
    connection.query(sql,function (err,result) {
      if(err){
        console.log(err);
        res.send('删表失败');
      }else{
        console.log(result);
        res.send('删表成功');
      }
    })
  })
})
module.exports = router;
