<script setup>
import person from '../../components/person/person.vue'
</script>
<template>
  <div>
    <person />
    <van-tabbar v-model="active" fixed id="bar" safe-area-inset-bottom route>
      <van-tabbar-item replace to="/Home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/Forum" icon="search">论坛</van-tabbar-item>
      <van-tabbar-item replace to="/extraFunction" icon="friends-o" info="5"
        >体验馆</van-tabbar-item
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
    const active = ref(3)
    return { active }
  },
};
</script>
