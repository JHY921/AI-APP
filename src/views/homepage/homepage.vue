<script setup>
import Todo from '../../components/homepage/todo/todo.vue'
import ballStage from '../../components/homepage/ballStage/ballStage.vue'
import Proccess from '../../components/homepage/proccess/proccess.vue'
</script>
<template>
  <div class="content">
    <ballStage />
    <Todo />
    <Proccess />
  </div>
  <van-tabbar v-model="active" fixed id="bar" safe-area-inset-bottom route>
    <van-tabbar-item replace to="/Home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/Forum" icon="search">论坛</van-tabbar-item>
    <van-tabbar-item replace to="/extraFunction" icon="friends-o" info="5"
      >xx</van-tabbar-item
    >
    <van-tabbar-item replace to="/Person" icon="setting-o" info="20"
      >我的</van-tabbar-item
    >
  </van-tabbar>
</template>
<style scoped>
.content {
  margin: auto;
  width: 360px;
  height: 100%;
  overflow: auto;
}
</style>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const active = ref(0)
    return { active }
  },
};
</script>


