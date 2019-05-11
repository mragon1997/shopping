<template>
  <div class="visualization">
    <div class="chart-title">用户登录统计</div>
    <!-- 登录线性图 -->
    <v-chart :force-fit="true" height="400" :data="loginData" :scale="loginScale">
      <v-tooltip/>
      <v-axis/>
      <v-smooth-line position="actionDate*登录用户数" :size="2"/>
    </v-chart>

    <div class="chart-bar-group">
      <div class="bar-item">
        <v-chart :forceFit="true" :height="300" :data="browseData" :scale="browseScale">
          <v-tooltip/>
          <v-axis/>
          <v-bar position="year*sales"/>
        </v-chart>
      </div>
      <div class="bar-item">
        <v-chart :forceFit="true" :height="300" :data="browseData" :scale="browseScale">
          <v-tooltip/>
          <v-axis/>
          <v-bar position="year*sales"/>
        </v-chart>
      </div>
      <div class="bar-item">
        <v-chart :forceFit="true" :height="300" :data="browseData" :scale="browseScale">
          <v-tooltip/>
          <v-axis/>
          <v-bar position="year*sales"/>
        </v-chart>
      </div>
    </div>
  </div>
</template>
 
<script>
const DataSet = require("@antv/data-set");

const browseData = [
  { year: "1951 年", sales: 38 },
  { year: "1952 年", sales: 52 },
  { year: "1956 年", sales: 61 },
  { year: "1957 年", sales: 145 },
  { year: "1958 年", sales: 48 },
  { year: "1959 年", sales: 38 },
  { year: "1960 年", sales: 38 },
  { year: "1962 年", sales: 38 }
];

const browseScale = [
  {
    dataKey: "sales",
    tickInterval: 20
  }
];

const loginScale = [
  {
    dataKey: "percent",
    min: 0,
    formatter: ".2%"
  }
];

export default {
  data() {
    return {
      loginData: [],
      loginScale,
      browseData,
      browseScale
    };
  },
  mounted() {
    console.log("挂载Visualzation组件");

    // 获取用户登录趋势
    this.getUserLoginTrend();
  },
  methods: {
    /**
     * 获取用户登录趋势
     */
    getUserLoginTrend() {
      console.log("获取用户登录趋势");
      this.axios.get("http://localhost:7001/api/userlogindate").then(res => {
        console.log("获取用户登录趋势返回参数", res);
        const sourceData = res.data.data;
        const dv = new DataSet.View().source(sourceData);
        dv.transform({
          type: "fold",
          fields: ["count"],
          value: "登录用户数"
        });
        this.loginData = dv.rows;
      });
    }
  }
};
</script>
 
<style scoped>
.chart-title {
  margin-left: 60px;
  margin-bottom: 20px;
  font-size: 24px;
}
.chart-bar-group {
  display: flex;
  height: 300px;
}
.bar-item {
  flex: 1;
  height: 300px;
  box-sizing: border-box;
}
</style>