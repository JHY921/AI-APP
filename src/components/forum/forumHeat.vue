<template>
    <div class="second-page">
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
            />
          </form>
          <span>搜索</span>
        </div>
        <img
          class="message-remind"
          src="../../assets/icons/forum/forumarea/提醒.png"
        />
      </div>
      <div class="sorting-column">
        <div class="recommend">
          <p class="active">推荐</p>
        </div>
        <div class="popular" @click="goToHeat">
          <p class="heat">热门</p>
        </div>
        <div class="focus-on">
          <p>关注</p>
        </div>
      </div>
      <div id="body">
        <heat1 class="heat1"></heat1>
      <heat2 class="heat2"></heat2>
      <heat3 class="heat3"></heat3>
      <heat class="heat" tt="4"></heat>
      <heat class="heat" tt="5"></heat>
      <heat  class="heat" tt="6"></heat>
      <heat class="heat" tt="7"></heat>
      <heat class="heat" tt="8"></heat>
      <heat class="heat" tt="9"></heat>
      <heat class="heat" tt="10"></heat>
      <div class="blank"></div>
    </div>
      <!-- <div id="footer">
  </div> -->
    </div>
  </template>
<script>
import heat1 from './heat/heat1.vue'
import heat2 from './heat/heat2.vue'
import heat3 from './heat/heat3.vue'
import heat from './heat/heat.vue'
export default {
    components:{heat, heat1, heat2, heat3},
  data () {
    return {
    }
  },
  methods: {
    goToPersonifo () {
      this.$router.push('/Personifo')
    },
    goToCourse () {
      this.$router.push('/Course')
    },
    goToHeat(){
      this.$router.push('/Forum_heat')
    }
  }
}
</script>
<style>
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
#top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: auto;
  margin-top: 24px;
  left: 16px;
  top: 24px;
  width: 90%;
  height: 58px;
  opacity: 1;
  border-radius: 4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 85, 114, 0.05) 100%
  );
}
#body {
  width: 100%;
  height: 500px;
  overflow: scroll;
  /* margin-top: 118px; */
}
#footer {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  background-color: rgb(249, 249, 249);
}
.avator {
  width: 42px;
  height: 42px;
  margin-top: 1.6%;
  margin-left: 0.1%;
  left: 16px;
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
.search span {
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
.info {
  width: 42px;
  height: 42px;
  margin-top: 1%;
  margin-left: 5%;
}
.block1 {
  position: absolute;
  /* left: 161px; */
  left: 44.1%;
  /* top: 236.23px; */
  margin-top: -5%;
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
  margin-top: -5%;
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
  margin-top: -5%;
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
  margin-top: -5%;
  width: 2.2%;
  height: 1.6px;
  opacity: 1;
  border-radius: 2.5px;
  background: rgba(255, 255, 255, 1);
  z-index: 999;
}
.sorting-column {
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
.sorting-column .heat {
  margin: auto;
  width: 42px;
  height: 24px;
  opacity: 1;
  border-radius: 1px;
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
.popular {
  background: linear-gradient(
    180deg,
    rgba(4, 155, 189, 0.01) 9.39%,
    rgba(3, 91, 110, 0.1) 100%
  );
  opacity: 1;
}


.message-remind {
  width: 17px;
  height: 18px;
  margin-top: 5.4%;
  opacity: 1;
  margin-left: 4.4%;
}
.heat1{
    margin-top: 8px;
}
.heat2{
    margin-top: 16px;
}
.heat3{
    margin-top: 16px;
}
.heat{
    margin-top: 16px;
}
.blank{
    width: 100%;
    height: 32px;
}
</style>