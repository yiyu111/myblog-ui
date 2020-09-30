<template>
  <el-main>
    <el-row justify="center" type="flex">
      <el-col>
        <el-form
          class="loginForm"
          :model="loginForm"
          ref="loginForm"
          :rules="rules"
        >
          <el-form-item>
            <h1>后台登录</h1>
          </el-form-item>
          <el-form-item label="用户名" prop="name">
            <el-input
              v-model="loginForm.name"
              placeholder="名称"
              clearable
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              clearable
              placeholder="密码"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login('loginForm')"
              >登录</el-button
            >
            <el-button>清除</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { login } from "../api/login";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 15, message: "请输入4到15个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "请输入6到15个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    login: function(loginForm) {
      const _this = this;
      this.$refs[loginForm].validate(vaild => {
        if (vaild) {
          console.log(_this.loginForm.name);
          login(this.loginForm).then(req => {
            if (req.code === 200) {
              _this.$message({
                type: "success",
                message: "登录成功",
                offset: 50,
                showClose: true
              });
              _this.$store.commit("SET_USERINFO", req.data);
              console.log(_this.$store.state);
              _this.$router.replace("/admin/index");
            }
          });
        } else {
          _this.$message({ type: "warning", message: "请正确输入" });
        }
      });
    }
  }
};
</script>

<style scoped>
.loginForm {
  width: 370px;
  margin: 60px auto 20px;
  top: 100px;
  position: static;
  border-radius: 15px;
  box-shadow: 0 0 10px;
  padding: 20px 50px;
  background: white;
}
</style>
