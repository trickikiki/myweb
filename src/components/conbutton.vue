<template>
  <button @click='fun()'>post</button>
</template>

<script>
    export default {
      name: "conbutton",
      data(){
        return{

        }
      },
      methods:{
        fun(){
          this.axios.post('/droptable',{
            tablename:'names'
          }).then(function (res) {
            alert(res.data);
          }).catch(function (err) {
            alert(err);
          })
        }
      }
    }
</script>

<style scoped>

</style>
