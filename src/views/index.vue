<template>
  <div class="protection">
    <div class="protection-head">
      头部
      <!-- 
        //头部导航遍历操作
        <div class="protection-link">
        <router-link
          v-for="(item, index) in routerList"
          :to="item.path"
          :key="index"
          @click="handleClick(index)"
          >{{ item.name }}
          <div :class="['hover-icon', 'hover']">
            <img src="@a/images/hover-logo.png" alt="" />
          </div>
        </router-link>
      </div> -->
    </div>

    <!-- <router-view></router-view> -->
    <div class="protection-footer">
      <!-- 底部网站导航 -->
      底部
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
  mounted() {},
  created() {
    //头部导航便利操作
    // let routers = router.options.routes;
    // let routerList = [];
    // let list = routers.filter((item) => {
    //   return item.path === "/protection";
    // });
    // list.forEach((item) => {
    //   routerList = item.children;
    // });
    // this.routerList = routerList.filter((item) => {
    //   return item.alias === "nav";
    // });
    // this.path = this.$route.path;

  },
  watch: {},
  methods: {},
};
</script>

<style lang="less" scoped>
.protection {
  width: 100%;
  .protection-head {
    width: 100%;
  }
  .protection-footer {
    min-width: 1530px;
  }
}
</style>