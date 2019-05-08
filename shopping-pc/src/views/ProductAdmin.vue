<template>
  <div class="product-admin">
    <el-table style="width: 100%" :data="productList">
      <el-table-column prop="id" label="编号" align="center"></el-table-column>
      <el-table-column prop="name" label="名称" align="center"></el-table-column>
      <el-table-column prop="brandId" label="品牌ID" align="center"></el-table-column>
      <el-table-column prop="price" label="价格" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleUpdateProduct(scope.row.id)">编辑</el-button>
          <el-button @click="handleDestoryProduct(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" class="upload-product" @click="handleUploadProduct">上传商品</el-button>
    <el-dialog title="收货地址" :visible.sync="productDialogShow">
      <el-form :model="productDialogForm">
        <el-form-item label="商品名" label-width="120px">
          <el-input v-model="productDialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="品牌" label-width="120px">
          <el-select v-model="productDialogForm.brandId" placeholder="请选择商品品牌">
            <el-option
              v-for="brand in brandList"
              :key="brand.id"
              :label="brand.brandName"
              :value="brand.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="价格" label-width="120px">
          <el-input v-model="productDialogForm.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="主图" label-width="120px">
          <el-input v-model="productDialogForm.mainPic" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="productDialogShow = false">取 消</el-button>
        <el-button type="primary" @click="submitForm">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productList: [], // 商品列表
      productDialogShow: false, // 商品对话框是否展示
      // 商品对话框表单
      productDialogForm: {
        name: "",
        brandId: "",
        price: 0,
        mainPic: ""
      },
      brandList: [], // 品牌列表
      isUpload: false // 提交表单是否是上传新商品
    };
  },
  mounted() {
    console.log("挂载ProductAdmin组件");

    // 获取商品列表
    this.getProductList();

    // 获取品牌列表
    this.getBrandList();
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
     * 获取详情图列表
     */
    getBrandList() {
      console.log("获取品牌列表");
      this.axios.get("http://127.0.0.1:7001/api/brand").then(res => {
        console.log("获取商品列表返回参数:", res);
        this.brandList = res.data.data;
      });
    },

    /**
     * 点击上传商品按钮
     */
    handleUploadProduct() {
      this.productDialogShow = true;
      this.isUpload = true;
    },
    /**
     * 点击编辑商品按钮
     */
    handleUpdateProduct(productId) {
      console.log("点击编辑商品按钮", productId);
      this.productList.forEach(product => {
        if (product.id === productId) {
          this.productDialogForm = product;
        }
      });
      this.isUpload = false;
      this.productDialogShow = true;
    },
    /**
     * 点击删除商品按钮
     */
    handleDestoryProduct(productId) {
      console.log("点击删除商品按钮", productId);
      this.axios
        .delete(`http://127.0.0.1:7001/api/product/${productId}`)
        .then(res => {
          console.log("删除商品返回参数", res);
          if (res && res.data && res.data.code === 0) {
            this.$message({
              message: "删除成功",
              type: "success"
            });
            this.getProductList();
            this.productDialogShow = false;
          } else {
            this.$message({
              message: res.data.message || "网络繁忙",
              type: "warnning"
            });
          }
        });
    },
    /**
     * 提交商品弹出框表单
     */
    submitForm() {
      if (this.isUpload) {
        this.uploadProduct();
      } else {
        this.updateProduct();
      }
    },
    /**
     * 上传新商品
     */
    uploadProduct() {
      console.log("上传新商品", this.productDialogForm);
      this.axios
        .post("http://127.0.0.1:7001/api/product", this.productDialogForm)
        .then(res => {
          console.log("上传新商品返回参数", res);
          if (res && res.data && res.data.code === 0) {
            this.$message({
              message: "上传商品成功",
              type: "success"
            });
            this.getProductList();
            this.productDialogShow = false;
          } else {
            this.$message({
              message: res.data.message || "网络繁忙",
              type: "warnning"
            });
          }
        });
    },
    /**
     * 编辑商品
     */
    updateProduct() {
      console.log("编辑商品", this.productDialogForm);
      this.axios
        .put(
          `http://127.0.0.1:7001/api/product/${this.productDialogForm.id}`,
          this.productDialogForm
        )
        .then(res => {
          console.log("编辑商品返回参数", res);
          if (res && res.data && res.data.code === 0) {
            this.$message({
              message: "编辑商品成功",
              type: "success"
            });
            this.getProductList();
            this.productDialogShow = false;
          } else {
            this.$message({
              message: res.data.message || "网络繁忙",
              type: "warnning"
            });
          }
        });
    }
  }
};
</script>

<style scoped>
.upload-product {
  margin-top: 100px;
}
</style>
