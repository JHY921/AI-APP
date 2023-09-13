<template>
  <div
    class="total"
    style="background-color: #f3f3f3; widows: 360px; height: 640px"
  >
    <div
      class="searchwrapper"
      style="display: flex; flex-direction: row; background-color: white"
    >
      <div
        @click="back"
        style="
          margin-top: 4.4%;
          margin-left: 10px;
          margin-right: 5px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #f3f3f3;
          text-align: center;
        "
      >
        <span style="color: #007994; margin-top: 3.5px; display: inline-block"
          >&lt;</span
        >
      </div>
      <div class="search">
        <img
          src="../../../assets/icons/forum/forumarea/搜索.png"
          class="search-icon"
        />
        <form>
          <input
            style="transform: scale(0.8); margin-left: -4%; height: 24px"
            type="text"
            v-model="text"
          />
        </form>
        <p @click="search" v-show="!show" style="padding-left: 22px">搜索</p>
      </div>
    </div>

    <li style="list-style: none" v-for="(item, index) in postList" :key="index">
      <div
        style="
          border-radius: 10px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
          margin: auto;
          margin-top: 10px;
          width: 350px;
        "
      >
        <div style="margin-left: 16px">
          <span
            style="
              font-size: 16px;
              font-weight: 500;
              letter-spacing: 0px;
              line-height: 18.75px;
              color: rgba(0, 0, 0, 1);
              text-align: left;
              vertical-align: top;
              font-family: res;
              display: inline-block;
              margin-top: 15px;
            "
            >{{ item.title }}</span
          >
        </div>
        <div
          style="
            margin-left: 16px;
            margin-bottom: 15px;
            height: 100px;
            margin-top: 3px;
          "
        >
          <span
            style="
              /** 文本1 */
              font-size: 9px;
              font-weight: 400;
              letter-spacing: 0px;
              line-height: 10.55px;
              color: rgba(125, 125, 125, 1);
            "
            >{{ item.context }}</span
          >
        </div>

        <div style="display: flex; flex-direction: row; position: relative">
          <div
            style="
              /** 文本3 */
              font-size: 6px;
              font-weight: 300;
              letter-spacing: 0px;
              color: rgba(181, 181, 181, 1);
              margin-left: 16px;
              width: 64px;
              display: flex;
              flex-direction: row;
              position: absolute;
              bottom: 10px;
            "
          >
            <div>浏览：</div>
            <div>{{ item.browse }}</div>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row;
              position: absolute;
              right: 15px;
              bottom: 10px;
            "
          >
            <div class="like" style="margin-right: 12px">
              <img
                width="20"
                height="20"
                src="../../../assets/icons/forum/forumarea/like.png"
                alt=""
              />
              <div
                style="
                  /** 文本2 */
                  font-size: 2px;
                  font-weight: 400;
                  letter-spacing: 0px;
                  line-height: 10.55px;
                  color: rgba(0, 0, 0, 1);
                  font-family: Medium;
                "
              >
                {{ item.like }}
              </div>
            </div>
            <div class="collect" style="margin-right: 12px">
              <img
                width="20"
                height="20"
                src="../../../assets/icons/forum/forumarea/collect.png"
                alt=""
              />
              <div
                style="
                  /** 文本2 */
                  font-size: 2px;
                  font-weight: 400;
                  letter-spacing: 0px;
                  line-height: 10.55px;
                  color: rgba(0, 0, 0, 1);
                  font-family: Medium;
                "
              >
                {{ item.comment }}
              </div>
            </div>
            <div class="comment" style="margin-right: 5px">
              <img
                width="20"
                height="20"
                src="../../../assets/icons/forum/forumarea/comment.png"
                alt=""
              />
              <div
                style="
                  /** 文本2 */
                  font-size: 2px;
                  font-weight: 400;
                  letter-spacing: 0px;
                  line-height: 10.55px;
                  color: rgba(0, 0, 0, 1);
                  font-family: Medium;
                "
              >
                {{ item.comment }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  </div>
</template>
<style scoped>
.search {
  border: 1px solid rgba(0, 121, 148, 1);
  border-radius: 12px;
  margin-top: 4.4%;
  margin-bottom: 10px;
  margin-left: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 270px;
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
</style>
<script>
export default {
  components: {},
  data () {
    return {
      text: '前端开发就业前景',
      postList: [
        {
          title: '2022大前端总结和2023就业分析',
          context: '我在年前给掘金平台分享了《2022年热点技术盘点》的前端热点，算是系统性的梳理了一下我自己对前端一整年的总结。年后，在知乎上看到《前端的就业行情怎么样？》...',
          browse: 3586,
          like: 1568,
          collect: 854,
          comment: 205

        },
        {
          title: '从前端变化看终身就业',
          context: '接触前端已10年有余，从菜鸟到现在的老鸟；肚皮围度增长了，发量却减少了；头开始往下低了，发际线却往上走了！感叹时光易逝之际，不免有些伤感...',
          browse: 5616,
          like: 1231,
          collect: 262,
          comment: 52

        },
        {
          title: '前端工程师个人的价值在哪里（换一个人能不能做？）【前端晋升必看】',
          context: '最近脉脉上这张图片在前端圈子中火了起来。这个故事中“毫无人性”的评委在晋升中对前端同学提出了两个置疑点：1.业务方向是产品经理...',
          browse: 2524,
          like: 254,
          collect: 223,
          comment: 44

        },
        {
          title: '拒绝躺平，来自底层前端的2022总结',
          context: '首先说一下自己的背景：由于家庭原因高中辍学，后面报了一个成人专科，浑浑噩噩在学校呆了3年，没有学到什么有用的东西(浪了3年)。我在17年的时候通过自学前端的知识...',
          browse: 5353,
          like: 252,
          collect: 35,
          comment: 55

        },
        {
          title: '【实习三部曲最终章】一名前端实习生在阿里的成长小结',
          context: '从【修改缺陷、迭代小需求】（目的：熟悉项目代码、架构）到【参与重要版本迭代】，业务需求占据了我实习的大部分时间，这段时间的开发经历也让我收获颇丰...',
          browse: 635,
          like: 53,
          collect: 52,
          comment: 42

        },
        {
          title: '前端还未死，求职就业的机遇与挑战',
          context: '从事前端这些年，或许有过这些困惑：这波 AI 里面，前端会面临什么挑战、需要具备什么能力？当面面试大厂，需要做什么样的准备？工程师为什么要理解业务，如何破...',
          browse: 4245,
          like: 252,
          collect: 58,
          comment: 51

        },
        {
          title: '一个外包前端的晋升有感🌟🌟🌟',
          context: '从某些方面看，做外包确实会有一些上述类似的问题， 但主要还是要我们自己以什么样的角度看待自己的外包工作。我们要从好的方面理解。想清楚来外包工作的初衷，自己...',
          browse: 696,
          like: 55,
          collect: 87,
          comment: 53
        },
        {
          title: '【披荆斩棘】— 前端菜鸟跌跌撞撞终进大厂',
          context: '对我而言,漫长的秋招终于结束了,9月初到现在,在经历整整一个月的高强度面试后,我终于进入了自己理想中的公司。至于具体是那个公司,各位...',
          browse: 543,
          like: 32,
          collect: 24,
          comment: 58
        },
        {
          title: '前端程序员的职业发展规划与路线——ChatGPT的回答',
          context: '最近，chatGPT很热火，博主也玩了一下~ 确实，它还可以写代码！ 问了它几个关于职业发展的问题，与粉丝们分享，请见下文...',
          browse: 245,
          like: 24,
          collect: 25,
          comment: 11
        },
        {
          title: '一分钟整明白web前端和Java后端的就业前景',
          context: '前端：前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，HTML5，CSS3，前端框架的应用，跨平台响应式网...',
          browse: 87,
          like: 12,
          collect: 21,
          comment: 8
        },
        {
          title: 'Web前端是干什么的？',
          context: 'Web前端开发工程师是一个比较新的职业，在国内乃至国际上真正开始受到重视的时间不超过5年。Web前端开发是从网页制作演变而来的，名称上有很明显的时代特征...',
          browse: 244,
          like: 54,
          collect: 42,
          comment: 9
        },
        {
          title: '三分钟带你了解月薪5W的web前端开发到底是干嘛!',
          context: '近日[1]，国内某知名招聘网站发布的一份报告中显示，web前端开发工程师已成为中国互联网行业中最紧俏的职位。根据此次报告，今年三季度，互联网在上海全行业中成为人才...',
          browse: 44,
          like: 24,
          collect: 2,
          comment: 1
        },
        {
          title: '写给前端工程师的一封信',
          context: '应波波的邀请写一写我对这个话题的想法。从去年开始不少朋友让我帮忙介绍前端工程师，绝大部分忙都没帮上，原因是真找不到人。我当时是这么跟他们分析的...',
          browse: 24,
          like: 2,
          collect: 0,
          comment: 1
        },
      ]
    }
  }
  ,
  methods: {
    back () {
      history.back()
    }
  }
}
</script>