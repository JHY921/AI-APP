<script>
import { index } from 'd3';
import data from './forumArea.json'
export default {
    name: "zan",
    data() {
        return {
            liked: false,
            content: '关注',
            ft_color: "#fef0f0",
            bg_color: "rgba(0, 121, 148, 1)",
            likeshow: true,
            collectshow: true,
            likeCount: 1000,
            collectCount: 100000,
            commentCount: 100000,
            data: data,
            show: true,
            isLike:[false],
            isSub:[false],
        };
    },
    methods: {
        like(index) {
            this.isLike[index]=!this.isLike[index];
            this.likeshow = !this.likeshow;
            this.likeCount = !this.likeshow ? this.likeCount + 1 : this.likeCount - 1;
        },
        collect(index) {
            this.isSub[index]=!this.isSub[index];
            this.collectshow = !this.collectshow;
            this.collectCount = !this.collectshow ? this.collectCount + 1 : this.collectCount - 1;
        },
        comment() {
            this.commentCount++;
        },
        favor(e) {
            this.liked = !this.liked;
            if (this.liked) {
                this.content = "已关注";
                this.bg_color = "rgba(122, 141, 145, 1)";
                this.ft_color = "#fef0f0";

            }
            else {
                this.content = "关注";
                this.bg_color = "rgba(0, 121, 148, 1)";
                this.ft_color = "#fef0f0";
            }
        },
        change() {
            this.bg_color = "rgba(0, 121, 148, 1)";
            this.ft_color = "#fef0f0";
        },
        // goback() {
        //     if (this.liked) {
        //         this.bg_color = "rgba(0, 121, 148, 1)";
        //         this.ft_color = "#fef0f0";
        //     }
        //     else {
        //         this.bg_color = "rgba(0, 121, 148, 1)";
        //         this.ft_color = "#f56c6c";
        //     }
        // },
        goToPersonifo() {
            this.$router.push('/Personifo');
        },
        goToCourse() {
            this.$router.push('/Course');
        },
        goToHeat() {
            this.$router.push('/Forum_heat');
        }
    },
}
</script>
<template>
    <div id="body">
      <ul class="post-list">
        <li class="each-post" v-for="(item,index) in data.forumArea">
         <div id="each-post">
           <p class="post-title" style="padding-right: 20px;">{{item['post-title']}}</p>
           <div class="user-info">
              <img
                class="user-avator"
                :src="item['user-avator']"
              />
              <span class="user-name">{{ item.user_name }}</span>
              <img
                class="vip-icon"
                src="../../assets/icons/forum/forumarea/皇冠.png"
                style="width: 16px; height: 16px; margin-left:-24px;margin-top:-4.5px;"
              />
              <button
                @click="favor"
                class="button"
                :style="{ backgroundColor: bg_color, color: ft_color }"
                @mouseenter="change()"
                @mouseleave="goback()"
              >
                {{ content }}
              </button>
            </div>
            <div class="ms-content">
              <p>
                {{ item.content }}
              </p>
            </div>
         <div class="page-view"><span>浏览量&nbsp;</span><span>{{ item.view }}</span></div>
        <div class="icon">
            <div class="like" @click="like(index)">
                <img
                  src="../../assets/icons/forum/forumarea/like.png"
                  class="likesbox"
                  @click="clicklikes"
                />
                <img src="./redColor.png"
                  style="position: absolute; width: 50px; height: auto; margin-top: -16px; margin-left: -8px;"
                  v-if="isLike[index]">
                <p>{{ likeCount }}</p>
              </div>
             <div class="collect" @click="collect(index)">
                <img src="../../assets/icons/forum/forumarea/collect.png" />
                <img src="./isSub.png"
                  style="position: absolute; width: 50px; height: auto; margin-top: -16px; margin-left: -8px;"
                  v-if="isSub[index]">
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
</template>
<style>
* {
  margin: 0px;
  padding: 0px;
}
#body {
  width: 360px;
  height: 325px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
}
.history{
  width:280px;
  height:20px;
  z-index:999;
  margin-top:40px;
  left:90px;
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
.post-list {
  width: 360px;
  margin-top: 4%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: row;
  color: #999;
  font-size: 20px;
  /* overflow-x: hidden; */
}
.each-post {
  background-color: rgb(255, 255, 255);
  margin: auto;
  height: 176px;
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
  width: 96%;
  font-size: 18px;
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
  margin-top: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.button {
  position: absolute;
  margin-top: -5px;
  right: 9.3%;
  border-radius: 8px;
  border: none;
  font-weight: 900;
  border-radius: 20px;
  padding: 3px 14px;
  text-align: center;
  font-size: 13px;
  -webkit-transform: scale(0.9);
}
.user-avator {
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin-top: -4px;
}
.user-name{
  font-weight: 400; 
  font-size: 12px; 
  width:90px;
  margin-top:-3px;
  margin-left:15px;
  letter-spacing: 0px;
  line-height: 14.06px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}

.ms-content {
  width: 96%;
  height: 39px;
  margin-top: 0px;
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
  margin-top: -12px;
  width: 30%;
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
  transform: scale(0.6);
  width:35px;
  height:30px;
  margin:auto;
  margin-top: -13%;
}
.icon div {
  width: 70px;
  height: 34px;
  display: flex;
  font-size: 6px;
  flex-direction: column;
  text-align: center;
}
.like{
  width:50px;
  height:50px;
}
.icon img {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin:auto;
}
.content span {
  font-size: 9px;
}
</style>