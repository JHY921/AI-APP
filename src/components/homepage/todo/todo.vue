
<template>
  <writeTodo v-if="iswritetodo" @thing="gething" />
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
        <div :style="{ transform: `rotate(${rotationDegree}deg)` }">
          <img
            @click="getadd"
            src="../../../assets/icons/homepage/todo/加号icon.png"
            alt=""
            width="30"
            height="30"
            id="rotatable-image"
            style="margin-left: 20px"
          />
        </div>
      </button>
    </div>
    <ul style="z-index: 10">
      <li
        v-for="(task, index) in tasksItems"
        :key="index"
        @thing="thing"
        :class="[
          `item-color-${index}`,
          { 'slide-out': activeIndex1 == task[7] },
        ]"
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
            right: 65px;
            padding-top: 15px;
          "
          >预计时间：{{ task[1] }} :{{ task[2] }}-{{ task[3] }}:
          {{ task[4] }}</span
        >
        <div
          style="
            position: absolute;
            right: 12px;
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
          @click="toggleCompletion(task)"
        >
          <span
            v-if="activeIndex === task[7]"
            class="fade-in"
            style="font-size: 15px; color: aliceblue"
            >&#10003;</span
          >
        </div>
        <img
          src="./删除.png"
          style="
            width: 17px;
            height: 18px;
            margin-top: 14px;
            position: absolute;
            right: 38px;
          "
          alt=""
          @click="deletetodo(task)"
        />
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
.fade-in {
  opacity: 0;
  animation: fadeIn 0.01s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.slide-out {
  transition: transform 1s;
  transform: translateX(-100%); /* 右滑动 */
}
</style>
<script>
import writeTodo from './writeTodo.vue'
export default {
  created () {

    this.init()
  },
  components: { writeTodo },
  data () {
    return {
      newTask: "",
      tasks: [],
      iswritetodo: false,
      activeIndex: -1, // 用于跟踪哪个项目要展示动画
      activeIndex1: -1,
      buttondelete: 'false',//是否要切换到删除事件
      // rotationDegree: 0,
      // deletetask: [],
    }
  },
  computed: {
    tasksItems () {
      return this.tasks.filter((task, index) => task[6] === false && index < 4)
    },
  },
  methods: {
    init () {
      this.iswritetodo = false
    },
    rotateButton () {
      // console.log(this.buttondelete)
      // if (this.buttondelete) {
      //   this.tasks.splice(this.deletetask[7], 1)
      //   for (let i = 0; i < this.tasks.length; i++) {
      //     this.tasks[i][7] = i
      //   }
      //   const imageElement = document.getElementById('rotatable-image')
      //   const centerX = imageElement.clientWidth + imageElement.clientWidth / 2 - 30
      //   const centerY = imageElement.clientHeight + imageElement.clientHeight / 2 + 80
      //   imageElement.style.transformOrigin = `${centerX}px ${centerY}px`
      //   this.rotationDegree = -22
      //   imageElement.style.transform = `rotate(${this.rotationDegree}deg)`
      //   this.buttondelete = false
      // }
      // else {

      this.$emit('addtodo')

      // }

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
      for (let i = 0; i < this.tasks.length; i++) {
        this.tasks[i][7] = i
      }
      console.log(this.tasks)
      this.$emit('cover')
    },
    toggleCompletion (task) {
      // 设置要展示动画的项目索引
      this.activeIndex = task[7]
      this.activeIndex1 = task[7]
      setTimeout(() => {
        this.tasks[this.activeIndex][6] = true
        this.activeIndex = -1
        this.activeIndex1 = -1
      }, 1000)
      console.log(this.tasks)
    },
    deletetodo (task) {
      // this.buttondelete = true
      // const imageElement = document.getElementById('rotatable-image')
      // const centerX = imageElement.clientWidth + imageElement.clientWidth / 2 - 30
      // const centerY = imageElement.clientHeight + imageElement.clientHeight / 2 + 80
      // imageElement.style.transformOrigin = `${centerX}px ${centerY}px`
      // this.rotationDegree = 22
      // imageElement.style.transform = `rotate(${this.rotationDegree}deg)`
      // this.deletetask = deletetask
      this.activeIndex1 = task[7]
      setTimeout(() => {
        this.tasks.splice(task[7], 1)
        for (let i = 0; i < this.tasks.length; i++) {
          this.tasks[i][7] = i
        }
        this.activeIndex1 = -1
      }, 1000)
      console.log(this.tasks)
    }
  },
}
</script>