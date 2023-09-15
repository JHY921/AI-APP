<template>
  <li style="list-style: none" v-for="(item, index) in postList" :key="index">
    <div
      style="
        border-radius: 10px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
        margin: auto;
        margin-top: 10px;
        width: 350px;
      "
    >
      <div style="margin-left: 16px">
        <span
          style="
            font-size: 16px;
            font-weight: 500;
            letter-spacing: 0px;
            line-height: 18.75px;
            color: rgba(0, 0, 0, 1);
            text-align: left;
            vertical-align: top;
            font-family: res;
            display: inline-block;
            margin-top: 15px;
          "
          >{{ item.title }}</span
        >
      </div>
      <div
        style="
          margin-left: 16px;
          margin-bottom: 15px;
          height: 100px;
          margin-top: 3px;
        "
      >
        <span
          style="
            /** 文本1 */
            font-size: 9px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 10.55px;
            color: rgba(125, 125, 125, 1);
          "
          >{{ item.context }}</span
        >
      </div>

      <div style="display: flex; flex-direction: row; position: relative">
        <div
          style="
            /** 文本3 */
            font-size: 6px;
            font-weight: 300;
            letter-spacing: 0px;
            color: rgba(181, 181, 181, 1);
            margin-left: 16px;
            width: 64px;
            display: flex;
            flex-direction: row;
            position: absolute;
            bottom: 10px;
          "
        >
          <div>浏览：</div>
          <div>{{ item.browse }}</div>
        </div>
        <div
          style="
            display: flex;
            flex-direction: row;
            position: absolute;
            right: 15px;
            bottom: 10px;
          "
        >
          <div class="like" style="margin-right: 12px">
            <img
              width="20"
              height="20"
              src="../../assets/icons/forum/forumarea/like.png"
              alt=""
            />
            <div
              style="
                /** 文本2 */
                font-size: 2px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 10.55px;
                color: rgba(0, 0, 0, 1);
                font-family: Medium;
              "
            >
              {{ item.like }}
            </div>
          </div>
          <div class="collect" style="margin-right: 12px">
            <img
              width="20"
              height="20"
              src="../../assets/icons/forum/forumarea/collect.png"
              alt=""
            />
            <div
              style="
                /** 文本2 */
                font-size: 2px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 10.55px;
                color: rgba(0, 0, 0, 1);
                font-family: Medium;
              "
            >
              {{ item.comment }}
            </div>
          </div>
          <div class="comment" style="margin-right: 5px">
            <img
              width="20"
              height="20"
              src="../../assets/icons/forum/forumarea/comment.png"
              alt=""
            />
            <div
              style="
                /** 文本2 */
                font-size: 2px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 10.55px;
                color: rgba(0, 0, 0, 1);
                font-family: Medium;
              "
            >
              {{ item.comment }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
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
  width: 270px;
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
  components: {},
  data () {
    return {
      text: 'Hello',
      postList: [
        {
          title: 'Hello world !',
          context: '123',
          browse: 0,
          like: 0,
          collect: 0,
          comment: 0

        },


      ]
    }
  }
  ,
  methods: {
    back () {
      history.back()
    }
  }
}
  </script>