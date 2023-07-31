<script>
export default {
  name: "zan",
  data () {
    return {
      liked: false,
      content: '关注',
      bg_color: "#fef0f0",
      ft_color: "#f56c6c",
      likeshow: true,
      collectshow: true,
      likeCount: 0,
      collectCount: 0,
      commentCount: 0,
    }
  },
  methods: {
    like () {
      this.likeshow = !this.likeshow
      this.likeCount = !this.likeshow ? this.likeCount + 1 : this.likeCount - 1
    },
    collect () {
      this.collectshow = !this.collectshow
      this.collectCount = !this.collectshow ? this.collectCount + 1 : this.collectCount - 1
    },
    comment () {
      this.commentCount++
    },
    favor (e) {
      this.liked = !this.liked
      if (this.liked) {
        this.content = "已关注"
        this.bg_color = "#f56c6c"
        this.ft_color = "#fef0f0"
      }

      else {
        this.content = "关注"
        this.bg_color = "#fef0f0"
        this.ft_color = "#f56c6c"
      }
    },
    change () {
      this.bg_color = "#ff9999"
      this.ft_color = "#fef0f0"
    },
    goback () {
      if (this.liked) {
        this.bg_color = "#f56c6c"
        this.ft_color = "#fef0f0"
      }
      else {
        this.bg_color = "#fef0f0"
        this.ft_color = "#f56c6c"
      }
    },
    goToPersonifo () {
      this.$router.push('/Personifo')
    },
    goToCourse () {
      this.$router.push('/Course')
    }
  }
}
</script>
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
      <div class="popular">
        <p>热门</p>
      </div>
      <div class="focus-on">
        <p>关注</p>
      </div>
    </div>
    <div class="items">
      <div class="item-info">
        <img
          src="../../assets/icons/forum/forumarea/课程.png"
          @click="goToCourse"
        />
        <p>课程</p>
      </div>
      <div class="item-info">
        <img src="../../assets/icons/forum/forumarea/学习工具.png" />
        <p>学习工具</p>
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
    <div class="banner">
      <img src="../../assets/icons/forum/forumarea/banner1.png" />
      <div class="block1"></div>
      <div class="block2"></div>
      <div class="block3"></div>
      <div class="block4"></div>
    </div>
    <div id="body">
      <ul class="post-list">
        <li class="each-post">
          <div id="each-post">
            <p class="post-title">Spring FrameWork从入门到NB-定制Bean基辛格</p>
            <div class="user-info">
              <img
                class="user-avator"
                src="../../assets/icons/forum/forumarea/photo.jpg"
              />
              <span class="user-name">基彭伯格</span>
              <img
                class="vip-icon"
                src="../../assets/icons/forum/forumarea/皇冠.png"
                style="width: 16px; height: 16px; margin-left: 2.8%"
              />
              <button
                @click="favor"
                class="button"
                style="{background-color: bg_color,color:ft_color,}"
                @mouseenter="change()"
                @mouseleave="goback()"
              >
                {{ content }}
              </button>
            </div>
            <div class="ms-content">
              <p>
                Customizing the Nature of a
                Bean，最早准备跳过这部分内容，但是觉得这部分内容是Spring
                Bean生命周期中的一个重要部分，跳过了可能会影响通往NB之路，所以还是要认真学习一下\n\nSpring通过三种类型的接口实现对Bean行为或状态的改变或定制
                . . .
              </p>
            </div>
            <div class="page-view"><span>浏览量</span><span>30</span></div>
            <div class="icon">
              <!-- 点赞 收藏 评论 -->
              <div class="like" @click="like">
                <img
                  src="../../assets/icons/forum/forumarea/like.png"
                  class="likesbox"
                  @click="clicklikes"
                />
                <p>{{ likeCount }}</p>
              </div>
              <div class="collect" @click="collect">
                <img src="../../assets/icons/forum/forumarea/collect.png" />
                <p>{{ collectCount }}</p>
              </div>
              <div class="comment" @click="comment">
                <img src="../../assets/icons/forum/forumarea/comment.png" />
                <p>{{ commentCount }}</p>
              </div>
            </div>
          </div>
        </li>
        <li class="each-post">
          <div id="each-post">
            <p class="post-title">
              Spring FrameWork从入门到NB-定制BeanB既今昔个
            </p>
            <div class="user-info">
              <img
                class="user-avator"
                src="../../assets/icons/forum/forumarea/photo.jpg"
              />
              <span class="user-name">基彭伯格</span>
              <img
                class="vip-icon"
                src="../../assets/icons/forum/forumarea/皇冠.png"
                style="width: 16px; height: 16px; margin-left: 2.8%"
              />
              <button
                @click="favor"
                class="button"
                style="{background-color: bg_color,color:ft_color,}"
                @mouseenter="change()"
                @mouseleave="goback()"
              >
                {{ content }}
              </button>
            </div>
            <div class="ms-content">
              <p>
                Customizing the Nature of a
                Bean，最早准备跳过这部分内容，但是觉得这部分内容是Spring
                Bean生命周期中的一个重要部分，跳过了可能会影响通往NB之路，所以还是要认真学习一下\n\nSpring通过三种类型的接口实现对Bean行为或状态的改变或定制
                . . .
              </p>
            </div>
            <div class="page-view"><span>浏览量</span><span>30</span></div>
            <div class="icon">
              <!-- 点赞 收藏 评论 -->
              <div class="like" @click="like">
                <img
                  src=".../../assets/icons/forum/forumarea/like.png"
                  class="likesbox"
                  @click="clicklikes"
                />
                <p>{{ likeCount }}</p>
              </div>
              <div class="collect" @click="collect">
                <img src="../../assets/icons/forum/forumarea/collect.png" />
                <p>{{ collectCount }}</p>
              </div>
              <div class="comment" @click="comment">
                <img src="../../assets/icons/forum/forumarea/comment.png" />
                <p>{{ commentCount }}</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- <div id="footer">
</div> -->
  </div>
</template>
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
  height: 325px;
  overflow: scroll;
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
.sorting-column .active {
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
.recommend {
  background: linear-gradient(
    180deg,
    rgba(4, 155, 189, 0.01) 9.39%,
    rgba(3, 91, 110, 0.1) 100%
  );
  opacity: 1;
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
  padding-top: 11px;
  width: 39px;
  margin: auto;
  height: 39px;
}
.item-info p {
  font-weight: 400;
  padding-bottom: 1px;
  margin-top: -11%;
  font-size: 8px;
  transform: scale(0.7);
  color: rgba(0, 121, 148, 1);
}
.banner {
  width: 90%;
  height: 83px;
  margin: auto;
  position: relative;
}
.banner img {
  width: 100%;
}
.post-list {
  width: 100%;
  margin-top: 4%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row;
  color: #999;
  font-size: 20px;
}
.each-post {
  background-color: rgb(255, 255, 255);
  margin: auto;
  height: 164px;
  width: 98.8%;
  color: black;
  border-radius: 10px;
  background-image: linear-gradient(180deg, #007994 -134.6%, #ffffff 14.9%);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 13px;
}
.each-post a {
  color: black;
}
#each-post {
  position: relative;
  margin-left: 5.86%;
}
.page-view {
  width: 100%;
  height: 20px;
  font-size: 9px;
  margin-top: 1%;
  margin-left: -20%;
  transform: scale(0.6);
  color: rgba(181, 181, 181, 1);
}
.post-title {
  margin-top: 22px;
  color: black;
  width: 98%;
  font-size: 16px;
  font-weight: 500;
  height: 34.4px;
  margin-bottom: 0.3%;
  letter-spacing: 0px;
  line-height: 18px;
  text-align: left;
  vertical-align: top;
}
.user-info {
  color: rgb(0, 0, 0);
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.button {
  position: absolute;
  margin-top: -1.4%;
  right: 9.3%;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 900;
  background: rgba(0, 121, 148, 1);
  border-radius: 20px;
  padding: 3px 14px;
  text-align: center;
  font-size: 7px;
  -webkit-transform: scale(0.7);
}
.user-info img {
  border-radius: 50%;
  width: 24px;
  height: 24px;
}
.user-name {
  margin-left: 4.2%;
  font-weight: 400;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 14.06px;
  color: rgba(0, 0, 0, 1);
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
.ms-content {
  width: 96%;
  height: 39px;
  margin-top: -1.5%;
  color: rgb(140, 139, 139);
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
  word-wrap: break-word;
  overflow: hidden;
  letter-spacing: 0px;
  color: rgba(125, 125, 125, 1);
  font-size: 12px;
  font-weight: 400;
  line-height: 13px;
  vertical-align: top;
}
.ms-content p {
  font-size: 9px;
}
.icon {
  margin-top: -3%;
  width: 20%;
  height: 100%;
  float: right;
  margin-right: 8%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-start;
  font-size: 6px;
}
.icon p {
  margin-top: -22%;
  transform: scale(0.6);
}
.icon div {
  margin-left: 28%;
  width: 34px;
  height: 34px;
  display: flex;
  font-size: 6px;
  flex-direction: column;
  text-align: center;
}
.icon p {
  font-size: 9px;
}
.icon img {
  width: 18px;
  height: 18px;
  vertical-align: middle;
}
.content span {
  font-size: 9px;
}
</style>