<template>
  <div class="total">
    <div class="return_label">
      <div
        @click="back"
        style="display: inline-block; width: 40px; height: 100%"
      >
        <img
          src="./返回.png"
          style="
            width: 32px;
            height: 32px;
            margin-left: 10px;
            margin-top: 10px;
            padding-right: 5px;
          "
        />
      </div>
      <div style="display: inline-block">
        <center>
          <span
            style="
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 0px;
              color: grey;
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              transform: translateY(-50%);
            "
          >
            聊天
          </span>
        </center>
      </div>
    </div>
    <div id="talk_container" style="height: 528px; width: 360px;display: flex;flex-direction: column; overflow: auto;">
      <div class="" style="display: flex; flex-direction: row; margin-top: 15px">
        <img
          src="./1.png"
          style="width: 34px; height: 34px; margin-left: 5px"
          alt=""
        />
        <div
          class="adminAns"
          style="
            margin-left: 2px;
            padding: 10px;
            height: auto;
            width: fit-content;
            width: -webkit-fit-content;
            width: -moz-fit-content;
            background: rgba(56, 56, 56, 0.11);
            border-radius: 10px;
            border-top-left-radius: 0px;
            margin-bottom: 35px;
            display: block;
          "
        >
          您好！有什么我可以帮助您的吗？
        </div>
      </div>
      
    </div>
    <div class="interactive_label">
      <div>
        <input
          v-model="questionInfor"
          style="
            border-radius: 12px;
            background: linear-gradient(
              90deg,
              rgba(207, 207, 207, 1) 0%,
              rgba(227, 227, 227, 0.34) 100%
            );
            box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.1);
            border: none;
            height: 24px;
            width: 246px;
            margin-left: 16px;
            font-size: 12px;
          "
          placeholder="     尝试着说点什么吧"
        />
        <img
          src="./更多.png"
          style="
            width: 25px;
            height: 25px;
            vertical-align: top;
            margin-left: 16px;
          "
        />
        <img
          src="./发送.png"
          style="
            width: 25px;
            height: 25px;
            vertical-align: top;
            margin-left: 16px;
          "
          @click="Ask()"
        />
      </div>
    </div>
  </div>
</template>
  
<script>

import axios from 'axios'
import api from '../../api/api'
export default {
  data () {
    return {
      questionInfor: "",
      userId: 10001,
    }
  },
  created () {
  },
 
  methods: {
Ask(){
        var str ="" 
        console.log(this.questionInfor)
        str ='<div class="" style="display: flex; flex-direction: row;margin-top: -20px;">'
      +'<div class="userTalk" style="margin-right:5px; padding:10px;height:auto; width:fit-content;width:-webkit-fit-content;width:-moz-fit-content; background: rgba(201, 201, 201, 1);border-radius:10px;border-top-right-radius:0px;margin-bottom:35px; display:block; text-align:right;margin-left:auto;">'
        +this.questionInfor+
         '</div></div>'
        var Words = document.getElementById("talk_container")
        Words.innerHTML = Words.innerHTML + str
  axios.post(`http://${api.api}/Spark`, {
       question: this.questionInfor,
        },
          { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token') }, withCredentials: true }).then(res => {
            console.log(res.data)
            var str ="" 
        this.questionInfor = ""
        str ='<div style="display: flex; flex-direction: row; margin-top: -20px; ">'+'<img  src="./1.png" style="width: 34px; height: 34px;margin-left: 5px" alt=""/>'+'<div class="adminAns"style="margin-left: 2px; padding: 10px;height: auto;width: fit-content;width: -webkit-fit-content;width: -moz-fit-content;background: rgba(56, 56, 56, 0.11);border-radius: 10px; border-top-left-radius: 0px;margin-bottom: 35px;display: block; width:280px">'
      +res.data.answer+'</div>'+'</div>'
        var Answer = document.getElementById("talk_container")
        Answer.innerHTML = Answer.innerHTML + str
          }).catch(err => {
            console.log(err)
          })
    },
    back () {
      history.back()
    },
  }
};
</script>
  
<style scoped>
* {
  margin: 0px;
  overflow: auto;
}

.total {
  position: relative;
  width: 360px;
  height: 640px;
  overflow: auto;
}

.return_label {
  position: relative;
  width: 360px;
  height: 48px;
  opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 8px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.interactive_label {
  display: flex;
  align-items: center;
  width: 360px;
  height: 56px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background: linear-gradient(
    176.71deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(252, 252, 252, 1) 100%
  );
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px -2px 3px #0000000a;
}
</style>