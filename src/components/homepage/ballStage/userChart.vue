<template>
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
              color: rgba(0, 87, 107, 0.67);
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              transform: translateY(-50%);
            "
          >
            详细数据
          </span>
        </center>
      </div>
    </div>
    <div class="chartsConatiner">
      <div class="chartsBlock" style="margin: 0">
        <div
          id="gaugeChart"
          style="
            height: 200px;
            width: 200px;
            margin: 0px;
            display: inline-block;
          "
        ></div>
        <div style="display: inline-block; width: 160px; height: 200px">
          <div class="glassContainer">当前所处阶段</div>
          <div
            style="
              width: 140px;
              height: 45px;
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
              background: #f0f0f0;
              box-shadow: inset 4px 1px 2px 2px rgba(0, 0, 0, 0.1);
              border: none;
              color: rgba(70, 138, 153, 1);
              line-height: 45px;
              text-align: center;
              font-size: 20px;
              margin-left: 20px;
            "
          >
            数据1
          </div>
          <div
            style="
              width: 140px;
              height: 45px;
              border-top-left-radius: 5px;
              border-bottom-left-radius: 5px;
              background: #f0f0f0;
              box-shadow: inset 4px 1px 2px 2px rgba(0, 0, 0, 0.1);
              border: none;
              color: rgba(70, 138, 153, 1);
              line-height: 45px;
              text-align: center;
              font-size: 20px;
              margin-left: 20px;
              margin-top: 10px;
            "
          >
            数据1
          </div>
        </div>
      </div>
      <div
        class="chartsBlock"
        id="stackedLine"
        style="height: 186px; width: 360px"
      ></div>
      <div
        class="chartsBlock"
        style="
          height: 186px;
          width: 360px;
          border-radius: 0px;
          border-top-left-radius: 10px;
          border-bottom-left-radius: 10px;
        "
      >
        <div
          id="pieChart"
          style="
            display: inline-block;
            height: 186px;
            width: 186px;
            border-radius: 10px;
          "
        ></div>
        <div
          style="
            display: inline-block;
            height: 186px;
            width: 174px;
            border-radius: 10px;
            overflow: visible;
          "
        >
          <div
            style="
              height: 61px;
              width: 100%;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              background: linear-gradient(90deg, #74bec9 0%, #ffffff 100%);
              box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
              color: #007791;
              font-size: 18px;
              line-height: 61px;
            "
          >
            &nbsp;&nbsp;&nbsp;&nbsp;数据分析:
            <div
              style="
                float: right;
                border-top-left-radius: 16px;
                border-bottom-left-radius: 16px;
                width: 65px;
                height: 35px;
                background-color: #025466;
                margin-top: 13px;
                line-height: 35px;
                color: #ffffff;
                text-shadow: 0 0 2px white;
              "
              @click="pieData1"
            >
              &nbsp;&nbsp;&nbsp;结果
            </div>
          </div>
          <div
            style="
              height: 61px;
              width: 100%;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              background: linear-gradient(90deg, #c9e2e8 0%, #ffffff 100%);
              box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
              color: #007791;
              font-size: 18px;
              line-height: 61px;
            "
          >
            &nbsp;&nbsp;&nbsp;&nbsp;数据分析:
            <div
              style="
                float: right;
                border-top-left-radius: 16px;
                border-bottom-left-radius: 16px;
                width: 65px;
                height: 35px;
                background-color: #025466;
                margin-top: 13px;
                line-height: 35px;
                color: #ffffff;
                text-shadow: 0 0 2px white;
              "
              @click="pieData2"
            >
              &nbsp;&nbsp;&nbsp;结果
            </div>
          </div>

          <div
            style="
              height: 61px;
              width: 100%;
              border-top-left-radius: 10px;
              border-bottom-left-radius: 10px;
              background: #eaf3f4;
              box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
              color: #007791;
              font-size: 18px;
              line-height: 61px;
            "
          >
            &nbsp;&nbsp;&nbsp;&nbsp;数据分析:
            <div
              style="
                float: right;
                border-top-left-radius: 16px;
                border-bottom-left-radius: 16px;
                width: 65px;
                height: 35px;
                background-color: #025466;
                margin-top: 13px;
                line-height: 35px;
                color: #ffffff;
                text-shadow: 0 0 2px white;
              "
              @click="pieData3"
            >
              &nbsp;&nbsp;&nbsp;结果
            </div>
          </div>
        </div>
      </div>
      <div
        class="chartsBlock"
        id="barChart"
        style="height: 210px; width: 360px"
      ></div>
    </div>
  </div>
</template>
<style scoped>
.glassContainer {
  float: right;
  width: 140px;
  height: 60px;
  font-size: 20px;
  margin-bottom: 20px;
  color: rgba(0, 94, 115, 0.96);
  border-bottom-left-radius: 10px;
  backdrop-filter: blur(6px);
  background-color: rgba(0, 130, 173, 0.104);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 8px;
  /* border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid; */
}

.chartsBlock {
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 80%,
    rgba(198, 229, 235, 0.4) 100%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-top: 10px;
  overflow: auto;
}

* {
  margin: 0px;
  overflow: auto;
}

.total {
  height: 640px;
  width: 360px;
  background: rgba(158, 152, 152, 0.2);
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
  margin-bottom: 8px;
  overflow: hidden;
}
</style>

<script>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import axios from 'axios'
import api from '../../../api/api'
export default {
  name: 'BarChart',
  setup () {
    const chartInstance = ref(null)
    onMounted(() => {
      chartInstance.value = echarts.init(document.getElementById('gaugeChart'))
      chartInstance.value.setOption({
        grid: { // 让图表占满容器
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px"
        },
        // width:800,
        // height:800,
        title: {
          text: `距离xx还有`,
          left: 'center',
          y: 10,
          textStyle: {
            color: '#60787D',
          }
        },
        color: ["rgba(182, 224, 219, 1)", "rgba(0, 96, 117, 1)"],
        series: [
          {
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 220,
            endAngle: -40,
            splitNumber: 10,
            progress: {
              show: true,
              width: 12,//外盘蓝色粗细
              roundCap: false,
            },
            axisLine: {
              lineStyle: {
                width: 8,//底盘粗细
                // color: [
                //     [1, new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                //         {
                //             offset: 0.1,
                //             color: "#FFC600"
                //         },
                //         {
                //             offset: 0.6,
                //             color: "#30D27C"
                //         },
                //         {
                //             offset: 1,
                //             color: "#0B95FF"
                //         }
                //     ])
                //     ]
                // ]渐变色处理
              }
            },
            axisTick: {
              width: 1,
              splitNumber: 1,
              length: 2,
            },
            splitLine: {
              length: 5,//灰色引导竖线长度
              lineStyle: {
                width: 1,
                color: '#096375',
              }
            },
            pointer: {
              show: false
            },
            axisLabel: {
              show: false,
            },
            // axisLabel: {
            //     distance: 10,//仪表数字距离
            //     color: '#999',
            //     fontSize: 10//指示数值大小
            // },

            title: {
              show: false,
            },
            detail: {
              valueAnimation: true,
              fontSize: 20,//黑色数值大小
              offsetCenter: [0, '0%'],//文字位置
              formatter: '{value} %',//单位
              color: '#004554',
            },
            data: [
              {
                value: 70
              }
            ]
          }
        ]
      })

    })

    onMounted(() => {
      var chartDom = document.getElementById('stackedLine')
      var myChart = echarts.init(chartDom)
      var option
      var xAxisData = []
      var data1 = []
      var data2 = []
      for (var i = 0; i < 100; i++) {
        xAxisData.push('数据' + i)
        data1.push(i)
        data2.push(2 * i)
      }//数据
      option = {
        grid: { // 让图表占满容器
          top: "50px",
          left: "30px",
          right: "30px",
          bottom: "30px"
        },
        title: [
          {
            text: '数据介绍',
            x: 20,
            y: 10,
            textStyle: {
              color: '#528C99',
            },
          },
          {
            subtext: '注释：这里是注释内容',
            x: 105,
            y: 5,
            subtextStyle: {
              color: "#707F82",
            },
          },
        ],

        // legend: {
        //     data: ['bar', 'bar2']
        // },
        toolbox: {
          // // y: 'bottom',
          // feature: {
          //     magicType: {
          //         type: ['stack']
          //     },
          //     dataView: {},
          //     saveAsImage: {
          //         pixelRatio: 2
          //     }
          // }下载，导出图片等功能
        },
        tooltip: {},//提示框
        xAxis: {
          data: xAxisData,
          splitLine: {
            show: true,
          }
        },
        yAxis: {
          splitLine: {
            show: true,
          }
        },
        series: [
          {
            name: 'bar',
            type: 'bar',
            data: data1,
            emphasis: {
              focus: 'series'
            },
            animationDelay: function (idx) {
              return idx * 10
            }
          },
          {
            name: 'bar2',
            type: 'bar',
            data: data2,
            emphasis: {
              focus: 'series'
            },
            animationDelay: function (idx) {
              return idx * 10 + 100
            }
          }
        ],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }

      option && myChart.setOption(option)
    })

    onMounted(() => {
      var chartDom = document.getElementById('pieChart')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        grid: { // 让图表占满容器
          top: "0px",
          left: "0px",
          right: "0px",
          bottom: "0px"
        },
        // legend: {
        //     top: 'bottom'
        // },指示面板（可点击隐藏）
        toolbox: {
        },
        series: [
          {
            color: ['#00626B', '#528C99', '#68AAB9', '#C9E2E8', '#66AFBF'],
            name: 'Nightingale Chart',
            type: 'pie',
            avoidLabelOverlap: true,
            minAngle: 22,
            radius: [0, 80],
            center: ['50%', '50%'],
            //roseType: 'area',南丁格尔玫瑰图
            label: {
              show: true, // 隐藏数据和指示线
              normal: {
                position: 'inner',
              }
            },
            // labelLine: {
            //     show: true, // 隐藏
            //     length:1,
            //     length2:1,
            //     smooth:true,
            // },
            itemStyle: {
              borderRadius: 10
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 40, name: 'rose 4' },
              { value: 50, name: 'rose5' },
            ]
          }
        ]
      }

      option && myChart.setOption(option)
    })
    onMounted(() => {
      var chartDom = document.getElementById('barChart')
      var myChart = echarts.init(chartDom)
      var option

      option = {
        color: ['#B8DAE1', '#66AFBF', '#007994'],
        grid: { // 让图表占满容器
          top: "40px",
          left: "35px",
          right: "30px",
          bottom: "50px"
        },
        title: {
          text: "数据介绍",
          x: 140,
          y: 10,
          textStyle: {
            color: '#025466',
          },
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value',
          // axisLine: {
          //     show: true,//y轴
          // },
          // splitLine:{
          //     show:true,
          // }
        },
        legend: {
          data: ['数据1', '数据2', '数据3'],
          y: 180,
          x: 10,
        },
        series: [

          {
            name: '数据1',
            itemStyle: {
              normal: {
                barBorderRadius: [20, 20, 0, 0]//柱形图圆角设置
              }
            },
            data: [
              101, 200, 150, 80, 70, 110, 130
            ],
            type: 'bar'
          },
          {
            name: '数据2',
            itemStyle: {
              normal: {
                barBorderRadius: [20, 20, 0, 0]//柱形图圆角设置
              }
            },
            data: [110, 210, 310, 410, 501, 610, 100],
            type: 'bar',
          },
          {
            name: '数据3',
            itemStyle: {
              normal: {
                barBorderRadius: [20, 20, 0, 0]//柱形图圆角设置
              }
            },
            data: [120, 210, 301, 430, 540, 610, 300],
            type: 'bar',
          },
        ]
      }

      option && myChart.setOption(option)
    })
    return {
      chartInstance
    }
  },
  data () {
    return {
    }
  },
  created(){
    axios.get(`http://${api.api}/userChat`, {
      headers:{'Authorization': 'Bearer '+localStorage.getItem('token')},
      withCredentials:true
    }).then(res=>{
      console.log(res.data);
    }).catch(err=>{
      console.log(err);
    })
  },
  methods: {
    click_follow () {
      alert("follow")
    },
    backTolast () {
      history.back()
    },
    moreInfor () {
      alert("more")
    },
    pieData1 () {

    },
    pieData2 () {

    },
    pieData3 () {

    },
  }
}
// export default {
//     data() {
//         return {
//         };
//     },
//     methods: {
//         click_follow() {
//             alert("follow");
//         },
//         backTolast() {
//             alert("back");
//         },
//         moreInfor() {
//             alert("more");
//         },
//       }
// }
</script>

