<template>
  <div class="bigTower">
    <div class="bigTower-head">
      <!-- 官网logo -->
      <headers />
    </div>
    <!-- 官网内容区 -->
    <router-view></router-view>
    <div class="bigTower-footer">
      <!-- 底部网站导航 -->
      <footers />
    </div>
  </div>
</template>

<script>
import footers from '@c/footer/index.vue'
import headers from '@c/header/index.vue'

export default {
  data() {
    return {
      routerList: [],
    }
  },
  mounted() {},
  created() {},
  watch: {},
  methods: {},
  components: {
    footers,
    headers,
  },
}
</script>

<style lang="less" scoped>
.bigTower {
  width: 100%;
  .bigTower-head {
    width: 100%;
  }
  .bigTower-footer {
    min-width: 1530px;
  }
}
</style>
