<template>
  <div class="detail">
    <!-- 商品基本信息 -->
    <div class="detail-info">
      <div class="info-left">
        <img :src="product.mainPic" alt>
      </div>
      <div class="info-right">
        <div class="detail-name">{{ product.name }}</div>
        <div class="detail-label">
          <div class="detail-brand">苹果</div>
          <div class="detail-price">{{ product.price }}</div>
        </div>
        <div class="detail-operate">
          <div class="operate-num">
            <el-button
              @click="minusProductNum"
              :disabled="productNum <= 1"
              icon="el-icon-minus"
              circle
            ></el-button>
            <div class="product-num">{{ productNum }}</div>
            <el-button @click="addProductNum" icon="el-icon-plus" circle></el-button>
          </div>
          <div class="operate-btn">
            <el-button type="danger" @click="addCart">加入购物车</el-button>
            <el-button type="success" @click="goBuy">立即购买</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品基本信息结束 -->

    <!-- 商品详情图 -->
    <div class="detail-pic-list">
      <div class="detail-pic-item" v-for="pic in product.picList" :key="pic.id">
        <img :src="pic.picAddress" alt>
      </div>
    </div>
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  name: "product",
  components: {
    ProductCard
  },
  data() {
    return {
      productId: "", // 商品id
      product: {}, // 商品详情数据
      productNum: 1
    };
  },
  mounted() {
    console.log("挂载Detail组件");
    console.log("路由参数：", this.$route);

    // 从路由参数中获取商品Id
    this.productId = this.$route.params.productId;

    // 获取商品详情
    this.getProductDetail();
  },
  methods: {
    /**
     * 获取商品详情
     */
    getProductDetail() {
      let productId = this.productId || this.$route.params.productId;
      console.log("获取商品详情", productId);
      this.axios
        .get(`http://127.0.0.1:7001/api/product/${productId}`)
        .then(res => {
          console.log("获取商品详情返回参数", res);
          this.product = res.data.data;
        });
    },
    /**
     * 商品数量 +1
     */
    addProductNum() {
      this.productNum++;
    },
    /**
     * 商品数量 -1
     */
    minusProductNum() {
      this.productNum--;
    },
    /**
     * 加入购物车
     */
    addCart() {
      console.log("加入购物车");
      this.getUserId();
      let param = {
        userId: this.userId || this.$store.state.userId,
        productId: this.productId || this.$route.params.productId,
        productNum: this.productNum
      };
      this.axios.post("http://127.0.0.1:7001/api/cart", param).then(res => {
        console.log("用户加入购物车返回参数", res);
        if (res.data.code === 0) {
          this.$message({
            message: "加入购物车成功",
            type: "success"
          });
        } else {
          this.$message({
            message: res.data.message,
            type: "warning"
          });
        }
      });
    },
    /**
     * 获取用户id
     */
    getUserId() {
      // 当前用户的登录状态
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
     * 购买商品
     */
    goBuy() {
      console.log("购买商品");
      this.$prompt("请输入订单地址", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(({ value }) => {
        this.getUserId();
        let param = {
          userId: this.userId || this.$store.state.userId,
          productId: this.productId || this.$route.params.productId,
          productNum: this.productNum,
          address: value
        };
        console.log('购买商品入参：', param)
        this.axios.post("http://127.0.0.1:7001/api/order", param).then(res => {
          console.log("购买商品返回参数", res);
          if (res.data.code === 0) {
            this.$message({
              message: "下单成功",
              type: "success"
            });
          } else {
            this.$message({
              message: res.data.message,
              type: "warning"
            });
          }
        });
      });
    }
  }
};
</script>


<style scoped>
.detail-info {
  display: flex;
  width: 100%;
  height: 500px;
}

.info-left {
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
}
.info-left img {
  display: block;
  width: 400px;
  height: 400px;
}
.info-right {
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
}
.detail-name {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
}
.detail-label {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 0 150px;
  box-sizing: border-box;
}
.detail-brand {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.detail-price {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
.detail-operate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 3;
  width: 100%;
  padding: 0 150px;
  box-sizing: border-box;
}
.operate-num {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
}
.product-num {
  margin: 0 50px;
}

.operate-btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  width: 100%;
}
.detail-pic-list {
  margin-top: 100px;
  width: 100%;
}
.detail-pic-item {
  width: 100%;
}
.detail-pic-item img {
  width: 100%;
}
</style>


