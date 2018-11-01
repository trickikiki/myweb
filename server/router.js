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
    if(err)return;
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
  pool.getConnection(function (err,connection) {
    if(err)return;
    connection.query('drop table ??',[req.body.tablename],function (err,result) {
      if(err){
        console.log(err);
        res.send('删表失败');
      }else{
        console.log(result);
        res.send('删表成功');
      }
    })
    connection.release();
  })
})//删表传入表名{tablename:string}
router.post('/showtable',function (req,res) {
  let tablearr=[];
  pool.getConnection(function (err,connection) {
    if(err)return;
    connection.query('show tables',function (err,result) {
      if(err){
        res.send("无法获取表名信息");
        console.log(err)
      }else{
        for(let i of result){
          tablearr.push(i.Tables_in_employees);
        }
        res.send(tablearr);
      }
    })
    connection.release();
  })
})//获取表名
router.post('/getcols',function (req,res) {
  let colsarr=[];
  pool.getConnection(function (err,connection) {
    if(err)return;
    connection.query('desc ??',[req.body.tablename],function (err,result) {
      if(err)return
      for(let i of result){
        colsarr.push(i.Field);
      }
      res.send(colsarr);
    })
    connection.release();
  })
})//输入表名返回列名字符串数组{tablename:string}
router.post('/selectall',function (req,res) {
  let dataarr=[];
  pool.getConnection(function (err,connection) {
    if(err)return;
    connection.query('select * from ?? limit ?,?',[req.body.tablename,req.body.position,req.body.offset],function (err,result) {
      if(err)return;
      for(let i of result){
        dataarr.push(i);
      }
      res.send(dataarr);
    })
    connection.release();
  })
})//输入表名和起始select位置以及select个数返回对象数组{tablename:string,position:num,offset:num}

module.exports = router;
