<script>

import data from './forumArea.json'
export default {
    name: "zan",
    data() {
        return {
            liked: false,
            content: '关注',
            bg_color: "#fef0f0",
            ft_color: "#f56c6c",
            likeshow: true,
            collectshow: true,
            likeCount: 328,
            collectCount: 233,
            commentCount: 12,
            data: data,
            show: true,
            liked1: false,
            content1: '关注',
            bg_color1: "#fef0f0",
            ft_color1: "#f56c6c",
            likeshow1: true,
            collectshow1: true,
            likeCount1: 225,
            collectCount1: 190,
            commentCount1: 15,
            liked2: false,
            content2: '关注',
            bg_color2: "#fef0f0",
            ft_color2: "#f56c6c",
            likeshow2: true,
            collectshow2: true,
            likeCount2: 308,
            collectCount2: 210,
            commentCount2: 12,
        };
    },
    methods: {
        like(e) {
            if(e==1)
            {
              this.likeshow1 = !this.likeshow1;
              this.likeCount1 = !this.likeshow1 ? this.likeCount1 + 1 : this.likeCount1 - 1;
            }
            else if(e==2){
              this.likeshow2 = !this.likeshow2;
              this.likeCount2 = !this.likeshow2 ? this.likeCount2 + 1 : this.likeCount2 - 1;
            }
            else
            {this.likeshow = !this.likeshow;
            this.likeCount = !this.likeshow ? this.likeCount + 1 : this.likeCount - 1;
            }
        },
        collect(e) {
          if(e==1)
            {
              this.collectshow1 = !this.collectshow1;
              this.collectCount1 = !this.collectshow1 ? this.collectCount1 + 1 : this.collectCount1 - 1;
            }
            else if(e==2){
              this.collectshow2 = !this.collectshow2;
              this.collectCount2 = !this.collectshow2 ? this.collectCount2 + 1 : this.collectCount2 - 1;
            }
            else
            {            
              this.collectshow = !this.collectshow;
              this.collectCount = !this.collectshow ? this.collectCount + 1 : this.collectCount - 1;
            }
        },
        comment(e) {
          if(e==1)
            {
              this.commentCount1++;
            }
            else if(e==2){
              this.commentCount2++;
            }
            else
            {            
              this.commentCount++;
            }
            
        },
        favor(e) {
            this.liked = !this.liked;
            if(e==1)
            {
              if (this.liked1) {
                this.content1 = "已关注";
                this.bg_color1 = "#f56c6c";
                this.ft_color1 = "#fef0f0";
            }
             else {
                this.content1 = "关注";
                this.bg_color1 = "#fef0f0";
                this.ft_color1 = "#f56c6c";
            }
            }
            else if(e==2){
              if (this.liked2) {
                this.content2 = "已关注";
                this.bg_color2 = "#f56c6c";
                this.ft_color2 = "#fef0f0";
            }
             else {
                this.content2 = "关注";
                this.bg_color2 = "#fef0f0";
                this.ft_color2 = "#f56c6c";
            }
            }
            else
            {            
              if (this.liked) {
                this.content = "已关注";
                this.bg_color = "#f56c6c";
                this.ft_color = "#fef0f0";
            }
            else {
                this.content = "关注";
                this.bg_color = "#fef0f0";
                this.ft_color = "#f56c6c";
            }
            }
        },
        change(e) {
            if(e==1)
            {
              this.bg_color1 = "#ff9999";
            this.ft_color1 = "#fef0f0";
            }
            else if(e==2){
              this.bg_color2 = "#ff9999";
            this.ft_color2 = "#fef0f0";
            }
            else
            {            
              this.bg_color = "#ff9999";
            this.ft_color = "#fef0f0";
            }
        },
        goback(e) {
           if(e==1)
            {
              if (this.liked1) {
                this.bg_color1 = "#f56c6c";
                this.ft_color1 = "#fef0f0";
            }
            else {
                this.bg_color1 = "#fef0f0";
                this.ft_color1 = "#f56c6c";
            }
            }
            else if(e==2){
              if (this.liked2) {
                this.bg_color2 = "#f56c6c";
                this.ft_color2 = "#fef0f0";
            }
            else {
                this.bg_color2 = "#fef0f0";
                this.ft_color2 = "#f56c6c";
            }
            }
            else
            {            
              if (this.liked) {
                this.bg_color = "#f56c6c";
                this.ft_color = "#fef0f0";
            }
            else {
                this.bg_color = "#fef0f0";
                this.ft_color = "#f56c6c";
            }
            }
        },
        goToPersonifo() {
            this.$router.push('/Personifo');
        },
        goToCourse() {
            this.$router.push('/Course');
        },
        goToHeat() {
            this.$router.push('/Forum_heat');
        }
      }
}
</script>
<template>
    <div id="body">
      <ul class="post-list">
        <li class="each-post">
         <div id="each-post">
           <p class="post-title">蚂蚁金融大模型正式发布，开放业内最大金融AI专属任务评测集“Fin-Eval</p>
           <div class="user-info">
              <img
                class="user-avator" src="../../assets/info-icon/vince_avator.png"
              />
              <span class="user-name">基彭伯格</span>
              <img
                class="vip-icon"
                src="../../assets/icons/forum/forumarea/皇冠.png"
                style="width: 16px; height: 16px; margin-left:-24px;margin-top:-4.5px;"
              />
              <button
                @click="favor"
                class="button"
                style="{background-color: bg_color,color:ft_color,}"
                @mouseenter="change(1)"
                @mouseleave="goback(1)"
              >
                {{ content1 }}
              </button>
            </div>
            <div class="ms-content">
              <p>
                蚂蚁金融大模型基于蚂蚁自研基础大模型，针对金融产业深度定制，底层算力集群达到万卡规模。该大模型聚焦真实的金融场景需求，在“认知、生成、专业知识、专业逻辑、合规性”五大维度28类金融专属任务中表现突出，在“研判观点提取”等众多领域达到行业专家水平
              </p>
            </div>
         <div class="page-view"><span>浏览量</span><span>433</span></div>
        <div class="icon">
            <div class="like" @click="like">
                <img
                  src="../../assets/icons/forum/forumarea/like.png"
                  class="likesbox"
                  @click="clicklikes(1)"
                />
                <p>{{ likeCount1 }}</p>
              </div>
             <div class="collect" @click="collect(1)">
                <img src="../../assets/icons/forum/forumarea/collect.png" />
                <p>{{ collectCount1 }}</p>
              </div>
              <div class="comment" @click="comment(1)">
                <img src="../../assets/icons/forum/forumarea/comment.png" />
                <p>{{ commentCount1 }}</p>
              </div>
          </div>
          </div> 
        </li>
        <li class="each-post">
         <div id="each-post">
           <p class="post-title">人机融合的经验与人类的或机器的经验不同</p>
           <div class="user-info">
              <img
                class="user-avator" src="../../assets/icons/forum/forumarea/人机_avator.png"
              />
              <span class="user-name">人机与认知</span>
              <img
                class="vip-icon"
                src="../../assets/icons/forum/forumarea/皇冠.png"
                style="width: 16px; height: 16px; margin-left:-24px;margin-top:-4.5px;"
              />
              <button
                @click="favor(2)"
                class="button"
                style="{background-color: bg_color,color:ft_color,}"
                @mouseenter="change(2)"
                @mouseleave="goback(2)"
              >
                {{ content2 }}
              </button>
            </div>
            <div class="ms-content">
              <p>
                机器的经验是通过机器学习算法和大量的数据训练得来的。机器通过对数据的处理和分析学习到模式和规律，并将这些学习到的知识应用于问题解决和决策中。机器的经验更加注重于数据和模型，以及对大规模数据的处理和分析能力。
              </p>
            </div>
         <div class="page-view"><span>浏览量</span><span>123</span></div>
        <div class="icon">
            <div class="like" @click="like(2)">
                <img
                  src="../../assets/icons/forum/forumarea/like.png"
                  class="likesbox"
                  @click="clicklikes(2)"
                />
                <p>{{ likeCount2 }}</p>
              </div>
             <div class="collect" @click="collect(2)">
                <img src="../../assets/icons/forum/forumarea/collect.png" />
                <p>{{ collectCount2 }}</p>
              </div>
              <div class="comment" @click="comment(2)">
                <img src="../../assets/icons/forum/forumarea/comment.png" />
                <p>{{ commentCount2 }}</p>
              </div>
          </div>
          </div> 
        </li>
        <li class="each-post" v-for="item in data.forumArea">
         <div id="each-post">
           <p class="post-title">{{item['post-title']}}</p>
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
                style="{background-color: bg_color,color:ft_color,}"
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
          </div>
         <div class="page-view"><span>浏览量</span><span>{{ item.view }}</span></div>
         <div class="icon">
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
      </li>
    </ul>
  </div>
</template>
<style scoped>
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
  &::-webkit-scrollbar {
    display: none;
  }
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
.user-name {
  font-weight: 400;
  font-size: 12px;
  width: 90px;
  margin-top: -3px;
  margin-left: 15px;
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
  width: 35px;
  height: 30px;
  margin: auto;
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
.like {
  width: 50px;
  height: 50px;
}
.icon img {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin: auto;
}
.content span {
  font-size: 9px;
}
</style>