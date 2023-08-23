<script setup>
import Forum from '../../components/forum/forumArea.vue'
</script>
<template>
  <Forum />
  <div class="tabbar">
    <van-tabbar v-model="active" fixed id="bar" safe-area-inset-bottom route>
      <van-tabbar-item replace to="/Home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/Forum" icon="search">论坛</van-tabbar-item>
      <van-tabbar-item replace to="/Home" icon="friends-o" info="5"
        >xx</van-tabbar-item
      >
      <van-tabbar-item replace to="/Person" icon="setting-o" info="20"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
import { ref } from 'vue'
export default {
  setup () {
    const active = ref(1)
    return { active }
  },
};
</script>
