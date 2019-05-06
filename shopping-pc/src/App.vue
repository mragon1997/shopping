<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          router
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/about">商品列表</el-menu-item>
          <el-menu-item index="/cart">购物车</el-menu-item>
          <el-menu-item index="/order">订单</el-menu-item>
          <el-menu-item index="/login">登录</el-menu-item>
        </el-menu>
      </el-header>
      <el-main class="main-content">
        <router-view/>
      </el-main>
         <!-- 页脚 -->
    <div class="main-footer">
      Copyright © 2004 - 2050 Shopping SHOPPING.COM 版权所有 津ICP证xxxxxx号天津市公安局静海分局备案编号xxxxxxxxxxxx
    </div>
    <!-- 页脚结束 -->
    </el-container>
  </div>
</template>

<style>
html,body{
  height: 100%;
}
*{
  margin: 0;
  padding: 0;
}
.el-container{
  height: 100%;
}
.el-header{
  padding: 0;
}
.el-menu.el-menu--horizontal {
  padding: 0 200px;
}
#app{
  height: 100%;
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
