(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["detail"],{"3d18":function(t,e,s){"use strict";var a=s("a262"),o=s.n(a);o.a},a262:function(t,e,s){},ac6a:function(t,e,s){for(var a=s("cadf"),o=s("0d58"),i=s("2aba"),r=s("7726"),c=s("32e9"),n=s("84f2"),d=s("2b4c"),l=d("iterator"),u=d("toStringTag"),m=n.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=o(p),f=0;f<g.length;f++){var h,L=g[f],b=p[L],v=r[L],I=v&&v.prototype;if(I&&(I[l]||c(I,l,m),I[u]||c(I,u,L),n[L]=m,b))for(h in a)I[h]||i(I,h,a[h],!0)}},c84b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("div",{staticClass:"detail-info"},[s("div",{staticClass:"info-left"},[s("img",{attrs:{src:t.product.mainPic,alt:""}})]),s("div",{staticClass:"info-right"},[s("div",{staticClass:"detail-name"},[t._v(t._s(t.product.name))]),s("div",{staticClass:"detail-label"},[s("div",{staticClass:"detail-brand"},[t._v(t._s(t._f("nameFormat")(t.product.name)))]),s("div",{staticClass:"detail-price"},[t._v(t._s(t.product.price))])]),s("div",{staticClass:"detail-operate"},[s("div",{staticClass:"operate-num"},[s("el-button",{attrs:{disabled:t.productNum<=1,icon:"el-icon-minus",circle:""},on:{click:t.minusProductNum}}),s("div",{staticClass:"product-num"},[t._v(t._s(t.productNum))]),s("el-button",{attrs:{icon:"el-icon-plus",circle:""},on:{click:t.addProductNum}})],1),s("div",{staticClass:"operate-btn"},[s("el-button",{attrs:{type:"danger"},on:{click:t.addCart}},[t._v("加入购物车")]),s("el-button",{attrs:{type:"success"},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("立即购买")]),s("el-dialog",{attrs:{title:"收货地址",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[s("el-form",{attrs:{model:t.form}},[s("el-form-item",{attrs:{label:"姓名","label-width":t.formLabelWidth}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),s("el-form-item",{attrs:{label:"电话","label-width":t.formLabelWidth}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",e)},expression:"form.tel"}})],1),s("el-form-item",{attrs:{label:"地址","label-width":t.formLabelWidth}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.address,callback:function(e){t.$set(t.form,"address",e)},expression:"form.address"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.goBuy}},[t._v("确 定")])],1)],1)],1)])])]),s("div",{staticClass:"detail-pic-list"},t._l(t.product.picList,function(t){return s("div",{key:t.id,staticClass:"detail-pic-item"},[s("img",{attrs:{src:t.picAddress,alt:""}})])}),0)])},o=[],i=(s("ac6a"),s("e915")),r={},c={name:"product",components:{ProductCard:i["a"]},data:function(){return r=this,{productId:"",product:{},productNum:1,cartList:[],flag:!0,canRun:!0,dialogFormVisible:!1,form:{name:"",tel:"",address:""},formLabelWidth:"120px",brandList:[]}},created:function(){this.getCartList()},mounted:function(){console.log("挂载Detail组件"),console.log("路由参数：",this.$route),this.productId=this.$route.params.productId,this.getProductDetail(),this.getBrandList()},methods:{getProductDetail:function(){var t=this,e=this.productId||this.$route.params.productId;console.log("获取商品详情",e),this.axios.get("http://127.0.0.1:7001/api/product/".concat(e)).then(function(e){console.log("获取商品详情返回参数",e),t.product=e.data.data})},addProductNum:function(){this.productNum++},minusProductNum:function(){this.productNum--},getCartList:function(){var t=this;console.log("获取购物车列表"),this.getUserId(),this.axios.get("http://127.0.0.1:7001/api/usercart/".concat(this.userId)).then(function(e){console.log("获取购物车列表返回参数",e),0!==e.data.data.length?(t.cartList=e.data.data,console.log("购物车里有商品"+t.cartList[0].productId+"购物车里的商品"+e.data.data)):console.log("购物车里mei商品")})},addCart:function(){var t=this;if(this.canRun){var e=this.flag;console.log("加入购物车"),this.getUserId(),console.log("购物车商品的数量为："+this.cartList.length),this.cartList.forEach(function(s){s.productId===t.product.id&&(e=!1,console.log("aaaa"+e),s.productNum+=t.productNum,console.log("aaaaaa"),t.axios.put("http://127.0.0.1:7001/api/cart/".concat(s.id),{productNum:s.productNum}).then(function(e){t.getCartList(),console.log("商品的id",s.productId),0===e.data.code?t.$message({message:"加入购物车成功",type:"success"}):t.$message({message:e.data.message,type:"warning"})}))});var s={userId:this.userId||this.$store.state.userId,productId:this.productId||this.$route.params.productId,productNum:this.productNum};e&&(console.log("_flag = "+e),this.axios.post("http://127.0.0.1:7001/api/cart",s).then(function(e){console.log("用户加入购物车返回参数",e),0===e.data.code?(t.getCartList(),t.$message({message:"加入购物车成功",type:"success"})):t.$message({message:e.data.message,type:"warning"})})),this.canRun=!1,setTimeout(function(){t.canRun=!0},2e3)}},getUserId:function(){var t=0!==this.$store.state.loginRole,e=this.$store.state.userId;console.log("当前用户是否登录：",t),console.log("当前登录用户的userId：",e),t?this.userId=e:(this.$router.push({name:"login"}),this.$message({message:"用户未登录，请登录后重试",type:"warning"}))},goBuy:function(){var t=this;this.dialogFormVisible=!1,this.getUserId();var e={userId:this.userId||this.$store.state.userId,productId:this.productId||this.$route.params.productId,productNum:this.productNum,address:this.form.address};console.log("购买商品入参：",e),this.axios.post("http://127.0.0.1:7001/api/order",e).then(function(e){console.log("购买商品返回参数",e),0===e.data.code?t.$message({message:"下单成功",type:"success"}):t.$message({message:e.data.message,type:"warning"})})},getBrandList:function(){var t=this;console.log("获取品牌列表"),this.axios.get("http://127.0.0.1:7001/api/brand").then(function(e){console.log("获取品牌列表返回参数",e),t.brandList=e.data.data})}},filters:{nameFormat:function(t){return r.brandList.forEach(function(e){e.id===r.product.brandId&&(t=e.brandName)}),t}}},n=c,d=(s("3d18"),s("2877")),l=Object(d["a"])(n,a,o,!1,null,"a1740d82",null);e["default"]=l.exports}}]);
//# sourceMappingURL=detail.c7d5fb9f.js.map