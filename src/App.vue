<template>
  <ballStage />
  <Todo />
</template>

<script setup>
import Todo from './components/todo.vue'
import ballStage from './components/ballStage.vue'
import { defineProps } from 'vue'
const props = defineProps()
</script>
