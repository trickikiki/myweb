<template>
  <div id="app">
    <el-container>
      <el-aside>
        <conbutton></conbutton>
      </el-aside>
      <el-main>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import sel from './components/select';
  import conbutton from './components/conbutton'
export default {
  name: 'App',
  components:{sel,conbutton},
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
