<template>
  <el-table :data="tableData" border :fit=ft>
    <el-table-column v-for="(col,index) in cols" :prop=col.prop :label=col.label :key=index></el-table-column>
  </el-table>
</template>

<script>
    export default {
      name: "checktable",
      data() {
        return {
          ft:true,
          cols:[
            {
            prop:'emp_no',
            label:'emp_no'
          },{
            prop:'birth_date',
            label:'birth_date'
          },{
            prop:'first_name',
            label:'first_name'
          },{
            prop:'last_name',
            label:'last_name'
          },{
            prop:'gender',
            label:'gender'
          },{
            prop:'hire_date',
            label:'hire_date'
          }
          ],
          tableData: [
            {
            emp_no:1,
            birth_date:1,
            first_name:1,
            last_name:1,
            gender:1,
            hire_date:1
          },{
            emp_no:2,
            birth_date:2,
            first_name:2,
            last_name:2,
            gender:2,
            hire_date:2
          }
          ]
        }
      },
      methods:{

      }

    }
</script>

<style scoped>

</style>
