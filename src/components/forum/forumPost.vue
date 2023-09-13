<template>
  <div id="body">
    <ul class="post-list">
      <li style="list-style: none;" v-for="(item, index) in postList" :key="index">
        <div style="
            border-radius: 10px;
            background-image: linear-gradient(
              180deg,
              #007994 -134.6%,
              #ffffff 14.9%
            );
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
            margin: auto;
            margin-top: 10px;
            width: 335px;
            height: auto;
            position: relative;
          ">
          <div style="margin-left: 16px">
            <span style="
                font-size: 16px;
                font-weight: 500;
                max-width: 300px;
                letter-spacing: 0px;
                line-height: 18.75px;
                color: rgba(0, 0, 0, 1);
                text-align: left;
                vertical-align: top;
                font-family: res;
                display: inline-block;
                margin-top: 15px;
              ">{{ item.title }}</span>
          </div>
          <div style="display: flex; height: 30px; position: relative; margin-top: 6px; margin-left: 16px">
            <img :src="item.url" alt="" style="
                width: 30px;
                height: 30px;
                border-radius: 50%;
              " />
            <span style="display: inline-block; height: auto; margin: auto; margin-left: 5px;margin-right: 5px;">
              {{ item.name }}</span>

            <img class="vip-icon" src="../../assets/icons/forum/forumarea/皇冠.png"
              style="width: 16px; height: 16px;margin: auto;margin-left: 0px;" />
            <button @click="follow(item['follow'], index)" style="
                position: absolute;
                margin: 2px;
                right: 5%;
                border-radius: 8px;
                border: none;
                font-weight: 900;
                border-radius: 20px;
                padding: 3px 14px;
                text-align: center;
                font-size: 13px;
              ">
              {{ item.follow }}
            </button>
          </div>
          <div style="
              margin-left: 16px;
              height: 68px;
              margin-top: 4px;
              max-width: 300px;
              overflow:hidden;
              text-overflow:ellipsis;
              font-size: 12px;
              font-weight: 400;
              color: rgba(125, 125, 125, 1);
            ">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.context }}
          </div>

          <div style="display: flex; flex-direction: row; position: relative;
            height: 32px;">
            <div style="
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
              ">
              <div>浏览：{{ item.browse }}</div>
            </div>
            <div style="
                display: flex;
                flex-direction: row;
                position: absolute;
                right: 15px;
              ">
              <div class="like" style="margin-right: 12px;margin-top: -4px;" @click="like(index)">
                <img v-if="item['islike']" width="30" height="30" src="./redColor.png"
                  style="position: absolute; margin-top: -4px; margin-left: -4px;" alt="" />
                <img width="20" height="20" src="../../assets/icons/forum/forumarea/like.png" alt="" />
                <div style="
                    /** 文本2 */
                    width: 20px;
                    font-size: 2px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 6px;
                    color: rgba(0, 0, 0, 1);
                    font-family: Medium;
                    transform: scale(.8);
                    text-align: center;
                  ">
                  {{ item.like }}
                </div>
              </div>
              <div class="collect" style="margin-right: 12px;margin-top: -4px;" @click="collect(index)">
                <img v-if="item['iscollect']" width="30" height="30" src="./isSub.png"
                  style="position: absolute; margin-top: -4px; margin-left: -4px;" alt="" />
                <img width="20" height="20" src="../../assets/icons/forum/forumarea/collect.png" alt="" />
                <div style="
                    /** 文本2 */
                    width: 20px;
                    text-align: center;
                    font-size: 2px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 6px;
                    color: rgba(0, 0, 0, 1);
                    font-family: Medium;
                    transform: scale(.8);
                  ">
                  {{ item.collect }}
                </div>
              </div>
              <div class="comment" style="margin-right: 5px;margin-top: -4px;">
                <img width="20" height="20" src="../../assets/icons/forum/forumarea/comment.png" alt="" />
                <div style="
                    /** 文本2 */
                    width: 20px;
                    text-align: center;
                    font-size: 2px;
                    font-weight: 400;
                    letter-spacing: 0px;
                    line-height: 6px;
                    color: rgba(0, 0, 0, 1);
                    font-family: Medium;
                    transform: scale(.8);
                  ">
                  {{ item.comment }}
                </div>
              </div>
            </div>
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
</style>
<script scoped>
export default {
  components: {},
  data() {
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
          url: 'https://image-cn2.tvcbook.com/daq/2020/11/17/d73b7026-287d-11eb-9c33-02420a0008fb.png!cover-780-439',
          follow: '关注',
          islike: false,
          iscollect: false,

        },
        {
          name: '一点东西',
          title: '《深入浅出OCR》第六章：OCR数据集与评价指标',
          context: '专栏介绍： 经过几个月的精心筹备，本作者推出全新系列《深入浅出OCR》专栏，对标最全OCR教程，具体章节如导图所示，将分别从OCR技术发展、方向、概念、算法、论文、数据集...',
          browse: 5616,
          like: 895,
          collect: 262,
          comment: 52,
          url: 'https://image-cn2.tvcbook.com/daq/2020/11/17/7c7b0cbc-2893-11eb-9c33-02420a0008fb.png!cover-780-439',
          follow: '已关注',
          islike: false,
          iscollect: false,
        },
        {
          title: '独立博客、文档类网站消亡倒计时',
          context: '去年初，我写了一个开源项目electron-egg，需要搭建一个文档站点，然后开始折腾。经历了一系列繁杂的操作后，我发现',
          browse: 2524,
          like: 254,
          collect: 223,
          comment: 44,
          name: '沙卡拉卡',
          follow: '已关注',
          islike: false,
          iscollect: false,
          url: 'https://image-cn2.tvcbook.com/daq/2020/11/17/7c7b0cbc-2893-11eb-9c33-02420a0008fb.png!cover-780-439'
        },
        {
          name: '将海越',
          title: 'vue中style下scope的使用和坑',
          context: '在vue组件中，为了使样式私有化（模块化），不对全局造成污染，可以在style标签上添加scoped属性以表示它的只属于当下的模块，这是一个非常好的举措，但是为什么要慎用呢？',
          browse: 5616,
          like: 123,
          collect: 262,
          comment: 52,
          url: 'https://image-cn2.tvcbook.com/daq/2020/11/17/7c7b0cbc-2893-11eb-9c33-02420a0008fb.png!cover-780-439',
          follow: '已关注',
          islike: false,
          iscollect: false,
        },
        {
          name: '江褂含',
          title: 'docker-compose下管理的docker是如何相互通讯的',
          context: 'docker-compose下的docker之间通讯不能直接使用ip的方式通讯,因为ip会因为server端的变化而变化.所以一般都是用compose file中的container_name来进行通讯.',
          browse: 561,
          like: 35,
          collect: 22,
          comment: 11,
          url: 'https://image-cn2.tvcbook.com/daq/2020/11/17/7c7b0cbc-2893-11eb-9c33-02420a0008fb.png!cover-780-439',
          follow: '已关注',
          islike: false,
          iscollect: false,
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
        },
      ],
    }
  },
  methods: {
    follow(isfollow, index) {
      if (isfollow === '关注') {
        this.postList[index]['follow'] = '已关注'
      }
      if (isfollow === '已关注') {
        this.postList[index]['follow'] = '关注'
      }
    },
    like(index) {
      if (this.postList[index]['islike']) {
        this.postList[index]['like'] = this.postList[index]['like'] - 1
      } else {
        this.postList[index]['like'] = this.postList[index]['like'] + 1
      }
      this.postList[index]['islike'] = !this.postList[index]['islike']
    },
    collect(index) {
      if (this.postList[index]['iscollect']) {
        this.postList[index]['collect'] = this.postList[index]['collect'] - 1
      } else {
        this.postList[index]['collect'] = this.postList[index]['collect'] + 1
      }
      this.postList[index]['iscollect'] = !this.postList[index]['iscollect']
    },
  }

}
</script>