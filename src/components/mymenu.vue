<template>
    <div>
      <el-menu class="el-menu-vertical-demo" :default-active=active :router=rt>
        <el-menu-item index="/table">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">所有信息</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/find">
          <template>
            <i class="el-icon-menu"></i>
            <span slot="title">按条件查询</span>
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
            active:'/table',
            rt:true
          }
      }
    }
</script>

<style scoped>

</style>
