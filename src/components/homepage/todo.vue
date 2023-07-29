<script>
export default {
  data () {
    return {
      isRotated: false,
      newTask: "",
      tasks: [],
    }
  },
  methods: {
    rotateButton () {
      this.isRotated = true
      setTimeout(() => {
        this.isRotated = false
      }, 300)
    },
  },
}
</script>

<template>
  <div class="wrapper">
    <div class="addtodo">
      <span>
        <img src="../../icons/todo/今天该做什么.png" alt="" height="40" />
      </span>
      <img src="../../icons/todo/闹钟.png" alt="" width="70" height="50" />
      <button @click="rotateButton">
        <div :class="{ rotate: isRotated }">
          <img
            src="../../icons/todo/加号icon.png"
            alt=""
            width="30"
            height="30"
          />
        </div>
      </button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index"></li>
    </ul>
    <div class="alltodo">
      <span>查看更多事项...</span>
    </div>
    <span class="word">开始你的计划吧</span>
  </div>
</template>
<style scoped>
@import "../../styles/todo.css";
</style>