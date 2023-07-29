<template>
  <ballStage />
  <Todo />
  <Proccess />
</template>

<script setup>
import Todo from './components/homepage/todo.vue'
import { defineProps } from 'vue'
import Proccess from './components/homepage/proccess.vue'
import ballStage from './components/ballStage.vue'
// import heat1 from './components/heat/heat1.vue'
// import heat2 from './components/heat/heat2.vue'
// import heat3 from './components/heat/heat3.vue'
// import heat from './components/heat/heat.vue'
// Define props
import forumArea from './components/forumArea.vue'
const props = defineProps()
</script>
