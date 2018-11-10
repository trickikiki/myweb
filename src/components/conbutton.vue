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

        }
      },
      methods:{
        fun(){
          this.axios.post('/checkempno',{
            emp_no:10100,
            position:0,
            offset:5
          }).then((res)=>{
            console.log(res.data)
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
