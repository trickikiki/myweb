<template>
    <div>
        <el-input placeholder="请输入部门名称" v-model= formname style="width:20%"></el-input>
        <el-button icon="el-icon-search" @click=handlesearch>查询</el-button>
        <div>
            <el-table       
            :data="staffs"
            v-loading="listLoading"
            element-loading-text="给我一点时间"
            :items="staffs"
            style="margin:25px 0">
                <el-table-column label="Id" prop="staffs.emp_no" sortable></el-table-column>
                <el-table-column label="Brithday" prop="staffs.birth_date" sortable></el-table-column>
                <el-table-column label="Firstname" prop="staffs.first_name" sortable></el-table-column>
                <el-table-column label="Lastname" prop="staffs.last_name" sortable></el-table-column>
                <el-table-column label="Gender" prop="staffs.gender" sortable></el-table-column>
                <el-table-column label="Hire_day" prop="staffs.hire_date" sortable></el-table-column>
            </el-table>
        </div>
    <el-pagination
        @size-change="handleSizeChange"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handlePageChange"
        :current-page="from"
        :page-size="offset"
        :total="total"
      >
    </el-pagination> 
    </div>
</template>
<script>
export default {
    name:'showstaff',
    data(){
        return{
            from:0,
            offset:10,
            formname:'',
            staffs:[],
            total:0,
            listLoading: false
        }
    },
    computed: {
      fromindex: function(){ return this.from*this.offset+1 }
    },
    methods:{
      handleSizeChange(val){
        this.offset=val
        this.handlesearch()
      },
      handlePageChange(val){
        this.from=val
        this.handlesearch()
      },
    handlesearch(){
            this.listLoading=true
            this.$axios.post('/selectall',{
            tablename:this.formname,
            position:this.fromindex,
            offset:this.offset,
          }).then((res)=>{
            this.staffs=res.data
            this.total=res.data.num
          }).catch((err)=>{
            console.log(err)
          })
          this.listLoading=false
        },
        
    }
    
}
</script>

