<template>
  <div class="login">
    <div class="login-window">
      <el-tabs type="border-card">
        <el-tab-pane label="登录">
          <el-form :label-position="labelPosition" label-width="90px" :model="loginForm">
            <el-form-item label="手机号：">
              <el-input v-model="loginForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册">
          <el-form :label-position="labelPosition" label-width="90px" :model="regForm">
            <el-form-item label="手机号：">
              <el-input v-model="regForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input v-model="regForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：">
              <el-input v-model="regForm.repassword"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">注册</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: "left",
      loginForm: {
        tel: "",
        password: ""
      },
      regForm: {
          tel: '',
          password: '',
          repassword: ''
      }
    };
  }
};
</script>

<style scoped>
.login {
  width: 100%;
}
.login-window {
  margin: 0 auto;
  width: 400px;
  height: 400px;
}
</style>
