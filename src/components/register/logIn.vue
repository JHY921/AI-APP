<template>
  <div
    style="position: relative; width: 360px; height: 640px; overflow: hidden"
  >
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
          width: 360px;
          height: 361px;
          opacity: 0.8;
          border-radius: 42px;
          background: linear-gradient(
            220deg,
            rgba(143, 205, 211, 1) 30%,
            rgba(143, 205, 211, 0) 90%
          );
          filter: blur(0px);
          z-index: 10;
        "
      ></div>
      <div
        style="
          z-index: 9;
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
        :class="{ 'fade-out': Skip, 'fade-in': !Skip }"
        style="z-index: 11; position: absolute; left: 47%; top: 15%"
        src="./logIn.png"
      />

      <div
        :class="{ 'fade-out': Skip, 'fade-in': !Skip }"
        style="z-index: 99; position: absolute; left: 8%; top: 59%; width: 100%"
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
            v-model="account"
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
            v-model="password"
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
            @click="isRemember"
            :class="{ remPass: isRem }"
            style="
              width: 20px;
              height: 20px;
              border-radius: 50%;
              border: none;
              box-shadow: 3px 0px 10px 0px rgba(0, 0, 0, 0.1) inset;
            "
          ></button>
        </div>
        <!-- <div style="margin-top: 20px; margin-left: 100px;"> -->
        <div style="width: 100%; margin-top: 20px">
          <button
            @click="login"
            style="
              width: 117px;
              height: 39px;
              background-color: #037585;
              border-radius: 30px;
              border: none;
              color: #ffffff;
              font-size: 24px;
              margin-left: 100px;
              margin-right: 20px;
              font-family: SmileySans;
              line-height: 23px;
              display: inline-block;
            "
          >
            登录
          </button>
          <div style="display: inline-block">
            <p
              style="
                color: #037a8587;
                font-size: 16px;
                -webkit-transform-origin-x: 0;
                -webkit-transform: scale(0.6);
              "
            >
              &nbsp;&nbsp;&nbsp;&nbsp;还没有账号？
            </p>
            <button
              @click="swapCircles"
              style="
                width: 70px;
                height: 25px;
                border: none;
                font-size: 10px;
                font-family: SmileySans;
                line-height: 10px;
                top: 60%;
                background-color: #03758573;
                border-radius: 12px;
                color: white;
              "
            >
              注册一个
            </button>
          </div>
        </div>
        <div
          style="
            position: relative;
            width: 100%;
            margin-left: 115px;
            margin-top: 20px;
          "
        >
          <p
            style="
              font-size: 12px;
              font-weight: 400;
              letter-spacing: 0px;
              line-height: 14.4px;
              color: rgba(0, 100, 122, 0.4);
              vertical-align: top;
              margin-bottom: 3px;
            "
          >
            第三方软件登录
          </p>
          <img
            src="./wechat.png"
            style="
              width: 28px;
              height: 28px;
              margin-left: 7px;
              margin-right: 15px;
            "
            @click="wechatLogin()"
          />
          <img
            src="./QQ.png"
            style="width: 28px; height: 28px"
            @click="QQLogin()"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
import { showDialog } from 'vant'
import 'vant/es/dialog/style'
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
      circle1Zindex: '9',
      circle2Zindex: '8',
      circle1Opa: 0.7,
      circle2Opa: 1,
      Skip: false,
      isRem: false,//记住密码
      account: '',//账号
      password: '',//密码
    }
  },
  methods: {
    async login () {
      try {
        const response = await axios.post('https://39.106.71.161:5000', {
          username: this.account,
          password: this.password
        })
        console.log(response.data.message) // 登录成功消息
        // 可以在此处理登录成功后的逻辑，如导航到其他页面
      } catch (error) {
        console.error('登录失败:', error.response.data.message)
      }
    },
    // login () {
    //   axios.post(' https://39.106.71.161:5000', {
    //     account: this.account,
    //     password: this.password
    //   }).then(res => {
    //     if (res.data['operation'] == false) {
    //       showDialog({ message: '账号或密码错误' })
    //     }
    //   })
    //   //this.$router.push('/Home')
    // },
    onAfterLeave () {
      this.$router.push('/signup')
    },
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
      this.Skip = !this.Skip
      setTimeout(() => {
        this.$router.push('/signup')
      }, 300) // 这里的500表示延迟时间，根据动画持续时间来调整

    },
    changeInfor (prop1, prop2) {
      const tempW = this[prop1]
      this[prop1] = this[prop2]
      this[prop2] = tempW
    },
    isRemember () {
      this.isRem = !this.isRem
    },
    QQLogin () {

    },
    wechatLogin () {

    }
  }
};
</script>
  
<style scoped>
* {
  font-family: dyh;
}
.fade-out {
  -webkit-animation: fade-out 0.5s ease-out both;
  animation: fade-out 0.5s ease-out both;
}

.fade-in {
  -webkit-animation: fade-in 0.5s ease-out both;
  animation: fade-in 0.5s ease-out both;
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

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.remPass {
  background: rgba(0, 0, 0, 0.6);
}

* {
  margin: 0px;
  overflow: hidden;
}

.total {
  position: relative;
  width: 360px;
  height: 640px;
  overflow: hidden;
}

.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  transition: all 0.3s ease-in-out;
}
</style>