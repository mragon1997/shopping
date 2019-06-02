<template>
  <div class="login">
    <div class="login-window">
      <el-tabs type="border-card">
        <el-tab-pane label="登录">
          <!-- 增加rules ref status-icon是显示状态图标 -->
          <el-form :label-position="labelPosition" label-width="90px" :model="loginForm"
          :rules="rules" ref="loginForm" status-icon>
            
            <!-- change -->
            <el-form-item label="手机号" prop="tel">
              <el-input v-model.number="loginForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <!-- change end -->
            
            <el-form-item>
              <el-button type="primary" @click="login('loginForm')">登录</el-button>
              <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册">
          <!-- 增加rules ref status-icon是显示状态图标 -->
          <el-form :label-position="labelPosition" label-width="90px" :model="regForm"
          :rules="rules" ref="regForm" status-icon>
            
            <!-- change -->
            <el-form-item label="手机号" prop="tel">
              <el-input v-model.number="regForm.tel"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="regForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="repassword">
              <el-input type="password" v-model="regForm.repassword" autocomplete="off"></el-input>
            </el-form-item>
            <!-- change end -->
            
            <el-form-item>
              <el-button type="primary" @click="register('regForm')">注册</el-button>
              <el-button @click="resetForm('regForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>

import collect from '../util/collect.js'

export default {
  data() {

//change
    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('电话不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
              callback();
          }
        });
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.regForm.password !== '') {
            this.$refs.regForm.validateField('repassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.regForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    //change end

    return {

      //change
        rules: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          repassword: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          tel: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        //change end

      labelPosition: "left",
      loginForm: {
        tel: "",
        password: ""
      },
      regForm: {
        tel: "",
        password: "",
        repassword: ""
      }
    };
  },
  methods: {
    login(formName) {
      console.log("用户登录", this.loginForm);
      console.log("用户登录状态", this.$store.state.loginRole)
      this.axios
        .post(`http://127.0.0.1:7001/api/login`, this.loginForm)
        .then(res => {
          console.log("用户登录返回参数", res);
          if (res && res.data && res.data.code === 0 && res.data.data && res.data.data[0] && res.data.data[0].id) {
            this.$store.dispatch('userLogin', {userId: res.data.data[0].id, roleId: res.data.data[0].roleId})
            console.log("用户登录状态", this.$store.state.loginRole, this.$store.state.userId)
            this.$router.push({ name: "home" });
            this.$message({
              message: "登录成功！",
              type: "success"
            });

            console.log('啥快递件', collect)
            collect({actionId: 1})
          } else {
            this.$message({
              message: res.data.message,
              type: "warning"
            });
          }
        });

        //change 重置
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('账号密码不匹配')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        //change end
    },
    register(formName) {
      
      console.log("用户注册", this.regForm);

      //change
      this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('输入信息正确')

            //输入正确后输入框清空
            this.$refs[formName].resetFields();
          } else {
            console.log('error submit!!');
            
            return false;
          }
        });
        //change end

      //增加接收tel
      let { tel,password, repassword } = this.regForm;

      //change
      if(tel=='' || password == "" || repassword == ""){
            return;
          } 
      //change end

      if (password !== repassword) {
        this.$message({
          message: "两次输入的密码不一致",
          type: "warning"
        });
        return;
      }
      this.axios
        .post(`http://127.0.0.1:7001/api/user`, this.regForm)
        .then(res => {
          console.log("用户注册返回参数", res);
          if (res.data.code === 0) {
            this.$message({
              message: "注册成功！",
              type: "success"
            });
          }
          else {
            this.$message({
              message: res.data.message,
              type: "warning"
            });
          }
        });
    },
    
    //change 重置
   resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    //change end
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
