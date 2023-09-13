<script>
export default {
  data () {
    return {
      checked: true,
      checked1: true,
      checked2: true,
      checked3: true,
      checked4: true,
      checked5: true,
    }
  },
  methods: {
    onChange ({ detail }) {
      this.setDate({ checked: detail })
    },
    onChange1 ({ detail }) {
      this.setDate({ checked1: detail })
    },
    onChange2 ({ detail }) {
      this.setDate({ checked2: detail })
    },
    onChange3 ({ detail }) {
      this.setDate({ checked3: detail })
    },
    onChange4 ({ detail }) {
      this.setDate({ checked4: detail })
    },
    onChange5 ({ detail }) {
      this.setDate({ checked5: detail })
    },
    back () {
      history.back()
    }
  },
}
</script>
<template>
  <div class="info">
    <van-nav-bar
      title="消息通知"
      right-text=""
      left-arrow
      bind:click-left="onClickLeft"
      bind:click-right="onClickRight"
      @click-left="back"
    />
    <van-cell-group class="van-cell-group">
      <van-cell title="通知显示消息详情" value="内容" class="van-cell">
        <van-switch
          v-model="checked"
          bind:change="onChange"
          active-color="#148d87"
          inactive-color="#ffffff"
          class="switch"
        />
      </van-cell>
    </van-cell-group>
    <div class="shadow">
      <p>未打开时</p>
    </div>
    <van-cell-group class="van-cell-group">
      <van-cell title="消息通知" value="内容" class="van-cell">
        <van-switch
          v-model="checked1"
          bind:change="onChange1"
          active-color="#148d87"
          inactive-color="#ffffff"
          class="switch"
        />
      </van-cell>
    </van-cell-group>
    <div class="shadow">
      <p>打开时</p>
    </div>
    <van-cell-group class="van-cell-group">
      <van-cell title="消息通知横幅" value="内容" class="van-cell">
        <van-switch
          v-model="checked2"
          bind:change="onChange2"
          active-color="#148d87"
          inactive-color="#ffffff"
          class="switch"
        />
      </van-cell>
      <van-cell title="消息提示音" value="内容" class="van-cell">
        <van-switch
          v-model="checked3"
          bind:change="onChange3"
          active-color="#148d87"
          inactive-color="#ffffff"
          class="switch"
        />
      </van-cell>
      <van-cell title="振动" value="内容" class="van-cell">
        <van-switch
          v-model="checked5"
          bind:change="onChange5"
          active-color="#148d87"
          inactive-color="#ffffff"
          class="switch"
        />
      </van-cell>
    </van-cell-group>
    <div class="shadow">
      <p>提示音与铃声</p>
    </div>
    <van-cell-group class="van-cell-group">
      <van-cell
        title="消息提示音"
        is-link
        value="默认"
        arrow-direction="right"
      />
    </van-cell-group>
  </div>
</template>
<style scoped>
.switch {
  /* right:0px; */
  float: right;
  right: 0px;
  width: 50px;
  height: 30px;
  margin-top: 1px;
  transform: scale(0.74);
}
.info {
  background-color: #e1e1e1;
  height: 640px;
  width: 100%;
}
.van-cell-group {
  top: 1px;
  box-shadow: 0px 0.6px 0px #b3b3b3;
}
.van-cell {
  height: 50px;
}
.shadow {
  width: 100%;
  height: 30px;
  background-color: #e1e1e1;
  font-size: 12px;
}
.shadow p {
  padding-top: 9px;
  padding-left: 15px;
  color: #707070;
}
.van-cell__title {
  font-size: 14px;
  line-height: 33px;
  font-weight: 600;
}
.van-cell__value {
  line-height: 33px;
}
.van-icon-arrow {
  line-height: 32px;
}

.van-nav-bar__title {
  color: #007994;
  font-weight: 800;
  font-size: 17px;
}
.van-nav-bar .van-icon {
  color: #007994 !important;
  /* font-size:16px; */
}
.van-nav-bar__text {
  color: rgba(0, 121, 148, 1);
  font-weight: 700;
  font-size: 24px;
}
.van-nav-bar__arrow {
  color: rgba(0, 121, 148, 1);
  font-weight: 600;
  transform: scale(1.1);
}
.van-nav-bar {
  z-index: 999;
  height: 48px;
  border-radius: 0 0 10px 10px;
  box-shadow: 3px 2px 3px rgba(136, 136, 136, 0.35);
}
.van-tabbar--fixed {
  left: 0;
  top: 59px;
  width: 100%;
  height: 90px;
}
</style>