<template>
  <div>
    <button @click='fun()'>post</button>
    <button @click="show">show</button>
  </div>
</template>

<script>
    export default {
      name: "conbutton",
      data(){
        return{
          arrdata:[]
        }
      },
      methods:{
        fun(){
          this.axios.post('/showtable',{

          }).then((res)=>{
            this.arrdata=res.data;
          }).catch((err)=>{
            console.log(err);
          })
        },
        show(){
          alert(this.arrdata);
        }
      }
    }
</script>

<style scoped>

</style>
