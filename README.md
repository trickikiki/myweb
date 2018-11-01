# studsys
***
>每次git上去之前记得先pull一下 防止冲掉队友的修改。
>前端测试数据接口需要在studsys目录下node app打开后端服务。
>之后我会开一个版块写后端提供的接口路由和需要传入的参数。
>conbutton是我测试接口的按钮
***
- /addtable   :  新建一个表，传入表名，列名，列数据类型，返回成功。 post参数：{tablename:string,rows:[string],rowtype:[string]}
- /droptable  :  删除表，传入表名，返回成功   post参数：{tablename:string}
- /showtable  :  获取employees数据库中的所有表名  不需要传数据到后端  返回表名字符串数组   post参数：{}
- /getcols    :  传入表名，返回列名字符串数组 post参数：{tablename:string}
- /selectall  :  传入表名，select起始位置，select个数，返回对象数组</br>
（数据太多，需要做分页，确定每页展示个数后可以修改后端路由）post参数：{tablename:string,position:num,offset:num}





***
***
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
