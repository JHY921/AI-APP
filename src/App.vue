<template>
  <ballStage />
  <Todo />
  <Proccess></Proccess>
  <!-- <heat1></heat1>
  <heat2></heat2>
  <heat3></heat3>
  <heat tt="4"></heat>
  <heat tt="5"></heat> -->
  
</template>

<script setup>
import Todo from './components/todo.vue'
import ballStage from './components/ballStage.vue'
import { defineProps } from 'vue'
import Proccess from './components/proccess.vue'
// import heat1 from './components/heat/heat1.vue'
// import heat2 from './components/heat/heat2.vue'
// import heat3 from './components/heat/heat3.vue'
// import heat from './components/heat/heat.vue'
// Define props
const props = defineProps()
</script>
