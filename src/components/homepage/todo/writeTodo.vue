<template>
  <div class="wrapper">
    <form action="">
      <input
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
          <label for="" class="dateDisplay" @click="date1">
            {{ hour1 }}:{{ minute1 }}
          </label>
        </div>
        <div class="end">
          <span>结束</span>
          <label for="" class="dateDisplay" @click="date2">
            {{ hour2 }}:{{ minute2 }}
          </label>
        </div>
      </div>
      <div class="important">
        <label
          for=""
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
      v-show="timepick1"
    />
  </div>
</template>
<style scoped>
.wrapper {
  left: 394px;
  top: 555px;
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
}
</style>
<script>
export default {
  setup () {
    const checked = true
    return { checked }
  },
  data () {
    return {

      timepick1: false,
      timepick2: false,
      hour1: 0o0,
      minute1: 0o0,
      hour2: 0o0,
      minute2: 0o0,
    }
  },
  methods: {
    date1 () {
      this.timepick1 = !this.timepick1
    }
  }

}
</script>
