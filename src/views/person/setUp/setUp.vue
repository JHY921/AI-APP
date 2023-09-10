<template>
  <div class="total">
    <van-notify v-model:show="show" type="success">
      <van-icon name="bell" style="margin-right: 4px;" />
      <span>你的建议已送达！</span>
    </van-notify>
    <div class="sendAdvice" style="position: absolute; width: 360px; height: 280px; background-color: rgb(218, 218, 218);
        margin-top: 180px; border-radius: 10px; opacity: 1;" v-if="isShowSendAdvice">
      <textarea cols="35" rows="8" style="margin: 20px; border-radius: 10px; border: none;
        font-size: 18px; font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;" v-model="advice"
        placeholder="请分享宝贵的建议"></textarea>
      <button style="width: 155px; height: 40px; border-radius: 10px; border: none;
        font-size: 20px; color: #007994; margin-left: 20px;" @click="cancelAdvice">
        取消
      </button>
      <button style="width: 155px; height: 40px; border-radius: 10px; border: none;
        font-size: 20px; color: #007994; margin-left: 10px;" @click="confirmAdvice">
        发送建议
      </button>
    </div>
    <div class="return_label">
      <div @click="backTolast" style="display: inline-block; width: 40px; height: 100%">
        <svg transform="translate(13,16)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.70001220703125" height="14.89013671875" viewBox="0 0 9.70001220703125 14.89013671875" fill="none">
          <path id="路径 1" style="fill: #007994; opacity: 1"
            d="M8.05786,14.6566l-7.7,-6.45001c-0.05033,-0.04217 -0.09607,-0.08884 -0.13721,-0.14001c-0.04114,-0.05117 -0.0769,-0.10587 -0.10727,-0.16408c-0.03037,-0.05822 -0.05477,-0.11884 -0.07319,-0.18186c-0.01843,-0.06303 -0.03053,-0.12724 -0.03631,-0.19264c-0.00578,-0.06541 -0.00512,-0.13075 0.00197,-0.19603c0.00709,-0.06527 0.02049,-0.12923 0.04018,-0.19187c0.01969,-0.06264 0.0453,-0.12276 0.07684,-0.18035c0.03153,-0.05759 0.06838,-0.11156 0.11055,-0.16189c0.03798,-0.04535 0.07966,-0.08699 0.12503,-0.12494l7.7,-6.44c0.05037,-0.04213 0.10436,-0.07893 0.16198,-0.11042c0.05762,-0.03149 0.11776,-0.05706 0.18041,-0.0767c0.06265,-0.01964 0.12662,-0.03299 0.1919,-0.04003c0.06528,-0.00704 0.13062,-0.00765 0.19603,-0.00182c0.0654,0.00583 0.1296,0.01798 0.19261,0.03645c0.06301,0.01848 0.12361,0.04292 0.1818,0.07333c0.05819,0.03041 0.11286,0.06621 0.164,0.10739c0.05115,0.04118 0.09778,0.08695 0.13991,0.13732c0.04212,0.05037 0.07893,0.10436 0.11042,0.16198c0.03149,0.05762 0.05705,0.11775 0.0767,0.18041c0.01964,0.06265 0.03298,0.12662 0.04003,0.1919c0.00704,0.06528 0.00765,0.13062 0.00182,0.19603c-0.00583,0.0654 -0.01798,0.1296 -0.03645,0.19261c-0.01848,0.06301 -0.04293,0.12361 -0.07334,0.1818c-0.03041,0.05819 -0.0662,0.11286 -0.10739,0.16401c-0.04118,0.05114 -0.08695,0.09777 -0.13732,0.1399l-7.69999,6.44l-0.64156,-0.76708l0.64214,-0.76659l7.7,6.44999c0.05033,0.0422 0.09607,0.08887 0.13721,0.14c0.04115,0.0512 0.0769,0.1059 0.10727,0.1641c0.03037,0.0582 0.05476,0.11883 0.07319,0.1819c0.01843,0.063 0.03053,0.1272 0.03631,0.1926c0.00577,0.0654 0.00511,0.13073 -0.00198,0.196c-0.00709,0.06527 -0.02048,0.12923 -0.04017,0.1919c-0.01969,0.06267 -0.04531,0.12277 -0.07684,0.1803c-0.03153,0.0576 -0.06838,0.11157 -0.11054,0.1619c-0.04217,0.05033 -0.08884,0.0961 -0.14001,0.1373c-0.05117,0.04113 -0.10587,0.07687 -0.16409,0.1072c-0.05821,0.0304 -0.11883,0.0548 -0.18185,0.0732c-0.06303,0.01847 -0.12724,0.03057 -0.19264,0.0363c-0.06541,0.0058 -0.13075,0.00513 -0.19603,-0.002c-0.06527,-0.00707 -0.12923,-0.02043 -0.19187,-0.0401c-0.06264,-0.01973 -0.12276,-0.04537 -0.18035,-0.0769c-0.05759,-0.03153 -0.11156,-0.06837 -0.16189,-0.1105z">
          </path>
        </svg>
      </div>
      <div style="display: inline-block">
        <center>
          <span style="
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 0px;
              color: rgba(0, 87, 107, 0.67);
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              transform: translateY(-50%);
            ">
            设置
          </span>
        </center>
      </div>
    </div>

    <div class="specific_item">
      <div style="
          width: 360px;
          height: 64px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 78px;
        ">
        &nbsp;&nbsp;&nbsp;&nbsp;账号与安全
        <img src="./arrow.png" style="width: 12px; float: right; margin: 16px; margin-top: 24px;" />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>
      <div style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        ">
        &nbsp;&nbsp;&nbsp;&nbsp;青少年模式
        <img src="./arrow.png" style="width: 12px; float: right; margin: 16px" />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>
      <div style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        ">
        &nbsp;&nbsp;&nbsp;&nbsp;消息通知
        <img src="./arrow.png" style="width: 12px; float: right; margin: 16px" />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>
      <div style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        ">
        &nbsp;&nbsp;&nbsp;&nbsp;个人信息管理
        <img src="./arrow.png" style="width: 12px; float: right; margin: 16px" />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>
      <div style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        ">
        &nbsp;&nbsp;&nbsp;&nbsp;权限管理
        <img src="./arrow.png" style="width: 12px; float: right; margin: 16px" />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>
      <div style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        ">
        &nbsp;&nbsp;&nbsp;&nbsp;关于我们
        <img src="./arrow.png" style="width: 12px; float: right; margin: 16px" />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>
      <div style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        " @click="sendAdvice">
        &nbsp;&nbsp;&nbsp;&nbsp;建议与反馈
        <img src="./arrow.png" style="width: 12px; float: right; margin: 16px" />
      </div>
    </div>
    <div style="
        width: 360px;
        height: 56px;
        font-size: 16px;
        text-align: center;
        line-height: 56px;
        background-color: white;
        margin-top: 20px;
      ">
      切换账号
      <img src="./arrow.png" style="width: 12px; float: right; margin: 16px" />
    </div>
    <div style="
        width: 360px;
        height: 56px;
        font-size: 16px;
        text-align: center;
        line-height: 56px;
        background-color: white;
        margin-top: 20px;
        color: rgba(186, 0, 0, 1);
      ">
      退出
      <img src="./arrow.png" style="width: 12px; float: right; margin: 16px" />
    </div>
  </div>
</template>

<script>
import { createApp } from 'vue';
import { Notify } from 'vant';
import { ref } from 'vue';

const app = createApp();
app.use(Notify);
export default {
  data() {
    return {
      isShowSendAdvice: false,
      advice: "",
      show: false,
    }
  },
  methods: {
    backTolast() {
      history.back()
    },
    sendAdvice() {
      this.isShowSendAdvice = true;
      console.log(1);
    },
    cancelAdvice() {
      this.isShowSendAdvice = false;
    },
    confirmAdvice() {
      //上传服务器
      this.isShowSendAdvice=false;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 2000);
    },
  },
}
</script>

<style scoped>
* {
  margin: 0px;
  overflow: hidden;
}

.total {
  height: 640px;
  width: 360px;
  overflow: hidden;
  background-color: rgba(158, 152, 152, 0.2);
}

.return_label {
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
}

.specific_item {
  margin-top: -8px;
  background-color: rgba(255, 255, 255, 1);
  height: 403px;
}
</style>