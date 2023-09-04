<template>
  <div class="total">
    <div class="block_container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="336"
        height="178"
        viewBox="0 0 336 178"
        fill="none"
      >
        <g id="背景色" filter="url(#filter_0)">
          <path
            id="背景色"
            fill-rule="evenodd"
            fill="url(#linear_0)"
            opacity="1"
            d="M18 172L318 172C325.73 172 332 165.73 332 158L332 16C332 8.27 325.73 2 318 2L18 2C10.27 2 4 8.27 4 16L4 158C4 165.73 10.27 172 18 172Z"
          ></path>
        </g>
        <defs>
          <linearGradient
            id="linear_0"
            x1="50%"
            y1="62.044999999999995%"
            x2="51%"
            y2="160.12599999999998%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stop-color="#FFFFFF" stop-opacity="1" />
            <stop offset="1" stop-color="#008C9E" stop-opacity="1" />
          </linearGradient>
          <filter
            id="filter_0"
            x="0"
            y="-4"
            width="336"
            height="182"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="feFloodId" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="0" dy="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="filter_feFlood"
              result="filter_feFlood_1"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="filter_0"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        class="card_border"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="366.20001220703125"
        height="230.1999969482422"
        viewBox="0 0 366.20001220703125 173.1999969482422"
        fill="none"
        transform="translate(4,-9)"
      >
        <g opacity="1" transform="translate(0.20001220703125 -20)  rotate(0)">
          <path
            id="左侧遮盖"
            fill-rule="evenodd"
            style="fill: #ffffff"
            opacity="1"
            d="M328 167L366 167L366 0L328 0L328 167Z"
          ></path>
          <path
            id="可视化数据边框"
            style="fill: #007994; opacity: 1"
            d="M14,172.8h300c1.87133,0 3.66167,-0.36167 5.371,-1.085c1.65067,-0.698 3.11267,-1.684 4.386,-2.958c1.27333,-1.27333 2.25933,-2.73533 2.958,-4.386c0.72333,-1.70867 1.085,-3.499 1.085,-5.371v-142c0,-1.8716 -0.36167,-3.66183 -1.085,-5.3707c-0.69867,-1.65103 -1.68467,-3.11324 -2.958,-4.38663c-1.27333,-1.2736 -2.73533,-2.2596 -4.386,-2.95801c-1.70933,-0.72311 -3.49967,-1.08466 -5.371,-1.08466h-300c-1.87127,0 -3.66149,0.36155 -5.37067,1.08466c-1.65089,0.69846 -3.11311,1.68446 -4.38666,2.95801c-1.27355,1.27355 -2.25955,2.73576 -2.95801,4.38663c-0.72311,1.7092 -1.08466,3.49943 -1.08466,5.3707l0,142c0,1.87133 0.36155,3.66167 1.08466,5.371c0.69851,1.65067 1.68452,3.11267 2.95801,4.386c1.27364,1.274 2.73586,2.26 4.38666,2.958c1.70918,0.72333 3.4994,1.085 5.37067,1.085zM14,173.2c-1.92533,0 -3.76751,-0.372 -5.52652,-1.116c-1.6987,-0.71867 -3.20325,-1.73333 -4.51365,-3.044c-1.31027,-1.31 -2.32478,-2.81433 -3.04355,-4.513c-0.74418,-1.75933 -1.11628,-3.60167 -1.11628,-5.527l0,-142c0,-1.9254 0.37209,-3.76757 1.11628,-5.5265c0.71872,-1.6988 1.73324,-3.20336 3.04356,-4.51367c1.31031,-1.31031 2.81486,-2.32483 4.51365,-3.04355c1.75895,-0.74419 3.60112,-1.11628 5.52652,-1.11628h300c1.92533,0 3.76767,0.37209 5.527,1.11628c1.698,0.71865 3.20233,1.73316 4.513,3.04355c1.31,1.31017 2.32467,2.81473 3.044,4.51367c0.744,1.75867 1.116,3.60083 1.116,5.5265v142c0,1.92533 -0.372,3.76767 -1.116,5.527c-0.71933,1.69867 -1.734,3.203 -3.044,4.513c-1.31,1.31067 -2.81433,2.32533 -4.513,3.044c-1.75933,0.744 -3.60167,1.116 -5.527,1.116z"
          ></path>
        </g>
        <rect x="0" y="0"></rect>
      </svg>

      <div style="white-space: nowrap; margin-left: 75px">
        <div
          v-for="inum in ansStage"
          :key="inum"
          :ref="'block' + inum"
          class="move_container"
          :style="{
            transform: `translateX(${moveX}px)`,
            ...getBlockStyle(inum),
          }"
          :id="'block' + inum"
        >
          <img
            class="block"
            id="block1"
            src="../../../assets/icons/homepage/ballstage/block.png"
          />
          <span class="block_stage">0{{ inum }}</span>
        </div>
      </div>

      <img
        class="illustrate"
        style="width: 140px; height: 170px"
        src="../../../assets/icons/homepage/ballstage/说明框.png"
        alt=""
      />

      <img
        class="ball"
        :style="ball_style"
        src="../../../assets/icons/homepage/ballstage/ball.png"
      />

      <svg
        class="ball_showdow"
        transform="translate(92,79)"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="44.0625"
        height="36.0625"
        viewBox="0 0 44.0625 36.0625"
        fill="none"
      >
        <g id="影子" filter="url(#filter_1)">
          <path
            id="影子"
            fill-rule="evenodd"
            style="fill: #10484f"
            opacity="1"
            d="M22.0312 15.5312C18.4412 15.5312 15.5312 16.6513 15.5312 18.0312C15.5312 19.4113 18.4412 20.5312 22.0312 20.5312C25.6213 20.5312 28.5312 19.4113 28.5312 18.0312C28.5312 16.6513 25.6213 15.5312 22.0312 15.5312Z"
          ></path>
        </g>
        <defs>
          <filter
            id="filter_1"
            x="8.53125"
            y="8.53125"
            width="27"
            height="19"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="3.5"
              result="effect1_foregroundBlur"
            />
          </filter>
        </defs>
      </svg>

      <div class="text">
        <svg
          transform="translate(-20,10)"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="111.625"
          height="40.625"
          viewBox="0 0 111.625 40.625"
          fill="none"
        >
          <g opacity="1" transform="translate(13.3125 13.3125)  rotate(0)">
            <g id="文本 1" filter="url(#filter_2)">
              <g opacity="1" transform="translate(0 0)  rotate(0)">
                <text>
                  <tspan
                    x="0"
                    y="9.28"
                    font-size="10"
                    line-height="0"
                    fill="#FFFFFF"
                    opacity="1"
                    font-family="HarmonyOSSansSC-Bold"
                    font-weight="Bold"
                    letter-spacing="0"
                  >
                    当前所处阶段
                  </tspan>
                </text>
              </g>
            </g>
            <g opacity="1" transform="translate(0 0)  rotate(0)">
              <text>
                <tspan
                  x="0"
                  y="9.28"
                  font-size="10"
                  line-height="0"
                  fill="#FFFFFF"
                  opacity="1"
                  font-family="HarmonyOSSansSC-Bold"
                  font-weight="Bold"
                  letter-spacing="0"
                >
                  当前所处阶段
                </tspan>
              </text>
            </g>
          </g>
          <defs>
            <filter
              id="filter_2"
              x="-6"
              y="-6"
              width="97"
              height="26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="3"
                result="effect1_foregroundBlur"
              />
            </filter>
          </defs>
        </svg>

        <svg
          transform="translate(-7,42)"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="21"
          height="11"
          viewBox="0 0 21 11"
          fill="none"
        >
          <g opacity="1" transform="translate(0 0)  rotate(0)">
            <text>
              <tspan
                x="0"
                y="8.351999999999999"
                font-size="9"
                line-height="0"
                fill="#FFFFFF"
                opacity="1"
                font-family="HarmonyOSSansSC-Medium"
                font-weight="Medium"
                letter-spacing="0"
              >
                阶段:
              </tspan>
            </text>
          </g>
        </svg>

        <strong
          style="
            position: inherit;
            margin-top: 30px;
            margin-left: 20px;
            font-size: 50px;
            text-shadow: 0 2px 8px white;
          "
        >
          0{{ numStage }}
        </strong>

        <svg
          transform="translate(-20,80)"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="86.625"
          height="41.625"
          viewBox="0 0 86.625 41.625"
          fill="none"
        >
          <g opacity="1" transform="translate(13.3125 13.3125)  rotate(0)">
            <g id="文本 1" filter="url(#filter_2)">
              <g opacity="1" transform="translate(0 0)  rotate(0)">
                <text>
                  <tspan
                    x="0"
                    y="5.5680000000000005"
                    font-size="6"
                    line-height="0"
                    fill="#FFFFFF"
                    opacity="1"
                    font-family="HarmonyOSSansSC-Regular"
                    font-weight="Regular"
                    letter-spacing="0"
                  >
                    距离下阶段的进度
                  </tspan>
                  <tspan
                    x="0"
                    y="12.600000000000001"
                    font-size="6"
                    line-height="0"
                    fill="#FFFFFF"
                    opacity="1"
                    font-family="HarmonyOSSansSC-Regular"
                    font-weight="Regular"
                    letter-spacing="0"
                  ></tspan>
                </text>
              </g>
            </g>
            <g opacity="1" transform="translate(0 0)  rotate(0)">
              <text>
                <tspan
                  x="0"
                  y="5.5680000000000005"
                  font-size="6"
                  line-height="0"
                  fill="#FFFFFF"
                  opacity="1"
                  font-family="HarmonyOSSansSC-Regular"
                  font-weight="Regular"
                  letter-spacing="0"
                >
                  距离下阶段的进度：
                </tspan>
                <tspan
                  x="0"
                  y="12.600000000000001"
                  font-size="6"
                  line-height="0"
                  fill="#FFFFFF"
                  opacity="1"
                  font-family="HarmonyOSSansSC-Regular"
                  font-weight="Regular"
                  letter-spacing="0"
                ></tspan>
              </text>
            </g>
          </g>
          <defs>
            <filter
              id="filter_2"
              x="-6"
              y="-6"
              width="72"
              height="27"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="3"
                result="effect1_foregroundBlur"
              />
            </filter>
          </defs>
        </svg>

        <strong
          style="
            position: inherit;
            margin-top: 100px;
            margin-left: 22px;
            text-shadow: 0 2px 8px white;
            font-size: 30px;
          "
          >60%</strong
        >
      </div>
    </div>
    <!-- <button @click="changeinfo" style="margin: 90px">阶段++</button> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      ansStage: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      ball_style: {},
      moveX: 0,
      numStage: 1,
    }
  },
  methods: {
    changeinfo () {
      this.ball_style = { transform: 'translateY(-50px)', transition: ' transform 0.5s cubic-bezier(0,.8,.62,.97)' }
      this.moveX -= 75
      setTimeout(() => {
        this.ball_style = { transition: ' transform 0.3s cubic-bezier(.43,.07,.82,.54)' }
      }, 400)
      this.numStage++
    },
    getBlockStyle (inum) {
      const selectedBlockId = 'block' + this.numStage // 选择特定的block的id
      if (selectedBlockId === `block${inum}`) {
        return {
          transform: `translate(-${this.numStage * 75 - 75}px,50px)`,
        }
      } else {
        return {

        }
      }
    },
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isMove {
  /* border-left: 10px solid blue; */
  box-shadow: 0px 1500px 0px 0px rgba(131, 199, 219, 0.1) inset,
    -50px 0px 0px 0px rgb(29, 146, 117, 0.4);
  border-bottom-right-radius: 10px;
  transform: translateX(14px);
  width: 117px;
  /* background: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgb(143, 209, 224,0.8) 100%); */
  transition: box-shadow 0.5s;
  transition: transform 0.5s;
}
div img {
  transition: transform 0.5s;
}
.move_container {
  transition: transform 0.5s;
}
.total {
  width: 100%;
  height: auto;
  position: relative;
}
.block_container {
  height: 190px;
  width: 332px;
  display: flex;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}
.board {
  z-index: 10000;
}
.text {
  position: absolute;
  z-index: 10001;
  margin-left: 210px;
  color: aliceblue;
  text-shadow: 0 2px 8px white;
}
.block_stage {
  position: absolute;
  color: white;
  text-shadow: 0px 0px 2px white;
  z-index: 9999;
  left: 15px;
  top: 98px;
}
svg {
  position: absolute;
}
.block {
  z-index: 9999;
  position: absolute;
  height: 110px;
  object-fit: cover;
  margin-top: 30px;
}
.move_container {
  display: inline-block;
  position: relative;
  width: 75px;
  top: -30px;
}
.block_move {
  transform: translateX(-80px);
}
.down_block {
  transform: translateY(80px);
}
.illustrate {
  position: absolute;
  right: 27px;
  top: 2.2px;
}
.ball {
  position: absolute;
  z-index: 10000;
  height: 30px;
  width: 30px;
  margin-top: 35px;
  margin-left: 100px;
}
.ball_showdow {
  z-index: 10002;
}
</style>
