<template>
  <div class="home">
    <!-- 幻灯片 -->
    <el-carousel height="400px">
      <el-carousel-item v-for="item in swipers" :key="item">
        <img class="swiper-img" :src="item">
      </el-carousel-item>
    </el-carousel>
    <!-- 幻灯片结束 -->

    <!-- 平台介绍 -->
    <div class="main-label">
      <div class="label-title">
        <span>Shopping 电商平台</span>
      </div>
      <div class="label-block">
        <div class="label-item">
          <img src="@/assets/label1.png" class="item-img" alt>
          <h4>一流的商品</h4>
        </div>
        <div class="label-item">
          <img src="@/assets/label2.png" class="item-img" alt>
          <h4>方便的平台</h4>
        </div>
        <div class="label-item">
          <img src="@/assets/label3.png" class="item-img" alt>
          <h4>高效的服务</h4>
        </div>
      </div>
    </div>
    <!-- 平台介绍结束 -->


    <!-- 活动楼层 -->
    <div class="main-label" v-for="act in actList" :key="act.id">
      <div class="label-title">
        <span>{{act.actName}}</span>
      </div>
      <div class="label-block">
        <div class="label-item" v-for="product in act.productList" :key="product.id">
          <ProductCard
            :productId="product.detail.id"
            :mainPic="product.detail.mainPic"
            :name="product.detail.name"
            :price="product.detail.price"
          ></ProductCard>
        </div>
      </div>
    </div>
    <!-- 活动楼层结束 -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import ProductCard from "@/components/ProductCard.vue";


export default {
  name: "home",
  components: {
    HelloWorld,
    ProductCard
  },
  data() {
    return {
      // 幻灯片用图
      swipers: [
        "http://img30.360buyimg.com/devfe/jfs/t1/38447/14/6580/849695/5cd164d7E14d021de/256b4bab1c62fe99.png",
        "http://img14.360buyimg.com/devfe/jfs/t1/39414/31/6476/594467/5cd1682dE8c6a0b0f/2b8a29415bc44a5f.png"

      ],
      actList: [] // 活动列表
    };
  },
  mounted() {
    console.log("挂载主页组件");
    
    // 获取活动列表
    this.getActList()
  },
  methods: {
    /**
     * 获取活动列表
     */
    getActList() {
      console.log("获取活动列表");
      this.axios.get("http://127.0.0.1:7001/api/act").then(res => {
        console.log("获取活动列表返回参数:", res);
        this.actList = res.data.data;
      });
    }
  }
};
</script>

<style>

.home{
  /* change */
  min-width: 450px;
  /* change end*/
}

/* change */
.el-carousel{
  min-width: 800px;
}
/* change end */

.swiper-img {
  width: 100%;
  height: 400px;
}
.main-label {

  /* change */
  overflow: auto;
  /*change end  */

  width: 100%;
  padding: 50px;
  box-sizing: border-box;
}
.label-title {

  /* change */
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  /* change end */

  font-size: 24px;
  text-align: center;
}
.label-title span {
  padding-bottom: 10px;
  border-bottom: 2px solid #000;
}
.label-block {
  display: flex;
  width: 100%;
  margin-top: 50px;
  box-sizing: border-box;
}
.label-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
  box-sizing: border-box;
}
.label-item .item-img {
  margin: 50px auto;
}
</style>

