<template>
  <el-container>
    <el-row type="flex" justify="center" style="position: fixed;top: 30px;">
      <el-col :span="24">
        <el-container>
          <el-aside style="width:200px;">
            <el-menu
              class="sideMenu"
              router
              collapse-transition
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item index="/admin/index">首页</el-menu-item>
              <el-menu-item index="/admin/blog">文章管理</el-menu-item>
              <el-menu-item index="/admin/create">文章发布</el-menu-item>
              <el-menu-item index="/admin/log">日志管理</el-menu-item>
              <el-menu-item index="/admin/tag">标签管理</el-menu-item>
            </el-menu>
          </el-aside>
          <el-main style="height: 670px;border: black solid 1px;width: 1300px">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {
  name: "Admin",
  props: {
    tableData: Array,
  },
};
</script>

<style scoped>
.sideMenu {
  height: 670px;
}
</style>
