
<template>
  <van-tabbar v-model="active" fixed id="bar" safe-area-inset-bottom>
    <van-tabbar-item replace to="/Home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/Forum" icon="search" dot
      >论坛</van-tabbar-item
    >
    <van-tabbar-item replace to="/Home" icon="friends-o" info="5"
      >xx</van-tabbar-item
    >
    <van-tabbar-item replace to="/Person" icon="setting-o" info="20"
      >我的</van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style>
#bar {
  z-index: 10000000000;
}
</style>

