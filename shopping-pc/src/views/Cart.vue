<template>
  <div class="cart">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="商品" ></el-table-column>
      <el-table-column prop="name" label="数量" width="180"></el-table-column>
      <el-table-column prop="address" label="总价" width="180"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  mounted() {
    console.log('挂载Cart组件')


  },
  methods: {
    /**
     * 获取购物车列表
     */
    getCartList() {
      
    }

  }
};
</script>

<style scoped>
</style>
