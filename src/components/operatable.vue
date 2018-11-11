<template>
    <div>
      <el-row>
        <el-col :span="2">
          <el-tag type="info">新建表</el-tag>
        </el-col>
        <el-col :span="20">
          <el-input v-model="str" placeholder="示例：tablename[user,pwd]{varchar(30),int}" clearable></el-input>
        </el-col>
        <el-col :span="1" :offset="1">
          <el-button type="success" icon="el-icon-check" circle @click="handleinput"></el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="2">
          <el-tag type="danger">删除表</el-tag>
        </el-col>
        <el-col :span="20">
          <el-input clearable v-model="deltablename" placeholder="示例：tablename"></el-input>
        </el-col>
        <el-col :span="1" :offset="1">
          <el-button type="danger" icon="el-icon-delete" circle @click="del"></el-button>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "operatable",
      data(){
          return {
            str:'',
            tablename:'',
            field:[],
            fieldtype:[],
            deltablename:''
          }
      },
      methods:{
          handleinput:function () {
            var regex=/^\S*\[/g
            var regex2=/\[\S*\]/g
            var regex3=/\{\S*\}/g
            var c=regex.exec(this.str)[0]
            this.tablename=c.substring(0,c.length-1)
            var b=regex2.exec(this.str)[0]
            this.field=b.substring(1,b.length-1).split(',')
            var a=regex3.exec(this.str)[0]
            this.fieldtype=a.substring(1,a.length-1).split(',')
            console.log(this.field)
            this.axios.post('/addtable',{
              tablename:this.tablename,
              rows:this.field,
              rowtype:this.fieldtype
            }).then((res)=>{
              if(res.data=='建表成功'){
                this.$message({
                  message:'建表成功',
                  type:'success'
                })
              }else{
                this.$message.error('建表失败')
              }
            }).catch((err)=>{
              this.$message.error('发生未知错误')
              console.log(err)
            })
          },
        del:function () {
          this.axios.post('/droptable',{
            tablename:this.deltablename
          }).then((res)=>{
            if(res.data=='删表成功'){
              this.$message({
                message:'删表成功',
                type:'success'
              })
            }else{
              this.$message.error('删表失败')
            }
          }).catch((err)=>{
            this.$message.error('发生未知错误')
            console.log(err)
          })
        }
      }
    }
</script>

<style scoped>
.el-row{
  margin-bottom: 20px;
}
</style>
