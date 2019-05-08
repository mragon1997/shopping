<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu class="el-menu-demo" mode="horizontal" router>
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about">商品列表</el-menu-item>
          <el-menu-item index="/cart">购物车</el-menu-item>
          <el-menu-item index="/order">订单</el-menu-item>
          <div class="nav-right">
            <router-link class="nav-login" to="/login" v-if="$store.state.loginRole == 0">登录</router-link>
            <el-dropdown v-if="$store.state.loginRole != 0" @command="handleCommand">
              <span class="el-dropdown-link">
                用户{{$store.state.userId}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="productadmin" v-if="$store.state.loginRole == 2">商品管理</el-dropdown-item>
                <el-dropdown-item command="actadmin" v-if="$store.state.loginRole == 2">活动管理</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-menu>
      </el-header>
      <el-main class="main-content">
        <router-view/>
      </el-main>
      <!-- 页脚 -->
      <div
        class="main-footer"
      >Copyright © 2004 - 2050 Shopping SHOPPING.COM 版权所有 津ICP证xxxxxx号天津市公安局静海分局备案编号xxxxxxxxxxxx</div>
      <!-- 页脚结束 -->
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    /**
     * 下拉菜单事件处理
     */
    handleCommand(command) {
      console.log("下拉菜单点击事件", command);
      switch (command) {
        case "logout":
          this.userLogout();
          break;
        case "productadmin":
          this.$router.push({ name: "productadmin"});
          break;
        case "actadmin":
          this.$router.push({ name: "actadmin"});
          break;
      }
    },
    /**
     * 用户退出登录
     */
    userLogout() {
      console.log("用户退出登录");
      this.$store.dispatch("logout");
      console.log(
        "用户登录状态",
        this.$store.state.loginRole,
        this.$store.state.userId
      );
      this.$router.push({ name: "home" });
      this.$message({
        message: "退出登录成功！",
        type: "success"
      });
    }
  }
};
</script>


<style>
html,
body {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
.el-container {
  height: 100%;
}
.el-header {
  padding: 0;
}
.el-menu.el-menu--horizontal {
  padding: 0 200px;
}
#app {
  height: 100%;
}
.nav-right {
  display: flex;
  float: right;
  height: 60px;
  justify-content: center;
  align-items: center;
}
.nav-login {
  cursor: pointer;
}
.main-content {
  margin-top: 80px;
  padding: 0 200px 0px 200px;
  overflow: visible;
}

.main-footer {
  width: 100%;
  height: 80px;
  margin-top: 50px;
  border-top: 1px solid #ddd;
  line-height: 80px;
  text-align: center;
  color: #aaa;
}
</style>
