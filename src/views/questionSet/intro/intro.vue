<template>
  <div
    class="total"
    style="
      width: 100%;
      height: 640px;
      background: linear-gradient(
        180deg,
        rgba(96, 147, 158, 1) 0%,
        rgba(10, 81, 97, 1) 100%
      );
    "
  >
    <div
      class="animated-element"
      :class="{ 'slide-up': isAnimating }"
      style="
        position: relative;
        left: 0px;
        top: 0px;
        width: 360px;
        height: 492px;
        opacity: 1;
        border-radius: 0px 0px 32px 38px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.09),
          0px 4px 2px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09),
          0px 16px 8px rgba(0, 0, 0, 0.09), 0px 32px 16px rgba(0, 0, 0, 0.09);
      "
    >
      <img
        src="./主体11.png"
        style="
          position: absolute;
          left: 97px;
          top: 120px;
          width: 199px;
          height: 183px;
          opacity: 1;
        "
        alt=""
      />
      <div
        style="
          position: absolute;
          left: 115px;
          top: 309px;
          width: 130px;
          height: 22px;
          opacity: 1;
          /** 文本1 */
          font-family: dyh;
          font-size: 18px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 21.6px;
          color: rgba(10, 81, 97, 1);
          text-align: left;
          vertical-align: top;
        "
      >
        让我们更好地了解你
      </div>
      <div
        class="wire1"
        style="
          position: absolute;
          left: 44px;
          top: 35px;
          width: 295px;
          height: 405px;
          opacity: 1;
          border-radius: 20px;
          border: 0.6px solid rgba(10, 81, 97, 0.55);
        "
      ></div>
      <div
        class="wire2"
        style="
          position: absolute;
          left: 29px;
          top: 20px;
          width: 295px;
          height: 405px;
          opacity: 1;
          border-radius: 20px;
          border: 0.6px solid rgba(10, 81, 97, 0.55);
        "
      ></div>
    </div>

    <div
      @click="animateUp"
      class="animated-text"
      :class="{ slide: isAnimating }"
      style="
        margin-top: 30px;
        width: 100%;
        /** 文本1 */
        font-family: dyh;
        font-size: 36px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 43.2px;
        color: rgba(255, 255, 255, 1);
        text-align: left;
        vertical-align: top;
        text-align: center;r
      "
    >
      点击开始
    </div>
  </div>
</template>
<style scoped>
.animated-element {
  transition: transform 1s ease;
}

.slide-up {
  transform: translateY(-100%);
}
.animated-text {
  transition: transform 1s;
}
.slide {
  transform: translateY(-300px);
}
</style>
<script>
export default {
  data () {
    return {
      isAnimating: false,
    }
  },
  methods: {
    animateUp () {
      this.isAnimating = true
      // setTimeout(() => {
      //   this.$router.push('/questionSet1')
      // }, 1000)
    }
  }
}
</script>