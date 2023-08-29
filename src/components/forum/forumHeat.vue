<template>
    <div id="body">
      <heat1 class="heat1"></heat1>
      <heat2 class="heat2"></heat2>
      <heat3 class="heat3"></heat3>
      <heat class="heat" tt="4"></heat>
      <heat class="heat" tt="5"></heat>
      <heat class="heat" tt="6"></heat>
      <heat class="heat" tt="7"></heat>
      <heat class="heat" tt="8"></heat>
      <heat class="heat" tt="9"></heat>
      <heat class="heat" tt="10"></heat>
      <div class="blank"></div>
    </div>
    <!-- <div id="footer">
  </div> -->
</template>
<script>
import heat1 from './heat/heat1.vue'
import heat2 from './heat/heat2.vue'
import heat3 from './heat/heat3.vue'
import heat from './heat/heat.vue'
export default {
  components: { heat, heat1, heat2, heat3 },
  data () {
    return {
    }
  },
  methods: {
    goToPersonifo () {
      this.$router.push('/Personifo')
    },
    goToCourse () {
      this.$router.push('/Course')
    },
    goToHeat () {
      this.$router.push('/Forum_heat')
    }
  }
}
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0px;
}
#top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: auto;
  margin-top: 24px;
  left: 16px;
  top: 24px;
  width: 90%;
  height: 58px;
  opacity: 1;
  border-radius: 4px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 85, 114, 0.05) 100%
  );
}
#body {
  width: 100%;
  height: 500px;
  overflow: scroll;
  /* margin-top: 118px; */
}
#footer {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  background-color: rgb(249, 249, 249);
}

.heat1 {
  margin-top: 8px;
}
.heat2 {
  margin-top: 16px;
}
.heat3 {
  margin-top: 16px;
}
.heat {
  margin-top: 16px;
}
.blank {
  width: 100%;
  height: 32px;
}
</style>