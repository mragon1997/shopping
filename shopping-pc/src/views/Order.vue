<template>
  <div class="cart">
    <el-table :data="orderList" style="width: 100%">
      <el-table-column prop="detail.name" label="商品" align="center"></el-table-column>
      <el-table-column prop="productNum" label="数量" align="center"></el-table-column>
      <el-table-column prop="sumPrice" label="总价" align="center"></el-table-column>
      <el-table-column prop="address" label="地址" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: -1, // 当前登录用户的userId  为-1时表示用户未登录
      orderList: [] // 购物车列表
    };
  },
  mounted() {
    console.log("挂载Order组件");

    // 获取用户id
    this.getUserId();

    // 获取购物车列表
    this.getOrderList();
  },
  methods: {
    /**
     * 获取用户id
     */
    getUserId() {
      // 当前用户的登录
      let isLogin = this.$store.state.loginRole !== 0;
      let userId = this.$store.state.userId;
      console.log("当前用户是否登录：", isLogin);
      console.log("当前登录用户的userId：", userId);
      if (isLogin) {
        this.userId = userId;
      } else {
        this.$router.push({
          name: "login"
        });
        this.$message({
          message: "用户未登录，请登录后重试",
          type: "warning"
        });
      }
    },
    /**
     * 获取购物车列表
     */
    getOrderList() {
      console.log("获取订单列表");
      this.axios
        .get(`http://127.0.0.1:7001/api/userorder/${this.userId}`)
        .then(res => {
          console.log("获取订单列表返回参数", res);
          this.orderList = res.data.data;
        });
    }
  }
};
</script>

<style scoped>
.cart-bar {
  float: right;
  margin-top: 100px;
}
.total-price {
  height: 50px;
  line-height: 50px;
}
</style>
