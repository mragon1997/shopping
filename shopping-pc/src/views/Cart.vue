<template>
  <div class="cart">
    <el-table :data="cartList" style="width: 100%">
      <el-table-column prop="detail.name" label="商品" align="center"></el-table-column>
      <el-table-column prop="productNum" label="数量" align="center">

        <!-- change 按钮改变购物车的数量 同时改变总价格 -->
        <template slot-scope="scope">
          <el-input-number v-model="scope.row.productNum" @change="handleChange(scope.row.id,scope.row.productNum)" :min="1" label="描述文字"></el-input-number>
        </template>
        <!-- change end -->

      </el-table-column>
      <el-table-column prop="sumPrice" label="总价" align="center"></el-table-column>
      
      <!-- change -->
      <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleDelete(scope.row.id)" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
      <!-- change end-->

    </el-table>
    <div class="cart-bar">
      <div class="total-price">合计：{{totalPrice}}</div>
      <div class="cart-pay">
        <el-button type="success" @click="settlementCart">立即结算</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: -1, // 当前登录用户的userId  为-1时表示用户未登录
      cartList: [], // 购物车列表
    };
  },
  mounted() {
    console.log("挂载Cart组件");

    // 获取用户id
    this.getUserId();

    // 获取购物车列表
    this.getCartList();
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
    getCartList() {
      console.log("获取购物车列表");
      this.axios
        .get(`http://127.0.0.1:7001/api/usercart/${this.userId}`)
        .then(res => {
          console.log("获取购物车列表返回参数", res);
          //change
            res.data.data.forEach(item => {
              console.log('购物车商品的数量：'+item.productNum)
            })

          this.cartList = res.data.data;
        });
    },
    /**
     * 结算购物车
     */
    settlementCart() {
      console.log('结算购物车')
      this.$prompt("请输入订单地址", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(({ value }) => {
        this.getUserId();
        let  userId = this.userId || this.$store.state.userId
        let param = {
          address: value
        };
        console.log("结算购物车入参：", param);
        this.axios.post(`http://127.0.0.1:7001/api/settlement/${userId}`, param).then(res => {
          console.log("结算购物车返回参数", res);
          if (res.data.code === 0) {
            this.$message({
              message: "下单成功",
              type: "success"
            });
            this.getCartList()
          } else {
            this.$message({
              message: res.data.message,
              type: "warning"
            });
          }
        });
      });
    },

    // change
    handleDelete(actProductId) {
      this.axios.delete(`http://127.0.0.1:7001/api/cart/${actProductId}`).then(res => {
                console.log("删除活动商品返回参数", res);
        if (res && res.data && res.data.code === 0) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          //重新绘制购物车列表
          this.getCartList();
        } else {
          this.$message({
            message: res.data.message || "网络繁忙",
            type: "warnning"
          });
        }
      });
    },
    //当中间的数发生改变的时候触发
    handleChange(id,productNum){
      this.axios.put(`http://127.0.0.1:7001/api/cart/${id}`,{productNum:productNum})
       .then(res => {
         this.getCartList();
       })
    }
    //change end

  },
  computed: {
    totalPrice() {
      let sum = 0;
      this.cartList.forEach(cartItem => {
        sum += cartItem.sumPrice;
      });
      return sum;
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
