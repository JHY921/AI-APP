<template>
  <div
    style="position: relative; width: 360px; height: 640px; overflow: hidden"
  >
    <div class="total">
      <div
        style="
          height: 24px;
          width: 100%;
          z-index: 9999999;
          background-color: rgb(128, 128, 128);
        "
      ></div>
      <div
        :class="{ moveI: loading }"
        style="
          position: absolute;
          left: -400px;
          top: -76px;
          width: 400px;
          height: 200px;
          opacity: 0.8;
          z-index: -1;
          border-radius: 50px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(17, 118, 128, 1) 100%
          );
        "
      ></div>
      <div
        :class="{ moveJ: loading }"
        style="
          position: absolute;
          left: -400px;
          top: -76px;
          width: 400px;
          height: 200px;
          z-index: -1;
          border-radius: 50px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(17, 118, 128, 0.2) 100%
          );
        "
      ></div>

      <div
        :class="{ moveS: loading }"
        style="
          position: absolute;
          left: 78px;
          top: 345px;
          width: 500px;
          height: 800px;
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
        :class="{ moveB: loading }"
        style="
          z-index: 10009;
          position: absolute;
          left: -4px;
          top: 320px;
          width: 535px;
          height: 831px;
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
        style="position: relative; margin: 30px"
        src="../../assets/icons/register/useinfor.png"
      />
      <div
        :class="{ 'fade-out': Skip, 'fade-in': !Skip }"
        style="
          z-index: 999999;
          position: absolute;
          left: 20%;
          top: 33%;
          width: 100%;
        "
      >
        <div
          style="
            font-size: 18px;
            margin-bottom: 20px;
            color: rgba(0, 103, 112, 1);
          "
        >
          姓名：
          <input
            style="
              margin-left: 20px;
              background-color: #ffffff;
              border-radius: 24px;
              box-shadow: 3px 4px 5px #0160752b inset;
              height: 28px;
              width: 114px;
              border: none;
            "
            v-model="account"
          />
        </div>
        <div
          style="
            font-size: 18px;
            margin-bottom: 20px;
            color: rgba(0, 103, 112, 1);
          "
        >
          生日：
          <input
            style="
              margin-left: 20px;
              background-color: #ffffff;
              border-radius: 24px;
              box-shadow: 3px 4px 5px #0160752b inset;
              height: 28px;
              width: 168px;
              border: none;
            "
            v-model="account"
          />
        </div>
        <div
          style="
            font-size: 18px;
            margin-bottom: 20px;
            color: rgba(0, 103, 112, 1);
          "
        >
          学历：
          <input
            style="
              margin-left: 20px;
              background-color: #ffffff;
              border-radius: 24px;
              box-shadow: 3px 4px 5px #0160752b inset;
              height: 28px;
              width: 114px;
              border: none;
            "
            v-model="account"
          />
        </div>
        <div
          style="
            font-size: 18px;
            margin-bottom: 20px;
            color: rgba(0, 103, 112, 1);
          "
        >
          城市：
          <input
            style="
              margin-left: 20px;
              background-color: #ffffff;
              border-radius: 24px;
              box-shadow: 3px 4px 5px #0160752b inset;
              height: 28px;
              width: 114px;
              border: none;
            "
            v-model="account"
          />
        </div>
        <div
          style="
            font-size: 18px;
            margin-bottom: 20px;
            color: rgba(0, 103, 112, 1);
          "
        >
          电话：
          <input
            style="
              margin-left: 20px;
              background-color: #ffffff;
              border-radius: 24px;
              box-shadow: 3px 4px 5px #0160752b inset;
              height: 28px;
              width: 168px;
              border: none;
            "
            v-model="account"
          />
        </div>
      </div>
      <div
        :class="{ 'fade-out': Skip, 'fade-in': !Skip }"
        style="
          position: relative;
          z-index: 999999;
          top: 60%;
          left: 33%;
          display: flex;
          align-items: center;
        "
      >
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
          注册
        </button>
        <button
          style="
            width: 60px;
            height: 20px;
            border-radius: 19.5px;
            border: none;
            background: rgba(255, 255, 255, 1);
            font-size: 10px;
            font-weight: 400;
            color: rgba(147, 183, 186, 1);
            text-align: left;
            margin-left: 30px;
          "
        >
          再想想
        </button>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data () {
    return {
      loading: false,
    }
  },
  created () {
    setTimeout(() => {
      this.loading = true
    }, 100)
  },

  methods: {
  }
};
</script>
  
<style scoped>
.fade-out {
  -webkit-animation: fade-out 1s ease-out both;
  animation: fade-out 1s ease-out both;
}
.fade-in {
  -webkit-animation: fade-in 2s ease-out both;
  animation: fade-in 2s ease-out both;
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
.moveS {
  transform: translate(-50px, -196px);
  transition: transform 1s;
}

.moveB {
  transform: translate(0, -196px);
  transition: transform 1s;
}
.moveI {
  transform: translate(280px, 0px);
  transition: transform 1s;
}

.moveJ {
  transform: translate(290px, 0px);
  transition: transform 1s;
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
</style>