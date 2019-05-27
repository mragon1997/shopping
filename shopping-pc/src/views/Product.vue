<template>
  <div class="product">
    <!-- 商品类目 -->
    <div class="product-category">
      <div class="category-row">
        <div class="row-left">品牌</div>
        <div class="row-right">
          <div @click="brandFilter(-1)" :class="['category-item', {selected: currentBrand == -1}]">全部品牌</div>
          <div  v-for="brand in brandList" :key="brand.id" 
          @click="brandFilter(brand.id)" :class="['category-item', {selected: currentBrand == brand.id}]">{{brand.brandName}}</div>
        </div>
      </div>
      
    </div>
    <!-- 商品类目结束 -->

    <!-- change -->
    <div class="product-category">
      <div class="category-row">
        <div class="row-left">价格</div>
        <div class="row-right">
          <div @click="pricesFilter(-1)" :class="['category-item', {selected: currentPrice == -1}]">全部价格</div>
          <div class="category-item" v-for="item in prices" :key="item.sid"
          @click="pricesFilter(item.sid)" :class="['category-item', {selected: currentPrice == item.sid}]">{{item.min}}-{{item.max}}</div>
          
          <form class="priceForm">
            <input class="priceText1" v-model="minPrice" type="text">
            -
            <input class="priceText2" v-model="maxPrice" type="text">
            <input class="priceSearch" type="button" value="搜索" @click="showProduct">
          </form>
        </div>
      </div>
    </div>
    <!-- change end -->

    <!-- 商品列表 -->
    <div class="product-list">
      <div class="product-item" v-for="product in productList" :key="product.id">

        <!-- change 添加了按sid展现商品 -->
        <ProductCard
          v-show="(currentBrand === -1 || currentBrand === product.brandId) && (currentPrice === -1 || currentPrice === product.sid)"
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
import { constants } from 'crypto';
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

      // change
      prices:[
        {sid:1,min:0,max:499},
        {sid:2,min:500,max:999},
        {sid:3,min:1000,max:1699},
        {sid:4,min:1700,max:2799},
        {sid:5,min:2800,max:4499},
        {sid:6,min:4500,max:11999},
        {sid:7,min:12000,max:100000}
        ],
        currentPrice:-1,
      minPrice:'',  //priceText1
      maxPrice:'',  //priceText2
      //change end
      
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

        // change
        res.data.data.forEach(item => {
          if(item.price > 0 && item.price <500){
              item.sid = 1;
          }else if(item.price >= 500 && item.price<1000){
              item.sid = 2;
          }else if(item.price >= 1000 && item.price<1700){
              item.sid = 3;
          }else if(item.price >= 1700 && item.price<2800){
              item.sid = 4;
          }else if(item.price >= 2800 && item.price<4500){
              item.sid = 5;
          }else if(item.price >= 4500 && item.price<12000){
              item.sid = 6;
          }else if(item.price >12000){
              item.sid = 7;
          }
        })
        // change end

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
    },

    // change
    /**
     * 按照价格筛选
     */
    pricesFilter(brandSid) {
      console.log('价格筛选', brandSid)
      this.currentPrice = brandSid;
    },
    /**
     * 按输入价格筛选
     */
    showProduct(){
      if(this.minPrice > 0 && this.maxPrice <500){
              this.currentPrice = 1;
          }else if(this.minPrice >= 500 && this.maxPrice<1000){
              this.currentPrice = 2;
          }else if(this.minPrice >= 1000 && this.maxPrice<1700){
              this.currentPrice = 3;
          }else if(this.minPrice >= 1700 && this.maxPrice<2800){
              this.currentPrice = 4;
          }else if(this.minPrice >= 2800 && this.maxPrice<4500){
              this.currentPrice = 5;
          }else if(this.minPrice >= 4500 && this.maxPrice<12000){
              this.currentPrice = 6;
          }else if(this.minPrice >= 12000){
              this.currentPrice = 7;
          }
          this.minPrice = this.maxPrice = '';
    }
    // change end
  }
};
</script>


<style scoped>
/* change */
.priceForm{
  line-height: 40px;
}
.priceText1{
    width: 40px;
    height: 20px;
    margin-left: 30px;
}
.priceText2{
      width: 40px;
      height: 20px;
      margin-right: 30px;
}
/* change end */

.product {
}
.product-category {
  width: 100%;
  border-top: 1px solid #e7e7e7;
}
.category-row {
  display: flex;
  width: 100%;

  /* change */
  min-width: 1200px;
  /* change end */

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


