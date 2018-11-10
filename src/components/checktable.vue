<template>
  <div>
    <el-table :data="tableData" border :fit=ft>
      <el-table-column v-for="(col,index) in cols" :prop=col :label=col :key=index></el-table-column>
    </el-table>
    <el-pagination
      :total=total
      background
      @current-change="handleCurrentChange"
      @prev-click="handleCurrentChange"
      @next-click="handleCurrentChange"
      :page-size=pageSize
    >
    </el-pagination>
  </div>
</template>

<script>
    export default {
      name: "checktable",
      props:['tn'],
      data() {
        return {
          ft:true,
          cols:[],
          tableData: [],
          page:0,
          total:0,
          pageSize:10
        }
      },
      // mounted:function () {
      //   this.axios.post('/getcols',{
      //     tablename:this.tn
      //   }).then((res)=>{
      //     this.cols=res.data;
      //   }).catch((err)=>{
      //     console.log(err);
      //   })
      //   this.axios.post('/selectall',{
      //     tablename:this.tn,
      //     position:0,
      //     offset:5
      //   }).then((res)=>{
      //     this.tableData=res.data;
      //   }).catch((err)=>{
      //     console.log(err);
      //   })
      //   this.getcount()
      // },
      watch:{
        tn:function () {
          this.axios.post('/getcols',{
            tablename:this.tn
          }).then((res)=>{
            this.cols=res.data;
          }).catch((err)=>{
            console.log(err);
          })
          this.axios.post('/selectall',{
            tablename:this.tn,
            position:0,
            offset:this.pageSize
          }).then((res)=>{
            this.tableData=res.data;
          }).catch((err)=>{
            console.log(err);
          })
          this.getcount()
        }
      },
      methods:{
        handleCurrentChange(val){
          this.axios.post('/selectall',{
            tablename:this.tn,
            position:(val-1)*this.pageSize,
            offset:this.pageSize
          }).then((res)=>{
            this.tableData=res.data;
            console.log('a');
          }).catch((err)=>{
            console.log(err);
          })
        },
        getcount(){
          this.axios.post('/getcount',{
            tablename:this.tn
          }).then((res)=>{
            this.total=parseInt(res.data);
            console.log(res.data);
          }).catch((err)=>{
            console.log(err);
          })
        }
      }

    }
</script>

<style scoped>

</style>
