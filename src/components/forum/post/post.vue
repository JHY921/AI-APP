<template>
  <div
    v-if="showingInput"
    class="glassContainer"
    style="
      position: absolute;
      width: 100%;
      height: 132px;
      margin-top: 200px;
      border-radius: 18px;
    "
  >
    <input
      v-model="inputTag"
      placeholder="请输入你想添加的tag"
      style="
        font-size: 16px;
        width: 320px;
        height: 40px;
        border: none;
        border-radius: 18px;
        box-shadow: rgba(0, 0, 0, 0.1) 2px 2px 8px inset;
        display: block;
        margin-top: 20px;
        margin-left: 20px;
      "
    />
    <button
      style="
        background-color: #007994;
        border: none;
        margin-top: 20px;
        width: 50%;
        height: 50px;
        border-bottom-left-radius: 18px;
        font-size: 20px;
        /* text-shadow: -2px 2px 2px rgb(153, 212, 232),
                -2px 2px 2px rgb(153, 212, 232),
                -2px 2px 2px rgb(153, 212, 232),
                -2px 2px 2px rgb(153, 212, 232),
                -2px 2px 2px rgb(153, 212, 232),
                -2px 2px 2px rgb(153, 212, 232);
                box-shadow: 0px 15px 0px 0px rgb(153, 212, 232); */
      "
      @click="confirmTag"
    >
      确定
    </button>
    <button
      style="
        background-color: #8ec3cf;
        border: none;
        margin-top: 20px;
        width: 50%;
        height: 50px;
        border-bottom-right-radius: 18px;
        font-size: 20px;
        /* text-shadow: -2px 2px 2px rgb(153, 212, 232),
                -2px 2px 2px rgb(153, 212, 232),
                -2px 2px 2px rgb(153, 212, 232),
                -2px 2px 2px rgb(153, 212, 232),
                -2px 2px 2px rgb(153, 212, 232),
                -2px 2px 2px rgb(153, 212, 232);
                box-shadow: 0px 15px 0px 0px rgb(153, 212, 232); */
      "
      @click="cancelTag"
    >
      取消
    </button>
  </div>
  <div class="total">
    <div class="status_bar"></div>

    <div class="return_label">
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
              color: rgba(0, 87, 107, 0.8);
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              transform: translateY(-50%);
            "
          >
            <strong>发布帖子</strong>
          </span>
        </center>
      </div>
      <!--js计算适配width-->
      <div
        style="
          display: inline-block;
          width: 120px;
          height: 100%;
          vertical-align: top;
          position: relative;
          left: 56%;
          top: 25%;
        "
        @click="moreInfor"
      >
        <img
          src="./save.png"
          style="
            width: 30px;
            display: inline-block;
            vertical-align: top;
            margin-top: 5px;
            margin-right: 10px;
          "
          @click="saveText"
        />
        <img
          src="./line.png"
          style="
            height: 18px;
            display: inline-block;
            vertical-align: top;
            margin-top: 5px;
            margin-right: 10px;
          "
        />
        <img
          src="./post.png"
          style="
            width: 50px;
            display: inline-block;
            vertical-align: top;
            margin-top: 2px;
          "
          @click="postText"
        />
      </div>
    </div>

    <div class="textContainer">
      <div class="title" style="padding: 10px">
        <input
          placeholder="请输入标题"
          style="width: 320px; font-size: 36px; border: none"
          v-model="title"
        />
        <!-- <input placeholder="选择你的tag" style="width: 320px; font-size: 16px; border: none;margin-top: 10px"
                    v-model="tagName"> -->
        <div
          class="tagContainer"
          style="width: 320px; font-size: 16px; border: none; margin-top: 10px"
        >
          <div v-for="(text, index) in tagList" :key="index" class="tagBlock">
            {{ "#" + text }}
          </div>
        </div>
      </div>
      <div>
        <input
          id="custom-file-input"
          type="file"
          ref="fileInput"
          @change="handleFileChange"
          style="display: none"
        />
        <img :src="imageSrc" alt="Selected Image" v-if="imageSrc" />
      </div>
      <!-- <textarea v-model="imageSrc"></textarea> -->
      <textarea
        id="passage"
        rows="100"
        cols="35"
        placeholder="想要写些什么"
        class="passage"
        v-model="passage"
      ></textarea>
    </div>

    <div class="opeLabel">
      <img
        src="./tag.png"
        style="
          vertical-align: top;
          width: 20px;
          margin: 10px;
          margin-left: 20px;
        "
        @click="addTag"
      />
      <img
        src="./getPhoto.png"
        @click="openFileInput"
        style="
          vertical-align: top;
          width: 25px;
          margin: 18px;
          margin-left: 40px;
        "
      />
      <img
        src="./keyboard.png"
        style="
          vertical-align: top;
          width: 25px;
          margin: 16px;
          margin-left: 30px;
        "
      />
      <img
        src="./line.png"
        style="
          vertical-align: top;
          height: 30px;
          margin-top: 12px;
          margin-left: 20px;
        "
      />
      <img
        src="./goBack.png"
        style="
          vertical-align: top;
          height: 25px;
          margin: 14px;
          margin-left: 20px;
        "
        @click="goBack"
      />
      <img
        src="./goOn.png"
        style="vertical-align: top; height: 25px; margin: 14px"
        @click="goOn"
      />
    </div>
  </div>
</template>


<script>

import 'vant/es/toast/style'
import axios from 'axios'
import api from '../../../api/api'
import { showToast } from 'vant'
export default {
  data () {
    return {
      title: "",
      passage: "",
      imageSrc: "",
      tagName: "",
      tagList: [],
      tagNum: 0,
      showingInput: false,
      inputTag: "",
      flag: [],
      opeNum: 0,
      cacheBox: [],
      cacheNum: 0,
    }
  },
  methods: {
    backTolast () {
      history.back()
    },
    saveText () {

    },
    postText () {
      if (this.imageSrc) {
        var imgdate = this.imageSrc.split(',')[1]
      }
      else {
        var imgdate = null
      }
      console.log(this.imageSrc)
      console.log(imgdate)
      if (this.title != '' && this.passage.length != '') {
        axios.post(`http://${api.api}/forum/post`, {
          title: this.title,
          tag: this.tagList,
          passage: this.passage,
          img: imgdate,
        },
          { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }, withCredentials: true }).then(res => {
            console.log(res.data)
          }).catch(err => {
            console.log(err)
          })
        showToast('发表成功')
        this.$router.push('/forum')
      } else {
        showToast('内容不能为空')
      }

    },
    addTag () {
      this.showingInput = true
    },
    confirmTag () {
      if (this.inputTag) {
        this.opeNum++
        this.tagNum++
        this.tagList.push(this.inputTag)
        this.inputTag = ""
        this.showingInput = false
        this.flag.push(1)
      }
      else this.showingInput = false

    },
    cancelTag () {
      this.showingInput = false
    },
    openFileInput () {
      this.opeNum++
      this.$refs.fileInput.click() // 触发文件选择框的打开事件
      this.flag.push(2)
    },
    handleFileChange (event) {
      const file = event.target.files[0] // 获取选择的文件
      if (file) {
        this.convertImageToURL(file)
      }
    },
    convertImageToURL (file) {
      const reader = new FileReader()

      reader.onload = () => {
        this.imageSrc = reader.result // 将图片转为DataURL，并存入data中的imageSrc
      }

      reader.readAsDataURL(file)
    },
    goBack () {
      console.log("cacheBox", this.cacheBox, "tagNum", this.tagNum, "tagList", this.tagList)
      if (this.tagNum != 0 && this.flag[this.opeNum - 1] == 1) {//撤回tag
        this.cacheBox.push({ infor: this.tagList[this.tagNum - 1], num: 1 })//缓存撤回box
        this.cacheNum++
        this.tagList.pop()//tag数据数组
        this.tagNum--
        this.opeNum--
        this.flag.pop()//操作tag or img
      }
      if (this.imageSrc && this.flag[this.opeNum - 1] == 2) {//撤回img
        this.cacheBox.push({ infor: this.imageSrc, num: 2 })
        this.cacheNum++
        this.imageSrc = ""
        this.opeNum--
        this.flag.pop()
      }
    },
    goOn () {
      if (this.cacheBox[this.cacheNum - 1].num == 1) {//返回tag
        this.tagList.push(this.cacheBox[this.cacheNum - 1].infor)
        this.cacheNum--
        this.opeNum++
        this.tagNum++
        this.flag.push(1)
      }
      else if (this.cacheBox[this.cacheNum - 1].num == 2) {//返回img
        this.imageSrc = this.cacheBox[this.cacheNum - 1].infor
        this.cacheNum--
        this.opeNum++
        this.flag.push(2)
      }
    },
  },
  computed: {
  },
  mounted () {

  }
}

</script>

<style>
.tagBlock {
  display: inline-block;
  width: auto;
  color: darkcyan;
  margin-right: 5px;
}
.glassContainer {
  position: absolute;
  height: 160px;

  /* display: flex;
    justify-content: center;
    align-items: center; */
  backdrop-filter: blur(6px);
  background-color: rgba(11, 211, 214, 0.075);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 8px;
  /* border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid; */
}
.custom-file-input {
  display: none;
  /* 隐藏默认的文件选择按钮 */
}

.title input::placeholder {
  color: rgba(0, 0, 0, 0.6);
}

.content input::placeholder {
  color: rgba(0, 0, 0, 0.2);
}

input {
  overflow: visible;
  word-break: break-all;
}

* {
  margin: 0px;
}

img {
  max-width: 360px;
  height: auto;
}

.total {
  height: 640px;
  width: 360px;
  overflow: hidden;
}

.status_bar {
  position: relative;
  left: 0px;
  top: 0px;
  width: 360px;
  height: 24px;
  opacity: 1;
  background: rgba(158, 152, 152, 0.4);
}

.return_label {
  position: relative;
  width: 360px;
  height: 48px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.passage {
  margin: 10px;
  border: 0;
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 18.75px;
  font-family: regular;
}

.textContainer {
  width: 360px;
  height: 512px;
  overflow: auto;
}

.opeLabel {
  z-index: 999999;
  width: 360px;
  height: 56px;
  border-top-left-radius: 18px;
  background: linear-gradient(
    180deg,
    rgb(218, 243, 248, 0.8) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.06) inset;
}
</style>