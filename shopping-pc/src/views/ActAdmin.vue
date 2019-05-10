<template>
  <div class="act-admin">
    <el-table style="width: 100%" :data="actList">
      <el-table-column prop="id" label="编号" align="center"></el-table-column>
      <el-table-column prop="actName" label="活动名称" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button @click="handleActProduct(scope.row.id)">商品管理</el-button>
          <el-button @click="handleDestoryAct(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" class="create-act" @click="handleCreateAct">创建活动</el-button>

    <el-dialog title="商品管理" :visible.sync="actDialogShow">
      <el-table :data="actProductList">
        <el-table-column property="productId" label="商品编号" align="center"></el-table-column>
        <el-table-column property="detail.name" label="商品名称" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleDestoryActProduct(scope.row.id)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-form :model="productAdminForm" class="add-product-form" :inline="true">
        <el-form-item label="商品编号：">
          <el-input v-model="productAdminForm.id"></el-input>
        </el-form-item>
        <el-button type="primary" @click="handleAddActProduct">添加商品</el-button>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      actList: [], // 活动列表
      actDialogShow: false, // 商品管理对话框是否可见
      actId: -1, // 所编辑活动id
      actProductList: [], // 所编辑活动商品列表
      productAdminForm: {
        id: ""
      }
    };
  },
  mounted() {
    console.log("挂载ActAdmin组件");

    // 获取活动列表
    this.getActList();
  },
  methods: {
    /**
     * 获取活动列表
     */
    getActList() {
      console.log("获取活动列表");
      this.axios.get("http://127.0.0.1:7001/api/act").then(res => {
        console.log("获取活动列表返回参数", res);
        this.actList = res.data.data;
      });
    },
    /**
     * 获取指定活动的商品列表
     */
    getProductListByActId() {
      console.log("获取指定活动的商品列表");
      // 查询指定活动的商品
      this.axios
        .get(`http://127.0.0.1:7001/api/actproduct/${this.actId}`)
        .then(res => {
          console.log("查询指定活动商品返回参数", res);
          if (res && res.data && res.data.code === 0) {
            this.actProductList = res.data.data;
            this.actDialogShow = true;
          } else {
            this.$message({
              message: "网络繁忙",
              type: "warnning"
            });
          }
        });
    },
    /**
     * 点击创建活动按钮
     */
    handleCreateAct() {
      console.log("创建活动");
      this.$prompt("请输入活动名称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          let param = {
            actName: value
          };
          console.log("创建活动入参", param);
          this.axios.post("http://127.0.0.1:7001/api/act", param).then(res => {
            console.log("创建活动返回参数", res);
            if (res && res.data && res.data.code === 0) {
              this.$message({
                message: "创建活动成功",
                type: "success"
              });
              this.getActList();
            } else {
              this.$message({
                message: res.data.message || "网络繁忙",
                type: "warnning"
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            message: "网络繁忙",
            type: "warnning"
          });
        });
    },
    /**
     * 点击商品管理按钮
     */
    handleActProduct(actId) {
      console.log("点击商品管理按钮", actId);
      this.actId = actId;
      this.getProductListByActId();
    },
    /**
     * 点击删除活动按钮
     */
    handleDestoryAct(actId) {
      console.log("删除活动", actId);
      this.axios.delete(`http://127.0.0.1:7001/api/act/${actId}`).then(res => {
        console.log("删除商品返回参数", res);
        if (res && res.data && res.data.code === 0) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getActList();
        } else {
          this.$message({
            message: res.data.message || "网络繁忙",
            type: "warnning"
          });
        }
      });
    },
    /**
     * 点击添加活动商品按钮
     */
    handleAddActProduct() {
      console.log("点击添加活动商品");
      let param = {
        actId: this.actId,
        productId: this.productAdminForm.id
      };
      console.log("添加活动商品入参", param);
      this.axios
        .post("http://127.0.0.1:7001/api/actproduct", param)
        .then(res => {
          console.log("添加活动商品入参", res);
          if (res && res.data && res.data.code === 0) {
            this.$message({
              message: "添加活动商品成功",
              type: "success"
            });
            this.getProductListByActId();
          } else {
            this.$message({
              message: res.data.message || "网络繁忙",
              type: "warnning"
            });
          }
        });
    },
    /**
     * 点击删除活动商品按钮
     */
    handleDestoryActProduct(actProductId) {
      console.log('删除活动商品')
      this.axios.delete(`http://127.0.0.1:7001/api/actproduct/${actProductId}`).then(res => {
                console.log("删除活动商品返回参数", res);
        if (res && res.data && res.data.code === 0) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getProductListByActId();
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
.create-act {
  margin-top: 100px;
}
.add-product-form {
  margin-top: 30px;
}
</style>
