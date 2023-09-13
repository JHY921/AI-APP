<template>
  <div class="page" :style="computedheight">
    <div class="date">{{ item.month }}月{{ item.day }}日</div>
    <div class="sth" :style="comH">
      <div class="line" :style="comH"></div>
      <List :task="item.tasks[0]"></List>
      <List v-for="i in length" :task="item.tasks[i]" class="line-r"></List>
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
  props:{
    item:{
      type: Object,
            required: true,
            default: () => ({
                month:'',
                day: '',
                task:[],
                plan_time:0,
                true_time:0,
                true_do:0
            })
    }
  },
  data () {
    return {
      // month: 8,
      // day: 7,
      length: this.item.tasks.length-1,
      hour: this.item.true_time,
      todo: this.item.true_do,
      state: '良好',
      plan_time: this.item.plan_time,
      shouldone: this.item.tasks.length,
    }
  },
  computed: {
    backTolast () {
      history.back()
    },
    computedheight () {
      // console.log('task', this.item.tasks[0]);
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