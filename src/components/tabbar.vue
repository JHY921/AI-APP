
<template >
  <div class="wrapper">
    <van-tabbar v-model="active0" fixed id="bar" safe-area-inset-bottom route>
      <van-tabbar-item replace to="/Home">
        <span>首页</span>
        <!-- <template #icon="props">
          <img
            :src="props.active ? icon.active : icon.inactive"
            style="width: 25px; height: 25px"
          />
        </template> -->
      </van-tabbar-item>

      <van-tabbar-item replace to="/Forum">
        <span>论坛</span>
        <template #icon1="props">
          <img
            :src="props.active1 ? icon1.active1 : icon1.inactive1"
            style="width: 25px; height: 25px"
          />
        </template>
      </van-tabbar-item>

      <van-tabbar-item replace to="/extraFunction">
        <span>体验馆</span>
        <template #icon2="props">
          <img
            :src="props.active2 ? icon2.active2 : icon2.inactive2"
            style="width: 25px; height: 25px"
          />
        </template>
      </van-tabbar-item>

      <van-tabbar-item replace to="/Person">
        <span>我的</span>
        <template #icon3="props">
          //<img
            :src="props.active3 ? icon3.active3 : icon3.inactive3"
            style="width: 25px; height: 25px"
          />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const active = ref(0)
    const active0 = ref(0)
    const active1 = ref(0)
    const active2 = ref(0)
    const active3 = ref(0)
    const icon = {
      active: '../../src/assets/icons/tabbar/首页.png',
      inactive:
        '../../src/assets/icons/tabbar/首页.png',
    }
    const icon1 = {
      active1: '../../src/assets/icons/tabbar/论坛.png',
      inactive1:
        '../../src/assets/icons/tabbar/论坛.png',
    }
    const icon2 = {
      active2: '../../src/assets/icons/tabbar/体验.png',
      inactive2:
        '../../src/assets/icons/tabbar/体验.png',
    }
    const icon3 = {
      active3: '../../src/assets/icons/tabbar/我的.png',
      inactive3:
        '../../src/assets/icons/tabbar/我的.png',
    }
    return {
      icon,
      icon1,
      icon2,
      icon3,
      active,
      active0,
      active1,
      active2,
      active3,
    }
  }
}
</script>
<style scoped>
#bar {
  z-index: 10000000000;
}
</style>

