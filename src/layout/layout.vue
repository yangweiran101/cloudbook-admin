<template>
<div class="content clearfix">
  <div class="left">
    <h4>云宝典后台</h4>
    <el-col :span="12">
      <el-menu
        :router="true"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="/layout">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户管理</span>
          </template>
          <el-submenu index="1-1">
            <template slot="title">管理员</template>
            <el-menu-item index="/layout/user">管理员列表</el-menu-item>
            <el-menu-item index="/layout/adduser">添加管理员</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">分组二</template>
            <el-menu-item index="1-2-1">选项1</el-menu-item>
            <el-menu-item index="1-2-2">选项2</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航二</span>
          </template>
          <el-submenu index="2-1">
            <template slot="title">分组一</template>
            <el-menu-item index="1-1-1">选项1</el-menu-item>
            <el-menu-item index="1-1-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="2-2">
            <template slot="title">分组二</template>
            <el-menu-item index="2-2-1">选项1</el-menu-item>
            <el-menu-item index="2-2-2">选项2</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
  <div class="right">
    <div class="right-header">
      <div class="title">管理员列表</div>
    </div>
    <router-view/>
  </div>
</div>
</template>

<script>
    export default {
      methods:{
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      },
    }
</script>
<style>
  .el-col-12{
    width: 100%;
  }
  .el-menu{
    width: 100%;
  }
</style>
<style scoped lang="less" src="../../static/css/layout.less"></style>
