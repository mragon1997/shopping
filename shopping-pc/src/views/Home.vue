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
    <div class="main-label">
      <div class="label-title">
        <span>活动标题</span>
      </div>
      <div class="label-block">
        <div class="label-item">
          <ProductCard
            productId="1"
            mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
            name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
            price="299.00"
          ></ProductCard>
        </div>
        <div class="label-item">
          <ProductCard
            productId="1"
            mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
            name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
            price="299.00"
          ></ProductCard>
        </div>
        <div class="label-item">
          <ProductCard
            productId="1"
            mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
            name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
            price="299.00"
          ></ProductCard>
        </div>
        <div class="label-item">
          <ProductCard
            productId="1"
            mainPic="https://p.ssl.qhimg.com/dmfd/400_300_/t013323f4d5bb2e1f26.jpg"
            name="日本正品DUP EX552 假睫毛胶水透明睫毛胶粘度好温和低敏不开胶sdasdasd"
            price="299.00"
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
      swipers: [
        "http://iph.href.lu/879x200?text=1",
        "http://iph.href.lu/879x200?text=2",
        "http://iph.href.lu/879x200?text=3",
        "http://iph.href.lu/879x200?text=4"
      ]
    };
  }
};
</script>

<style>
.swiper-img {
  width: 100%;
  height: 400px;
}
.main-label {
  width: 100%;
  padding: 50px;
  box-sizing: border-box;
}
.label-title {
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

