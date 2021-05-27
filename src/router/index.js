import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/bigTower'
}, {
  path: '/bigTower',
  name: '江苏大塔网络科技有限公司',
  component: () => import('@v/index.vue'),
  children: [{
    path: '/bigTower',
    redirect: '/bigTower/index'
  }, {
    path: '/bigTower/index',
    name: '首页',
    alias: "nav",
    component: () => import('@v/bigTower/index.vue'),
  }, 
  {
    path: '/bigTower/about',
    name: '关于我们',
    alias: "nav",
    component: () => import('@v/about/index.vue')
  },
  {
    path: '/bigTower/business',
    name: '业务',
    alias: "nav",
    component: () => import('@v/business/index.vue')
  },
  {
    path: '/bigTower/case',
    name: '案例',
    alias: "nav",
    component: () => import('@v/case/index.vue')
  },
]
}]




// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
const router = new VueRouter({
  routes,
  linkActiveClass: "active-router"
});


export default router