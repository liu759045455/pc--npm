<template>
  <div class="header">
    <!-- 官网logo -->
    <div class="header-link">
      <!-- 网站导航 -->
      <router-link
        v-for="(item, index) in routerList"
        :to="item.path"
        :key="index"
        @click="handleClick(index)"
        >{{ item.name }}
      </router-link>
    </div>
  </div>
</template>
<script>
import router from "@/router/index.js";
export default {
  data() {
    return {
      routerList: [],
    };
  },
  created() {
    //头部导航遍历操作
    let routers = router.options.routes;
    let routerList = [];
    let list = routers.filter((item) => {
      return item.path === "/bigTower";
    });
    list.forEach((item) => {
      routerList = item.children;
    });
    this.routerList = routerList.filter((item) => {
      return item.alias === "nav";
    });
    console.log(this.routerList);
  },
  methods: {},
  components: {},
};
</script>
<style scoped>
</style>