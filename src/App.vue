<template>
  <div id="app">
    <el-container>
      <el-aside>
        <button @click='fun()'>post</button>
      </el-aside>
      <el-main>

      </el-main>
    </el-container>
  </div>
</template>

<script>
  import sel from './components/select';
export default {
  name: 'App',
  components:{sel},
  data(){
    return {

    }
  },
  methods:{
    fun(){
      alert('click');
      this.axios.post('/addtable',{
        tablename:'names',
        rows:['first','last'],
        rowtype:['varchar(30)','varchar(30)']
      }).then(function (res) {
        alert(res.data);
      }).catch(function (err) {
        alert(err);
      })
    }
  }
}
</script>

<style>

</style>
