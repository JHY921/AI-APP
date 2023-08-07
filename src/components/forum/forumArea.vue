<script>
// import data from './forumArea.json'
import Crisscross from './crisscross.vue'
import forumHeader from './forumHeader.vue'
import forumMid from './forumMid.vue'
import forumPost from './forumPost.vue'
export default {
    name: "zan",
    data() {
        return {

        };
    },
    methods: {

    },
    components: { Crisscross,forumHeader,forumMid,forumPost}
}
</script>
<template>
  <div class="second-page">
    <forumHeader></forumHeader>
    <forumMid></forumMid>
    <forumPost></forumPost>
  </div>
  <Crisscross></Crisscross>
</template>
<style  scoped>
* {
  margin: 0px;
  padding: 0px;
}
.second-page {
  width: 360px;
  height: 640px;
  background-image: url("../../assets/icons/forum/forumarea/background.jpg");
  position: fixed;
}
#body {
  width: 360px;
  height: 325px;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar{
    display: none;
  }
}
#footer {
  width: 100%;
  height: 40px;
  position: absolute;
  bottom: 0;
  background-color: rgb(249, 249, 249);
}

.history{
  width:280px;
  height:20px;
  z-index:999;
  margin-top:40px;
  left:90px;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.info {
  width: 42px;
  height: 42px;
  margin-top: 1%;
  margin-left: 5%;
}
.content span {
  font-size: 9px;
}

</style>