<template>
  <div>
    <el-tabs v-model="editableTabsValue2" type="border-card"  :stretch=stretch>
      <el-tab-pane v-for='(item,index) in editableTabs2' :key=index :label=item :name=item>
        <checktable :tn="editableTabsValue2"></checktable>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import checktable from './checktable';
    export default {
      components:{checktable},
      name: "sel",
      data() {
        return {
          stretch:true,
          editableTabsValue2: 'current_dept_emp',
          editableTabs2: [],
          tableIndex:1
        }
      },
      created:function () {
        this.axios.post('/showtable',{}).then((res)=>{
          this.editableTabs2=res.data;
        }).catch((err)=>{
          console.log(err);
        })
      },
      methods: {

        }
    }
</script>

<style scoped>
</style>
