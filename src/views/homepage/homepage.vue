
<template>
  <div class="content">
    <ballStage style="margin: auto; margin-left: 12px" />
    <Todo style="margin: auto" />
    <Proccess @click="month" style="margin: auto; margin-top: 15px" />
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
    },

  }
}
</script>
<style scoped>
.content {
  margin: auto;
  margin-top: 20px;
  width: 360px;
  height: 630px;
  overflow: hidden;
}
</style>



