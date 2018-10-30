<template>
  <div id="app">
    <el-container>
      <el-aside>
      </el-aside>
      <el-main>
        <sel></sel>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import sel from './components/select';
export default {
  name: 'App',
  components:{sel}
}
</script>

<style>

</style>
