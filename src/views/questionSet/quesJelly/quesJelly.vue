<template>
  <div class="total">
    <div class="status_bar"></div>
    <div class="quesShade"></div>
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
            width: 280px;
            height: auto;
            padding-top: 20px;
            font-family: dyh;
            font-size: 48px;
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
    <div
      class="answer_container"
      style="font-family: dyh; font-size: 25px; font-weight: 400; color: white">
      <img
        src="./ans1.png" @click="chooseA"
        style="width: 240px; margin-top: -55px; margin-left: -75px;"
        :style="{ 'transform': scaleAnsA}"
      />
      <div
        style="
          width: 160px;
          height: 180px;
          position: absolute;
          margin-top: 70px;
          margin-left: 50px;
        "
      >
        {{ quesA }}
        <!-- 题目区域     -->
      </div>
      <img @click="chooseB"
        src="./ans2.png" :style="{ 'transform': scaleAnsB}"
        style="width: 240px; margin-top: -60px; margin-left: 165px"
      />
      <div
        style="
          width: 200px;
          height: 120px;
          position: absolute;
          margin-left: 280px;
          margin-top: 50px;
        "
      >
        {{ quesB }}
        <!-- 题目区域     -->
      </div>
      <img @click="chooseC"
        src="./ans3.png" :style="{ 'transform': scaleAnsC}"
        style="width: 160px; margin-top: 100px; margin-left: 150px"
      />
      <div
        
        style="
          width: 160px;
          height: 140px;
          position: absolute;
          margin-left: 200px;
          margin-top: 180px;
        "
      >
        {{ quesC }}
      </div>
      <img @click="chooseD"
        src="./ans4.png" :style="{ 'transform': scaleAnsD}"
        style="width: 250px; margin-top: 180px; margin-left: -40px"
      />
      <div
        style="
          width: 180px;
          height: 160px;
          position: absolute;
          margin-top: 280px;
          margin-left: 50px;
        "
      >
        {{ quesD }}
      </div>
      <img @click="chooseE"
        src="./ans5.png" :style="{ 'transform': scaleAnsE}"
        style="width: 240px; margin-top: 160px; margin-left: 200px"
      />
      <div
        style="
          width: 180px;
          height: 160px;
          position: absolute;
          margin-top: 300px;
          margin-left: 280px;
        "
      >
        {{ quesE }}
        <!-- 题目区域     -->
      </div>
    </div>
    <div class="return_label">
      <div class="returnShadeL"></div>
      <div
        @click="lastQuestion"
        style="
          position: relative;
          display: inline-block;
          width: 180px;
          height: 100%;
          z-index: 10000000;
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
      <div class="returnShadeR"></div>
      <div
        @click="nextQuestion"
        style="
          position: relative;
          z-index: 1000000;
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
import 'vant/es/toast/style'
import qust from '../../../api/question'
export default {
  data () {
    return {
      scaleAnsA:"scale(1)",
      scaleAnsB:"scale(1)",
      scaleAnsC:"scale(1)",
      scaleAnsD:"scale(1)",
      scaleAnsE:"scale(1)",
      nowQuesNum: 1,
      totalQuesNum: 5,
      quesContainer: "选择您熟练掌握的语言？",
      quesA: "C语言",
      quesB: "Java",
      quesC: "C++",
      quesD: "Python",
      quesE: "其他",
      quesF: "无",
      id: '',
    }
  },
  created () {
    this.id = this.$route.params.userId
  },
  methods: {
    lastQuestion () {
      showToast('已经是第一个问题')
    },
    nextQuestion () {
      console.log('quest', qust[0])
      this.$router.push({ name: 'questionSet2', params: { userId: this.id } })
    },
    chooseA () {
      qust[0] = 1;
      this.scaleAnsA="scale(1.2)";
    },
    chooseB () {
      qust[0] = 2;
      this.scaleAnsB="scale(1.2)";
    },
    chooseC () {
      qust[0] = 3;
      this.scaleAnsC="scale(1.2)";
    },
    chooseD () {
      qust[0] = 4;
      this.scaleAnsD="scale(1.2)";
    },
    chooseE () {
      qust[0] = 5;
      this.scaleAnsE="scale(1.2)";
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
img {
  position: absolute;
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
.quesShade {
  position: absolute;
  height: 200px;
  width: 360px;
  z-index: 100000;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.returnShadeL {
  position: absolute;
  width: 180px;
  height: 100%;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  background-color: white;
  z-index: 100000;
}
.returnShadeR {
  position: absolute;
  margin-left: 180px;
  margin-top: -60px;
  background-color: white;
  width: 180px;
  height: 100%;
  border-top-left-radius: 28px;
  border-bottom-left-radius: 28px;
  z-index: 100000;
}
.answer_container {
  position: relative;
  height: 360px;
  width: 360px;
  margin: 0;

  background-image: radial-gradient(rgba(0, 87, 107, 0.9) 10%, transparent 0);
  background-size: 5px 5px;
  /* background-image:
    radial-gradient(rgba(0, 87, 107, 0.9) 30%, transparent 0);
    background-size: 5px 5px;
    background-position: 0 0, 60px 40px; */
}

.return_label {
  position: relative;
  height: 56px;
  width: 360px;
  z-index: 1000000;
}
</style>