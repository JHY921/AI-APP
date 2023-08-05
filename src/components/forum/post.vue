<script>
import { showToast } from 'vant'
import { reactive } from 'vue';
import axios from 'axios'
export default {
  setup () {
    const onClickLeft = () => history.back()
    const onClickRight = () => showToast('按钮')
    function post(){
      let userId = this.$route.params.id
      axios.post('https://localhost/postinfo',{
        userId: userId,
        title:info.title,
        passage:info.passage
      })
    }
    const info = reactive({title:'', passage:''})
    return {
      onClickLeft,
      onClickRight,
      info
    }
  },
};
</script>
<template>
  <van-nav-bar
    @click-left="onClickLeft"
    @click-right="onClickRight"
    id="wrapper"
  >
    <template #title>
      <span class="headword">发布帖子</span>
    </template>
    <template #right>
      <button class="save">保存</button>
      <button class="post">发布</button>
    </template>
    <template #left>
      <van-icon name="arrow-left" color="rgba(0, 121, 148, 1)" />
    </template>
  </van-nav-bar>
  <form action="" class="text">
    <input type="text" placeholder="请输入标题" class="title" v-model="title" />
    <textarea
      name=""
      id="passage"
      rows="100"
      placeholder="想要写些什么"
      class="passage" v-model="passage"
    ></textarea>
  </form>
  <van-action-bar>
    <van-action-bar-icon icon="chat-o" text="客服" @click="onClickIcon" />
    <van-action-bar-icon icon="cart-o" text="购物车" @click="onClickIcon" />
    <van-action-bar-icon icon="shop-o" text="店铺" @click="onClickIcon" />
    <van-action-bar-button
      type="danger"
      text="立即购买"
      @click="onClickButton"
    />
  </van-action-bar>
</template>
<style scoped>
@import url("../../assets/styles/post.css");
</style>