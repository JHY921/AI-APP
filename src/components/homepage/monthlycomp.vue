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
    <div
      @click="backTolast"
      style="display: inline-block; width: 40px; height: 100%"
    >
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
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0px;
            color: rgba(0, 87, 107, 0.67);
            position: absolute;
            top: 50%;
            left: 0;
            right: 0;
            transform: translateY(-50%);
          "
        >
          数据详情
        </span>
      </center>
    </div>
  </div>
  <div class="page" :style="computedheight">
    <div class="date">{{ month }}月{{ day }}日</div>
    <div class="sth" :style="comH">
      <div class="line" :style="comH"></div>
      <List></List>
      <List v-for="i in length" class="line-r"></List>
    </div>
    <div class="learn-time">
      当日累计学习时间:&ensp;<span class="highlight">{{ hour }}小时</span>
    </div>
    <div class="done">
      总计完成待办&ensp;<span class="highlight">{{ todo }}件</span>
    </div>
    <div class="pg">
      评估状态:&ensp;<span class="highlight">{{ state }}</span>
    </div>
    <div class="circle-1">
      <div class="circle-1-s" :style="timecal"></div>
      <!-- <div class="ultime">{{ plan_time }}小时</div> -->
    </div>
    <div class="circle-2">
      <div class="circle-2-s" :style="todocal"></div>
    </div>
    <div class="circle-3">
      <div class="circle-1-s" :style="statecal"></div>
    </div>
    <div class="blank"></div>
  </div>
</template>
<script>
import List from './list.vue'
export default {
  components: { List },
  data () {
    return {
      month: 8,
      day: 7,
      length: 4,
      hour: 3,
      todo: 4,
      state: '良好',
      plan_time: 6,
      shouldone: 6,
    }
  },
  computed: {
    backTolast () {
      history.back()
    },
    computedheight () {
      var height = this.length * 39 + 187
      return {
        height: `${height}px`
      }
    },
    comH () {
      var height = this.length * 41
      return {
        height: `${height}px`
      }
    },
    timecal () {
      var width = this.hour / this.plan_time * 124
      return {
        width: `${width}px`
      }
    },
    todocal () {
      var width = this.todo / this.shouldone * 124
      return {
        width: `${width}px`
      }
    },
    statecal () {
      var width = 124
      if (this.state == '良好')
        width = 124 * 3 / 4
      else if (this.state == '及格')
        width = 124 * 2 / 4
      else if (this.state == '较差')
        width = 124 / 4
      return {
        width: `${width}px`
      }
    }
  }
}
</script>
<style scoped>
.page {
  width: 360px;
  /* background-color: pink; */
  position: relative;
}
.line-r {
  /* position: absolute; */
  margin-top: 39px;
}
.date {
  position: absolute;
  left: 16px;
  top: 16px;
  font-size: 18px;
  letter-spacing: 0px;
  line-height: 21.1px;
  color: rgba(64, 64, 64, 0.7);
  text-align: left;
  vertical-align: top;
  font-family: Medium;
}
.sth {
  width: 320px;
  position: absolute;
  left: 32px;
  top: 50px;
}
.line {
  width: 0.4px;
  opacity: 1;
  background-color: rgba(0, 106, 130, 0.31);
  position: absolute;
  left: 0.4px;
}
.learn-time {
  position: absolute;
  left: 32px;
  bottom: 77px;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 14.06px;
  color: rgba(0, 75, 92, 1);
  font-family: Regular;
  display: flex;
}
.done {
  position: absolute;
  left: 32px;
  bottom: 54px;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 14.06px;
  color: rgba(0, 75, 92, 1);
  font-family: Regular;
}
.pg {
  position: absolute;
  left: 32px;
  bottom: 31px;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 14.06px;
  color: rgba(0, 75, 92, 1);
  font-family: Regular;
}
.highlight {
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: NaNpx;
  color: rgba(0, 137, 168, 1);
  text-align: left;
  vertical-align: top;
}
.circle-1 {
  position: absolute;
  left: 191px;
  bottom: 79px;
  width: 124px;
  height: 10px;
  opacity: 1;
  border-radius: 0px 6px 6px 0px;
  background: rgba(135, 145, 148, 0.14);
  box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.12);
}
.circle-2 {
  position: absolute;
  left: 191px;
  bottom: 56px;
  width: 124px;
  height: 10px;
  opacity: 1;
  border-radius: 0px 6px 6px 0px;
  background: rgba(135, 145, 148, 0.14);
  box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.12);
}
.circle-3 {
  position: absolute;
  left: 191px;
  bottom: 33px;
  width: 124px;
  height: 10px;
  opacity: 1;
  border-radius: 0px 6px 6px 0px;
  background: rgba(135, 145, 148, 0.14);
  box-shadow: inset -1px 2px 2px rgba(0, 0, 0, 0.12);
}
.circle-1-s {
  height: 10px;
  opacity: 1;
  border-radius: 0px 6px 6px 0px;
  background: linear-gradient(
    90deg,
    rgba(13, 109, 130, 1) 0%,
    rgba(0, 131, 160, 1) 27.71%,
    rgba(106, 183, 200, 1) 60.03%,
    rgba(255, 255, 255, 1) 100%
  );
}
.circle-2-s {
  height: 10px;
  opacity: 1;
  border-radius: 0px 6px 6px 0px;
  background: linear-gradient(
    90deg,
    rgba(13, 109, 130, 1) 0%,
    rgba(0, 131, 160, 1) 27.71%,
    rgba(106, 183, 200, 1) 60.03%,
    rgba(255, 255, 255, 1) 100%
  );
}
.circle-3-s {
  height: 10px;
  opacity: 1;
  border-radius: 0px 6px 6px 0px;
  background: linear-gradient(
    90deg,
    rgba(13, 109, 130, 1) 0%,
    rgba(0, 131, 160, 1) 27.71%,
    rgba(106, 183, 200, 1) 60.03%,
    rgba(255, 255, 255, 1) 100%
  );
}
.blank {
  position: absolute;
  bottom: 0;
  width: 360px;
  height: 8px;
  background-color: rgba(235, 236, 237, 1);
}
</style>