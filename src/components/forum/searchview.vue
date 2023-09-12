<template>
  <div
    class="total"
    style="background-color: #f3f3f3; widows: 360px; height: 640px"
  >
    <div
      class="searchwrapper"
      style="display: flex; flex-direction: row; background-color: white"
    >
      <span
        style="
          margin-top: 4.4%;
          margin-left: 20px;
          margin-right: 10px;
          padding-top: 5px;
          color: #007994;
        "
        >&lt;</span
      >
      <div class="search">
        <img
          src="../../assets/icons/forum/forumarea/搜索.png"
          class="search-icon"
        />
        <form>
          <input
            style="transform: scale(0.8); margin-left: -4%; height: 24px"
            type="text"
            placeholder="前端开发就业前景"
          />
        </form>
        <p @click="search" v-show="!show">搜索</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.search {
  border: 1px solid rgba(0, 121, 148, 1);
  border-radius: 12px;
  margin-top: 4.4%;
  margin-bottom: 10px;
  margin-left: 2%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 290px;
  height: 24px;
  opacity: 1;
  border-radius: 12px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(0, 121, 148, 1);
}
.search-icon {
  margin-left: 4%;
  margin-top: 3%;
  width: 12.88px;
  height: 76%;
  height: 12px;
  opacity: 1;
}
.search form input {
  margin-left: 0%;
  border: none;
  width: 80%;
  font-size: 12px;
  transform: scale(0.9);
  color: rgba(0, 0, 0, 0.3);
}
.search p {
  border-left: 1px solid rgba(153, 164, 166, 1);
  height: 50%;
  margin: auto;
  padding-left: 8px;
  width: 25.03px;
  height: 12px;
  opacity: 1;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0px;
  line-height: 11.72px;
  color: rgba(0, 121, 148, 1);
  text-align: left;
  vertical-align: top;
}
</style>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>