<template>
  <div>
    <el-tabs v-model="editableTabsValue2" type="border-card" @tab-remove="removeTab" :stretch=stretch>
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
          tabIndex: 1
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
        removeTab(targetName) {
          let tabs = this.editableTabs2;
          let activeName = this.editableTabsValue2;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          this.editableTabsValue2 = activeName;
          this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
</script>

<style scoped>
</style>
