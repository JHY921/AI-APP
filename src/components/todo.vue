<script>
export default {
  data () {
    return {
      isRotated: false,
      newTask: "",
      tasks: [],
      isModalOpen: false,
    }
  },
  methods: {
    rotateButton () {
      this.isRotated = true
      this.tasks.push({ text: this.newTask, completed: false })
      this.newTask = ""
      setTimeout(() => {
        this.isRotated = false
      }, 300)
    },
    deleteTask (index) {
      this.tasks.splice(index, 1)
    },
    toggleCompletion (index) {
      this.tasks[index].completed = !this.tasks[index].completed
    },
  },
}
</script>
<style>
@import "../styles/todo.css";
</style>
<template>
  <div class="wrapper">
    <div class="addtodo">
      <span>今天该做些什么</span>
      <button @click="rotateButton">
        <div :class="{ rotate: isRotated }">
          <svg
            t="1690047038908"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1504"
            width="32"
            height="32"
          >
            <path
              d="M925.696 384q19.456 0 37.376 7.68t30.72 20.48 20.48 30.72 7.68 37.376q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68l-287.744 0 0 287.744q0 20.48-7.68 37.888t-20.48 30.208-30.72 20.48-37.376 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888l0-287.744-287.744 0q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-37.888q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68l287.744 0 0-287.744q0-19.456 7.68-37.376t20.48-30.72 30.208-20.48 37.888-7.68q39.936 0 68.096 28.16t28.16 68.096l0 287.744 287.744 0z"
              p-id="1505"
              fill="#ffffff"
            ></path>
          </svg>
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
