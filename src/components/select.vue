<template>
  <div>
    <div style="margin-bottom: 20px;">
      <el-button
        size="small"
        @click=addTab(editableTabsValue2)
      >
        add tab
      </el-button>
    </div>
    <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab" stretch="true">
      <el-tab-pane v-for='(item,index) in editableTabs2' :key=index :label=item.title :name=item.name>
        <checktable></checktable>
        <pagination></pagination>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
  import checktable from './checktable';
  import pagination from './Pagination';
    export default {
      components:{checktable,pagination},
      name: "sel",
      data() {
        return {
          editableTabsValue2: '6',
          editableTabs2: [{
            title: 'employees',
            name: 'employees',
            content: '插入表格'
          }, {
            title: 'departments',
            name: 'departments',
            content: '插入表格'
          },{
            title: 'dept_emp',
            name: 'dept_emp',
            content: '插入表格'
          },{
            title: 'dept_manager',
            name: 'dept_manager',
            content: '插入表格'
          },{
            title: 'salaries',
            name: 'salaries',
            content: '插入表格'
          },{
            title: 'titles',
            name: 'titles',
            content: '插入表格'
          }],
          tabIndex: 6
        }
      },
      methods: {
        addTab(targetName) {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs2.push({
            title: 'New Tab',//新表名
            name: newTabName,//标号 可与表名相同
            content: 'New Tab content'
          });
          this.editableTabsValue2 = newTabName;
        },
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
