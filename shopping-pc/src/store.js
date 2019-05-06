import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginRole: 0, // 登录用户的身份   0: 未登录 1: 管理员登录 2: 运营者登录 3: 普通用户登录 
    userId: -1
  },
  mutations: {
    // 退出登录
    LOGOUT: state => {
      state.loginRole = 0
      state.userId = -1
    },
    // 普通用户登录
    USER_LOGIN: (state, payload) => {
      state.loginRole = payload.roleId
      state.userId = payload.userId
    }
  },
  actions: {
    // 退出登录
    logout({ commit }) {
      commit('LOGOUT')
    },
    // 普通用户登录
    userLogin({ commit }, args) {
      commit('USER_LOGIN', args)
    }
  }
});
