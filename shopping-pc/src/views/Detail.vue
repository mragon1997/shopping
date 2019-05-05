<template>
  <div class="detail">
    <!-- 商品基本信息 -->
    <div class="detail-info">
      <div class="info-left">
        <img
          src="https://img10.360buyimg.com/n7/jfs/t1/3405/18/3537/69901/5b997c0aE5dc8ed9f/a2c208410ae84d1f.jpg"
          alt
        >
      </div>
      <div class="info-right">
        <div class="detail-name">Apple iPhone XR (A2108) 128GB 移动联通电信4G手机 双卡双待机</div>
        <div class="detail-label">
          <div class="detail-brand">苹果</div>
          <div class="detail-price">1999</div>
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
        <div class="detail-pic-item">
            <img src="https://img14.360buyimg.com/cms/jfs/t1/10243/28/13159/434204/5c7f77e1E77b34286/7da561e321879d1e.jpg" alt="">
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
    return {};
  },
  mounted() {
    console.log("挂载Detail组件");
  },
  methods: {}
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
.product-num{
    margin: 0 50px;
}

.operate-btn {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  width: 100%;
}
.detail-pic-list{
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


