<template>
  <div class="total">
    <div class="return_label">
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
            个人信息
          </span>
        </center>
      </div>
    </div>
    <div id="user_label">
      <div
        style="
          position: absolute;
          height: 184px;
          width: 360px;
          background: linear-gradient(
            0deg,
            rgba(188, 243, 255, 0.15) 0%,
            rgba(255, 255, 255, 1) 40%
          );
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        "
      ></div>
      <div
        style="
          position: absolute;
          height: 141px;
          width: 141px;
          border-radius: 50%;
          background: rgba(1, 171, 157, 0.3);
          margin-top: -100px;
          margin-left: -20px;
        "
      ></div>
      <div
        style="
          position: absolute;
          height: 185px;
          width: 185px;
          border-radius: 50%;
          background: rgba(1, 171, 157, 0.3);
          margin-top: -120px;
          margin-left: 50px;
        "
      ></div>
      <div
        style="
          position: absolute;
          height: 172px;
          width: 172px;
          border-radius: 50%;
          background: rgba(1, 171, 157, 0.3);
          margin-top: -100px;
          margin-left: 200px;
        "
      ></div>
      <div
        class="glassContainer"
        style="
          position: relative;
          height: 184px;
          width: 360px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
          margin-bottom: 20px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        "
      >
        <div
          id="userInfor"
          style="
            width: 360px;
            height: 70px;
            margin-top: 30px;
            color: black;
            font-size: 18px;
          "
        >
          <div
            style="display: inline-block; margin-left: 30px; margin-right: 20px"
          >
            <img src="./userPhoto.png" style="width: 46px; height: 46px" />
          </div>
          <div style="display: inline-block; margin-top: 5px">
            <strong>{{ userID }}</strong>
          </div>
        </div>
        <div
          id="userPeri"
          style="width: 330px; height: 80px; margin-left: 30px"
        >
          <div>
            <img
              src="./include.png"
              style="position: absolute; width: 46px; z-index: 6"
            />
            <img
              src="./define.png"
              style="
                position: absolute;
                width: 54px;
                margin-left: 39px;
                z-index: 5;
              "
            />
            <img
              src="./ifdef.png"
              style="
                position: absolute;
                width: 60px;
                margin-left: 83px;
                z-index: 4;
              "
            />
            <img
              src="./pragma.png"
              style="
                position: absolute;
                width: 61px;
                margin-left: 133px;
                z-index: 3;
              "
            />
            <img
              src="./framework.png"
              style="
                position: absolute;
                width: 62px;
                margin-left: 183px;
                z-index: 2;
              "
            />
            <img
              src="./code_god.png"
              style="
                position: absolute;
                width: 59px;
                margin-left: 235px;
                z-index: 1;
              "
            />
          </div>
          <div class="progress-bar">
            <div
              class="progress-bar-inner"
              :style="{ width: `${percentage}%` }"
            ></div>
          </div>
          <div
            style="
              float: right;
              margin-right: 25px;
              font-size: 12px;
              color: grey;
              transform: scale(0.8);
            "
          >
            <p style="text-align: right; margin-bottom: 5px">
              {{ empiricalValue }}/{{ totalEmpir }}
            </p>
            距离下一级还需：{{ empiricalValue }}经验
          </div>
        </div>
      </div>
    </div>

    <div class="specific_item">
      <div
        style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        "
      >
        &nbsp;&nbsp;&nbsp;&nbsp;用户名：<span style="color: grey"
          >&nbsp;&nbsp;{{ userID }}</span
        >
        <img
          src="./arrow_G.png"
          style="width: 12px; float: right; margin: 16px"
        />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>

      <div
        style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        "
      >
        &nbsp;&nbsp;&nbsp;&nbsp;性别：<span style="color: grey"
          >&nbsp;&nbsp;{{ userSex }}</span
        >
        <img
          src="./arrow_G.png"
          style="width: 12px; float: right; margin: 16px"
        />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>

      <div
        style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        "
      >
        &nbsp;&nbsp;&nbsp;&nbsp;生日：<span style="color: grey"
          >&nbsp;&nbsp;{{ userBirth }}</span
        >
        <img
          src="./arrow_G.png"
          style="width: 12px; float: right; margin: 16px"
        />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>

      <div
        style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        "
      >
        &nbsp;&nbsp;&nbsp;&nbsp;学历：<span style="color: grey"
          >&nbsp;&nbsp;{{ userDegree }}</span
        >
        <img
          src="./arrow_G.png"
          style="width: 12px; float: right; margin: 16px"
        />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>

      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>

      <div
        style="
          width: 360px;
          height: 56px;
          font-size: 16px;
          text-align: left;
          vertical-align: top;
          line-height: 56px;
        "
      >
        &nbsp;&nbsp;&nbsp;&nbsp;手机号：<span style="color: grey"
          >&nbsp;&nbsp;{{ userPhoneNum }}</span
        >
        <img
          src="./arrow_G.png"
          style="width: 12px; float: right; margin: 16px"
        />
      </div>
      <center>
        <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1)" />
      </center>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import api from '../../../api/api'
export default {
  data () {
    return {
      userID: "OSIR4",
      userSex: "男",
      userBirth: "2004-9-1",
      userDegree: "本科在读",
      userPhoneNum: "18157455023",
      empiricalValue: 100,
      totalEmpir: 1800,
      percentage: 30,
    }
  },
  methods: {
    backTolast () {
      history.back()
    },
    moreInfor () {
      alert("more")
    },

  },
  created () {
    const url = `http://${api.api}/Person`
    axios.get(url, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }, withCredentials: true })
      .then(res => {
        console.log(res.data)
        this.userID = res.data.name
        this.userSex = res.data.sex
        this.userPhoneNum = res.data.account
        this.userBirth = res.data.birth[0] + '-' + res.data.birth[1] + '-' + res.data.birth[2]
        this.userDegree = res.data.degree
      })
      .catch(error => {
        console.error(error)
      })
  }
  // watch: {
  //     percentage() {
  //         // 当percentage变化时，更新进度条的颜色
  //         this.$nextTick(() => {
  //             const gradient = `linear-gradient(to right, red, yellow, green, blue, indigo, violet)`; // 渐变颜色
  //             const progressStyle = `.progress-bar-inner {background: ${gradient};}`; // 设置进度条的颜色
  //             this.$el.querySelector('.progress-bar-inner').style.setProperty('background', progressStyle);
  //         });
  //     },
  // },

}
</script>

<style scoped>
* {
  margin: 0px;
  overflow: hidden;
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
.progress-bar {
  transition: width 0.2s linear;
  margin-top: 20px;
  width: 292px;
  height: 5px;
  background: linear-gradient(
    to right,
    rgba(134, 184, 173, 1),
    rgba(151, 218, 168, 1),
    rgba(247, 224, 92, 1),
    rgba(242, 97, 19, 1),
    rgba(161, 21, 21, 1)
  );
  border-radius: 18px;
  /* 背景色 */
}

.progress-bar-inner {
  transition: width 0.2s linear;
  height: 100%;
  background-color: #ddd;
  float: right;
  /* 初始颜色 */
}

.glassContainer {
  width: 360px;
  height: 184px;
  color: white;
  gap: 20px;
  backdrop-filter: blur(20px);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.15) 0%,
    rgba(255, 255, 255, 0.1) 40%
  );
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 8px;
  /* border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid; */
}

.total {
  height: 640px;
  width: 360px;
  overflow: hidden;
  background-color: rgba(158, 152, 152, 0.2);
}

.status_bar {
  position: relative;
  left: 0px;
  top: 0px;
  width: 360px;
  height: 24px;
  opacity: 1;
  background: rgba(158, 152, 152, 0.4);
}

#user_label {
  position: relative;
  height: 184px;
  width: 360px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
}

.return_label {
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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  height: 300px;
  color: rgba(0, 90, 110, 1);
}
</style>