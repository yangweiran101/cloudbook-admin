<template>
  <div class="box">
    <div class="login-box">
      <div class="title">后台管理系统</div>
      <el-input v-model="username" placeholder="请输入用户名"></el-input>
      <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
      <el-button type="primary" @click="getLogin()" @keyup.enter="getLogin()">登录</el-button>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          username:'admin',
          password:'admin'
        }
      },
      methods:{
        getLogin () {
          this.axios.post('login',{
            username:this.username,
            password:this.password}).then(res => {
              console.log(res)
            if(res.code = 200) {
                this.$router.push('/layout')
            } else {
              this.$message(res.msg);
            }
          })
        }
      }
    }
</script>

<style lang="less" src="../../static/css/index.less">
/*@import '/static/css/index.less';*/
</style>
