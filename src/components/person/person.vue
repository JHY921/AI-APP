<template>
  <div class="title">
    <div class="back"></div>
    <div class="img">
      <van-image
        width="56"
        height="56"
        radius="10"
        lazy-load
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
    </div>
    <div class="info">
      <div class="name">{{ name }}</div>
      <span class="acc">账号：</span>
      <div class="account">{{ account }}</div>
    </div>
    <svg
      class="dot"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="24"
      height="25.714279174804688"
      viewBox="0 0 24 25.714279174804688"
      fill="none"
    >
      <g opacity="0.6" transform="translate(0 0)  rotate(0)">
        <mask id="bg-mask-0" fill="white">
          <use
            transform="translate(0 0)  rotate(0)"
            xlink:href="#path_0"
          ></use>
        </mask>
        <g mask="url(#bg-mask-0)">
          <path
            id="路径 1"
            fill-rule="evenodd"
            style="fill: #333333"
            opacity="1"
            d="M6 11.25C5.17 11.25 4.5 11.97 4.5 12.86C4.5 13.74 5.17 14.46 6 14.46C6.83 14.46 7.5 13.74 7.5 12.86C7.5 11.97 6.83 11.25 6 11.25Z"
          ></path>
          <path
            id="路径 2"
            fill-rule="evenodd"
            style="fill: #333333"
            opacity="1"
            d="M12 11.25C11.17 11.25 10.5 11.97 10.5 12.86C10.5 13.74 11.17 14.46 12 14.46C12.83 14.46 13.5 13.74 13.5 12.86C13.5 11.97 12.83 11.25 12 11.25Z"
          ></path>
          <path
            id="路径 3"
            fill-rule="evenodd"
            style="fill: #333333"
            opacity="1"
            d="M18 11.25C17.17 11.25 16.5 11.97 16.5 12.86C16.5 13.74 17.17 14.46 18 14.46C18.83 14.46 19.5 13.74 19.5 12.86C19.5 11.97 18.83 11.25 18 11.25Z"
          ></path>
        </g>
      </g>
      <defs>
        <rect id="path_0" x="0" y="0" width="24" height="25.71428680419922" />
      </defs>
    </svg>
    <van-icon name="arrow" class="arrow" size="14px" />
    <div class="post">
      <div class="tit">帖子</div>
      <div class="numb">{{ trans(post) }}</div>
    </div>
    <div class="line-1"></div>
    <div class="concern">
      <div class="tit">关注</div>
      <div class="numb">{{ trans(concern) }}</div>
    </div>
    <div class="line-2"></div>
    <div class="fan">
      <div class="tit">粉丝</div>
      <div class="numb">{{ trans(fan) }}</div>
    </div>
  </div>
  <div class="blank"></div>
  <div class="collect">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="star"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="20"
      height="20"
      viewBox="0 0 18.003326416015625 17.163333892822266"
      fill="none"
    >
      <g
        opacity="1"
        transform="translate(0.6666641235351562 0.6666679382324219)  rotate(0)"
      >
        <path
          id="路径 1"
          style="fill: #007994; opacity: 1"
          d="M8.33698,1.50465l-1.94796,3.98795c-0.02383,0.04878 -0.05317,0.09397 -0.08804,0.13558c-0.03487,0.04161 -0.07423,0.07842 -0.11808,0.11041c-0.04386,0.03199 -0.09092,0.05824 -0.14119,0.07873c-0.05027,0.0205 -0.10227,0.03465 -0.15599,0.04244l-4.45604,0.64647l3.22658,3.15728c0.03871,0.03788 0.07231,0.07986 0.1008,0.12593c0.02848,0.04607 0.05101,0.09489 0.0676,0.14646c0.01658,0.0516 0.02673,0.1044 0.03044,0.1584c0.00371,0.05407 0.00088,0.10777 -0.0085,0.1611l-0.76325,4.3429l3.93304,-2.0966c0.04823,-0.02573 0.09884,-0.0452 0.15185,-0.0584c0.05301,-0.01327 0.10684,-0.01993 0.16149,-0.02c0.05465,0 0.10848,0.0066 0.1615,0.0198c0.05303,0.0132 0.10366,0.03263 0.1519,0.0583l3.94377,2.0983l-0.7635,-4.3443c-0.0094,-0.05333 -0.01223,-0.10703 -0.0085,-0.1611c0.00373,-0.054 0.01387,-0.1068 0.0304,-0.1584c0.0166,-0.05157 0.03913,-0.10039 0.0676,-0.14646c0.02853,-0.04607 0.06213,-0.08805 0.1008,-0.12593l3.2275,-3.15816l-1.5474,-0.22566l0.0002,-0.00147c-0.03933,-0.00571 -0.07783,-0.01487 -0.1155,-0.02746c-0.03767,-0.0126 -0.07393,-0.02844 -0.1088,-0.04751c-0.03487,-0.01908 -0.06773,-0.0411 -0.0986,-0.06606c-0.03093,-0.02496 -0.0594,-0.05246 -0.0854,-0.08251c-0.026,-0.03005 -0.04913,-0.06216 -0.0694,-0.09634c-0.02027,-0.03418 -0.03733,-0.06988 -0.0512,-0.10711c-0.01387,-0.03723 -0.0243,-0.0754 -0.0313,-0.1145c-0.00707,-0.0391 -0.0106,-0.07852 -0.0106,-0.11825c0,-0.04377 0.00427,-0.08713 0.0128,-0.13006c0.00853,-0.04293 0.02117,-0.08462 0.0379,-0.12506c0.0168,-0.04045 0.03733,-0.07887 0.0616,-0.11526c0.02433,-0.0364 0.05197,-0.07008 0.0829,-0.10103c0.031,-0.03095 0.0647,-0.05859 0.1011,-0.0829c0.0364,-0.02432 0.0748,-0.04486 0.1152,-0.06161c0.04047,-0.01675 0.08217,-0.0294 0.1251,-0.03794c0.04293,-0.00854 0.0863,-0.01281 0.1301,-0.01281c0.04713,0 0.09377,0.00495 0.1399,0.01486l2.8364,0.41364c0.14853,0.02166 0.2753,0.08614 0.3803,0.19343c0.0306,0.03129 0.05787,0.06526 0.0818,0.10192c0.02393,0.03666 0.04403,0.0753 0.0603,0.11592c0.01633,0.04062 0.02853,0.08244 0.0366,0.12547c0.00807,0.04302 0.01187,0.08642 0.0114,0.13019c-0.00047,0.04377 -0.0052,0.08707 -0.0142,0.12991c-0.009,0.04284 -0.0221,0.08439 -0.0393,0.12464c-0.0172,0.04026 -0.03813,0.07846 -0.0628,0.11459c-0.02473,0.03613 -0.05273,0.0695 -0.084,0.10011l-3.9389,3.85421l0.9392,5.3439c0.01287,0.0732 0.01347,0.14653 0.0018,0.22c-0.01167,0.0734 -0.03493,0.1429 -0.0698,0.2085c-0.04153,0.07807 -0.09643,0.1452 -0.1647,0.2014c-0.0682,0.0562 -0.1446,0.09723 -0.2292,0.1231c-0.08453,0.0258 -0.1708,0.03447 -0.2588,0.026c-0.088,-0.00853 -0.171,-0.03353 -0.249,-0.075l-4.8366,-2.5733l-4.82669,2.573c-0.06569,0.035 -0.13528,0.05837 -0.20879,0.0701c-0.0735,0.01167 -0.14691,0.01107 -0.22022,-0.0018c-0.08707,-0.01533 -0.16789,-0.0467 -0.24248,-0.0941c-0.07459,-0.04747 -0.13726,-0.1074 -0.18801,-0.1798c-0.05075,-0.0724 -0.08571,-0.15173 -0.10489,-0.238c-0.01919,-0.08633 -0.02113,-0.17303 -0.00582,-0.2601l0.93917,-5.3439l-3.93883,-3.85421c-0.05226,-0.05113 -0.09495,-0.10929 -0.12807,-0.17447c-0.03312,-0.06518 -0.05493,-0.13395 -0.06543,-0.2063c-0.01269,-0.08749 -0.00816,-0.17408 0.01359,-0.25977c0.02175,-0.08569 0.05908,-0.16395 0.11197,-0.23479c0.05289,-0.07084 0.11732,-0.12886 0.19329,-0.17407c0.07597,-0.04521 0.1577,-0.07416 0.24519,-0.08685l5.44133,-0.78941l2.38537,-4.88343c0.03211,-0.06576 0.07392,-0.12463 0.12543,-0.17661c0.05151,-0.05199 0.10999,-0.09434 0.17545,-0.12707c0.03915,-0.01958 0.07983,-0.03515 0.12205,-0.04671c0.04222,-0.01156 0.08516,-0.01889 0.12883,-0.022c0.04366,-0.0031 0.08721,-0.00192 0.13064,0.00356c0.04343,0.00548 0.08591,0.01513 0.12744,0.02898c0.04153,0.01384 0.0813,0.0316 0.11933,0.05328c0.03803,0.02168 0.07358,0.04686 0.10665,0.07554c0.03307,0.02868 0.06302,0.06031 0.08986,0.09489c0.02684,0.03458 0.05005,0.07145 0.06962,0.1106l0.65183,1.30368l0.61329,1.24579c0.06547,0.10683 0.0982,0.22289 0.0982,0.34817c0,0.04377 -0.00427,0.08713 -0.0128,0.13006c-0.0086,0.04293 -0.02127,0.08462 -0.038,0.12506c-0.01673,0.04044 -0.03727,0.07886 -0.0616,0.11526c-0.02433,0.0364 -0.05197,0.07007 -0.0829,0.10102c-0.03093,0.03095 -0.06461,0.05859 -0.10102,0.08291c-0.0364,0.02432 -0.07482,0.04486 -0.11526,0.06161c-0.04045,0.01675 -0.08213,0.0294 -0.12506,0.03794c-0.04293,0.00854 -0.08629,0.01281 -0.13006,0.01281c-0.06233,0 -0.12345,-0.00857 -0.18337,-0.02572c-0.05992,-0.01714 -0.11633,-0.04219 -0.16922,-0.07515c-0.0529,-0.03297 -0.10024,-0.07257 -0.14203,-0.11881c-0.04179,-0.04624 -0.07641,-0.09733 -0.10386,-0.15328l-0.00254,0.00125l-0.64,-1.3z"
        ></path>
        <path
          id="圆形 1"
          fill-rule="evenodd"
          style="fill: #006075"
          opacity="1"
          d="M11.3333 3.91667C10.7833 3.91667 10.3333 4.36667 10.3333 4.91667C10.3333 5.46667 10.7833 5.91667 11.3333 5.91667C11.8833 5.91667 12.3333 5.46667 12.3333 4.91667C12.3333 4.36667 11.8833 3.91667 11.3333 3.91667Z"
        ></path>
      </g>
    </svg>
    <div class="text1">收藏</div>
    <van-icon name="arrow" class="arrow-1" size="16px" />
  </div>
  <div class="blank-1"></div>
  <div class="his">
    <img class="icon-1" src="../../assets/icons/person/his.png" alt="">
    <div class="text1">历史记录</div>
    <van-icon name="arrow" class="arrow-1" size="16px" />
  </div>
  <div class="gap1"></div>
  <div class="class">
    <img class="icon-2" src="../../assets/icons/person/play.png" alt="">
    <div class="text1">课程</div>
    <van-icon name="arrow" class="arrow-1" size="16px" />
  </div>
  <div class="gap1"></div>
  <div class="help">
    <img class="icon-3" src="../../assets/icons/person/help.png" alt="">
    <div class="text1">帮助</div>
    <van-icon name="arrow" class="arrow-1" size="16px" />
  </div>
  <div class="gap1"></div>
  <div class="set">
    <img class="icon-4" src="../../assets/icons/person/set.png" alt="">
    <div class="text1">设置</div>
    <van-icon name="arrow" class="arrow-1" size="16px" />
  </div>
  <div class="gap1"></div>
  <div class="wait">
    <img class="icon-5" src="../../assets/icons/person/wait.png" alt="">
    <div class="text1">待定</div>
    <van-icon name="arrow" class="arrow-1" size="16px" />
  </div>
</template>
<script>
export default {
  components: {},
  data () {
    return {
      name: 'OSIR4',
      account: '22330133',
      post: '22',
      concern: '35',
      fan: '65'
    }
  },
  methods: {
    trans (a) {
      var num = Number(a)
      if (num >= 10000) {
        return `${Math.round(num * 10) / 100000}w`
      }
      return a
    }

  },
};
</script>
<style scoped>
@import url("../../assets/font/font.css");
body {
  background-color: rgb(243, 245, 245);
}
.title {
  width: 100%;
  height: 199px;
  padding: 0%;
  background-color: white;
  border-radius: 0px 0px 10px 10px;
  box-shadow: 0px 1px 7px #0000001a;
  position: relative;
}
.blank {
  width: 100%;
  height: 35px;
  background-color: rgb(243, 245, 245);
}
.collect {
  width: 100%;
  height: 57px;
  background-color: white;
  position: relative;
  box-shadow: -1px 2px 4px #0000001a;
}
.dot {
  position: absolute;
  top: 89px;
  left: 294px;
}
.blank-1 {
  width: 100%;
  height: 19px;
  background-color: rgb(243, 245, 245);
}
.his {
  width: 100%;
  height: 56px;
  position: relative;
  background-color: white;
}
.class {
  width: 100%;
  height: 56px;
  background-color: white;
  position: relative;
}
.help {
  width: 100%;
  height: 56px;
  background-color: white;
  position: relative;
}
.set {
  width: 100%;
  height: 56px;
  background-color: white;
  position: relative;
}
.wait {
  width: 100%;
  height: 56px;
  position: relative;
  background-color: white;
  box-shadow: -1px 2px 4px #0000001a;
}
.back {
  width: 100%;
  height: 72px;
  background-color: #07b3b047;
  filter: blur(22px);
}
.img {
  padding: 0;
  position: absolute;
  left: 25px;
  top: 72px;
}
.info {
  position: absolute;
  left: 97px;
  top: 75px;
}
.name {
  font-family: res;
  font-weight: 700;
}
.acc{
  position: absolute;
  font-family: Light;
  font-weight: 300;
  font-size: 10px;
  top: 30px;
}
.account {
  position: absolute;
  top: 30px;
  left: 35px;
  font-family: Light;
  font-weight: 300;
  font-size: 10px;
}
.arrow {
  position: absolute;
  right: 35px;
  top: 95px;
}
.post {
  position: absolute;
  left: 56px;
  top: 154px;
  width: 25px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.concern {
  position: absolute;
  left: 169px;
  top: 154px;
  width: 25px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fan {
  position: absolute;
  left: 282px;
  top: 154px;
  width: 25px;
  height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.tit {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
}
.numb {
  font-family: Medium;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
}
.line-1 {
  width: 1.5px;
  height: 25px;
  background-color: rgb(170, 187, 187);
  position: absolute;
  top: 156px;
  left: 124px;
  opacity: 0.5;
}
.line-2 {
  width: 1.5px;
  height: 25px;
  background-color: rgb(170, 187, 187);
  position: absolute;
  top: 156px;
  left: 235px;
  opacity: 0.5;
}
.star {
  position: absolute;
  top: 15px;
  left: 4%;
}
.icon-1{
  position: absolute;
  top: 17px;
  left: 4%;
}
.icon-2 {
  position: absolute;
  top: 17px;
  left: 4%;
}
.icon-3 {
  position: absolute;
  top: 17px;
  left: 4%;
}
.icon-4 {
  position: absolute;
  top: 17px;
  left: 4%;
}
.icon-5 {
  position: absolute;
  top: 17px;
  left: 4%;
}
.text1 {
  position: absolute;
  top: 16px;
  left: 16%;
}
.arrow-1 {
  position: absolute;
  top: 20px;
  right: 5%;
}
.gap1 {
  width: 60%;
  height: 0.6px;
  background-color: rgb(170, 187, 187);
  margin-left: 20%;
  filter: blur(0.8px);
}
</style>