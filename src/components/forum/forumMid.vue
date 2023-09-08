<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: "zan",
  data () {
    return {

    }
  },
  methods: {
    go (path) {
      this.$router.push(path)
    },
  },
  mounted () {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      scrollbar: '.swiper-scrollbar',
    })
  }
}
</script>
<template>
  <div class="items">
    <div class="item-info">
      <img
        src="../../assets/icons/forum/forumarea/课程.png"
        @click="go('/Course')"
      />
      <p>课程</p>
    </div>
    <div class="item-info" @click="go('/vedio')">
      <img src="../../assets/icons/forum/forumarea/学习工具.png" />
      <p>轻松学习</p>
    </div>
    <div class="item-info" @click="go('/resource')">
      <img src="../../assets/icons/forum/forumarea/资源.png" />
      <p>资源</p>
    </div>
    <div class="item-info">
      <img src="../../assets/icons/forum/forumarea/更多.png" />
      <p>更多</p>
    </div>
  </div>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <img
        src="../../assets/icons/forum/forumarea/banner1.png"
        class="swiper-slide"
      />
      <img
        src="../../assets/icons/forum/forumarea/banner1.png"
        class="swiper-slide"
      />
      <img
        src="../../assets/icons/forum/forumarea/banner1.png"
        class="swiper-slide"
      />
    </div>
    <div class="block1"></div>
    <div class="block2"></div>
    <div class="block3"></div>
    <div class="block4"></div>
    <!-- 分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<style>
.block1 {
  position: absolute;
  left: 44.1%;
  margin-top: -4%;
  width: 2.2%;
  height: 1.6px;
  opacity: 1;
  border-radius: 2.5px;
  background: rgba(255, 255, 255, 1);
  z-index: 999;
}
.block2 {
  /* left: 171.23px; */
  left: 47.2%;
  /* top: 236.23px; */
  margin-top: -4%;
  width: 2.2%;
  height: 1.6px;
  opacity: 1;
  border-radius: 2.5px;
  background: rgb(3, 81, 64);
  z-index: 999;
  position: absolute;
}
.block3 {
  /* left: 181.46px; */
  margin-left: 50.32%;
  /* top: 236.23px; */
  margin-top: -4%;
  width: 2.2%;
  height: 1.6px;
  opacity: 1;
  border-radius: 2.5px;
  background: rgba(255, 255, 255, 1);
  z-index: 999;
  position: absolute;
}
.block4 {
  position: absolute;
  /* left: 191.69px; */
  left: 53.44%;
  /* top: 236.23px; */
  margin-top: -4%;
  width: 2.2%;
  height: 1.6px;
  opacity: 1;
  border-radius: 2.5px;
  background: rgba(255, 255, 255, 1);
  z-index: 999;
}
.items {
  position: relative;
  width: 90%;
  height: 58px;
  padding-bottom: 4px;
  border-radius: 10px;
  margin: auto;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  background: rgba(255, 255, 255, 1);
  box-shadow: inset 0.7px 2px 5px rgba(0, 121, 148, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.item-info {
  height: 58px;
  width: 25%;
  margin-top: auto;
  text-align: center;
  font-size: 8px;
}
.items img {
  padding-top: 8px;
  width: 42px;
  margin: auto;
  height: 42px;
}
.item-info p {
  font-weight: 600;
  padding-bottom: 1px;
  margin-top: -11%;
  font-size: 8px;
  transform: scale(0.8);
  color: rgba(0, 121, 148, 1);
}
.swiper-container {
  width: 90%;
  height: 83px;
  margin: auto;
  position: relative;
}
.swiper-container img {
  width: 100%;
}
</style>