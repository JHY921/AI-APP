<template>
  <div class="wrapper">
    <form action="">
      <input
        v-model="todo"
        type="text"
        style="
          width: 296px;
          height: 38px;
          opacity: 1;
          border-radius: 9px;
          background: rgba(103, 108, 110, 0.13);
          box-shadow: inset -3px 4px 3px rgba(0, 0, 0, 0.2);
          border: 0;
          margin: 22px 16px;
          margin-bottom: 12px;
          padding-left: 16px;
        "
        placeholder="请输入代办"
      />
      <div class="time">
        <div class="begin">
          <span>开始</span>
          <label for="" class="dateDisplay" @click="date(1)">
            {{ hour1 }}:{{ minute1 }}
          </label>
        </div>
        <div class="end">
          <span>结束</span>
          <label for="" class="dateDisplay" @click="date(2)">
            {{ hour2 }}:{{ minute2 }}
          </label>
        </div>
      </div>
      <div class="important">
        <label
          style="
            margin-top: 12px;
            margin-left: 16px;
            margin-right: 17px;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0px;
            line-height: 28px;
            color: rgba(0, 77, 94, 1);
          "
          >重要标签</label
        >
        <van-switch
          v-model="checked"
          size="14px"
          active-color=" #218AA2"
          inactive-color="#EBEBEB"
          style="margin-top: 16.5px; margin-right: 9px"
        />
      </div>
      <button
        @click="thing"
        style="
          margin-left: 128px;
          width: 72px;
          height: 28px;
          opacity: 1;
          border-radius: 10px;
          background-image: linear-gradient(
            180deg,
            #029ea636 -89.5%,
            #1b7a8f 100%
          );
          padding-bottom: 6px;
          border: 0;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: 0px;
          color: rgba(247, 247, 248, 1);
        "
      >
        创建
      </button>
    </form>
  </div>
  <div class="timepick">
    <van-time-picker
      v-model="currentTime"
      title="选择时间"
      v-show="timepick"
      @confirm="ctime"
      @cancel="timepick = !timepick"
    />
  </div>
</template>
<style scoped>
.wrapper {
  position: absolute;
  left: 15px;
  top: 100px;
  width: 328px;
  height: 191px;
  opacity: 1;
  border-radius: 20px;
  background-image: linear-gradient(
    180deg,
    #1a7780 -71.1%,
    #ffffff 14.1%,
    #ffffff 76.6%,
    #14849c 350.7%,
    #ffffff 381.5%
  );
  z-index: 9999;
}
input::placeholder {
  color: #00000033;
  font-size: 41.16rpx;
  font-family: regular;
  line-height: 37.73rpx;
}
.time {
  display: flex;
  flex-direction: row;
}
.begin {
  display: flex;
  flex-direction: row;
}
.begin span {
  margin-left: 16px;
  height: 34px;
  line-height: 34px;
  text-align: 28px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0px;
  color: rgba(0, 77, 94, 1);
}
.end span {
  margin-left: 33px;
  height: 34px;
  line-height: 34px;
  text-align: 28px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0px;
  color: rgba(0, 77, 94, 1);
}
.end {
  display: flex;
  flex-direction: row;
}
.dateDisplay {
  margin: 3px;
  width: 98px;
  height: 28px;
  position: relative;
  opacity: 1;
  border-radius: 6px;
  background: #676c6e21;
  box-shadow: inset -3px 4px 3px rgba(0, 0, 0, 0.2);
  /** 文本1 */
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 28px;
  color: rgba(0, 0, 0, 0.1);
  text-align: center;
  vertical-align: top;
  font-family: res;
}
.important {
  display: flex;
  flex-direction: row;
}
.timepick {
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 100000;
}
</style>
<script>
import { showToast } from 'vant'
import 'vant/es/toast/style'
export default {

  data () {
    return {
      whichtime: 0,
      timepick: false,
      hour1: "00",
      minute1: '00',
      hour2: '00',
      minute2: '00',
      currentTime: [],
      checked: false,
      todo: '',
      things: []

    }
  },
  methods: {
    date (index) {
      this.timepick = !this.timepick
      this.whichtime = index
    },
    ctime () {
      if (this.whichtime == 1) {
        console.log(this.currentTime)
        this.hour1 = this.currentTime[0]
        this.minute1 = this.currentTime[1]
      } else {
        this.hour2 = this.currentTime[0]
        this.minute2 = this.currentTime[1]
      }
      this.timepick = !this.timepick
    },

    thing () {
      if (this.todo === '' || this.hour1 > this.hour2 || (this.hour1 === this.hour2 && this.minute1 > this.minute2)) {
        showToast('请仔细检查')
      } else {
        this.things[0] = this.todo//具体事情
        this.things[1] = this.hour1//开始时间的小时
        this.things[2] = this.minute1//开始时间的分钟
        this.things[3] = this.hour2//结束时间的小时
        this.things[4] = this.minute2//结束时间的分钟
        this.things[5] = this.checked//这件事情是否重要
        this.things[6] = false//事情是否完成
        console.log(this.things)
        this.$emit('thing', this.things)
        this.checked = false
      }

    }
  }

}
</script>
