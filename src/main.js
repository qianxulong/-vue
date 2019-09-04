// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from '@/store/store'
Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */
import axios from 'axios'

// 在vue的全局变量中设置了 $axios=axios
// 以后每个组件使用时：this.$axios
Vue.prototype.$axios = axios

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

router.beforeEach(function (to, from, next) {
  if(to.meta.requireAuth){
    // 要去的url只有登陆成功后才能访问
    if (store.state.token) {
      next()
    } else {
      next({name: 'login',query: {backUrl: to.fullPath}})
    }
  }else{
    next()
  }
})
