<script>
import 'vant/es/nav-bar'
export default {
  data () {
    return {
      notification: [
      {
            "user-avator": "https://devpress.csdnimg.cn/20b481c56e4b457f84f916543e3b6193.png",
            "user_name":"Vince_13",
            "user-vip":true,
            "user-behavior":"评论了您的帖子",
            "user-behavior-icon":"require(../../assets/info-icon/评论1.png)",
            "date":"9-6"
        },
        {
            "user-avator": "https://devpress.csdnimg.cn/20b481c56e4b457f84f916543e3b6193.png",
            "user_name":"Eolink_2",
            "user-vip":true,
            "user-behavior":"赞了您的帖子",
            "user-behavior-icon":"../../assets/info-icon/点赞1.png",
            "date":"9-2"
        },
        {
            "user-avator": "https://p1.ssl.qhimgs1.com/sdr/400__/t0150eb36e5b72d85a7.jpg",
            "user_name":"灿烂人生",
            "user-vip":true,
            "user-behavior":"关注了您",
            "user-behavior-icon":"../../assets/info-icon/喜欢1.png",
            "date":"7-28"
        },
        {
            "user-avator": "https://ps.ssl.qhimg.com/t01349dcc95e8fa6c37.jpg",
            "user_name":"我太蓝了啊",
            "user-vip":true,
            "user-behavior":"评论了您的帖子",
            "user-behavior-icon":"../../assets/info-icon/评论1.png",
            "date":"8-25"
        },
        {
            "user-avator": "https://ps.ssl.qhimg.com/t01349dcc95e8fa6c37.jpg",
            "user_name":"Want595",
            "user-vip":true,
            "user-behavior":"赞了您的评论",
            "user-behavior-icon":"../../assets/info-icon/点赞1.png",
            "date":"8-20"
        },
        {
            "user-avator": "https://p1.ssl.qhimgs1.com/sdr/400__/t0150eb36e5b72d85a7.jpg",
            "user_name":"趣味人生",
            "user-vip":true,
            "user-behavior":"赞了您的评论",
            "user-behavior-icon":"../../assets/info-icon/点赞1.png",
            "date":"8-10"
        },
        {
            "user-avator": "https://p1.ssl.qhimgs1.com/sdr/400__/t0193c794c8b078f3b1.jpg",
            "user_name":"OSIR4",
            "user-vip":true,
            "user-behavior":"评论了您的帖子",
            "user-behavior-icon":"../../assets/info-icon/评论1.png",
            "date":"8-6"
        },
        {
            "user-avator": "https://ps.ssl.qhimg.com/t01349dcc95e8fa6c37.jpg",
            "user_name":"Want595",
            "user-vip":true,
            "user-behavior":"评论了您的帖子",
            "user-behavior-icon":"../../assets/info-icon/评论1.png",
            "date":"7-28"
        }
      ]
    }
  },
  methods: {
    back () {
      history.back()
    }
  },
}
</script>
<template>
  <div class="top-bar"></div>
  <div class="goods_info">
    <van-nav-bar
      title="消息"
      left-arrow
      right-text="···"
      bind:click-left="onClickLeft"
      bind:click-right="onClickRight"
      @click-left="back"
    />
  </div>
  <div class="nav">
    <div class="nav-info">
      <img src="../../../assets/info-icon/点赞.png" />
      <p>收到的赞</p>
    </div>
    <div class="nav-info">
      <img src="../../../assets/info-icon/评论.png" />
      <p>回复我的</p>
    </div>
    <div class="nav-info">
      <img src="../../../assets/info-icon/关注.png" />
      <p>新的关注</p>
    </div>
    <div class="nav-info">
      <img src="../../../assets/info-icon/系统通知.png" />
      <p>系统通知</p>
    </div>
  </div>
  <div class="total-info">
    <div class="remind-title">
      <p>全部消息</p>
    </div>
    <div class="info-detail">
      <div class="detail" v-for="(item, index) in notification" :key="index">
        <img :src="item['user-avator']" class="avator-icon" />
        <p class="user-name">{{item.user_name }}</p>
        <img src="../../../assets/info-icon/皇冠.png" class="vip" />
        <p class="behavior">{{ item['user-behavior'] }}</p>
        <img :src="item.userbehavior" class="behavior-icon" />
        <p class="date">{{ item['date'] }}</p>
      </div>
      <div class="detail">
        <img
          src="../../../assets/info-icon/系统通知.png"
          class="system-info-icon"
        />
        <p class="system-mesg">系统通知</p>
        <p class="system-info">这是一条来自系统的消息</p>
        <p class="system-date">7-26</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
  position: relative;
}
.top-bar {
  top: 0px;
  position: fixed;
  width: 100%;
  height: 21.2px;
  background-color: #a3a3a3;
  z-index: 999;
}
.van-nav-bar__title {
  color: #007994;
  font-weight: 800;
  font-size: 18px;
}
.van-nav-bar .van-icon {
  color: white !important;
  /* font-size:16px; */
}
.van-nav-bar__text {
  color: rgba(0, 121, 148, 1);
  font-weight: 700;
  font-size: 26px;
}
.van-nav-bar__arrow {
  color: rgba(0, 121, 148, 1);
  font-weight: 600;
  transform: scale(1.3);
}
.total-info {
  left: 0px;
  top: 59px;
  position: relative;
  width: 100%;
  height: 576px;
  opacity: 1;
  background: linear-gradient(
    90deg,
    rgba(199, 201, 201, 0.57) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}
.van-nav-bar {
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 21px;
  opacity: 1;
  height: 48px;
  border-radius: 0 0 10px 10px;
  box-shadow: 3px 2px 3px rgba(136, 136, 136, 0.35);
}
.van-tabbar--fixed {
  /* position:fixed; */
  left: 0;
  top: 59px;
  width: 100%;
  height: 90px;
}
.nav {
  height: 90px;
  top: 59px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.nav-info {
  height: 58px;
  margin-top: 24px;
  width: 25%;
  /* background-color: antiquewhite; */
  text-align: center;
  font-size: 8px;
}
.nav-info img {
  padding-top: 10px;
  width: 28px;
  margin: auto;
  height: 26px;
}
.nav-info p {
  font-weight: 400;
  padding-bottom: 1px;
  margin-top: 1%;
  font-size: 12px;
  transform: scale(0.8);
}
.remind-title {
  position: absolute;
  margin-top: 12px;
  left: 0px;
  width: 360px;
  height: 24px;
  opacity: 1;
  /* background: linear-gradient(360deg, rgba(255, 255, 255, 1) 0%, rgba(0, 121, 148, 0.66) 100%); */
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px 10px 0px 0px;
  border-bottom: 0.4px solid rgba(0, 121, 148, 0.5);
}
.remind-title p {
  font-size: 12px;
  transform: scale(0.8);
  margin-top: 2px;
  color: rgba(0, 121, 148, 1);
  margin-left: -24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 19px;
  color: rgba(0, 121, 148, 1);
  text-align: left;
  vertical-align: top;
}
.info-detail {
  position: absolute;
  margin-top: 37px;
}
.detail {
  width: 360px;
  height: 56px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 8px;
}
.avator-icon {
  width: 24px;
  height: 24px;
  left: 16px;
  top: 16px;
}
.user-name {
  left: 30px;
  top: 21px;
  width: 60px;
  height: 15px;
  opacity: 1;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 14.06px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.vip {
  left: 40px;
  top: 20px;
  width: 15.91px;
  height: 16px;
  opacity: 1;
}
.behavior {
  left: 61px;
  top: 22px;
  width: 90px;
  height: 12px;
  opacity: 1;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 14px;
  transform: scale(0.9);
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.behavior-icon {
  width: 16px;
  height: 16px;
  opacity: 1;
  left: 100px;
  top: 22px;
}
.date {
  left: 110px;
  top: 23px;
  width: 30px;
  height: 12px;
  opacity: 1;
  transform: scale(0.9);
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 11.72px;
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
  vertical-align: top;
}
.system-info-icon {
  left: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
}
.system-mesg {
  left: 30px;
  top: 21px;
  width: 48px;
  height: 15px;
  opacity: 1;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 14.06px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.system-info {
  left: 60px;
  top: 22px;
  width: 140px;
  height: 12px;
  opacity: 1;
  transform: scale(0.9);
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 11.72px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.system-date {
  left: 92px;
  top: 24px;
  width: 28px;
  height: 12px;
  opacity: 1;
  /** 文本1 */
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0px;
  line-height: 11.72px;
  transform: scale(0.9);
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
  vertical-align: top;
}
</style>