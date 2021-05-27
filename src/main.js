import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from "axios";
import "@/assets/styles/reset.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/styles/animate.css";
import "swiper/swiper.less";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to, form, next) => {
  NProgress.start();
  next();
  NProgress.done();
})

router.afterEach((to) => {
  NProgress.done();
});

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')