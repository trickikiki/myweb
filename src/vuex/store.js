import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const store =new vuex.Store({
  state:{
    TOKEN:'none',
    username:'',
    fetchdata:false
  },
  mutations:{
    setfetch(state,fetchdata)
    {
      state.fetchdata=fetchdata;
    },
    setTOKEN(state,token){
      state.TOKEN=token;
    },
    setUsername(state,name){
      state.username=name;
    }}

})
export default store
