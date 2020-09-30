<template>
  <!--                      @select="handleSelect"-->

  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#ffffff"
    text-color="#000000"
    menu-trigger="click"
    active-text-color="#8ebecc"
    :default-active="$router.path"
    :router="true"
  >
    <el-menu-item><span class="el-icon-cherry"></span></el-menu-item>
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="2">
      <template v-slot:title>学习</template>
      <el-menu-item index="">java</el-menu-item>
      <el-menu-item index="">python</el-menu-item>
      <el-menu-item index="">c++</el-menu-item>
      <el-submenu index="">
        <template v-slot:title>前端</template>
        <el-menu-item index="">html</el-menu-item>
        <el-menu-item index="">css</el-menu-item>
        <el-menu-item index="">javascript</el-menu-item>
        <el-menu-item index="">vue.js</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="/about">关于</el-menu-item>
    <el-menu-item>
      <el-row>
        <el-input style="width: 400px" placeholder="搜索">
          <el-button @click="handleSearch" icon="el-icon-search"></el-button>
        </el-input>
      </el-row>
    </el-menu-item>
    <el-menu-item index="/login">
    <el-button icon="el-icon-user"></el-button>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "Head",
  res: [],
  data() {
    return {};
  },
};
</script>

<style scoped>
.el-menu-demo {
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  padding: 8px;
  z-index: 5;
}
</style>
