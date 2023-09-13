<template>
  <div class="title">
    <svg
      @click="back"
      class="arrow"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="9.70001220703125"
      height="14.89013671875"
      viewBox="0 0 9.70001220703125 14.89013671875"
      fill="none"
    >
      <path
        id="路径 1"
        style="fill: #007994; opacity: 1"
        d="M8.05786,14.6566l-7.7,-6.45001c-0.05033,-0.04217 -0.09607,-0.08884 -0.13721,-0.14001c-0.04114,-0.05117 -0.0769,-0.10587 -0.10727,-0.16408c-0.03037,-0.05822 -0.05477,-0.11884 -0.07319,-0.18186c-0.01843,-0.06303 -0.03053,-0.12724 -0.03631,-0.19264c-0.00578,-0.06541 -0.00512,-0.13075 0.00197,-0.19603c0.00709,-0.06527 0.02049,-0.12923 0.04018,-0.19187c0.01969,-0.06264 0.0453,-0.12276 0.07684,-0.18035c0.03153,-0.05759 0.06838,-0.11156 0.11055,-0.16189c0.03798,-0.04535 0.07966,-0.08699 0.12503,-0.12494l7.7,-6.44c0.05037,-0.04213 0.10436,-0.07893 0.16198,-0.11042c0.05762,-0.03149 0.11776,-0.05706 0.18041,-0.0767c0.06265,-0.01964 0.12662,-0.03299 0.1919,-0.04003c0.06528,-0.00704 0.13062,-0.00765 0.19603,-0.00182c0.0654,0.00583 0.1296,0.01798 0.19261,0.03645c0.06301,0.01848 0.12361,0.04292 0.1818,0.07333c0.05819,0.03041 0.11286,0.06621 0.164,0.10739c0.05115,0.04118 0.09778,0.08695 0.13991,0.13732c0.04212,0.05037 0.07893,0.10436 0.11042,0.16198c0.03149,0.05762 0.05705,0.11775 0.0767,0.18041c0.01964,0.06265 0.03298,0.12662 0.04003,0.1919c0.00704,0.06528 0.00765,0.13062 0.00182,0.19603c-0.00583,0.0654 -0.01798,0.1296 -0.03645,0.19261c-0.01848,0.06301 -0.04293,0.12361 -0.07334,0.1818c-0.03041,0.05819 -0.0662,0.11286 -0.10739,0.16401c-0.04118,0.05114 -0.08695,0.09777 -0.13732,0.1399l-7.69999,6.44l-0.64156,-0.76708l0.64214,-0.76659l7.7,6.44999c0.05033,0.0422 0.09607,0.08887 0.13721,0.14c0.04115,0.0512 0.0769,0.1059 0.10727,0.1641c0.03037,0.0582 0.05476,0.11883 0.07319,0.1819c0.01843,0.063 0.03053,0.1272 0.03631,0.1926c0.00577,0.0654 0.00511,0.13073 -0.00198,0.196c-0.00709,0.06527 -0.02048,0.12923 -0.04017,0.1919c-0.01969,0.06267 -0.04531,0.12277 -0.07684,0.1803c-0.03153,0.0576 -0.06838,0.11157 -0.11054,0.1619c-0.04217,0.05033 -0.08884,0.0961 -0.14001,0.1373c-0.05117,0.04113 -0.10587,0.07687 -0.16409,0.1072c-0.05821,0.0304 -0.11883,0.0548 -0.18185,0.0732c-0.06303,0.01847 -0.12724,0.03057 -0.19264,0.0363c-0.06541,0.0058 -0.13075,0.00513 -0.19603,-0.002c-0.06527,-0.00707 -0.12923,-0.02043 -0.19187,-0.0401c-0.06264,-0.01973 -0.12276,-0.04537 -0.18035,-0.0769c-0.05759,-0.03153 -0.11156,-0.06837 -0.16189,-0.1105z"
      ></path>
    </svg>
    <div class="text">我的收藏</div>
  </div>
  <div class="content">
    <li
      style="list-style: none"
      v-for="(item, index) in postList"
      :key="index"
      :class="[`item-color-${index}`, { 'slide-out': activeIndex1 == task[7] }]"
    >
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
                v-if="item['islike']"
                width="30"
                height="30"
                src="../forum/redColor.png"
                style="position: absolute; margin-top: -4px; margin-left: -4px"
                alt=""
              />
              <img
                width="20"
                height="20"
                src="../../assets/icons/forum/forumarea/like.png"
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
                width="30"
                height="30"
                src="../forum/isSub.png"
                style="position: absolute; margin-top: -4px; margin-left: -4px"
                alt=""
              />
              <img
                width="20"
                height="20"
                src="../../assets/icons/forum/forumarea/collect.png"
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
                {{ item.collect }}
              </div>
            </div>
            <div class="comment" style="margin-right: 5px">
              <img
                width="20"
                height="20"
                src="../../assets/icons/forum/forumarea/comment.png"
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
<script>

export default {
  components: {},
  data () {
    return {
      postList: [
        {
          title: '普通程序员如何正确学习人工智能方向的知识？',
          context: '本人程序员出身，现在是AI产品经理，做过知识图谱、智能语音、智能客服产品，现在正在积极拥抱大模型。下面，我来从行业发展和职业发展方面来谈一下题主的问题...',
          browse: 3586,
          like: 1568,
          collect: 854,
          comment: 205,
          islike: true

        },
        {

          title: '计算机考研408难吗？学到什么程度才能考130?',
          context: '这是人能说出来的话？408不难，为什么计算机年年这么考生折戟沉沙？？？开玩笑，不比考研数学是公共课...',
          browse: 5616,
          like: 1231,
          collect: 262,
          comment: 52,
          islike: true
        },
        {
          title: '前端工程师个人的价值在哪里（换一个人能不能做？）【前端晋升必看】',
          context: '最近脉脉上这张图片在前端圈子中火了起来。这个故事中“毫无人性”的评委在晋升中对前端同学提出了两个置疑点：1.业务方向是产品经理...',
          browse: 2524,
          like: 254,
          collect: 223,
          comment: 44,
          islike: false

        },
        {
          title: '网络安全（黑客）自学',
          context: '谈起黑客，可能各位都会想到：盗号，其实不尽然；黑客是一群喜爱研究技术的群体，在黑客圈中，一般分为三大圈：娱乐圈 技术圈 职业圈...',
          browse: 5353,
          like: 252,
          collect: 35,
          comment: 55,
          islike: false

        },
        {
          title: '【实习三部曲最终章】一名前端实习生在阿里的成长小结',
          context: '从【修改缺陷、迭代小需求】（目的：熟悉项目代码、架构）到【参与重要版本迭代】，业务需求占据了我实习的大部分时间，这段时间的开发经历也让我收获颇丰...',
          browse: 635,
          like: 53,
          collect: 52,
          comment: 42,
          islike: true

        },
        {
          title: 'CentOS 系列版本搭建 Nginx 服务',
          context: 'Nginx 介绍Nginx是一个广泛使用的Web服务器和反向代理服务器。反向代理和负载均衡：Nginx支持反向代理和负载均衡，能够分发请求到多个后端服务器，提高了可用性和性能。...',
          browse: 4245,
          like: 252,
          collect: 58,
          comment: 51,
          islike: false

        },
        {
          title: '通信接口互斥设计',
          context: '在嵌入式软件中，常用的通信接口例如SPI、I2C、UART等，在MCU与外设的通信过程中，需要确保通信时序不被打断，否则会造成某些不可预料的通信异常问题...',
          browse: 796,
          like: 55,
          collect: 87,
          comment: 53,
          islike: true
        },
        {
          title: 'C++杂货铺】优先级队列的使用指南与模拟实现',
          context: '优先级队列是一种容器适配器，根据严格的弱排序标准，它的第一个元素总是它所包含的元素中最大的。此上下文类似于堆...',
          browse: 543,
          like: 32,
          collect: 24,
          comment: 58,
          islike: false
        },
        {
          title: '前端程序员的职业发展规划与路线——ChatGPT的回答',
          context: '最近，chatGPT很热火，博主也玩了一下~ 确实，它还可以写代码！ 问了它几个关于职业发展的问题，与粉丝们分享，请见下文...',
          browse: 295,
          like: 24,
          collect: 25,
          comment: 11,
          islike: false
        },
        {
          title: '一分钟整明白web前端和Java后端的就业前景',
          context: '前端：前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。随着互联网技术的发展，HTML5，CSS3，前端框架的应用，跨平台响应式网...',
          browse: 87,
          like: 12,
          collect: 21,
          comment: 8,
          islike: false
        },
        {
          title: 'SpringMVC系列（六）之JSON数据返回以及异常处理机制',
          context: 'Spring MVC 在传递数据时，通常都需要对数据的类型和格式进行转换。而这些数据不仅可以是常见的 String 类型，还可以是 JSON 等其他类型。JSON 是近些...',
          browse: 334,
          like: 54,
          collect: 13,
          comment: 9,
          islike: false
        },
        {
          title: '数据湖是什么？数据湖关键技术（一）',
          context: '随着数据湖的发展，目前面临着诸多技术方面的挑战，必须不断完善并解决各种技术难题。数据湖是当前大数据技术研究的一种范例，研究人员通过该范例来应对大数据技术所遇到的各种挑战。这些关键技术的突破...',
          browse: 44,
          like: 24,
          collect: 2,
          comment: 1,
          islike: true
        },
        {
          title: '写给前端工程师的一封信',
          context: '应波波的邀请写一写我对这个话题的想法。从去年开始不少朋友让我帮忙介绍前端工程师，绝大部分忙都没帮上，原因是真找不到人。我当时是这么跟他们分析的...',
          browse: 24,
          like: 2,
          collect: 0,
          comment: 1,
          islike: false
        },
      ]
    }
  },
  methods: {
    back () {
      history.back()
    }
  }
}
</script>
<style scoped>
.title {
  margin-top: 24px;
  width: 360px;
  height: 48px;
  opacity: 1;
  border-radius: 0px 0px, 10px, 10px;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 2px 4px #0000001a;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.text {
  color: #00576bab;
  font-size: 16px;
  font-family: SourceHanSansCN;
  font-weight: 700;
  line-height: 15px;
}
.arrow {
  position: absolute;
  left: 21.5px;
}
</style>