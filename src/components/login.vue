<template>
<!--背景图-->
 
<div class = "note" :style = "note">
<!--login框，表单+tab标签页的组合-->
<div class = "loginFrame">
    <el-form  label-position = "left" label-width = "0px" class = "demo-ruleForm login-container">
    <div style="text-align: center;">
    <h2>员工管理系统</h2>
    <p>数据库系统项目小组</p>
    </div>

       <!--tab标签-->
    <!-- <el-tabs v-model = "activeName" @tab-click = "handleClick" class = "users">
        <el-tab-pane label = "学生" name = "students">学生</el-tab-pane>
        <el-tab-pane label = "教师" name = "teacher">老师</el-tab-pane>
        <el-tab-pane label = "教务老师" name = "eduTeacher">教务老师</el-tab-pane>
    </el-tabs> -->
 
<el-form-item prop = "username">
    <el-input type = "text"  auto-complete = "off" placeholder = "请输入您的账号" v-model="user"></el-input></el-form-item> 
<el-form-item prop = "password">
    <el-input type = "password"  auto-complete = "off" placeholder = "请输入密码"  v-model="pass" ></el-input></el-form-item>
<!-- <el-checkbox checked class = "remember">记住密码</el-checkbox> -->
  
<el-form-item style = "width:100%;">
    <el-button type = "primary" style = "width:100%;"  @click="login" >登录</el-button>
</el-form-item>
    </el-form>
    </div>
    </div>
 
</template>
 
<script>
export default {
    name: 'login',
    data() {
        return {
            logining : false,
            note: {
                position:"absolute",
                top:"0px",
                left:"0px",
                width: "100%",
                height:"100%",
                backgroundImage: "url(" + require("../../assets/650.jpg") + ")",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
            },
            user:'',
            pass:'',
            checked: false
           
        };
        
    },
    created() {
        localStorage.login='none'
    },
    methods:{
      login(){
          this.axios.post('/login',{
              username:this.user,
              password:this.pass
          }).then((res) => {
              if(res.data.token=='none')
              {
                  this.user='';
                  this.pass='';
                  this.$message.error('账号密码错误');
                  localStorage.login='none'
              }
              else if(res.data.token=='admin')
              {
                  this.$store.commit('setTOKEN',res.data.token);
                  this.$store.commit('setUsername','admin');
                  localStorage.login='admin';
                  localStorage.username='admin';
                  this.$router.push({path:'/helloworld'})
              }
          }).catch((err) => {
              this.$message.error('发生未知错误');
          });
          if(this.user === 'admin' && this.pass === 'admin')
          {
          this.$router.push({path:'/helloworld'})
          }
          else{
              alert('请输入正确的用户名和密码！')
          }
      }

    }
    

}
</script>
 
<style>
h2{
    color: #003366;
}
p{
    color: #686868;
}
 
.login-container {
    box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff
    ;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
   
}</style>
