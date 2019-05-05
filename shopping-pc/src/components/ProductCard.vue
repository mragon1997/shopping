<template>
  <div class="product-card">
    <el-card :body-style="{ padding: '0px' }">
      <div :style="{background:picBack}" class="image"></div>
      <div style="padding: 14px;">
        <div class="product-name">{{name}}</div>
        <div class="bottom">
          <time class="price">{{price}}</time>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    productId: Number,
    mainPic: String,
    name: String,
    price: Number 
  },
  computed: {
    picBack() {
      return `url(${this.mainPic}) center center no-repeat`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product-card {
    margin: 0 30px;
    box-sizing: border-box;
    cursor: pointer;
}
.product-name {
    width: 250px;
    margin: 0 auto;
    text-align: center;
    overflow:hidden; 
    text-overflow:ellipsis; 
    white-space:nowrap; 
}
.price {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  text-align: center;
  line-height: 12px;
}

.image {
  display: block;
  width: 100%;
  height: 300px;
}
</style>
