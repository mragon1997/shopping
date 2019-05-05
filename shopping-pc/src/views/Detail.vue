<template>
  <div class="detail">
    <!-- 商品基本信息 -->
    <div class="detail-info">
      <div class="info-left">
        <img
          :src="product.mainPic"
          alt
        >
      </div>
      <div class="info-right">
        <div class="detail-name">{{product.name}}</div>
        <div class="detail-label">
          <div class="detail-brand">苹果</div>
          <div class="detail-price">{{product.price}}</div>
        </div>
        <div class="detail-operate">
          <div class="operate-num">
            <el-button icon="el-icon-minus" circle></el-button>
            <div class="product-num">99</div>
            <el-button icon="el-icon-plus" circle></el-button>
          </div>
          <div class="operate-btn">
            <el-button type="danger">加入购物车</el-button>
            <el-button type="success">立即购买</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品基本信息结束 -->

    <!-- 商品详情图 -->
    <div class="detail-pic-list">
      <div class="detail-pic-item" v-for="pic in product.picList" :key="pic.id">
        <img
          :src="pic.picAddress"
          alt
        >
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
      product: {} // 商品详情数据
    };
  },
  mounted() {
    console.log("挂载Detail组件");
    console.log("路由参数：", this.$route);

    // 从路由参数中获取商品Id
    this.productId = this.$route.params.productId;

    // 获取商品详情
    this.getProductDetail()
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
            this.product = res.data.data
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


