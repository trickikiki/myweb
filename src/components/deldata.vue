<template>
    <div>
      <el-row>
        <el-col :span="3">
          <el-tag type="info">删除指定表中员工信息</el-tag>
        </el-col>
        <el-col :span="4">
          <el-select v-model="value" placeholder="请选择表格">
            <el-option v-for="item in items" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </el-col>
        <el-col :span="16">
          <el-input v-model="num" placeholder="输入要删除的员工编号"></el-input>
        </el-col>
        <el-col :span="1">
          <el-button type="danger" icon="el-icon-delete" circle @click="deldata"></el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <el-tag type="info">更新员工下一年的工资</el-tag>
        </el-col>
        <el-col :span="4">
          <el-input v-model="emp_no" placeholder="员工编号"></el-input>
        </el-col>
        <el-col :span="4">
          <el-input v-model="salary" placeholder="新一年的薪水"></el-input>
        </el-col>
        <el-col :span="1">
          <el-button type="primary" icon="el-icon-edit" circle @click="alter"></el-button>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "deldata",
      data(){
        return {
          items:[],
          value:'',
          num:null,
          salary:null,
          emp_no:null
        }
      },
      created:function () {
        this.axios.post('/showtable',{}).then((res)=>{
          this.items=res.data;
        }).catch((err)=>{
          console.log(err);
        })
      },
      watch:{
        value:function () {

        }
      },
      methods:{
        deldata(){
          this.axios.post('/delete',{
            tablename:this.value,
            emp_no:this.num
          }).then((res)=>{
            if(res.data=='删除成功'){
              this.$message({
                message:'删除成功',
                type:'success'
              })
            }else{
              this.$message.error('删除失败')
            }
          }).catch((err)=>{
            console.log(err)
            this.$message.error('发生未知错误')
          })
        },
        alter(){
          this.axios.post('/salary',{
            emp_no:this.emp_no,
            salary:this.salary
          }).then((res)=>{
            if(res.data=='工资更新完毕')
            {
              this.$message({
                message:'工资更新完毕',
                type:'success'
              })
            }
            else
            {
              this.$message.error('更新失败')
            }
          }).catch((err)=>{
            console.log(err)
            this.$message.error('发生未知错误')
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
