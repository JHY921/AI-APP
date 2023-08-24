<script>
// import data from './forumArea.json'
import Crisscross from './crisscross.vue'
import forumHeader from './forumHeader.vue'
import forumMid from './forumMid.vue'
import forumPost from './forumPost.vue'
import heat from './forumHeat.vue'
export default {
  name: "zan",
  data () {
    return {

    }
  },
  methods: {

  },
  components: { Crisscross, forumHeader, forumMid, forumPost, heat }
}
</script>
<template>
  <div class="second-page">
    <forumHeader></forumHeader>
    <van-tabs v-model:active="activeName" swipeable>
      <van-tab title="推荐" name="a">
        <forumMid />
        <forumPost />
      </van-tab>
      <van-tab title="热门" name="b">
        <heat />
      </van-tab>
      <van-tab title="关注" name="c"> 123 </van-tab>
    </van-tabs>
  </div>
  <Crisscross />
</template>
<style  scoped>
:root {
  background: #268da3;
  --van-tabs-bottom-bar-color: #268da3;
}
* {
  margin: 0px;
  padding: 0px;
}
.second-page >>> .van-tabs__wrap {
  border-radius: 0px 0px, 10px, 10px;
  font-family: res;
  overflow: hidden;
  margin: auto;

  width: 328px;
  height: 30px;
}
.second-page >>> .van-tab--active {
  background: linear-gradient(180deg, #ffffff 0%, #006e87 978.6%);
}
.second-page >>> .van-tab__text {
  color: #007994;
}
.second-page >>> .van-tab__line {
  background: #268da3;
}
.second-page {
  width: 360px;
  height: 640px;
  background-image: url("../../assets/icons/forum/forumarea/背景样式.png");
  background-size: cover;
  position: fixed;
}
#body {
  width: 360px;
  height: 325px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
#footer {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  background-color: rgb(249, 249, 249);
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
.info {
  width: 42px;
  height: 42px;
  margin-top: 1%;
  margin-left: 5%;
}
.content span {
  font-size: 9px;
}
</style>