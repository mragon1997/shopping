import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "product" */ "./views/Product.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: () =>
        import(/* webpackChunkName: "cart" */ "./views/Cart.vue")
    },
    {
      path: "/order",
      name: "order",
      component: () =>
        import(/* webpackChunkName: "order" */ "./views/Order.vue")
    },
    {
      path: "/detail/:productId",
      name: "detail",
      component: () =>
        import(/* webpackChunkName: "detail" */ "./views/Detail.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "login" */ "./views/Login.vue")
    },
    {
      path: "/productadmin",
      name: "productadmin",
      component: () =>
        import(/* webpackChunkName: "productadmin" */ "./views/ProductAdmin.vue")
    },
  ]
});
