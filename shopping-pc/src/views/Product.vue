<template>
  <div class="product">
    <!-- 商品类目 -->
    <div class="product-category">
      <div class="category-row">
        <div class="row-left">品牌</div>
        <div class="row-right">
          <div @click="brandFilter(-1)" :class="['category-item', {selected: currentBrand == -1}]">全部品牌</div>
          <div  v-for="brand in brandList" :key="brand.id" @click="brandFilter(brand.id)" :class="['category-item', {selected: currentBrand == brand.id}]">{{brand.brandName}}</div>
        </div>
      </div>
    </div>
    <!-- 商品类目结束 -->

    <!-- 商品列表 -->
    <div class="product-list">
      <div class="product-item" v-for="product in productList" :key="product.id">
        <ProductCard
          v-show="currentBrand === -1 || currentBrand === product.brandId"
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
      colorList: [], // 颜色列表
      currentBrand: -1
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
    },
    /**
     * 按照品牌筛选
     */
    brandFilter(brandId) {
      console.log('筛选品牌', brandId)
      this.currentBrand = brandId
    }
  }
};
</script>


<style scoped>
.product {
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
.category-item.selected {
  color: red;
}
.category-item {
  margin-left: 20px;
  font-size: 14px;
  color: rgba(51, 51, 51, 1);
  line-height: 40px;
  cursor: pointer;
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


