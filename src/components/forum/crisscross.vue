<template>
  <div class="crisscross" @click="topost">
    <img src="../../assets/icons/forum/forumarea/发帖按钮.png" />
  </div>
</template>
<script>
export default {
  data () {

  },
  methods: {
    topost () {
      this.$router.push('./Forum_post')
    }
  }
}
</script>
<style scoped>
.crisscross img {
  position: fixed;
  bottom: 90px;
  left: 300px;
  width: 45px;
  height: 45px;
  opacity: 1;
}
.crisscross p {
  font-size: 60px;
  color: #ffffff;
  margin-top: -25%;
  font-weight: 100;
  margin-left: 11%;
  transform: scale(1);
}
</style>