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
    <div class="text">历史记录</div>
  </div>
  <div class="content">
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
                {{ item.comment }}
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
          title: '人工智能新十年的变与不变',
          context: 'ChatGPT、Bard、Bing……近期大模型的快速发展引发了广泛讨论。面对这场突如其来的变革，人类应该如何保持清醒和理性？在《新程序员》特...',
          browse: 875,
          like: 241,
          collect: 14,
          comment: 58

        },
        {
          title: '“再见了，TypeScript！”，Ruby on Rails 之父 DHH 也因“类型”遭劝退',
          context: '作为 JavaScript 的一个超集，TypeScript 在微软内部沉淀两年后，带着弥补 JavaScript 在开发大型应用中遇到的种种问题的使命，于 2012 年 10 月正式面世...',
          browse: 1523,
          like: 11,
          collect: 22,
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
          title: '与 Java 17 相比，Java 21 究竟有多快？',
          context: '随着 Java 21 的发布已经进入了倒计时阶段，你可能想知道它与 Java 17 相比，有什么不同以及是否应该升级。基于此，开源软件公司 Timefold 进行了梳理与实测，借助自家的 Timefold Solver 工具分享了 Java 21 的真实...',
          browse: 244,
          like: 22,
          collect: 5,
          comment: 5

        },
        {
          title: '计算机网络基础知识（非常详细',
          context: '七层模型，亦称 OSI（Open System Interconnection）参考模型，即开放式系统互联，是网络通信的标准模型。一般称为 OSI 参考模型或七层模型...',
          browse: 644,
          like: 25,
          collect: 15,
          comment: 25

        },
        {
          title: '算法：贪心---跳一跳',
          context: '给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个下标...',
          browse: 521,
          like: 2,
          collect: 25,
          comment: 15

        },
        {
          title: '计算机竞赛 大数据商城人流数据分析与可视化 - python 大数据分析',
          context: '随着当今个人手机终端的普及，出行群体中手机拥有率和使用率已达到相当高的比例，手机移动网络也基本实现了城乡空间区域的全覆盖。根据手机信号在真实地理空间上的覆盖情况，将手机用户时间序列的手机定位数...',
          browse: 626,
          like: 25,
          collect: 27,
          comment: 8
        },
        {
          title: 'Linux命令(79)之tr',
          context: 'linux命令之tr 1.tr介绍linux命令 tr用于转换或删除文件中的字符。tr命令只能对标准输入进行操作，不能直接对文件进行操作 2.tr用法tr [参数] [标准输入]...',
          browse: 573,
          like: 25,
          collect: 10,
          comment: 13
        },
        {
          title: '【Python】爬虫基础',
          context: '最近，chatGPT很热火，博主也玩了一下~ 确实，它还可以写代码！ 问了它几个关于职业发展的问题，与粉丝们分享，请见下文爬虫是一种模拟浏览器实现，用以抓取网站信息的程序或者脚本。常见的爬虫有三大类： ...',
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
          title: 'CentOS系统环境搭建（二十）——CentOS7安装chat GPT进阶',
          context: 'CentOS7安装chat GPT进阶 Welcome to the AI era! 基于上一篇文章CentOS系统环境搭建（十九）——CentOS7安装chat GPT，我们用docker20安装了chatGPT。但，总感觉不够好。...',
          browse: 584,
          like: 44,
          collect: 22,
          comment: 9
        },
        {
          title: 'vite + react + typescript + uni-app + node 开发一个生态系统',
          context: '使用 vite + react + typescript + uni-app + node 来开发一个简易的生态系统案例，包含 APP，H5，微信小程序，控制台，服务端...',
          browse: 44,
          like: 4,
          collect: 0,
          comment: 1
        },
        {
          title: 'MySQL基础【学习至基本语句】',
          context: '一、安装与配置 1、安装 yum install -y mysql-server.x86_64 2、MySQL安装完成后，启动报错，查看MySQL的状态，发现是3306端口被占用...',
          browse: 84,
          like: 12,
          collect: 5,
          comment: 7
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