var express = require('express')
var mysql = require('mysql');
var path = require('path');
var dbconfig = require(path.join(__dirname,'dbconfig.js'));
var router = express.Router();
var pool = mysql.createPool(dbconfig)

router.get(/.*/,function (req,res,next) {
  console.log(req.path);
  next();
})
router.post('/addtable',function (req,res) {
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
    if(err)
    {
      res.status(503)
      res.send("建表失败")
      return;
    }
    connection.query(sql,function(err,result){
      if(err){
        res.status(503)
        console.log(err);
        res.send('建表失败');
      }else{
        console.log(result);
        res.status(200)
        res.send('建表成功');
      }
    })
    connection.release();
  })
});//建表传入表名，列名数组，数据类型数组{tablename:string,rows:[string],rowtype:[string]}
router.post('/droptable',function (req,res) {
  pool.getConnection(function (err,connection) {
    if(err)
    {
      res.status(503)
      res.send('删表失败')
      return;
    }
    connection.query('drop table ??',[req.body.tablename],function (err,result) {
      if(err){
        console.log(err);
        res.status(503)
        res.send('删表失败');
      }else{
        console.log(result);
        res.status(200)
        res.send('删表成功');
      }
    })
    connection.release();
  })
})//删表传入表名{tablename:string}
router.post('/showtable',function (req,res) {
  let tablearr=[];
  pool.getConnection(function (err,connection) {
    if(err){
      res.status(503)
      res.send('无法获取表名信息')
      return;
    }
    connection.query('show tables',function (err,result) {
      if(err){
        res.status(503)
        res.send("无法获取表名信息");
        console.log(err)
      }else{
        for(let i of result){
          tablearr.push(i.Tables_in_employees);
        }
        res.status(200)
        res.send(tablearr);
      }
    })
    connection.release();
  })
})//获取表名
router.post('/getcols',function (req,res) {
  let colsarr=[];
  pool.getConnection(function (err,connection) {
    if(err)
    {
      res.status(503)
      res.send('无法获取字段名');
      return
    }
    connection.query('desc ??',[req.body.tablename],function (err,result) {
      if(err)
      {
        res.status(503)
        res.send('无法获取字段名');
        return
      }
      for(let i of result){
        colsarr.push(i.Field);
      }
      res.status(200)
      res.send(colsarr);
    })
    connection.release();
  })
})//输入表名返回列名字符串数组{tablename:string}
router.post('/selectall',function (req,res) {
  let dataarr=[];
  pool.getConnection(function (err,connection) {
    if(err){
      res.status(503)
      res.send('无法取得数据')
      console.log(err)
      return;
    }
    connection.query('select * from ?? limit ?,?',[req.body.tablename,req.body.position,req.body.offset],function (err,result) {
      if(err){
        res.status(503)
        res.send('无法取得数据')
        console.log(err)
        return;
      }
      for(let i of result){
        dataarr.push(i);
      }
      res.status(200)
      res.send(dataarr);
    })
    connection.release();
  })
})//输入表名和起始select位置以及select个数返回对象数组{tablename:string,position:num,offset:num}
router.post('/getcount',function (req,res) {
  let dataarr=0;
  pool.getConnection(function (err,connection) {
    if(err){
      res.status(503)
      res.send('无法获取数据总数')
      return;
    }
    connection.query('select count(*) as num from ??',[req.body.tablename],function (err,result) {
      if(err){
        res.status(503)
        res.send('无法获取数据总数')
        return;
      }
      dataarr=result[0].num+'';
      res.status(200)
      res.send(dataarr);
    })
    connection.release();
  })
})
router.post('/insert',function (req,res) {
  let sql='insert into '
  sql=sql+req.body.tablename+'('
  let i=0;
  for(i;i<req.body.colname.length-1;i++)
  {
    sql=sql+req.body.colname[i]+','
  }
  sql=sql+req.body.colname[i]+') values ('
  i=0;
  for(i;i<req.body.coldata.length-1;i++)
  {
    sql=sql+req.body.coldata[i]+','
  }
  sql=sql+req.body.coldata[i]+')'
  pool.getConnection(function (err,connection) {
    if(err)
    {
      res.status(503);
      res.send('插入失败');
      return
    }
    connection.beginTransaction(function (err) {
      if(err)
      {
        res.status(503);
        res.send('插入失败');
        return
      }
      connection.query(sql,function (err,result) {
        if(err)
        {
          return connection.rollback(function () {
            console.log(err)
            res.send('插入失败')
          })
        }
        connection.commit(function (err) {
          if(err)
          {
            return connection.rollback(function () {
              res.send("过程出错已撤销操作")
            })
          }
          else
          {
            res.send('插入成功')
          }
        })
      })
    })
    connection.release()
  })
})//tablename colname[] coldata[]
router.post('/delete',function (req,res) {
  pool.getConnection(function (err,connection) {
    if(err)
    {
      res.send('无法连接数据库')
      return
    }
    connection.beginTransaction(function (err) {
      if(err)
      {
        res.send('操作失败')
        return;
      }
      connection.query('delete from '+req.body.tablename+' where emp_no='+req.body.emp_no,function (err,result) {
        if(err)
        {
          res.send('无法删除')
          return connection.rollback(function () {
            console.log(err)
          })
        }
        connection.commit(function (err) {
          if(err)
          {
            return connection.rollback(function () {
              res.send("过程出错已撤销操作")
            })
          }
          else
          {
            res.send('删除成功')
          }
        })
      })
    })
    connection.release()
  })
})//tablename emp_no
router.post('/checkempno',function (req,res) {
  let checkresult={
    table:[],
    num:0
  }
  let sql='select c.first_name,c.last_name,b.title,a.salary,a.from_date,a.to_date \n' +
    'from salaries a,titles b,employees c \n' +
    'where a.emp_no=b.emp_no \n' +
    'and c.emp_no=a.emp_no\n' +
    'and a.from_date>=b.from_date \n' +
    'and a.to_date<=b.to_date\n' +
    'and a.emp_no=?\n' +
    'order by a.from_date '
  pool.getConnection(function(err,connection){
    if(err)
    {
      res.send('连接数据库失败')
      return
    }
    connection.beginTransaction(function (err) {
      if(err){console.log(err)}
      connection.query(sql+'limit ?,?',[req.body.emp_no,req.body.position,req.body.offset],function (err,result) {
        if(err)
        {
          return connection.rollback(function () {
            console.log(err)
          })
        }
        checkresult.table=result

        connection.query('select count(*) as num from ('+sql+') a',[req.body.emp_no],function (err,result) {
          if(err)
          {
            return connection.rollback(function () {
              console.log(err)
            })
          }
          checkresult.num=result[0].num
          connection.commit(function (err) {
            if(err){
              return connection.rollback(function () {
                console.log(err)
              })
            }
            res.send(checkresult)
          })
        })
      })
    })
    connection.release()
  })
})//emp_no position offset
router.post('/salary',function (req,res) {
  pool.getConnection(function (err,connection) {
    if(err)
    {
      throw err;
      return;
    }
    connection.beginTransaction(function (err) {
      if(err){
        throw err;
        return;
      }
      connection.query('select from_date from salaries where emp_no=? and to_date=?',[req.body.emp_no,'9999-01-01'],function (err,result) {
        if(err)
        {
          return connection.rollback(function () {
            console.log(err)
          })
        }
        var todate=(result[0].from_date.getFullYear()+1)+'-'+result[0].from_date.getMonth()+'-'+result[0].from_date.getDate();
        connection.query('update salaries set to_date=? where to_date=? and emp_no=?',[todate,'9999-01-01',req.body.emp_no],function (err,result) {
          if(err)
          {
            return connection.rollback(function () {
              console.log(err)
            })
          }
          connection.query('insert into salaries (emp_no,salary,from_date,to_date) values (?,?,?,?)',[req.body.emp_no,req.body.salary,todate,'9999-01-01'],function (err,result) {
            if(err)
            {
              return connection.rollback(function () {
                console.log(err)
              })
            }
            connection.commit(function (err) {
              if(err)
              {
                return connection.rollback(function () {
                  console.log(err)
                })
              }else{
                res.send('工资更新完毕')
              }
            })
          })
        })
      })
    })
    connection.release();
  })
})
router.post('/add',function (req,res) {
  let sql='insert into ? ('
  let cols=[]
  pool.getConnection(function (err,connection) {
    if(err)
    {
      throw err;
      res.send("插入失败")
      return;
    }
    connection.beginTransaction(function (err) {
      if(err){throw err; return}
      connection.query('desc ?',[req.body.tablename],function (err,result) {
        if(err){
          res.send("插入失败")
          return connection.rollback(function () {
          console.log(err)
        })
        }
        let i=0
        for(i;i<result.length-1;i++)
        {
          sql=sql+result[i].Field+','
        }
        sql=sql+result[i].Field+')values('
        i=0
        for(i;i<req.body.values.length-1;i++)
        {
          sql=sql+req.body.values[i]+','
        }
        sql=sql+req.body.values[i]+')'
        connection.query(sql,function (err,result) {
          if(err){
            res.send("插入失败")
            return connection.rollback(function () {
              console.log(err)
            })
          }
          connection.commit(function (err) {
            if(err){
              res.send("插入失败")
              return connection.rollback(function () {
                console.log(err)
              })
            }
            res.send("插入成功")
          })
        })
      })
    })
    connection.release();
  })
})
module.exports = router;
