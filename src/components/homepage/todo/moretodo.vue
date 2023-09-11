<template>
  <div
    class="return_label"
    style="
      margin-top: 24px;
      position: relative;
      width: 360px;
      height: 48px;
      opacity: 1;
      background-color: rgba(255, 255, 255, 1);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    "
  >
    <div @click="backTolast">
      <svg
        transform="translate(13,16)"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="9.70001220703125"
        height="14.89013671875"
        viewBox="0 0 9.70001220703125 14.89013671875"
        fill="none"
      >
        <path
          id="路径 1"
          style="fill: #007994; opacity: 1"
          d="M8.05786,14.6566l-7.7,-6.45001c-0.05033,-0.04217 -0.09607,-0.08884 -0.13721,-0.14001c-0.04114,-0.05117 -0.0769,-0.10587 -0.10727,-0.16408c-0.03037,-0.05822 -0.05477,-0.11884 -0.07319,-0.18186c-0.01843,-0.06303 -0.03053,-0.12724 -0.03631,-0.19264c-0.00578,-0.06541 -0.00512,-0.13075 0.00197,-0.19603c0.00709,-0.06527 0.02049,-0.12923 0.04018,-0.19187c0.01969,-0.06264 0.0453,-0.12276 0.07684,-0.18035c0.03153,-0.05759 0.06838,-0.11156 0.11055,-0.16189c0.03798,-0.04535 0.07966,-0.08699 0.12503,-0.12494l7.7,-6.44c0.05037,-0.04213 0.10436,-0.07893 0.16198,-0.11042c0.05762,-0.03149 0.11776,-0.05706 0.18041,-0.0767c0.06265,-0.01964 0.12662,-0.03299 0.1919,-0.04003c0.06528,-0.00704 0.13062,-0.00765 0.19603,-0.00182c0.0654,0.00583 0.1296,0.01798 0.19261,0.03645c0.06301,0.01848 0.12361,0.04292 0.1818,0.07333c0.05819,0.03041 0.11286,0.06621 0.164,0.10739c0.05115,0.04118 0.09778,0.08695 0.13991,0.13732c0.04212,0.05037 0.07893,0.10436 0.11042,0.16198c0.03149,0.05762 0.05705,0.11775 0.0767,0.18041c0.01964,0.06265 0.03298,0.12662 0.04003,0.1919c0.00704,0.06528 0.00765,0.13062 0.00182,0.19603c-0.00583,0.0654 -0.01798,0.1296 -0.03645,0.19261c-0.01848,0.06301 -0.04293,0.12361 -0.07334,0.1818c-0.03041,0.05819 -0.0662,0.11286 -0.10739,0.16401c-0.04118,0.05114 -0.08695,0.09777 -0.13732,0.1399l-7.69999,6.44l-0.64156,-0.76708l0.64214,-0.76659l7.7,6.44999c0.05033,0.0422 0.09607,0.08887 0.13721,0.14c0.04115,0.0512 0.0769,0.1059 0.10727,0.1641c0.03037,0.0582 0.05476,0.11883 0.07319,0.1819c0.01843,0.063 0.03053,0.1272 0.03631,0.1926c0.00577,0.0654 0.00511,0.13073 -0.00198,0.196c-0.00709,0.06527 -0.02048,0.12923 -0.04017,0.1919c-0.01969,0.06267 -0.04531,0.12277 -0.07684,0.1803c-0.03153,0.0576 -0.06838,0.11157 -0.11054,0.1619c-0.04217,0.05033 -0.08884,0.0961 -0.14001,0.1373c-0.05117,0.04113 -0.10587,0.07687 -0.16409,0.1072c-0.05821,0.0304 -0.11883,0.0548 -0.18185,0.0732c-0.06303,0.01847 -0.12724,0.03057 -0.19264,0.0363c-0.06541,0.0058 -0.13075,0.00513 -0.19603,-0.002c-0.06527,-0.00707 -0.12923,-0.02043 -0.19187,-0.0401c-0.06264,-0.01973 -0.12276,-0.04537 -0.18035,-0.0769c-0.05759,-0.03153 -0.11156,-0.06837 -0.16189,-0.1105z"
        ></path>
      </svg>
    </div>
    <div style="display: inline-block">
      <center>
        <span
          style="
            font-family: res;
            font-size: 55px;
            font-weight: 900;
            letter-spacing: 0px;
            line-height: 45px;
            color: rgba(16, 96, 112, 0.19);
            text-align: left;
            position: absolute;
            transform: translateY(-80%);
            margin-left: 50px;
          "
        >
          所有代办
        </span>
      </center>
    </div>
  </div>
  <div
    class="todo-list"
    style="overflow: auto; height: 450px; font-family: Medium"
  >
    <div class="doing">
      <li
        v-for="(task, index) in tasksdoing"
        :key="index"
        :class="[
          `item-color-${index}`,
          { 'slide-out': activeIndex == task[7] },
        ]"
      >
        <div
          v-if="activeIndex == task[7]"
          class="slider-in"
          style="
            width: 0;
            height: 64px;
            background-color: #007994;
            overflow: hidden;
            z-index: 100;
          "
        >
          <span
            style="
              font-size: 36px;
              font-family: dyh;
              font-weight: 400;
              letter-spacing: 0px;
              margin-left: 50px;
              color: rgba(255, 255, 255, 1);

              line-height: 64px;
              text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white,
                0 0 40px white;
            "
            >已完成</span
          >
          <img
            src="./勾.png"
            style="width: 35px; height: 35px; margin-left: 130px"
            alt=""
          />
        </div>
        <img
          src="./重要事项@3x.png"
          v-if="task[5]"
          style="width: 14px; height: 31.78px; position: absolute; left: 0px"
          alt=""
        />
        <div
          v-if="!(activeIndex == task[7])"
          style="
            width: 13px;
            height: 13px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 25px;
            background: rgba(210, 225, 228, 1);
            box-shadow: inset -2px 2px 2px rgba(0, 4, 5, 0.2);
            margin-right: 10px;
            margin-left: 15px;
          "
          :class="{ circle: true, completed: completed }"
          @click="toggleCompletion(task)"
        >
          <span
            v-if="activeIndex === task[7]"
            class="fade-in"
            style="font-size: 15px; color: #49828f"
            >&#10003;</span
          >
        </div>
        <span v-if="!(activeIndex == task[7])">{{ task[0] }} </span>
        <div v-if="!(activeIndex == task[7])" class="timewrapper">
          <span class="time"
            >{{ task[1] + " " + ":" + " " + task[2] + " " }}-{{
              " " + task[3] + " " + ":" + " " + task[4]
            }}</span
          >
          <span
            class="time1"
            v-if="index > 0"
            style="
              position: absolute;

              font-size: 12px;
              font-weight: 400;
              letter-spacing: 0px;
              line-height: 14.4px;

              text-align: left;
              vertical-align: top;
              font-family: dyh;
            "
            >{{ calculate(task) }}</span
          >
        </div>
      </li>
    </div>
    <div class="success">
      <li v-for="(task, index) in tasksFinish" :key="index">
        <img
          src="./重要事项@3x.png"
          v-if="task[5]"
          style="width: 14px; height: 31.78px; position: absolute; left: 0px"
          alt=""
        />
        <div
          style="
            width: 13px;
            height: 13px;

            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 25px;
            background: rgba(210, 225, 228, 1);
            box-shadow: inset -2px 2px 2px rgba(0, 4, 5, 0.2);
            margin-right: 10px;
          "
        ></div>
        <span style="text-decoration: line-through">{{ task[0] }} </span>
        <div style="position: absolute; right: 0; width: 64px; height: 64px">
          <span
            style="
              width: 100px;
              position: absolute;
              right: 60px;
              font-size: 12px;
              font-weight: 500;
              color: rgba(122, 122, 122, 0.73);
            "
            >{{ task[1] + " " + ":" + " " + task[2] + " " }}-{{
              " " + task[3] + " " + ":" + " " + task[4]
            }}</span
          >
          <span
            style="
              position: absolute;
              right: 25px;
              top: 20px;
              font-size: 12px;
              font-weight: 400;
              color: rgba(148, 148, 148, 0.59);
            "
            >已完成</span
          >
        </div>
      </li>
    </div>
  </div>

  <div
    style="
      position: absolute;
      left: 12px;
      top: 522px;
      width: 355px;
      height: 102px;
      opacity: 1;
      /** 文本1 */
      font-family: res;
      font-size: 83.5px;
      font-weight: 900;
      letter-spacing: 0px;
      line-height: 112.51px;
      color: rgba(154, 170, 173, 0.08);
      text-align: left;
      vertical-align: top;
    "
  >
    总计{{ n }}件
  </div>
</template>
<style scoped>
.slider-in {
  animation: sliderIn 0.5s ease-in forwards;
}
@keyframes sliderIn {
  from {
    width: 0px;
  }
  to {
    width: 100%;
  }
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
li {
  position: relative;
  display: flex;
  flex-direction: row;
  font-family: Medium;
  list-style-type: none;
  border-radius: 0px 6px, 6px, 0px;
  width: 360px;
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  color: rgba(0, 100, 122, 1);
  background: url("./待办单组5.png");
  background-size: 175px 64px;
}
.timewrapper {
  height: 64px;
  width: 200px;
  border-radius: 0px 6px 6px 0px;
  position: absolute;
  right: 0;
  background: rgba(214, 214, 214, 1);
  border-radius: 6px 0px, 0px, 6px;
}
.time {
  position: absolute;
  right: 60px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0px;
  color: rgba(122, 122, 122, 0.73);
}
.time1 {
  right: 30px;
  top: 40px;
  color: rgba(122, 122, 122, 0.73);
}
.item-color-0 {
  background: url("./待办单组1.png");
  background-size: cover;
}
.item-color-0 .timewrapper {
  background: transparent !important;
  border-radius: 6px 0px, 0px, 6px;
}
.item-color-0 .time {
  right: 30px;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white;
}

.item-color-1 {
  background: url("./待办单组2.png");
  background-size: 236px 64px;
}
.item-color-1 .timewrapper {
  height: 64px;
  width: 140px;
  border-radius: 0px 6px 6px 0px;
  position: absolute;
  right: 0;
  background-image: linear-gradient(90deg, #9c2a2a -125.4%, #f5dede 57.8%);
  border-radius: 6px 0px, 0px, 6px;
}
.item-color-1 .time {
  right: 45px;
  top: -5px;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white;
}
.item-color-1 .time1 {
  right: 45px;
  top: 35px;
  color: rgba(84, 0, 0, 0.59);
}
.item-color-2 {
  background: url("./待办单组3.png");
  background-size: 216px 64px;
}
.item-color-2 .timewrapper {
  height: 64px;
  width: 160px;
  border-radius: 0px 6px 6px 0px;
  position: absolute;
  right: 0;
  background-image: linear-gradient(90deg, #9c2a2a -125.4%, #f5dede 57.8%);
  border-radius: 6px 0px, 0px, 6px;
}
.item-color-2 .time {
  right: 65px;
  top: -5px;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white;
}
.item-color-2 .time1 {
  right: 65px;
  top: 35px;
  color: rgba(84, 0, 0, 0.59);
}
.item-color-3 {
  background: url("./待办单组4.png");
  background-size: 198px 64px;
}
.item-color-3 .timewrapper {
  height: 64px;
  width: 160px;
  border-radius: 0px 6px 6px 0px;
  position: absolute;
  right: 0;
  background-image: linear-gradient(90deg, #9c2a2a -125.4%, #f5dede 57.8%);
  border-radius: 6px 0px, 0px, 6px;
}
.item-color-3 .time {
  right: 75px;
  top: -5px;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white;
}
.item-color-3 .time1 {
  right: 75px;
  top: 35px;
  color: rgba(84, 0, 0, 0.59);
}
.success li {
  position: relative;
  display: flex;
  flex-direction: row;
  font-family: Medium;
  list-style-type: none;
  padding-left: 15px;
  width: 360px;
  height: 64px;
  opacity: 1;
  border-radius: 0px 6px, 6px, 0px;
  background-size: cover;
  width: 360px;
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  color: rgba(0, 100, 122, 1);
  background: rgba(214, 214, 214, 1);
}
</style>
<script>
import axios from 'axios'
import api from '../../../api/api'
export default {
  components: {},
  data () {
    return {
      n: 0,
      tasks: [],
      activeIndex: -1, // 用于跟踪哪个项目要展示动画
      hournow: 0,
    }
  },
  methods: {
    calculate (task) {
      const number1 = parseInt(task[1], 10)
      const number2 = parseInt(task[2], 10)
      const time = Math.floor((number1 * 60 + number2 - this.hournow) / 60)
      if (time >= 4) {
        let str = '距离开始时间较远'
        return str
      }
      let str1 = '剩余' + time + "小时开始"
      return str1
    },
    backTolast () {
      history.back()
    },
    toggleCompletion (task) {
      // 设置要展示动画的项目索引
      this.activeIndex = task[7]
      this.activeIndex1 = task[7]
      setTimeout(() => {
        this.tasks[this.activeIndex][6] = true
        this.activeIndex = -1
        this.activeIndex1 = -1
        axios.post(`http://${api.api}/home/todo/df`, {
          tasks: this.tasks
        },
          { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }, withCredentials: true }).then(res => {
            console.log(res.data)
          }).catch(err => {
            console.log(err)
          })
      }, 1000)
      console.log(this.tasks)

    },
  },
  created () {
    const url = `http://${api.api}/home/todo`
    axios.get(url, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }, withCredentials: true })
      .then(res => {
        console.log(res)
        if (res.data.tasks.length != 0) {
          this.tasks = res.data.tasks
          this.n = this.tasks.length
        } else {
          this.tasks = []
        }
      })
      .catch(error => {
        console.error(error)
      })
    const d = new Date()

    this.hournow = d.getHours() * 60 + d.getMinutes()

  },
  computed: {
    tasksdoing () {
      return this.tasks.filter((task, index) => task[6] === false)
    },
    tasksFinish () {
      return this.tasks.filter((task, index) => task[6] === true)
    },

  },

}
</script>