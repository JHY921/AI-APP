<script setup>
import { defineProps } from 'vue'
const props = defineProps()
import person from '../src/components/person/person.vue'
import tabbarVue from '../src/components/tabbar.vue'
</script>

<template>
  <person />
  <tabbarVue />
</template> 
