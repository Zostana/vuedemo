<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-form
        :rules="rules"
        class="login-container"
        label-position="left"
        label-width="0px"
        v-loading="loading"
      >
        <h3 class="login_title">系统登录</h3>
        <el-form-item prop="account">
          <el-input type="text" v-model="loginForm.username" placeholder="账号" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="密码"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-checkbox class="login_remeber" v-model="checked" label-position="left">记住密码</el-checkbox>
        <el-form-item style="width: 100%">
          <el-button type="primary" style="width: 100%" @click="submitClick">登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      rules: {
        account: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        checkPass: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      checked: true,
      loginForm: {
        username: "",
        password: ""
      },
      loading: false
    };
  },
  methods: {
    submitClick: function() {
      this.axios
        .post("/login", {
          username: this.loginForm.username,
          password: this.loginForm.password
        })
        .then(function(response) {
          if (response && response.status == 200) {
            var path = this.$route.query.redirect;
            this.$router
              .replace({path: path == '/' || path == undefined ? '/home' : path});
          }
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  float: right;
  margin-right: 10%;
  margin-top: 10%;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
.login_remember {
  margin: 0px 0px 35px 0px;
  text-align: left;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
html,
body,
#app,
.el-container {
  /*设置内部填充为0，几个布局元素之间没有间距*/
  padding: 0px;
  /*外部间距也是如此设置*/
  margin: 0px;
  /*统一设置高度为100%*/
  height: 100%;
}
</style>