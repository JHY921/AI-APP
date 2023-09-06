
<template>
  <writeTodo v-if="iswritetodo" style="z-index: 999999" @thing="gething" />
  <div class="wrapper">
    <div class="addtodo" style="z-index: 15">
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
            @click="getadd"
            src="../../../assets/icons/homepage/todo/加号icon.png"
            alt=""
            width="30"
            height="30"
          />
        </div>
      </button>
    </div>
    <ul style="z-index: 10">
      <li
        v-for="(task, index) in tasksItems"
        :key="index"
        @thing="thing"
        :class="`item-color-${index}`"
        style="position: relative"
      >
        <img
          src="./重要事项@3x.png"
          v-if="task[5]"
          style="width: 14px; height: 31.78px; position: absolute; left: 5px"
          alt=""
        />
        <span
          style="
            font-size: 11px;
            font-weight: 500;
            letter-spacing: 0px;
            margin-left: 28px;
            color: rgba(255, 255, 255, 1);
            font-family: Regular;
            padding-top: 15px;
          "
          >{{ task[0] }}</span
        >
        <span
          style="
            font-size: 8px;
            font-weight: 500;
            letter-spacing: 0px;
            font-family: Regular;
            color: rgba(255, 255, 255, 1);
            position: absolute;
            right: 45px;
            padding-top: 15px;
          "
          >预计时间：{{ task[1] }} :{{ task[2] }}-{{ task[3] }}:
          {{ task[4] }}</span
        >
        <div
          style="
            position: absolute;
            right: 15px;
            width: 13px;
            height: 13px;
            transform: rotate(16.72deg);
            border: 1px solid rgba(255, 255, 255, 1);
            box-shadow: 0 0 15px white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-top: 13px;
          "
          :class="{ circle: true, completed: completed }"
          @click="toggleCompletion(index)"
        >
          <span
            v-if="tasks[index][6]"
            class="checkmark"
            style="font-size: 15px; color: aliceblue"
            >&#10003;</span
          >
        </div>
      </li>
    </ul>
    <div class="alltodo" @click="todo" style="margin-top: -15px">
      <span>查看更多事项...</span>
    </div>
    <span class="word">开始你的计划吧</span>
  </div>
</template>
<style scoped>
@import "../../../assets/styles/todo.css";
.item-color-0 {
  margin-top: -15px;
  background: rgba(20, 132, 156, 1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: 10;
}

.item-color-1 {
  background: rgba(61, 153, 174, 1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: -10;
  margin-top: -24px;
}
.item-color-2 {
  background: rgba(107, 176, 192, 1);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  z-index: -20;
  margin-top: -24px;
}
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
    }
  },
  computed: {
    tasksItems () {
      return this.tasks.filter((task, index) => task[6] == false && index < 4)
    },
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
      this.$emit('getadd')
    },
    gething (data) {
      this.iswritetodo = false
      this.tasks[this.tasks.length] = data
      this.tasks.sort((a, b) => {
        if (a[1] == b[1] && a[2] == b[2]) {
          if (a[3] == b[3]) {
            if (a[4] > b[4]) {
              return 1
            }
          } else if (a[3] > b[3]) {
            return 1
          }
        } else {
          if (a[1] > b[1]) {
            return 1
          } else if (a[1] == b[1] && a[2] > b[2]) {
            return 1
          }
        }
        return -1
      })
      console.log(this.tasks)
      this.$emit('cover')
    },
    toggleCompletion (index) {
      this.tasks[index][6] = true
    }
  },
}
</script>