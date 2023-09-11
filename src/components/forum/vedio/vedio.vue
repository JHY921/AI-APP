<template>
  <div class="small-videl-detail">
    <div
      class="return_label"
      style="
        margin-top: 24px;
        position: relative;
        width: 360px;
        height: 48px;
        opacity: 1;
        background-color: rgba(255, 255, 255, 1);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      "
    >
      <div
        @click="backTolast"
        style="display: inline-block; width: 40px; height: 100%"
      >
        <svg
          transform="translate(13,16)"
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
      </div>
      <div style="display: inline-block">
        <center>
          <span
            style="
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 0px;
              color: rgba(0, 87, 107, 0.67);
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              transform: translateY(-50%);
            "
          >
            视频
          </span>
        </center>
      </div>
    </div>
    <div class="van_swipe">
      <!--vant van-swipe 滑动组件 -->
      <van-swipe
        :autoplay="400000"
        :show-indicators="false"
        @change="onChange"
        vertical
      >
        <van-swipe-item
          v-for="(item, index) in videoList"
          :key="index"
          class="product_swiper"
        >
          <div class="video_container">
            <!--video属性
                          webkit-playsinline ios 小窗播放，使视频不脱离文本流，安卓则无效
                          微信内置x5内核，
                          x5-video-player-type="h5" 启用H5播放器,是wechat安卓版特性，添加此属性，微信浏览器会自动将视频置为全屏
                          x5-video-player-fullscreen="true" 全屏设置，设置为 true 是防止横屏
                          x5-video-orientation 控制横竖屏 landscape 横屏，portrain竖屏； 默认portrain
                          x5-playsinline="" 使安卓实现h5同层播放，实现与ios同样效果，但兼容部分机型
                          poster：封面
                          src：播放地址
                        -->
            <video
              class="video_box"
              width="100%"
              height="100%"
              webkit-playsinline="true"
              x5-playsinline=""
              playsinline
              preload="auto"
              :poster="item.cover"
              :src="item.url"
              x-webkit-airplay="allow"
              x5-video-orientation="portrait"
              @click="pauseVideo"
              @ended="onPlayerEnded($event)"
              x5-video-player-type="h5"
              x5-video-player-fullscreen=""
              loop="loop"
            ></video>
            <!-- 封面 -->
            <img
              v-show="isVideoShow"
              class="play"
              @click="playvideo"
              :src="item.url"
            />
            <!-- 播放暂停按钮 -->
            <van-icon
              name="pause-circle-o"
              color="white"
              v-show="iconPauseShow"
              size="90"
              class="icon_play"
              @click="pauseVideo"
            />
            <van-icon
              name="play-circle-o"
              color="white"
              v-show="iconPlayShow"
              size="90"
              class="icon_play"
              @click="playvideo"
            />
          </div>
          <!--  右侧标签 -->
          <div class="right_tabs">
            <div>
              <van-icon
                :name="likeName"
                color="#ee0a24"
                size="40"
                :badge="item.like"
                @click="likeIt"
              />
              <p></p>
              <van-icon
                name="chat"
                size="40"
                color="white"
                :badge="item.comment"
                @click="show = true"
              />
              <p></p>
              <van-icon
                name="share"
                color="white"
                size="40"
                @click="share = true"
              />
            </div>
          </div>

          <!--  下部信息 -->
          <div class="botton_tabs">
            <p class="video_info_title">{{ item.name }}</p>
            <p class="video_info_content">
              {{ item.introduce }}
            </p>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 评论面板 -->
    <van-action-sheet v-model:show="show" @select="onSelectPingLun">
      <div class="pinglun_content" id="pinglun_content" ref="pinglun_content">
        <van-cell-group>
          <van-cell title="热门评论" class="article-title">
            <!-- 展示五条 -->
            <template #label>
              <van-cell title="TL">
                <!-- 使用 icon 插槽来自定义左侧图标 -->
                <template #icon>
                  <div class="" style="margin-right: 0.23rem">
                    <van-image
                      width="2rem"
                      height="2rem"
                      fit="fill"
                      round
                      src="http://39.106.71.161:5000/video/1.jpg"
                    />
                  </div>
                </template>
                <template #label>
                  <div class="ping_lun_info">
                    <div class="pin_lun_detail">未来谁都可能是导演</div>
                    <div class="ping_lun_other">
                      <span class="pnglun_date">4天前-发布</span>
                      <van-icon
                        name="good-job-o"
                        class="pinglun_label"
                        size="1.2rem"
                        badge="99+"
                        color="#ee0a24"
                      />
                      <van-tag
                        plain
                        class="pinglun_label"
                        round
                        color="#7232dd"
                        @click="detailShow = true"
                        >评论 18</van-tag
                      >
                    </div>
                  </div>
                </template>
              </van-cell>
              <van-cell title="王还是不是个横说竖说">
                <!-- 使用 icon 插槽来自定义左侧图标 -->
                <template #icon>
                  <div class="" style="margin-right: 0.23rem">
                    <van-image
                      width="2rem"
                      height="2rem"
                      fit="fill"
                      round
                      src="http://39.106.71.161:5000/video/2.jpg"
                    />
                  </div>
                </template>
                <template #label>
                  <div class="ping_lun_info">
                    <div class="pin_lun_detail">
                      我直接输入一本水浒传
                      <div class="ping_lun_other">
                        <span class="pnglun_date">3天前-发布</span>
                        <van-icon
                          name="good-job-o"
                          class="pinglun_label"
                          size="1.2rem"
                          badge="50+"
                          color="#ee0a24"
                        />
                        <van-tag
                          plain
                          class="pinglun_label"
                          round
                          color="#7232dd"
                          @click="detailShow = true"
                          >评论 8</van-tag
                        >
                      </div>
                    </div>
                  </div>
                </template>
              </van-cell>
              <van-cell title="一块橘子皮">
                <!-- 使用 icon 插槽来自定义左侧图标 -->
                <template #icon>
                  <div class="" style="margin-right: 0.23rem">
                    <van-image
                      width="2rem"
                      height="2rem"
                      fit="fill"
                      round
                      src="http://39.106.71.161:5000/video/3.jpg"
                    />
                  </div>
                </template>
                <template #label>
                  <div class="ping_lun_info">
                    <div class="pin_lun_detail">
                      对不会画画的人来说，以后的梦可以画下来了，太棒了。
                    </div>
                    <div class="ping_lun_other">
                      <span class="pnglun_date">2天前-发布</span>
                      <van-icon
                        name="good-job-o"
                        class="pinglun_label"
                        size="1.2rem"
                        badge="30+"
                        color="#ee0a24"
                      />
                      <van-tag
                        plain
                        class="pinglun_label"
                        round
                        color="#7232dd"
                        @click="detailShow = true"
                        >评论 12</van-tag
                      >
                    </div>
                  </div>
                </template>
              </van-cell>
            </template>
          </van-cell>
          <van-cell title="最新评论" class="article-title">
            <template #label>
              <van-cell title="Noah_x">
                <!-- 使用 icon 插槽来自定义左侧图标 -->
                <template #icon>
                  <div class="" style="margin-right: 0.23rem">
                    <van-image
                      width="2rem"
                      height="2rem"
                      fit="fill"
                      round
                      src="http://39.106.71.161:5000/video/4.jpg"
                    />
                  </div>
                </template>
                <template #label>
                  <div class="ping_lun_info">
                    <div class="pin_lun_detail">以后小说家可以言出法随</div>
                    <div class="ping_lun_other">
                      <span class="pnglun_date">1小时前</span>
                      <van-icon
                        name="good-job-o"
                        class="pinglun_label"
                        size="1.2rem"
                        badge="10+"
                        color="#ee0a24"
                      />
                      <van-tag
                        plain
                        class="pinglun_label"
                        round
                        color="#7232dd"
                        @click="detailShow = true"
                        >评论 1</van-tag
                      >
                    </div>
                  </div>
                </template>
              </van-cell>
              <van-cell title="无缺">
                <!-- 使用 icon 插槽来自定义左侧图标 -->
                <template #icon>
                  <div class="" style="margin-right: 0.23rem">
                    <van-image
                      width="2rem"
                      height="2rem"
                      fit="fill"
                      round
                      src="http://39.106.71.161:5000/video/5.jpg"
                    />
                  </div>
                </template>
                <template #label>
                  <div class="ping_lun_info">
                    <div class="pin_lun_detail">视频不错，赞一个⊙０⊙</div>
                    <div class="ping_lun_other">
                      <span class="pnglun_date">2小时前</span>
                      <van-icon
                        name="good-job-o"
                        class="pinglun_label"
                        size="1.2rem"
                        badge="5+"
                        color="#ee0a24"
                      />
                      <van-tag
                        plain
                        class="pinglun_label"
                        round
                        color="#7232dd"
                        @click="detailShow = true"
                        >评论 0</van-tag
                      >
                    </div>
                  </div>
                </template>
              </van-cell>
              <van-cell title="原来是个梦">
                <!-- 使用 icon 插槽来自定义左侧图标 -->
                <template #icon>
                  <div class="" style="margin-right: 0.23rem">
                    <van-image
                      width="2rem"
                      height="2rem"
                      fit="fill"
                      round
                      src="https://img.yzcdn.cn/vant/cat.jpeg"
                    />
                  </div>
                </template>
                <template #label>
                  <div class="ping_lun_info">
                    <div class="pin_lun_detail">我有个大胆的想法</div>
                    <div class="ping_lun_other">
                      <span class="pnglun_date">5小时前</span>
                      <van-icon
                        name="good-job-o"
                        class="pinglun_label"
                        size="1.2rem"
                        badge="20+"
                        color="#ee0a24"
                      />
                      <van-tag
                        plain
                        class="pinglun_label"
                        round
                        color="#7232dd"
                        @click="detailShow = true"
                        >评论 2</van-tag
                      >
                    </div>
                  </div>
                </template>
              </van-cell>
            </template>
          </van-cell>
        </van-cell-group>
      </div>
    </van-action-sheet>

    <!-- 评论框 -->
    <van-action-sheet v-model:show="detailShow" @select="onSelectPingLun">
      <div class="content">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              v-model="message"
              rows="8"
              size="large"
              type="textarea"
              maxlength="100"
              placeholder="您的评论..."
              show-word-limit
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button
              round
              block
              color="linear-gradient(to right, #7232dd, #ee0a24)"
              native-type="submit"
            >
              提交
            </van-button>
          </div>
        </van-form>
      </div>
    </van-action-sheet>

    <!-- 分享面板 -->
    <van-share-sheet
      v-model:show="share"
      title="立即分享给好友"
      :options="options"
      @select="onSelect"
    />
  </div>
</template>
<script>
import { showSuccessToast } from 'vant'
import 'vant/es/toast/style'
export default {
  name: "SmallVideoDetail",
  data () {
    return {
      share: false,
      show: false,
      detailShow: false,
      dianzhan: false,
      likeName: 'like',
      current: 0,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
      videoList: [{
        url: "http://39.106.71.161:5000/video/1.mp4",
        cover: "http://39.106.71.161:5000/video/1.png",
        introduce: 'chatgpt到底有多智能?',
        name: '@张先生',
        like: '1000+',
        comment: '500+'
      }, {
        url: "http://39.106.71.161:5000/video/2.mp4",
        cover: "http://39.106.71.161:5000/video/2.png",
        introduce: '人工智能专业千万别去这四个方向',
        name: '芯机叔Talk',
        like: '700+',
        comment: '200+'

      }, {
        url: "http://39.106.71.161:5000/video/3.mp4",
        cover: "http://39.106.71.161:5000/video/3.png",
        introduce: '计算机专业最大的问题',
        name: '计算机队长',
        like: '200+',
        comment: '50+'
      }, {
        url: "http://39.106.71.161:5000/video/4.mp4",
        cover: "http://39.106.71.161:5000/video/4.png",
        introduce: '输入文字生成视频',
        name: '景可远',
        like: '300+',
        comment: '60+'
      }],
      isVideoShow: true,
      playOrPause: true,
      video: null,
      iconPlayShow: true,
      iconPauseShow: false
    }
  },
  methods: {
    backTolast () {
      history.back()
    }
    ,
    onSelect (option) {
      this.share = false
    },
    likeIt (event) {
      if (this.dianzhan) {
        showSuccessToast('点赞成功')
        this.dianzhan = false
        this.likeName = 'like'
      } else {
        showSuccessToast('取消成功')
        this.dianzhan = true
        this.likeName = 'like-o'
      }
    },
    onChange (index) {
      //改变的时候 暂停当前播放的视频
      let video = document.querySelectorAll('video')[this.current]
      video.pause()
      this.playOrPause = false
      this.current = index
      //重置显示封面。图标等
      this.isVideoShow = true
      this.iconPlayShow = true
      this.iconPauseShow = false
    },
    playvideo (event) {
      let video = document.querySelectorAll('video')[this.current]
      console.log("playvideo：" + this.current)
      this.isVideoShow = false
      this.iconPlayShow = false
      this.iconPauseShow = true
      video.play()
      this.displayBtn()
    },
    pauseVideo (event) { //暂停\播放
      let video = document.querySelectorAll('video')[this.current]
      console.log("pauseVideo" + this.current)
      if (this.playOrPause) {
        video.pause()
        this.iconPlayShow = true
        this.iconPauseShow = false
      } else {
        video.play()
        this.iconPlayShow = false
        this.iconPauseShow = true
      }
      this.playOrPause = !this.playOrPause
      this.displayBtn()
    },
    displayBtn () {
      const secounds = 1
      let num = 0
      const timer = setInterval(() => {
        if (num < secounds) {
          num++
        } else {
          clearInterval(timer)
          this.iconPlayShow = false
          this.iconPauseShow = false
        }
      }, 1000)// 这里的时间不要忘记，否则没有效果
    },
    onPlayerEnded (player) { //视频结束
      this.isVideoShow = true
      this.current += this.current
    },
  }
}
</script>
<style scoped>
.botton_tabs {
  margin-left: 0.6rem;
  position: absolute;
  bottom: 5%;
  left: 0%;
  width: 83%;
  z-index: 999;
}
.botton_tabs .video_info_title {
  font-size: 1.03rem;
  font-weight: 600;
  color: white;
}
.botton_tabs .video_info_content {
  color: white;
  font-size: 0.8rem;
}

/*    /deep/.van-cell-group {
        background-color: transparent;
    }
    /deep/.van-cell-group .van-cell {
        background-color: transparent;
    }
    /deep/.van-cell__title span {
        font-size: 1.03rem;
        font-weight: 600;
        color: white;
    }
    /deep/.van-cell__title .van-cell__label {
        color: white;
        font-weight: 600;
    }*/
.hide {
  display: none;
}
.show {
  display: block;
}

.video-player {
  height: 100vh;
  width: 100vw;
}

.product_swiper {
  width: 100vw;
  height: 100vh;
}

.van_swipe {
  width: 100vw;
  height: 100vh;
}

.van-swipe {
  width: 100%;
  height: 100%;
}

.container_box {
  width: 100vw;
  height: 100vh;
}

.video_box {
  object-fit: fill !important;
  z-index: 999;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}

video {
  object-position: 0 0;
}

.icon_play {
  position: absolute;
  top: 44%;
  right: 40%;
  z-index: 999;
}

.right_tabs {
  position: absolute;
  top: 62%;
  right: 6%;
  z-index: 999;
}
.play,
.platStart {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 100%;
}
/*评论*/
.ping_lun_info {
}
.article-other {
  margin-top: 0.75rem;
}
.ping_lun_info .ping_lun_other {
  margin-top: 0.5rem;
}
.ping_lun_info .ping_lun_other .pnglun_date {
  font-weight: 600;
}
.ping_lun_info .ping_lun_other .pinglun_label {
  margin-left: 1.5rem;
}
</style>