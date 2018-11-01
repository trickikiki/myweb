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
          this.axios.post('/selectall',{
            tablename:'employees',
            position:30,
            offset:3
          }).then(function (res) {
            alert(res.data[0].birth_date);
            console.log(res.data);
          }).catch(function (err) {
            alert(err);
          })
        }
      }
    }
</script>

<style scoped>

</style>
