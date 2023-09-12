<script>
// import data from './forumArea.json'
import Crisscross from './crisscross.vue'
import forumHeader from './forumHeader.vue'
import forumMid from './forumMid.vue'
import followerPost from './followerPost.vue'
import heat from './heat/heat.vue'
import heat1 from './heat/heat1.vue'
import heat2 from './heat/heat2.vue'
import heat3 from './heat/heat3.vue'
import axios from 'axios'
import api from '../../api/api'
export default {
  name: "zan",
  data () {
    return {
      heat_info: []
    }
  },
  methods: {

  },
  created () {
    axios.get(`http://${api.api}/forum_heat`).then(res => {
      console.log(res.data[0])
      this.heat_info = res.data
    }).catch(err => {
      console.log(err)
    })
  },
  components: { Crisscross, forumHeader, forumMid, followerPost, heat, heat1, heat2, heat3 },
}
</script>
<template>
  <div class="second-page">
    <forumHeader></forumHeader>
    <van-tabs v-model:active="activeName" swipeable>
      <!-- <div style="width: 328px; height: 30px; border-radius: 10px; overflow: hidden;"> -->
      <van-tab title="推荐" name="a">
        <forumMid />
        <forumPost />
      </van-tab>
      <!-- </div> -->
      <van-tab title="热门" name="b">
        <div id="body">
          <heat1 class="heat1" :item="heat_info[0]"></heat1>
          <heat2 class="heat2" :item="heat_info[1]"></heat2>
          <heat3 class="heat3" :item="heat_info[2]"></heat3>
          <heat class="heat" tt="4" :item="heat_info[3]"></heat>
          <heat class="heat" tt="5" :item="heat_info[4]"></heat>
          <heat class="heat" tt="6" :item="heat_info[5]"></heat>
          <heat class="heat" tt="7" :item="heat_info[6]"></heat>
          <heat class="heat" tt="8" :item="heat_info[7]"></heat>
          <heat class="heat" tt="9" :item="heat_info[8]"></heat>
          <heat class="heat" tt="10" :item="heat_info[9]"></heat>
          <div class="blank"></div>
        </div>
      </van-tab>
      <van-tab title="关注" name="c">
        <div>
          <followerPost />
        </div>
      </van-tab>
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
#body {
  width: 100%;
  height: 500px;
  overflow: scroll;
  /* margin-top: 118px; */
}

.heat1 {
  margin-top: 8px;
}
.heat2 {
  margin-top: 16px;
}
.heat3 {
  margin-top: 16px;
}
.heat {
  margin-top: 16px;
}
.blank {
  width: 100%;
  height: 32px;
}
</style>