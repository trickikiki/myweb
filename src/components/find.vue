<template>
  <div>
    <el-row>
      <el-col :span="20"><el-input type="number" placeholder="请输入员工编号" v-model= emp_no clearable></el-input></el-col>
      <el-col :span="2" :offset="2"><el-button icon= "el-icon-search" circle @click= check></el-button></el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-table :data="tableData" border :fit=ft>
                <el-table-column label="Firstname" prop="first_name" sortable></el-table-column>
                <el-table-column label="Lastname" prop="last_name" sortable></el-table-column>
                <el-table-column label="Title" prop="title" sortable></el-table-column>
                <el-table-column label="Salary" prop="salary" sortable></el-table-column>
                <el-table-column label="From_Date" sortable>
                <template slot-scope="props">
                {{props.row.from_date | datefrm }}
                </template>
                </el-table-column>
                <el-table-column label="To_Date" sortable>
                  <template slot-scope="props">
                    {{props.row.to_date | datefrm }}
                  </template>
                </el-table-column>
          <!-- <el-table-column v-for='(col,index) in Cols' :prop=col :label=col :key=index></el-table-column> -->
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
    <el-pagination
        @size-change="handleSizeChange"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handlePageChange"
        :current-page="from"
        :page-size="pageSize"
        :total="total"
      >
    </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import moment from 'Moment'
    export default {
        name: "find",
      data(){
          return{
            emp_no:null,
            // Cols: ['first_name','last_name','title','salary','from_date','to_date'],
            tableData:[],
            ft:true,
            pageSize:10,
            total:0,
            from: 1
          }
      },
      computed: {
      fromindex: function(){ return (this.from-1)*this.pageSize }
      },
      filters: {
        datefrm: function(el) {
          return moment(el).format('YYYY-MM-DD HH:mm:ss')
        }
      },
      methods:{
        handleSizeChange(val){
          this.pageSize=val
          this.check()
        },
        handlePageChange(val){
          this.from=val
          this.check()
        },
        check:function(){
          this.axios.post('/checkempno',{
            emp_no:this.emp_no,
            position:this.fromindex,
            offset:this.pageSize
          }).then((res)=>{
            this.tableData=res.data.table
            this.total=res.data.num
          }).catch((err)=>{
            console.log(err)
          })
        },
        // handleCurrentChange:function (val) {
        //   this.axios.post('/checkempno',{
        //     emp_no:this.emp_no,
        //     position:(val-1)*this.pageSize,
        //     offset:this.pageSize
        //   }).then((res)=>{
        //     this.tableData=res.data.table
        //     this.total=res.data.num
        //   }).catch((err)=>{
        //     console.log(err)
        //   })
        // }
      }
    }
</script>

<style scoped>

</style>
