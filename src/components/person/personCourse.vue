<template>
    <div class="total">

        <div class="status_bar">
        </div>
        <div class="return_label">
            <div @click="backTolast" style="display: inline-block; width: 40px; height: 100%;">
                <svg transform="translate(13,16)" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" width="9.70001220703125" height="14.89013671875"
                    viewBox="0 0 9.70001220703125 14.89013671875" fill="none">
                    <path id="路径 1" style="fill:#007994; opacity:1;"
                        d="M8.05786,14.6566l-7.7,-6.45001c-0.05033,-0.04217 -0.09607,-0.08884 -0.13721,-0.14001c-0.04114,-0.05117 -0.0769,-0.10587 -0.10727,-0.16408c-0.03037,-0.05822 -0.05477,-0.11884 -0.07319,-0.18186c-0.01843,-0.06303 -0.03053,-0.12724 -0.03631,-0.19264c-0.00578,-0.06541 -0.00512,-0.13075 0.00197,-0.19603c0.00709,-0.06527 0.02049,-0.12923 0.04018,-0.19187c0.01969,-0.06264 0.0453,-0.12276 0.07684,-0.18035c0.03153,-0.05759 0.06838,-0.11156 0.11055,-0.16189c0.03798,-0.04535 0.07966,-0.08699 0.12503,-0.12494l7.7,-6.44c0.05037,-0.04213 0.10436,-0.07893 0.16198,-0.11042c0.05762,-0.03149 0.11776,-0.05706 0.18041,-0.0767c0.06265,-0.01964 0.12662,-0.03299 0.1919,-0.04003c0.06528,-0.00704 0.13062,-0.00765 0.19603,-0.00182c0.0654,0.00583 0.1296,0.01798 0.19261,0.03645c0.06301,0.01848 0.12361,0.04292 0.1818,0.07333c0.05819,0.03041 0.11286,0.06621 0.164,0.10739c0.05115,0.04118 0.09778,0.08695 0.13991,0.13732c0.04212,0.05037 0.07893,0.10436 0.11042,0.16198c0.03149,0.05762 0.05705,0.11775 0.0767,0.18041c0.01964,0.06265 0.03298,0.12662 0.04003,0.1919c0.00704,0.06528 0.00765,0.13062 0.00182,0.19603c-0.00583,0.0654 -0.01798,0.1296 -0.03645,0.19261c-0.01848,0.06301 -0.04293,0.12361 -0.07334,0.1818c-0.03041,0.05819 -0.0662,0.11286 -0.10739,0.16401c-0.04118,0.05114 -0.08695,0.09777 -0.13732,0.1399l-7.69999,6.44l-0.64156,-0.76708l0.64214,-0.76659l7.7,6.44999c0.05033,0.0422 0.09607,0.08887 0.13721,0.14c0.04115,0.0512 0.0769,0.1059 0.10727,0.1641c0.03037,0.0582 0.05476,0.11883 0.07319,0.1819c0.01843,0.063 0.03053,0.1272 0.03631,0.1926c0.00577,0.0654 0.00511,0.13073 -0.00198,0.196c-0.00709,0.06527 -0.02048,0.12923 -0.04017,0.1919c-0.01969,0.06267 -0.04531,0.12277 -0.07684,0.1803c-0.03153,0.0576 -0.06838,0.11157 -0.11054,0.1619c-0.04217,0.05033 -0.08884,0.0961 -0.14001,0.1373c-0.05117,0.04113 -0.10587,0.07687 -0.16409,0.1072c-0.05821,0.0304 -0.11883,0.0548 -0.18185,0.0732c-0.06303,0.01847 -0.12724,0.03057 -0.19264,0.0363c-0.06541,0.0058 -0.13075,0.00513 -0.19603,-0.002c-0.06527,-0.00707 -0.12923,-0.02043 -0.19187,-0.0401c-0.06264,-0.01973 -0.12276,-0.04537 -0.18035,-0.0769c-0.05759,-0.03153 -0.11156,-0.06837 -0.16189,-0.1105z">
                    </path>
                </svg>
            </div>
            <div style="display: inline-block;">
                <center>
                    <span style="font-size: 16px;font-weight: 700;letter-spacing: 0px;
                        color: rgba(0, 87, 107, 0.67);
                        position: absolute;top: 50%;left: 0;right: 0;transform: translateY(-50%);">
                        我的课程
                    </span>
                </center>
            </div>
            <!--js计算适配width-->
        </div>
        <div style="height: 568px; width: 360px;">
            <div v-for="(position, index) in userPosition" style="height: 140px; width: 360px; font-size: 0px;
                box-shadow: 0px 1px 3px  rgba(0, 0, 0, 0.1), 0px 1px 2px  rgba(0, 0, 0, 0.06);
                margin-bottom: 10px; background-color: white;">
                <img :src="position.img" style="width: 120px; height: 100px; margin: 20px; border-radius: 10px;">
                <div style="display: inline-block; width: 200px; height: 100%;">
                    <div style="font-size: 18px;font-weight: 600;margin-top: 16px;">
                        {{ position.name }}
                    </div>
                    <div style="font-size: 12px;color: grey; margin-top: 8px;">
                        课程来源：{{ position.source }}
                    </div>
                    <div style="font-size: 12px;color: grey;">
                        时长：{{ position.time }}
                    </div>
                    <div style="font-size: 18px; color: #007994; font-weight: 600;">
                        已学习：{{ studyTimeH }}时{{ studyTimeM }}分
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createApp } from 'vue';
import { Swipe, SwipeItem } from 'vant';

const app = createApp();
app.use(Swipe);
app.use(SwipeItem);
export default {
    data() {
        return {
            studyTimeH:1,
            studyTimeM:30,
            posIndex:0,
            isShowChangePos:false,
            courseContent: [],
            isVip: true,
            isFollow: true,
            points: 444,
            userPosition: [
                {
                    name: "HTML5+CSS3基础概述",
                    source:"论坛",
                    time:"16:20",
                    img:"https://img.js.design/assets/smartFill/img420164da758808.jpg"
                },
                {
                    name: "移动端技术精讲",
                    source:"论坛",
                    time:"19:13",
                    img:"https://img.js.design/assets/smartFill/img431164da758808.jpg"
                },
                {
                    name: "Python基础环境搭建",
                    source:"CSDN",
                    time:"24:47",
                    img:"https://img.js.design/assets/smartFill/img423164da758808.jpg"
                },
            ],
        };
    },
    methods: {
        backTolast() {
            history.back();
        },
        buyGoods(name) {
            alert(name);
        },
        changePos(index) {
            this.isShowChangePos=true;
            this.posIndex=index;
            //this.userPosition[index]
        },
        confirmPos(index){
            this.isShowChangePos=false;
        },
        cancelPos(){
            this.isShowChangePos=false;
        },
    },
}
</script>

<style>
* {
    margin: 0px;
    overflow: auto;
}
input{
    width: 316px;
    height: 30px;
    margin: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: none;
}
p {
    text-align: center;
}

h1,
h2,
h3 {
    text-align: center;
}

.total {
    height: 640px;
    width: 360px;
    background: rgb(207, 207, 207, .3);
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
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.course_content {
    position: relative;
    width: 360px;
    height: 568px;
    overflow: auto;
}

.fans_detail {
    width: 360px;
    height: 70px;
}
</style>