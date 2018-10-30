<template>
  <div>
    <el-pagination
    :total=total
    background
    @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "pagination",
        data(){
          return{
            total:300000,
            nowpage:1
          }
        },
        methods:{
          handleCurrentChange(val){
            this.nowpage=val;
          }
        }
    }
</script>

<style scoped>

</style>
