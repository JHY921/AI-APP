<template>
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
      <div style="position: relative; margin-top: 10px; margin-left: 16px">
        <img
          :src="item.url"
          alt=""
          style="
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-bottom: -5px;
          "
        />
        <span style="display: inline-block; margin: 0 10px">
          {{ item.name }}</span
        >

        <img
          class="vip-icon"
          src="../../assets/icons/forum/forumarea/皇冠.png"
          style="width: 16px; height: 16px"
        />
        <button
          style="
            position: absolute;
            margin: 5px;
            right: 5%;
            border-radius: 8px;
            border: none;
            font-weight: 900;
            border-radius: 20px;
            padding: 3px 14px;
            text-align: center;
            font-size: 13px;
          "
        >
          已关注
        </button>
      </div>
      <div
        style="
          margin-left: 16px;
          margin-bottom: 15px;
          height: 100px;
          margin-top: 20px;
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
</template>
<style scoped>
</style>
<script>
export default {
  components: {},
  data () {
    return {
      postList: [
        {
          title: '基于深度学习的工业缺陷检测详解——从0到1',
          context: '   不知道小伙伴们熟不熟悉工业领域的缺陷检测腻？这我可太熟悉了，毕竟是我硕士阶段的老本行🧐🧐🧐所以今天就以钢轨表面缺陷为例，和大家唠唠基于深度学习的钢轨表面伤损细粒度图像识别与目标检测...',
          browse: 2114,
          like: 12,
          collect: 21,
          comment: 32,
          name: 'GoAI',
          url: 'https://image-cn2.tvcbook.com/daq/2020/11/17/d73b7026-287d-11eb-9c33-02420a0008fb.png!cover-780-439'

        },
        {
          name: '一点东西',
          title: '《深入浅出OCR》第六章：OCR数据集与评价指标',
          context: '专栏介绍： 经过几个月的精心筹备，本作者推出全新系列《深入浅出OCR》专栏，对标最全OCR教程，具体章节如导图所示，将分别从OCR技术发展、方向、概念、算法、论文、数据集...',
          browse: 5616,
          like: 1231,
          collect: 262,
          comment: 52,
          url: 'https://image-cn2.tvcbook.com/daq/2020/11/17/7c7b0cbc-2893-11eb-9c33-02420a0008fb.png!cover-780-439'



        },
        {
          title: '独立博客、文档类网站消亡倒计时',
          context: '去年初，我写了一个开源项目electron-egg，需要搭建一个文档站点，然后开始折腾。经历了一系列繁杂的操作后，我发现',
          browse: 2524,
          like: 254,
          collect: 223,
          comment: 44,
          name: '沙卡拉卡',
          url: 'https://image-cn2.tvcbook.com/daq/2020/11/17/7c7b0cbc-2893-11eb-9c33-02420a0008fb.png!cover-780-439'

        }
      ]
    }
  }

}
</script>