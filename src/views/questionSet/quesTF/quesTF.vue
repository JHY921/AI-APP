<template>
  <div class="total">
    <div class="status_bar"></div>
    <div class="question_container">
      <div
        style="
          position: absolute;
          margin-left: 20px;
          width: 340px;
          height: 180px;
          border-bottom: 1.5px solid rgba(0, 121, 148, 0.9);
          border-left: 1.5px solid rgba(0, 121, 148, 0.9);
          border-bottom-left-radius: 15px;
        "
      ></div>
      <div
        style="
          position: absolute;
          margin-left: 20px;
          width: 340px;
          height: 160px;
          border-bottom: 1.5px solid rgba(0, 121, 148, 0.6);
          border-left: 1.5px solid rgba(0, 121, 148, 0.6);
          border-bottom-left-radius: 15px;
        "
      ></div>
      <div
        style="
          position: absolute;
          margin-left: 40px;
          width: 320px;
          height: 180px;
          border-bottom: 1.5px solid rgba(0, 121, 148, 0.6);
          border-left: 1.5px solid rgba(0, 121, 148, 0.6);
          border-bottom-left-radius: 15px;
        "
      ></div>
      <div
        style="
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          z-index: 0;
          border: 2px solid rgba(0, 121, 148, 0.2);
          margin-top: -140px;
          margin-left: 260px;
        "
      ></div>
      <div
        style="
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          z-index: 0;
          border: 2px solid rgba(0, 121, 148, 0.2);
          margin-top: -160px;
          margin-left: 280px;
        "
      ></div>
      <div
        style="
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          z-index: 0;
          border: 2px solid rgba(0, 121, 148, 0.2);
          margin-top: -120px;
          margin-left: 240px;
        "
      ></div>

      <div
        style="
          margin-left: 50px;
          width: 310px;
          height: 180px;
          font-size: 42px;
          font-weight: 400;
          letter-spacing: 0px;
          color: rgba(0, 81, 99, 1);
          text-align: left;
          vertical-align: middle;
        "
      >
        <div
          style="
            position: relative;
            width: auto;
            height: auto;
            padding-top: 20px;
            font-family: dyh;
          "
        >
          {{ quesContainer }}
        </div>
      </div>
      <img
        src="./quesIcon.png"
        style="
          position: absolute;
          margin-top: -192px;
          margin-left: 295px;
          width: 80px;
          height: 80px;
        "
      />
    </div>
    <div class="answer_container" style="font-family: dyh; font-size: 80px">
      <div :style="{ 'transform': scaleAnsA}"
        @click="chooseA"
        style="
          line-height: 80px;
          color: rgba(255, 255, 255, 1);
          vertical-align: top;
          font-size: 36px;
          display: inline-block;
          width: 50%;
          height: 100%;
          background: rgba(0, 121, 148, 1);
          border-top-right-radius: 16px;
          border-bottom-right-radius: 16px;
          padding-top: 50px;
        "
      >
        &nbsp;&nbsp;&nbsp;&nbsp;{{ quesA }},
        <p>有开源项目或社区贡献</p>
      </div>
      <div :style="{ 'transform': scaleAnsB}"
        @click="chooseB"
        style="
          line-height: 80px;
          color: rgba(255, 255, 255, 1);
          vertical-align: top;
          font-size: 36px;
          display: inline-block;
          width: 50%;
          height: 100%;
          background: rgba(0, 92, 112, 1);
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
          padding-top: 50px;
        "
      >
        &nbsp;&nbsp;&nbsp;&nbsp;{{ quesB }},
        <p>没有相关贡献</p>
      </div>
    </div>
    <div class="return_label">
      <div
        @click="lastQuestion"
        style="
          display: inline-block;
          width: 180px;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(239, 249, 251, 1) 0%,
            rgba(188, 221, 228, 1) 100%
          );
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
          border-top-right-radius: 28px;
          border-bottom-right-radius: 28px;
        "
      >
        <img
          src="./last.png"
          style="
            position: absolute;
            height: 35px;
            margin-top: 12px;
            margin-left: 5px;
          "
        />
        <img
          src="./back.png"
          style="
            position: absolute;
            height: 25px;
            margin-left: 135px;
            margin-top: 14px;
          "
        />
      </div>
      <div
        @click="nextQuestion"
        style="
          display: inline-block;
          width: 180px;
          height: 100%;
          background: rgba(0, 121, 148, 0.48);
          border-top-left-radius: 28px;
          border-bottom-left-radius: 28px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        "
      >
        <div
          style="
            position: absolute;
            font-size: 30px;
            padding-top: 12px;
            margin-left: 15px;
            width: 60px;
            height: 44px;
            color: aliceblue;
            overflow: hidden;
            border-right: 3px solid rgba(0, 73, 89, 0.49);
            text-shadow: 0px 0px 6px white;
          "
        >
          {{ nowQuesNum }}/{{ totalQuesNum }}
        </div>
        <div
          style="
            position: absolute;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
          "
        >
          <img
            src="./goOn.png"
            style="
              position: absolute;
              height: 35px;
              margin-left: 90px;
              margin-top: 12px;
            "
          />
          <img
            src="./next.png"
            style="
              position: absolute;
              height: 25px;
              margin-left: 145px;
              margin-top: 14px;
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { showToast } from 'vant'
import quest from '../../../api/question'
import api from '../../../api/api'
import axios from 'axios'
export default {
  data () {
    return {
      nowQuesNum: 5,
      totalQuesNum: 5,
      quesContainer: "您是否有在开源项目或计算机社区中做出贡献？",
      quesA: "是",
      quesB: "否",
      id: '',
      scaleAnsA:"scale(1)",
      scaleAnsB:"scale(1)",
    }
  },
  created () {
    this.id = this.$route.params.userId
  },
  methods: {
    lastQuestion () {
      history.back()
    },
    nextQuestion () {
      console.log(quest)
      axios.post(`http://${api.api}/question`, {
        qa: quest,
        userId: this.id
      }).then(res => {
        console.log(res.data)
        showToast('注册成功，返回登录')
        this.$router.push('../login')
      }).catch(err => {
        console.log(err)
      })

    },
    chooseA () {
      quest[4] = 1;
      this.scaleAnsA="scale(1.2)";
    },
    chooseB () {
      quest[4] = 2;
      this.scaleAnsB="scale(1.2)";
    },
  }
};
</script>
  
<style scoped>
* {
  margin: 0px;
  padding: 0px;
  border-radius: 0px;
  transition: transform 0.5s;
}

.total {
  position: relative;
  width: 360px;
  height: 640px;
  overflow: hidden;
  background: white;
}

.status_bar {
  position: relative;
  left: 0px;
  top: 0px;
  width: 360px;
  height: 24px;
  opacity: 1;
  background: rgba(158, 152, 152, 0.4);
  z-index: 99999;
}

.question_container {
  position: relative;
  z-index: 100000;
  height: 200px;
  width: 360px;
  background: linear-gradient(
    360deg,
    rgba(0, 121, 148, 0.2) 0%,
    rgba(255, 255, 255, 1) 40%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
}

.answer_container {
  position: relative;
  height: 360px;
  width: 360px;
  font-size: 0px;
  overflow: hidden;
}

.return_label {
  position: relative;
  height: 56px;
  width: 360px;
  z-index: 1000000;
}
</style>