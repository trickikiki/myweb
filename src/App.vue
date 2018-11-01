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
export default {
  name: 'App',
  components:{sel,conbutton,mymenu},
  data(){
    return {

    }
  },
  methods:{

  }
}
</script>

<style>

</style>
