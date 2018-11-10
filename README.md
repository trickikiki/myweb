# studsys<br>

## 1.新建一个表<br>
- API地址：/addtable <br>
- 请求方式post<br>
- 必要参数：tablename="新建的表名" rows=["字段名数组"] rowtype=["字段对应的数据类型数组"]<br>
- 请求返回值：<br>
- 请求成功:<br>

>{<br>
>   "status":200,<br>
>   "data":'建表成功'<br>
>}<br>

- 请求失败:<br>

>{<br>
>   "status":503,<br>
>   "data":'建表失败'<br>
>{<br>

## 2.删除一个表<br>
- API地址：/droptable<br>
- 请求方式post<br>
- 必要参数：tablename="要删除的表名"<br>
- 请求返回值：<br>
* 请求成功:<br>

>{<br>
>   "status":200,<br>
>   "data":'删表成功'<br>
>}<br>

* 请求失败:<br>

>{<br>
>   "status":503,<br>
>   "data":'删表失败'<br>
>{<br>

## 3获取数据库中所有表名<br>
- API地址：/showtable<br>
- 请求方式post<br>
- 必要参数：无 (发送｛｝即可)<br>
- 请求返回值：<br>
* 请求成功:<br>

>{<br>
>   "status":200,<br>
>   "data":['employees','departments','titles','salaries','dept_manager','dept_emp']<br>
>}<br>

* 请求失败:<br>

>{<br>
>   "status":503,<br>
>   "data":'获取表名失败'<br>
>{<br>

## 4返回字段名<br>
- API地址：/getcols<br>
- 请求方式post<br>
- 必要参数：tablename="需要查询的表名"<br>
- 请求返回值：<br>
* 请求成功:<br>

>{<br>
>   "status":200,<br>
>   "data":['emp_no','birth_date','first_name','last_name','gender','hire_date']<br>
>}<br>

* 请求失败:<br>

>{<br>
>   "status":503,<br>
>   "data":'无法获取字段名'<br>
>{<br>

## 5获取指定表中所有数据（基于分页）<br>
- API地址：/selectall<br>
- 请求方式post<br>
- 必要参数：tablename:表名,position:查询数据的起始编号,offset:返回查询数据的数量<br>
- 请求返回值：<br>
* 请求成功:<br>

>{<br>
>   "status":200,<br>
>   "data":{<br>
>             'emp_no':10001,</br>
>             'birth_date':1953-09-01T16:00:00.000Z,<br>
>             'first_name':'Georgi',<br>
>             'last_name':Facello,<br>
>             'gender':'M',<br>
>             'hire_date':1986-06-25T16:00:00.000Z<br>
>           }<br>
>}<br>

* 请求失败:<br>

>{<br>
>   "status":503,<br>
>   "data":'无法获取数据'<br>
>{<br>

## 6获取表中数据总数数量<br>
- API地址：/getcount<br>
- 请求方式post<br>
- 必要参数：tablename:表名<br>
- 请求返回值：<br>
* 请求成功:<br>

>{<br>
>   "status":200,<br>
>   "data":'300024'<br>
>}<br>

* 请求失败:<br>

>{<br>
>   "status":503,<br>
>   "data":'无法获取数据'<br>
>{<br>

## 6获取表中数据总数数量<br>
- API地址：/getcount<br>
- 请求方式post<br>
- 必要参数：tablename:表名<br>
- 请求返回值：<br>
* 请求成功:<br>

>{<br>
>   "status":200,<br>
>   "data":'300024'<br>
>}<br>

* 请求失败:<br>

>{<br>
>   "status":503,<br>
>   "data":'无法获取数据'<br>
>{<br>

## 7向指定表中插入数据<br>
- API地址：/insert<br>
- 请求方式post<br>
- 必要参数：tablename:表名 colname:字段名数组 coldata:要插入的数据数组<br>
- 请求返回值：<br>
* 请求成功:<br>

>{<br>
>   "status":200,<br>
>   "data":'插入成功'<br>
>}<br>

* 请求失败:<br>

>{<br>
>   "status":503,<br>
>   "data":'插入失败'<br>
>{<br>

## 8删除指定表中指定员工编号的数据<br>
- API地址：/delete<br>
- 请求方式post<br>
- 必要参数：tablename:表名 emp_no:员工编号<br>
- 请求返回值：<br>
* 请求成功:<br>

>{<br>
>   "status":200,<br>
>   "data":'删除成功'<br>
>}<br>

* 请求失败:<br>

>{<br>
>   "status":503,<br>
>   "data":'无法删除'<br>
>{<br>

## 9查询指定员工信息<br>
- API地址：/checkempno<br>
- 请求方式post<br>
- 必要参数：emp_no:员工编号 position:分页开始位置 offset:每页数据数量<br>
- 请求返回值：<br>
* 请求成功:<br>

>{<br>
>   "status":200,<br>
>   "data":{<br>
>            table:[{<br>
>             'first_name':'xxx',<br>
>              'last_name':'xxx',<br>
>              'title':'xxx',<br>
>              'salary':'xxx',<br>
>              'from_date': date,<br>
>              'to_date':date<br>
>            }],<br>
>             num:14<br>
>           }<br>
>}<br>

* 请求失败:<br>

>{<br>
>   "status":503,<br>
>   "data":'无法删除'<br>
>{<br>
