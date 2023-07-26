<template>
  <Todo />
  <Proccess></Proccess>
</template>

<script setup>
import Todo from './components/todo.vue'
import { defineProps } from 'vue'
import Proccess from './components/proccess.vue'
// Define props
const props = defineProps()

// Define other data or logic if needed
</script>
