<template>
  <div class="product">
    <!-- 商品类目 -->
    <div class="product-category">
      <div class="category-row">
        <div class="row-left">品牌</div>
        <div class="row-right">
          <div class="category-item" v-for="brand in brandList" :key="brand.id">{{brand.brandName}}</div>
        </div>
      </div>
      <!-- <div class="category-row">
        <div class="row-left">颜色</div>
        <div class="row-right">
          <div class="category-item" v-for="color in colorList" :key="color.id">{{color.colorName}}</div>
        </div>
      </div> -->
    </div>
    <!-- 商品类目结束 -->

    <!-- 商品列表 -->
    <div class="product-list">
      <div class="product-item" v-for="product in productList" :key="product.id">
        <ProductCard
          :productId="product.id"
          :mainPic="product.mainPic"
          :name="product.name"
          :price="product.price"
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
    return {
      productList: [], // 商品列表
      brandList: [], // 品牌列表
      colorList: [] // 颜色列表
    };
  },
  mounted() {
    console.log("挂载Poduct组件");

    // 获取商品列表
    this.getProductList();
    
    // 获取品牌列表
    this.getBrandList();

    // 获取颜色列表
    this.getColorList();
  },
  methods: {
    /**
     * 获取商品列表
     */
    getProductList() {
      console.log("获取商品列表");
      this.axios.get("http://127.0.0.1:7001/api/product").then(res => {
        console.log("获取商品列表返回参数:", res);
        this.productList = res.data.data;
      });
    },
    /**
     * 获取品牌列表
     */
    getBrandList() {
      console.log("获取品牌列表")
      this.axios.get("http://127.0.0.1:7001/api/brand").then(res => {
        console.log("获取品牌列表返回参数", res)
        this.brandList = res.data.data
      })
    },
    /**
     * 获取颜色列表
     */
    getColorList() {
      console.log('获取颜色列表')
      this.axios.get("http://127.0.0.1:7001/api/color").then(res => {
        console.log("获取颜色列表返回参数", res)
        this.colorList = res.data.data
      })
    }
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
.product-item {
  margin-bottom: 30px;
}
</style>


