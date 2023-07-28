<script>
export default {
  data () {
    return {
      isRotated: false,
      newTask: "",
      tasks: [],
    }
  },
  methods: {
    rotateButton () {
      this.isRotated = true
      setTimeout(() => {
        this.isRotated = false
      }, 300)
    },
  },
}
</script>
<style>
@import "../../styles/todo.css";
</style>
<template>
  <div class="wrapper">
    <div class="addtodo">
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="251.875"
          height="42.875"
          viewBox="0 0 251.875 42.875"
          fill="none"
        >
          <g opacity="1" transform="translate(4.4375 0.4375)  rotate(0)">
            <g id="文本 1" filter="url(#filter_2)">
              <g opacity="0.1" transform="translate(0 4)  rotate(0)">
                <text>
                  <tspan
                    x="0"
                    y="22.272000000000002"
                    font-size="24"
                    line-height="0"
                    fill="#001317"
                    opacity="1"
                    font-family="res"
                    font-weight="Regular"
                    letter-spacing="0"
                  >
                    今天该做些什么？
                  </tspan>
                </text>
              </g>
            </g>
            <g opacity="1" transform="translate(0 0)  rotate(0)">
              <text>
                <tspan
                  x="0"
                  y="22.272000000000002"
                  font-size="24"
                  line-height="0"
                  fill="url(#linear_0)"
                  opacity="100"
                  font-family="res"
                  font-weight="Regular"
                  letter-spacing="0"
                >
                  今天该做些什么？
                </tspan>
              </text>
            </g>
          </g>
          <defs>
            <filter
              id="filter_2"
              x="-2"
              y="2"
              width="247"
              height="38"
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
                stdDeviation="1"
                result="effect1_foregroundBlur"
              />
            </filter>
            <linearGradient
              id="linear_0"
              x1="120.91300000000001%"
              y1="39.327%"
              x2="16.547%"
              y2="39.327%"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0" stop-color="#00657B" stop-opacity="1" />
              <stop offset="1" stop-color="#FFFFFF" stop-opacity="1" />
            </linearGradient>
          </defs></svg
      ></span>
      <button @click="rotateButton">
        <div :class="{ rotate: isRotated }">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="32"
            height="39.999982833862305"
            viewBox="0 0 32 39.999982833862305"
            fill="none"
          >
            <g
              opacity="1"
              transform="translate(0 3.999998092651367)  rotate(0)"
            >
              <path
                id="矩形 2"
                fill-rule="evenodd"
                style="fill: #f0f6f7"
                opacity="1"
                d="M1.33514e-05 13.4286L1.33514e-05 18.5686C1.33514e-05 19.6686 0.900013 20.5686 2.00001 20.5686L30 20.5686C31.1 20.5686 32 19.6686 32 18.5686L32 13.4286C32 12.3286 31.1 11.4286 30 11.4286L2.00001 11.4286C0.900013 11.4286 1.33514e-05 12.3286 1.33514e-05 13.4286Z"
              ></path>
              <g id="矩形 2" filter="url(#filter_2)">
                <path
                  id="矩形 2"
                  fill-rule="evenodd"
                  style="fill: #f0f6f7"
                  opacity="1"
                  d="M13.4287 32L18.5687 32C19.6687 32 20.5687 31.1 20.5687 30L20.5687 2C20.5687 0.9 19.6687 0 18.5687 0L13.4287 0C12.3287 0 11.4287 0.9 11.4287 2L11.4287 30C11.4287 31.1 12.3287 32 13.4287 32Z"
                ></path>
              </g>
            </g>
            <defs>
              <filter
                id="filter_2"
                x="5.4287109375"
                y="-4"
                width="21.142852783203125"
                height="40"
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

                <feOffset dx="2" dy="0" />
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
                  in2="filter_2"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index"></li>
    </ul>
    <div class="alltodo">
      <span>查看更多事项...</span>
    </div>
    <span class="word">开始你的计划吧</span>
  </div>
</template>
