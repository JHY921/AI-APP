<script>
export default {
  data () {
    return {
      active: 1
    }
  },
  methods: {
    goToPersonifo () {
      this.$router.push('/Personifo')
    },
    goToCourse () {
      this.$router.push('/Course')
    },
    goToHeat () {
      this.$router.push('/Forum_heat')
    },
  }
}

</script>
<template>
  <div id="top">
    <!-- <div>头像+搜索框+消息通知</div> -->
    <img
      src="../../assets/icons/forum/forumarea/头像.png"
      class="avator"
      @click="goToPersonifo"
    />
    <div class="search">
      <img
        src="../../assets/icons/forum/forumarea/搜索.png"
        class="search-icon"
      />
      <form>
        <input
          style="transform: scale(0.8); margin-left: -4%"
          type="text"
          v-model="inputText"
          placeholder="前端开发就业前景"
          @input="changevalue($event)"
          ref="getValue"
        />
      </form>
      <p @click="cancel" v-show="show" style="color: grey">取消</p>
      <p @click="search" v-show="!show">搜索</p>
    </div>
    <div class="my-history">
      <div class="history" v-show="show">
        <p class="his-text" style="font-size: 12px">历史搜索</p>
        <p class="delete">
          <img
            src="../../assets/icons/forum/forumarea/删除.png"
            style="width: 14px; height: 14px"
          />
        </p>
      </div>
      <!-- 历史搜索列表 -->
      <div class="hislist">
        <p v-for="(item, index) in hislist" :key="index" v-show="!show">
          {{ item }}
        </p>
      </div>
    </div>
    <img
      class="message-remind"
      src="../../assets/icons/forum/forumarea/提醒.png"
    />
  </div>
  <!-- <div class="popular" @click="goToHeat">
        <p>热门</p>
      </div> -->

  <!-- <view class="sorting-column">
      <div class="recommend item" :class="{'ac':active == 1}" @click="active = 1">
        <p :class="{'ac2':active==1,'shadow':active!=1}">推荐</p>
        <p :class="p1,{'actives':active==1}">推荐</p>
      </div>
      <div class="popular item" :class="{'ac':active == 2}" @click="active = 2">
        <p :class="p1,{'actives':active==2}">热门</p>
        <p :class="{'ac2':active==2,'shadow':active!=2}">热门</p>
      </div>
      <div class="focus-on item" :class="{'ac':active == 3}" @click="active = 3">
        <p :class="p1,{'actives':active==3}">关注</p>
        <p :class="{'ac2':active==3,'shadow':active!=3}">关注</p>
      </div>
      <div class="bg" :class="{'left1':active == 2,'left2 focus-on':active == 3,'recommend':active==1}"></div>
    </view> -->
</template>
<style>
#top {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 90%;
  margin: auto;
  margin-top: 24px;
  height: 58px;
  opacity: 1;
  border-radius: 4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 85, 114, 0.05) 100%
  );
}
.avator {
  width: 42px;
  height: 42px;
  margin-top: 5px;
  margin-left: 0px;
  /* left: 16px; */
  top: 27px;
  opacity: 1;
}
.search {
  border: 1px solid rgba(0, 121, 148, 1);
  border-radius: 12px;
  margin-top: 4.4%;
  margin-left: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 230px;
  height: 24px;
  opacity: 1;
  border-radius: 12px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 121, 148, 1);
}
.search-icon {
  margin-left: 4%;
  margin-top: 3%;
  width: 12.88px;
  height: 76%;
  height: 12px;
  opacity: 1;
}
.search form input {
  margin-left: 0%;
  border: none;
  width: 80%;
  font-size: 12px;
  transform: scale(0.9);
  color: rgba(0, 0, 0, 0.3);
}
.search p {
  border-left: 1px solid rgba(153, 164, 166, 1);
  height: 50%;
  margin: auto;
  padding-left: 8px;
  width: 25.03px;
  height: 12px;
  opacity: 1;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 11.72px;
  color: rgba(0, 121, 148, 1);
  text-align: left;
  vertical-align: top;
}
.message-remind {
  width: 17px;
  height: 18px;
  margin-top: 5.4%;
  opacity: 1;
  margin-left: 4.4%;
}

.sorting-column {
  position: relative;
  height: 28px;
  width: 90%;
  font-size: 13px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: space-around;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 26px;
  color: rgba(0, 121, 148, 1);
  text-align: left;
  vertical-align: top;
  border-radius: 0 0 10px 10px;
}
.actives {
  margin: auto;
  width: 42px;
  height: 24px;
  opacity: 1;
  border-radius: 1px;
  /* filter: blur(7px); */
  background: linear-gradient(
    180deg,
    rgba(0, 90, 110, 0.05) 9.39%,
    rgba(0, 90, 110, 0) 100%
  );
  border-top: 2px solid rgba(0, 121, 148, 1);
}
.sorting-column div {
  width: 33.33%;
  text-align: center;
}
.recommend {
  border-radius: 0 0 0 10px;
  opacity: 1;
}
.focus-on {
  border-radius: 0 0 10px 0;
}
.item {
  text-align: center;
  width: 33.33%;
  height: 100%;
  line-height: 30px;
  position: relative;
  /* z-index: 9; */
}
.bg {
  position: absolute;
  left: 0px;
  z-index: 1;
  width: 33.3%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(4, 155, 189, 0.01) 9.39%,
    rgba(3, 91, 110, 0.1) 100%
  );
  opacity: 1;
  transition: all 0.5s;
  /* border-radius: 0 0 10px 0px; */
}
.left1 {
  left: 33.3%;
}
.left2 {
  left: 66.6%;
}
* {
  margin: 0px;
  padding: 0px;
}
.second-page {
  width: 360px;
  height: 640px;
  background-image: url("../../assets/icons/forum/forumarea/background.jpg");
  position: fixed;
}
.history {
  width: 280px;
  height: 20px;
  z-index: 999;
  margin-top: 40px;
  left: 90px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.ac2 {
  position: absolute;
  top: 10px;
  left: 46px;
  width: 26px;
  height: 16px;
  opacity: 1;
  z-index: 5;
  filter: blur(9px);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 15px;
  color: rgba(134, 152, 156, 1);
  text-align: left;
  vertical-align: top;
}
.shadow {
  position: absolute;
  left: 43px;
  top: 9.2px;
  width: 26px;
  height: 16px;
  opacity: 1;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 15.24px;
  color: rgba(200, 220, 224, 1);
  text-align: left;
  vertical-align: top;
  /* z-index:999; */
}
.p1 {
  position: absolute;
  z-index: 2;
}
</style>