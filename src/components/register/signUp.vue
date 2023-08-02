<template>
  <div style="position: relative; overflow: auto">
    <div class="total">
      <!-- <img style="position: relative; z-index: -1; top: -700px; left: -1000px;" src="./background.png"/> -->
      <div
        class="circle"
        :style="{
          position: 'absolute',
          zIndex: circle1Zindex,
          opacity: circle1Opa,
          width: circle1Width,
          height: circle1Height,
          backgroundColor: circle1Color,
          transform: `translate(${circle1Pos.x}px, ${circle1Pos.y}px)`,
          boxShadow:
            '-3px 5px 30px 10px rgba(255, 255, 255, 0.7) inset, 0px 0px 5px 0px rgba(0,0,0,0.2)',
        }"
      ></div>
      <div
        class="circle"
        :style="{
          position: 'absolute',
          zIndex: circle2Zindex,
          opacity: circle2Opa,
          width: circle2Width,
          height: circle2Height,
          backgroundColor: circle2Color,
          transform: `translate(${circle2Pos.x}px, ${circle2Pos.y}px)`,
          boxShadow:
            '-3px 5px 30px 10px rgba(255, 255, 255, 0.7) inset, 0px 0px 5px 0px rgba(0,0,0,0.2)',
        }"
      ></div>

      <div
        style="
          position: absolute;
          left: 78px;
          top: 345px;
          width: 300px;
          height: 361px;
          opacity: 0.8;
          border-radius: 42px;
          background: linear-gradient(
            220deg,
            rgba(143, 205, 211, 1) 30%,
            rgba(143, 205, 211, 0) 90%
          );
          filter: blur(0px);
          z-index: 10010;
        "
      ></div>
      <div
        style="
          z-index: 10009;
          position: absolute;
          left: -4px;
          top: 320px;
          width: 535px;
          height: 431px;
          opacity: 0.4;
          border-radius: 79px;
          background: linear-gradient(
            223.93deg,
            rgba(0, 140, 153, 1) 0%,
            rgba(0, 140, 153, 0) 100%
          );
        "
      ></div>
      <img
        :class="{ 'fade-out': Skip }"
        style="z-index: 10011; position: absolute; left: 47%; top: 15%"
        src="../../assets/icons/register/字体.png"
      />
      <div
        :class="{ 'fade-out': Skip }"
        style="
          z-index: 999999;
          position: absolute;
          left: 8%;
          top: 59%;
          width: 100%;
        "
      >
        <div style="font-size: 18px; margin-bottom: 20px; color: #008c99">
          账号：
          <input
            style="
              margin-left: 20px;
              background-color: #ffffff;
              border-radius: 24px;
              box-shadow: 3px 4px 5px #0160752b inset;
              height: 28px;
              width: 169px;
              border: none;
            "
          />
        </div>
        <div style="font-size: 18px; color: #008c99">
          密码：
          <input
            style="
              margin-left: 20px;
              background-color: #ffffff;
              border-radius: 24px;
              box-shadow: 3px 4px 5px #0160752b inset;
              height: 28px;
              width: 169px;
              border: none;
            "
          />
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            height: 30px;
            font-size: 12px;
            margin-top: 3px;
            margin-left: 90px;
            -webkit-transform-origin-x: 0;
            -webkit-transform: scale(0.9);
          "
        >
          <span style="margin-right: 10px">是否记住密码</span>
          <button
            style="
              width: 20px;
              height: 20px;
              border-radius: 50%;
              border: none;
              box-shadow: 3px 0px 10px 0px rgba(0, 0, 0, 0.1) inset;
            "
          ></button>
        </div>
        <div style="margin-top: 20px; margin-left: 100px">
          <button
            @click="swapCircles"
            style="
              width: 117px;
              height: 39px;
              background-color: #037585;
              border-radius: 30px;
              border: none;
              color: #ffffff;
              font-size: 24px;
              font-family: SmileySans;
              line-height: 23px;
            "
          >
            登录
          </button>
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            height: 30px;
            font-size: 12px;
            margin-top: 10px;
            margin-left: 90px;
          "
        >
          <span style="margin-right: 0px; color: #037a8587">还没有账号？</span>
          <button
            @click="swapCircles"
            style="
              width: 70px;
              height: 16px;
              border: none;
              font-size: 10px;
              font-family: SmileySans;
              line-height: 10px;
              background-color: #03758573;
              border-radius: 8px;
              color: white;
            "
          >
            注册一个
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data () {
    return {
      circle1Color: 'rgb(94, 196, 206)',
      circle2Color: 'rgba(180, 233, 238, 0.6)',
      circle1Pos: { x: 80, y: -50 },
      circle2Pos: { x: -70, y: -40 },
      circle1Width: '350px',
      circle1Height: '350px',
      circle2Width: '250px',
      circle2Height: '250px',
      circle1Zindex: '10009',
      circle2Zindex: '10008',
      circle1Opa: 0.7,
      circle2Opa: 1,
      Skip: false
    }
  },
  methods: {
    swapCircles () {
      // Swap positions with animation
      const tempPos = Object.assign({}, this.circle1Pos)
      this.circle1Pos = Object.assign({}, this.circle2Pos)
      this.circle2Pos = Object.assign({}, tempPos)

      this.changeInfor("circle1Color", "circle2Color")
      this.changeInfor("circle1Height", "circle2Height")
      this.changeInfor("circle1Width", "circle2Width")
      this.changeInfor("circle1Zindex", "circle2Zindex")
      this.changeInfor("circle1Opa", "circle2Opa")
      this.Skip = true
    },
    changeInfor (prop1, prop2) {
      const tempW = this[prop1]
      this[prop1] = this[prop2]
      this[prop2] = tempW
    }
  }
};
</script>
  
<style scoped>
.fade-out {
  -webkit-animation: fade-out 1s ease-out both;
  animation: fade-out 1s ease-out both;
}

@-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

* {
  margin: 0px;
  overflow: auto;
}

.total {
  position: relative;
  width: 360px;
  height: 640px;
  overflow: auto;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  transition: all 0.3s ease-in-out;
}
</style>