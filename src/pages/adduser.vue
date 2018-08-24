<template>
    <div class="box">
      <div class="add-box">
        <el-form label-position="left" label-width="80px" :model="form">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="form.nickname"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.pwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="form.againpwd"></el-input>
          </el-form-item>
          <el-form-item label="个性签名">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
</template>

<script>
    export default {
       data () {
         return {
           form: {
             username: '',
             nickname: '',
             desc:'',
             pwd:'',
             againpwd:''
           }
         }
       },
      methods:{
        onSubmit() {
          if (this.pwd = this.againpwd){

          }
        }
      }
    }
</script>

<style scoped lang="less" src="../../static/css/adduser.less">

</style>
