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
          <div class="detail-brand">{{ product.name | nameFormat}}</div>
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
            <!--  -->
            <el-button type="success" @click="dialogFormVisible = true">立即购买</el-button>

            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
              <el-form :model="form">
                <el-form-item label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="form.name"  auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="电话" :label-width="formLabelWidth">
                  <el-input v-model="form.tel"  auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                  <el-input v-model="form.address" auto-complete="off"></el-input>
                </el-form-item>
              </el-form>
              <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="goBuy">确 定</el-button>
              </div>
            </el-dialog>
            <!--  -->

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
let _this = {}
import ProductCard from "@/components/ProductCard.vue";

import collect from '../util/collect.js'

console.log('asdasdas',collect)

export default {
  name: "product",
  components: {
    ProductCard
  },
  data() {
    _this = this
    return {

      productId: "", // 商品id
      product: {}, // 商品详情数据
      productNum: 1,

      //change 获取购物车列表
      cartList:[],
      flag:true,//判断购物车是否有数据

      canRun:true,//防抖
      // 

      dialogFormVisible: false,//窗口默认隐藏
        form: {//输入框绑定数据
          name: '',
          tel:'',
          address:'',
        },
        formLabelWidth: '120px',// 输入框前面的字体所占宽度
      // 

      brandList: [], // 品牌列表
    };
  },
  created() {
    //change 获取购物车列表
    this.getCartList()
  },
  mounted() {
    console.log("挂载Detail组件");
    console.log("路由参数：", this.$route);

    // 从路由参数中获取商品Id
    this.productId = this.$route.params.productId;

    // 获取商品详情
    this.getProductDetail();

    //获取品牌列表
    this.getBrandList()
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

    //change 获取购物车列表
    getCartList() {
      console.log("获取购物车列表");
      this.getUserId()
      this.axios
        .get(`http://127.0.0.1:7001/api/usercart/${this.userId}`)
        .then(res => {
          console.log("获取购物车列表返回参数", res);
          if(res.data.data.length !== 0){
          this.cartList = res.data.data;
          console.log('购物车里有商品'+this.cartList[0].productId+'购物车里的商品'+res.data.data)
          }else{
            console.log('购物车里mei商品')
          }
          
        });
    },
    /**
     * 加入购物车
     */
    addCart() {
      if(!this.canRun){
        return;
      }
      var _flag = this.flag
      console.log("加入购物车");
      this.getUserId();
        console.log('购物车商品的数量为：'+this.cartList.length)
        this.cartList.forEach( item => {
        //如果购物车的商品id和详情商品的id相同，则改变数量
        if( item.productId === this.product.id ){
          _flag = false
          console.log('aaaa' + _flag)
           item.productNum += this.productNum
          console.log('aaaaaa')
          this.axios.put(`http://127.0.0.1:7001/api/cart/${item.id}`, {productNum:item.productNum})
            .then(res => {
              //再点一次的时候回拿着老数据相加，所以需要再获取一次购物车的数据
              this.getCartList()
            console.log("商品的id", item.productId);
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
        }
      })
      let param = {
        userId: this.userId || this.$store.state.userId,
        productId: this.productId || this.$route.params.productId,
        productNum: this.productNum
      };
      //如果没有改变flag，那么证明没有进入上面的判断
        if(_flag) {
          console.log('_flag = '+ _flag)
          this.axios.post("http://127.0.0.1:7001/api/cart", param).then(res => {
            collect({
              actionId: 3,
              logId: this.productId || this.$route.params.productId,
            })
            console.log("用户加入购物车返回参数", res);
            if (res.data.code === 0) {
              //第一次添加商品时，页面不知道购物车是否有改变，所以会一直判断flag不为false
              this.getCartList()
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
        }
      this.canRun = false;
      setTimeout(() => {
        this.canRun = true
      },2000) 
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
    goBuy(){
      //点击确定后关闭窗口
      this.dialogFormVisible = false
      this.getUserId();
        let param = {
          userId: this.userId || this.$store.state.userId,
          productId: this.productId || this.$route.params.productId,
          productNum: this.productNum,
          address: this.form.address
        };
        console.log('购买商品入参：', param)
        this.axios.post("http://127.0.0.1:7001/api/order", param).then(res => {
          console.log("购买商品返回参数", res);
          if (res.data.code === 0) {

            collect({
              actionId: 4,
              logId: this.productId || this.$route.params.productId,
            })
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
    }
  },
  //过滤商品名称
  filters: {
    nameFormat:(value) => {
      _this.brandList.forEach((item) => {
        if(item.id === _this.product.brandId){
          value = item.brandName
        }
      })
      return value
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


