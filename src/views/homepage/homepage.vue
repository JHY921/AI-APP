
<template>
  <div class="content">
    <ballStage />
    <Todo />
    <Proccess @click="month" />
  </div>
  <tabbar />
</template>
<script>
import Todo from '../../components/homepage/todo/todo.vue'
import ballStage from '../../components/homepage/ballStage/ballStage.vue'
import Proccess from '../../components/homepage/proccess/proccess.vue'
import tabbar from '../../components/tabbar.vue'
export default {
  components: { Todo, ballStage, Proccess, tabbar },
  data () {
    return {

    }
  },
  methods: {
    month () {
      this.$router.push('./monthlycomp')
    }

  }
}
</script>
<style scoped>
.content {
  margin: auto;
  width: 360px;
  height: 100%;
  overflow: auto;
}
</style>



