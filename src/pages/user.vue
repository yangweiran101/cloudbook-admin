<template>
  <div class="box">
    <div class="user-list">
      <el-table :data="tableData" border
                style="width: 600px;margin: 0 auto;height: 100%;"
                stripe>
        <el-table-column prop="username" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="createdTime" label="创建日期">
        </el-table-column>
        <el-table-column label="头像" width="100">
          <template slot-scope="scope">
            <div class="img">
              <img :src="scope.row.avatar" alt="">
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleClick(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pages">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="4"
          layout="total, prev, pager, next, jumper"
          :total="count">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [],
          pn:1,
          count:1
        }
      },
      methods:{
        handleCurrentChange(val) {
          this.pn = val;
          this.getUser()
        },
        getUser(){
          this.axios.get('user',{pn:this.pn,size:4}).then(res => {
            console.log(res)
            this.count = res.count
            this.tableData = res.data
          })
        },
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          this.axios.post('userdelete',{userIds:[row._id]}).then(res => {
            console.log(res)
            if (res.code = 200) {
              this.$message(res.msg)
              this.count = this.count - 1
              this.getUser()
            }
          })
        }
      },
      created () {
        this.getUser()
      }
    }
</script>

<style scoped lang="less" src="../../static/css/user.less">

</style>
