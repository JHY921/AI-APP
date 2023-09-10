<script>
import { createApp } from 'vue'
import { Swipe, SwipeItem } from 'vant'

const app = createApp()
app.use(Swipe)
app.use(SwipeItem)
export default {
  setup () {
    const images = [
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
      'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
    ]
    return { images }
  },
  methods: {
    go (path) {
      this.$router.push(path)
    },
  }
};

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
    <div class="item-info">
      <img src="../../assets/icons/forum/forumarea/资源.png" />
      <p>资源</p>
    </div>
    <div class="item-info">
      <img src="../../assets/icons/forum/forumarea/更多.png" />
      <p>更多</p>
    </div>
  </div>
  <div
    style="
      margin-left: 16px;
      margin-right: 16px;
      margin-top: 10px;
      width: 328px;
      height: 120px;
      border-radius: 10px;
      overflow: hidden;
    "
  >
    <van-swipe :autoplay="3000" lazy-render :width="328" :height="120">
      <van-swipe-item v-for="image in images" :key="image">
        <img
          :src="image"
          style="width: 328px; height: auto; border-radius: 10px"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  width: 360px;
  height: 160px;
}

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