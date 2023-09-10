<template>
  <div class="total" style="background-color: #e7e7e7">
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
            学习网站
          </span>
        </center>
      </div>
    </div>

    <div
      class="introduce"
      style="background-color: white; border-radius: 0px 0px 10px 10px"
    >
      <video style="width: 360px; height: 248px; opacity: 1" controls>
        <source src="http://127.0.0.1:5000/video/hmbb.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
      </video>

      <div class="text" style="padding-left: 16px">
        <p
          style="
            font-size: 22px;
            font-weight: 700;
            letter-spacing: 0px;
            line-height: 25.78px;
            font-family: res;
            color: rgba(0, 69, 84, 1);
            text-align: left;
            vertical-align: top;
          "
        >
          {{ course.course_title }}
        </p>
        <div style="margin-top: 11px; margin-bottom: 11px">
          <span
            style="
              font-size: 12px;
              font-weight: 500;
              letter-spacing: 0px;
              line-height: 14.06px;
              color: rgba(116, 139, 144, 0.56);
              font-family: regular;
            "
            >简介：</span
          >
          <span
            style="
              font-size: 12px;
              font-weight: 400;
              letter-spacing: 0px;
              color: rgba(116, 139, 144, 0.56);
              font-family: thin;
            "
            >{{ course.course_content }}</span
          >
        </div>
      </div>
      <div
        class="user"
        style="
          display: flex;
          flex-direction: row;
          padding-left: 16px;
          margin: 11px;
          width: 360px;
          margin-top: 30px;
          height: 58px;
        "
      >
        <div class="img">
          <van-image
            width="36"
            height="36"
            radius="10"
            lazy-load
            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
          />
        </div>
        <div style="margin-left: 20px; height: 36px; text-align: center">
          <span
            style="
              margin: auto;
              line-height: 36px;
              font-size: 18px;
              font-weight: 700;
              letter-spacing: 0px;
              font-family: res;
              color: rgba(3, 73, 89, 1);
            "
          >
            {{ name }}</span
          >
        </div>
        <button
          id="Add"
          @click="addCourse"
          style="
            width: 72px;
            height: 20px;
            opacity: 1;
            right: 16px;
            position: absolute;
            border-radius: 10.5px;
            background: rgba(0, 121, 148, 1);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 0px;
            line-height: 20px;
            color: rgba(255, 255, 255, 1);
            text-align: center;
            font-family: regular;
          "
        >
          添加课程
        </button>
      </div>
    </div>
    <div
      class="study"
      style="
        margin-top: 5px;
        width: 360px;
        height: 56px;
        opacity: 1;
        border-radius: 10px;
        background-color: white;
        line-height: 56px;
        padding-left: 16px;
      "
    >
      <span
        style="
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0px;
          font-family: thin;
          color: rgba(94, 137, 147, 1);
        "
        >已学习时长：</span
      >
      <span
        style="
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0px;
          font-family: res;
          color: rgba(0, 121, 148, 1);
        "
        >{{ time }}</span
      >
    </div>
    <div style="background-color: white; border-radius: 10px 10px 0px 0px">
      <div
        style="
          margin-top: 5px;
          width: 360px;
          height: 48px;
          opacity: 1;
          background: rgba(255, 255, 255, 1);
          border-bottom: 0.4px solid rgba(0, 69, 84, 0.09);
          line-height: 48px;
          font-family: regular;
          padding-left: 16px;
          border-radius: 10px 10px 0px 0px
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0px;
          color: rgba(0, 69, 84, 0.58);
        "
      >
        课程目录
      </div>
      <div class="course">
        <div
          class="course-item"
          style="
            height: 56px;
            line-height: 56px;
            border-bottom: 0.4px solid rgba(0, 69, 84, 0.09);
          "
        >
          <span
            style="
              margin-left: 16px;
              margin-right: 30px;
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 0px;
              font-family: res;
              color: rgba(45, 105, 140, 1);
            "
            >第一章:</span
          >
          <span
            style="
              margin-right: 160px;
              font-size: 14px;
              font-weight: 700;
              letter-spacing: 0px;
              font-family: regular;
              color: rgba(45, 105, 140, 0.7);
            "
            >{{ course.course_title }}</span
          >
          <span
            v-if="isstudy"
            style="
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0px;
              font-family: thin;
              color: rgba(119, 139, 150, 0.23);
            "
            >已学习</span
          >
          <span
            v-else
            style="
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0px;
              font-family: thin;
              color: rgba(115, 118, 120, 0.49);
            "
            >未学习</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      course: [],
      title: 'vdvsdvs',
      content: 'dvvsdvsdvsvdsvsdv',
      name: 'cdscdsc',
      img: '',
      time: '45分钟',
      isstudy: false,
      theme: 'scdscs'
    }
  },
  methods: {
    backTolast () {
      history.back()
    },
    addCourse (id, num) {//关注课程
      this.selectedCourse = id
      var element1 = document.getElementById("Add" + num)
      element1.style.display = "none"
      var element2 = document.getElementById("cancelAdd" + num)
      element2.style.display = "block"
      console.log("add", id, num)
    },
  }
}
</script>