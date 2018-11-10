<template>
    <div>
      <el-menu class="el-menu-vertical-demo" :default-active=active :router=rt style="height: 730px;">
        <el-menu-item index="/">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">所有信息</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/find">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">查询员工信息</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/operate">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">表操作</span>
          </template>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    export default {
        name: "mymenu",
      data(){
          return {
            active:'/',
            rt:true
          }
      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
