# studsys

##1.新建一个表
-API地址：/addtable
-请求方式post
-必要参数：tablename="新建的表名" rows=["字段名数组"] rowtype=["字段对应的数据类型数组"]
-请求返回值：
*请求成功:
>{
>   "status":200,
>   "data":'建表成功'
>}
*请求失败:
>{
>   "status":503,
>   "data":'建表失败'
>{
##2.删除一个表
-API地址：/droptable
-请求方式post
-必要参数：tablename="要删除的表名"
-请求返回值：
*请求成功:
>{
>   "status":200,
>   "data":'删表成功'
>}
*请求失败:
>{
>   "status":503,
>   "data":'删表失败'
>{
##3获取数据库中所有表名
-API地址：/showtable
-请求方式post
-必要参数：无 (发送｛｝即可)
-请求返回值：
*请求成功:
>{
>   "status":200,
>   "data":['employees','departments','titles','salaries','dept_manager','dept_emp']
>}
*请求失败:
>{
>   "status":503,
>   "data":'获取表名失败'
>{
##4返回字段名
-API地址：/getcols
-请求方式post
-必要参数：tablename="需要查询的表名"
-请求返回值：
*请求成功:
>{
>   "status":200,
>   "data":['emp_no','birth_date','first_name','last_name','gender','hire_date']
>}
*请求失败:
>{
>   "status":503,
>   "data":'无法获取字段名'
>{
##5获取指定表中所有数据（基于分页）
-API地址：/selectall
-请求方式post
-必要参数：tablename:表名,position:查询数据的起始编号,offset:返回查询数据的数量
-请求返回值：
*请求成功:
>{
>   "status":200,
>   "data":{
>             'emp_no':10001,
>             'birth_date':1953-09-01T16:00:00.000Z,
>             'first_name':'Georgi',
>             'last_name':Facello,
>             'gender':'M',
>             'hire_date':1986-06-25T16:00:00.000Z
>           }
>}
*请求失败:
>{
>   "status":503,
>   "data":'无法获取数据'
>{
##6获取表中数据总数数量
-API地址：/getcount
-请求方式post
-必要参数：tablename:表名
-请求返回值：
*请求成功:
>{
>   "status":200,
>   "data":'300024'
>}
*请求失败:
>{
>   "status":503,
>   "data":'无法获取数据'
>{
##6获取表中数据总数数量
-API地址：/getcount
-请求方式post
-必要参数：tablename:表名
-请求返回值：
*请求成功:
>{
>   "status":200,
>   "data":'300024'
>}
*请求失败:
>{
>   "status":503,
>   "data":'无法获取数据'
>{
