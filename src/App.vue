<template>
  <div id="app">
    <el-container>
      <el-aside>
        <mymenu></mymenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import sel from './components/select';
  import conbutton from './components/conbutton'
  import mymenu from './components/mymenu'
  import find from './components/find'
  import helloworld from './components/helloworld'
  import login from './components/login'

export default {
  name: 'App',
  components:{login,sel,conbutton,mymenu,find}
}
</script>

<style>

</style>
