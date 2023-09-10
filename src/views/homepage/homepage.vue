
<template>
  <div class="content">
    <ballStage
      style="margin: auto; margin-left: 12px"
      :class="{ covered: cover }"
      @click="go"
    />

    <Todo
      style="margin: auto"
      @getadd="this.cover = true"
      @cover="this.cover = false"
    />
    <Proccess
      @click="month"
      style="margin: auto; margin-top: 15px"
      :class="{ covered: cover }"
    />
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
      cover: false,
    }
  },
  methods: {
    month () {
      this.$router.push('./monthlycomp')
    },
    go () {
      this.$router.push('./userChart')
    }
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
.covered {
  background-color: #e8f3f5;

  opacity: 0.2;
}
</style>



