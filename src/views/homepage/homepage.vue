<script setup>
import Todo from '../../components/homepage/todo/todo.vue'
import ballStage from '../../components/homepage/ballStage/ballStage.vue'
import Proccess from '../../components/homepage/proccess/proccess.vue'
import tabbar from '../../components/tabbar.vue'
</script>
<template>
  <div class="content">
    <ballStage />
    <Todo />
    <Proccess />
  </div>
  <tabbar />
</template>
<style scoped>
.content {
  margin: auto;
  width: 360px;
  height: 100%;
  overflow: auto;
}
</style>



