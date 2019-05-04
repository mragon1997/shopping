<template>
  <div class="product">
    <!-- 商品类目 -->
    <div class="product-category">
      <div class="category-row">
        <div class="row-left">品牌</div>
        <div class="row-right">
          <div class="category-item">苹果</div>
          <div class="category-item">小米</div>
          <div class="category-item">华为</div>
          <div class="category-item">oppo</div>
          <div class="category-item">努比亚</div>
        </div>
      </div>
      <div class="category-row">
        <div class="row-left">颜色</div>
        <div class="row-right">
          <div class="category-item">黑色</div>
          <div class="category-item">白色</div>
          <div class="category-item">蓝色</div>
          <div class="category-item">黄色</div>
        </div>
      </div>
    </div>
    <!-- 商品类目结束 -->

    <!-- 商品列表 -->
    <div class="product-list">
      <div class="product-item">
        <ProductCard
          productId="1"
          mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
          name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
          price="299.00"
        ></ProductCard>
      </div>
      <div class="product-item">
        <ProductCard
          productId="1"
          mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
          name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
          price="299.00"
        ></ProductCard>
      </div>
      <div class="product-item">
        <ProductCard
          productId="1"
          mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
          name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
          price="299.00"
        ></ProductCard>
      </div>
      <div class="product-item">
        <ProductCard
          productId="1"
          mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
          name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
          price="299.00"
        ></ProductCard>
      </div>
      <div class="product-item">
        <ProductCard
          productId="1"
          mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
          name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
          price="299.00"
        ></ProductCard>
      </div>
      <div class="product-item">
        <ProductCard
          productId="1"
          mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
          name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
          price="299.00"
        ></ProductCard>
      </div>
      <div class="product-item">
        <ProductCard
          productId="1"
          mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
          name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
          price="299.00"
        ></ProductCard>
      </div>
    </div>
    <!-- 商品列表结束 -->
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
  }
};
</script>


<style scoped>
.product {
  padding: 80px 0;
}
.product-category {
  width: 100%;
  border-top: 1px solid #e7e7e7;
}
.category-row {
  display: flex;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #e7e7e7;
}

.row-left {
  width: 113px;
  background: #fcfcfc;
  font-size: 18px;
  color: rgba(153, 153, 153, 1);
  text-align: center;
  line-height: 40px;
}
.row-right {
  display: flex;
}
.category-item {
  margin-left: 20px;
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
}

.product-list {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
}
.product-item{
  margin-bottom: 30px;
}
</style>


