<script setup>
import { defineProps } from 'vue'
const props = defineProps()
import Forum from '../src/components/forum/forumArea.vue'
import tabbarVue from '../src/components/tabbar.vue'
</script>

<template>
  <Forum />
  <tabbarVue />
</template> 
