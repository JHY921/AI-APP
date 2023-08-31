<template>
  <div
    style="position: relative; width: 360px; height: 640px; overflow: hidden"
  >
    <div class="total" :class="{ 'fade-out': tonext }">
      <div
        style="
          height: 24px;
          width: 100%;
          z-index: 9999999;
          background-color: rgb(128, 128, 128);
        "
      ></div>
      <div
        :class="{ moveI: loading }"
        style="
          position: absolute;
          left: -400px;
          top: -76px;
          width: 400px;
          height: 200px;
          opacity: 0.8;
          z-index: -1;
          border-radius: 50px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(17, 118, 128, 1) 100%
          );
        "
      ></div>
      <div
        :class="{ moveJ: loading }"
        style="
          position: absolute;
          left: -400px;
          top: -76px;
          width: 400px;
          height: 200px;
          z-index: -1;
          border-radius: 50px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.2) 0%,
            rgba(17, 118, 128, 0.2) 100%
          );
        "
      ></div>

      <div
        :class="{ moveS: loading }"
        style="
          position: absolute;
          left: 78px;
          top: 345px;
          width: 500px;
          height: 800px;
          opacity: 0.8;
          border-radius: 42px;
          background: linear-gradient(
            220deg,
            rgba(143, 205, 211, 1) 30%,
            rgba(143, 205, 211, 0) 90%
          );
          filter: blur(0px);
          z-index: 10010;
        "
      ></div>
      <div
        :class="{ moveB: loading }"
        style="
          z-index: 10009;
          position: absolute;
          left: -4px;
          top: 320px;
          width: 535px;
          height: 831px;
          opacity: 0.4;
          border-radius: 79px;
          background: linear-gradient(
            223.93deg,
            rgba(0, 140, 153, 1) 0%,
            rgba(0, 140, 153, 0) 100%
          );
        "
      ></div>
      <img
        style="position: relative; margin: 30px"
        src="../../assets/icons/register/userinfor.png"
      />
      <div
        :class="{ 'fade-out': Skip, 'fade-in': !Skip }"
        style="
          z-index: 999999;
          position: absolute;
          left: 20%;
          top: 33%;
          width: 100%;
        "
      >
        <div>
          <label
            for="admin"
            style="
              font-size: 18px;
              margin-bottom: 20px;
              color: rgba(0, 103, 112, 1);
            "
          >
            用户名：
            <input
              id="admin"
              style="
                margin-left: 6px;
                background-color: #ffffff;
                border-radius: 24px;
                box-shadow: 3px 4px 5px #0160752b inset;
                height: 28px;
                width: 114px;
                border: none;
                text-align: center;
              "
              v-model="name"
            />
          </label>
        </div>
        <div
          style="
            margin-top: 7px;
            margin-bottom: -7px;
            color: red;
            font-size: 6px;
            opacity: 0.6;
            margin-left: 80px;
          "
        >
          <span v-show="admin">用户名不符合要求</span>
        </div>
        <div
          style="
            margin-top: 7px;
            margin-bottom: -7px;
            color: grey;
            font-size: 6px;
            opacity: 0.6;
            margin-left: 80px;
          "
        >
          <span v-show="!admin">3-8位的数字或英文</span>
        </div>

        <div style="margin-top: 20px">
          <label
            for="sex"
            style="
              font-size: 18px;
              margin-bottom: 20px;
              color: rgba(0, 103, 112, 1);
            "
          >
            性别：
            <input
              readonly
              @click="ShowSex = true"
              id="sex"
              style="
                margin-left: 20px;
                background-color: #ffffff;
                border-radius: 24px;
                box-shadow: 3px 4px 5px #0160752b inset;
                height: 28px;
                width: 50px;
                border: none;
                text-align: center;
              "
              v-model="sex"
            />
          </label>
        </div>

        <div style="margin-top: 20px">
          <label
            for="birth"
            style="
              font-size: 18px;
              margin-bottom: 20px;
              color: rgba(0, 103, 112, 1);
            "
          >
            生日：
            <input
              @click="ShowTime = true"
              readonly
              id="birth"
              style="
                margin-left: 20px;
                background-color: #ffffff;
                border-radius: 24px;
                box-shadow: 3px 4px 5px #0160752b inset;
                height: 28px;
                width: 168px;
                border: none;
                text-align: center;
              "
              v-model="birth"
            />
          </label>
        </div>

        <div style="margin-top: 20px">
          <label
            for="acdamic"
            style="
              font-size: 18px;
              margin-bottom: 20px;
              color: rgba(0, 103, 112, 1);
            "
          >
            学历：
            <input
              @click="ShowAcdemic = true"
              readonly
              id="acadamic"
              style="
                margin-left: 20px;
                background-color: #ffffff;
                border-radius: 24px;
                box-shadow: 3px 4px 5px #0160752b inset;
                height: 28px;
                width: 114px;
                border: none;
                text-align: center;
              "
              v-model="degree"
            />
          </label>
          <div
            style="
              margin-top: 30px;
              color: red;
              font-size: 15px;
              opacity: 0.6;
              margin-left: 70px;
            "
          >
            <span v-show="msg">请把信息填写完整</span>
          </div>
        </div>
        <div
          style="
            font-size: 18px;
            margin-bottom: 20px;
            color: rgba(0, 103, 112, 1);
          "
        ></div>
      </div>

      <div
        :class="{ 'fade-out': Skip, 'fade-in': !Skip }"
        style="
          position: relative;
          z-index: 999999;
          top: 55%;
          left: 35%;
          display: flex;
          align-items: center;
        "
      >
        <button
          @click="gotest"
          style="
            width: 117px;
            height: 39px;
            background-color: #037585;
            border-radius: 30px;
            border: none;
            color: #ffffff;
            font-size: 24px;
            font-family: SmileySans;
            line-height: 23px;
          "
        >
          注册
        </button>
      </div>
    </div>
    <van-popup
      v-model:show="ShowSex"
      position="bottom"
      style="z-index: 999999999"
    >
      <van-picker
        title="性别"
        :columns="columns"
        @confirm="onConfirm"
        @cancel="ShowSex = false"
        @change="onChange"
      />
    </van-popup>
    <van-popup
      v-model:show="ShowTime"
      position="bottom"
      style="z-index: 999999999"
    >
      <van-date-picker
        v-model="currentDate"
        title="选择日期"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="ConfirmTime"
        @cancel="ShowTime = false"
      />
    </van-popup>
    <van-popup
      v-model:show="ShowAcdemic"
      position="bottom"
      style="z-index: 999999999"
    >
      <van-picker
        title="学历"
        :columns="columnsa"
        @confirm="ConfirmAcdemic"
        @cancel="ShowAcdemic = false"
      />
    </van-popup>
  </div>
</template>
  
<script>
import api from '../../api/api'
import { showToast } from 'vant'
import { ref } from 'vue'
import axios from 'axios'
export default {
  data () {
    return {
      loading: false,
      name: '',
      birth: '',
      degree: '',
      sex: '',
      id: '',
      msg: false,
      tonext: false,
      columns: [
        { text: '男', value: '男' },
        { text: '女', value: '女' },
      ],
      columnsa: [
        { text: '初中', value: '初中' },
        { text: '高中', value: '高中' },
        { text: '大学', value: '大学' },
        { text: '研究生及以上', value: '研究生及以上' },
      ],
      ShowSex: false,
      ShowTime: false,
      ShowAcdemic: false,
      currentDate: ref(['2021', '01', '01']),
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(),
      admin: false,
    }
  },
  mounted () {
    console.log(this.currentDate[0])
    this.currentDate[0] = this.getdate()[0]
    this.currentDate[1] = this.getdate()[1]
    this.currentDate[2] = this.getdate()[2]

  },
  created () {
    setTimeout(() => {
      this.loading = true
    }, 100)
    this.id = this.$route.params.userId
  },
  methods: {
    getdate () {
      var date = new Date()
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var strDate = date.getDate()
      let dateR = [year, month, strDate]
      return dateR
    },
    gotest () {
      if (this.name != '' && this.sex != '' && this.degree != '' && this.birtn != '') {
        const url = `http://${api.api}/login`
        this.msg = false
        axios.post(url, {
          name: this.name,
          birth: this.birth,
          degree: this.degree,
          sex: this.sex,
          id: this.id
        }).then(res => {
          this.tonext = !this.tonext
          setTimeout(() => {
            this.$router.push('./questionSet1')
          }, 800)
        })
      } else {

        this.msg = true
        setTimeout(() => {
          this.msg = false
        }, 500)
      }

    },
    onConfirm ({ selectedValues }) {
      this.sex = selectedValues[0]
      this.ShowSex = false

    },
    ConfirmTime () {
      this.birth = this.currentDate
      this.ShowTime = false
    },
    ConfirmAcdemic ({ selectedValues }) {
      this.degree = selectedValues[0]
      this.ShowAcdemic = false
    },
    checkadmin (value) {
      function isValidString (str) {
        // 创建一个正则表达式，用于匹配只包含数字和英文字符，长度在3到6个字符之间的字符串
        const regex = /^[0-9a-zA-Z]{3,6}$/
        // 使用正则表达式进行匹配
        return regex.test(str)
      }
      if ((this.name === '')) {
        this.admin = false
      } else {
        if (isValidString(value)) {
          console.log("符合要求")
          this.admin = false
        } else {
          console.log("不符合要求")
          this.admin = true
        }
      }
    }
  },
  watch: {
    name (value) {
      this.checkadmin(value)
    }
  }
};
</script>
  
<style scoped>
* {
  font-family: dyh;
}
.fade-out {
  -webkit-animation: fade-out 1s ease-out both;
  animation: fade-out 1s ease-out both;
}
.fade-in {
  -webkit-animation: fade-in 2s ease-out both;
  animation: fade-in 2s ease-out both;
}
@-webkit-keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.moveS {
  transform: translate(-50px, -196px);
  transition: transform 1s;
}

.moveB {
  transform: translate(0, -196px);
  transition: transform 1s;
}
.moveI {
  transform: translate(280px, 0px);
  transition: transform 1s;
}

.moveJ {
  transform: translate(290px, 0px);
  transition: transform 1s;
}

* {
  margin: 0px;
  overflow: hidden;
}

.total {
  position: relative;
  width: 360px;
  height: 640px;
  overflow: hidden;
}
</style>