
<template>
  <writeTodo v-if="iswritetodo" />
  <div class="wrapper" @addtodo="getadd">
    <div class="addtodo">
      <span>
        <img
          src="../../../assets/icons/homepage/todo/今天该做什么.png"
          alt=""
          height="40"
        />
      </span>
      <img
        src="../../../assets/icons/homepage/todo/闹钟.png"
        alt=""
        width="70"
        height="50"
      />
      <button @click="rotateButton">
        <div :class="{ rotate: isRotated }">
          <img
            src="../../../assets/icons/homepage/todo/加号icon.png"
            alt=""
            width="30"
            height="30"
          />
        </div>
      </button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" @thing="thing"></li>
    </ul>
    <div class="alltodo" @click="todo">
      <span>查看更多事项...</span>
    </div>
    <span class="word">开始你的计划吧</span>
  </div>
</template>
<style scoped>
@import "../../../assets/styles/todo.css";
</style>
<script>
import writeTodo from './writeTodo.vue'
export default {
  components: { writeTodo },
  data () {
    return {
      isRotated: false,
      newTask: "",
      tasks: [],
      iswritetodo: false,
      cover: false,
    }
  },
  methods: {
    rotateButton () {
      this.isRotated = true
      setTimeout(() => {
        this.isRotated = false
      }, 300)
      this.$emit('addtodo')
    },

    todo () {
      this.$router.push('./moretodo')
    },
    thing (data) {
      console.log(data)
    },
    getadd () {
      console.log(this.iswritetodo)
      this.iswritetodo = true
      this.cover = true
    }

  },
}
</script>