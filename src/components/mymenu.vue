<template>
    <div>
      <el-menu class="el-menu-vertical-demo" :default-active=active :router=rt style="height: 900px;">
        <el-menu-item index="/helloworld">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/showall">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">所有信息</span>
          </template>
        </el-menu-item>
        <el-menu-item style="background-color:#D0D0D0;">
        <b>部门操作</b>
        </el-menu-item>
        <el-menu-item index="/showstaff">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">部门信息查询</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/operate">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">增删部门表</span>
          </template>
        </el-menu-item>
        <el-menu-item style="background-color:#D0D0D0;">
        <b>员工操作</b>
        </el-menu-item>

        <el-menu-item index="/find">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">查询员工信息</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/data">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">删改员工信息</span>
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
