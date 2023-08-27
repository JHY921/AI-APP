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
        :class="{ 'fade-out': Skip, 'fade-in': !Skip }"
        style="z-index: 10011; position: absolute; left: 47%; top: 15%"
        src="../../assets/icons/register/signUp.png"
      />

      <div
        :class="{ 'fade-out': Skip, 'fade-in': !Skip }"
        style="
          z-index: 999999;
          position: absolute;
          left: 8%;
          top: 57%;
          width: 100%;
        "
      >
        <div style="font-size: 18px; color: #008c99; margin-bottom: 10px">
          手机号：
          <input
            style="
              margin-left: 2px;
              background-color: #ffffff;
              border-radius: 24px;
              box-shadow: 3px 4px 5px #0160752b inset;
              height: 28px;
              width: 169px;
              border: none;
            "
            v-model="phoneNumber"
          />
          <p
            style="color: red; font-size: 6px; margin-left: 100px; opacity: 0.6"
            v-if="istel"
          >
            手机号格式错误
          </p>
        </div>
        <div style="font-size: 18px; color: #008c99; margin-bottom: 10px">
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
        <div style="font-size: 18px; color: #008c99; margin-bottom: 10px">
          确认：
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
            v-model="checkPassword"
          />
          <p
            style="color: red; font-size: 6px; margin-left: 100px; opacity: 0.6"
            v-if="ispassword"
          >
            两次密码输入不一致
          </p>
        </div>
        <div style="font-size: 18px; color: #008c99">
          验证码：
          <input
            style="
              margin-left: 2px;
              background-color: #ffffff;
              border-radius: 24px;
              box-shadow: 3px 4px 5px #0160752b inset;
              height: 28px;
              width: 100px;
              border: none;
            "
            v-model="checkNumber"
          />
          <button
            style="
              width: 70px;
              height: 20px;
              border-radius: 10px;
              border: none;
              background: rgba(255, 255, 255, 1);
              font-size: 10px;
              font-weight: 400;
              letter-spacing: 0px;
              line-height: 12px;
              color: rgba(147, 183, 186, 1);
              text-align: left;
              margin-left: 25px;
            "
          >
            发送验证码
          </button>
        </div>

        <div
          style="
            margin-top: 20px;
            margin-left: 90px;
            display: flex;
            align-items: center;
          "
        >
          <button
            @click="totest"
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
            注册
          </button>
          <button
            @click="swapCircles"
            style="
              width: 60px;
              height: 20px;
              border-radius: 19.5px;
              border: none;
              background: rgba(255, 255, 255, 1);
              font-size: 10px;
              font-weight: 400;
              letter-spacing: 0px;
              line-height: 12px;
              color: rgba(147, 183, 186, 1);
              text-align: left;
              margin-left: 25px;
            "
          >
            返回
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import axios from 'axios'
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
      Skip: false,
      isRem: false,//记住密码
      account: '',//账号
      password: '',//密码
      checkPassword: '',//确认密码
      phoneNumber: '',
      checkNumber: '',
      istel: 0,
      ispassword: 0
    }
  },
  methods: {
    login () {
      if (this.password == this.checkPassword) {
        var acc = { account: this.account, password: this.password }
        axios.post('http://127.0.0.1:5000/sign_up/register', acc).then(res => {
          this.$router.push({ name: 'userinfo', params: { userId: res.data } })
        })
      }
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
        this.$router.push('/login')
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
    validateTel (value) {
      const pattern = /^1[3456789]\d{9}$/
      if (!pattern.test(value)) {
        this.istel = 1
      } else {
        this.istel = 0
      }
    },
    checknum (value) {
      if (this.password != value)
        this.ispassword = 1
      else
        this.ispassword = 0
    }
  },
  watch: {
    phoneNumber (newValue) {
      this.validateTel(newValue)
    },
    checkPassword (newValue) {
      this.checknum(newValue)
    }
  }
};
</script>
  
<style scoped>
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