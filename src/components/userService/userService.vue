<template>
  <div class="total">
    <div class="status_label" style="height: 24px; width: 360px; background-color: rgb(222, 222, 222);"></div>
    <div class="return_label">
      <div @click="back" style="display: inline-block; width: 40px; height: 100%">
        <svg transform="translate(13,16)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          width="9.70001220703125" height="14.89013671875" viewBox="0 0 9.70001220703125 14.89013671875" fill="none">
          <path id="路径 1" style="fill: #007994; opacity: 1"
            d="M8.05786,14.6566l-7.7,-6.45001c-0.05033,-0.04217 -0.09607,-0.08884 -0.13721,-0.14001c-0.04114,-0.05117 -0.0769,-0.10587 -0.10727,-0.16408c-0.03037,-0.05822 -0.05477,-0.11884 -0.07319,-0.18186c-0.01843,-0.06303 -0.03053,-0.12724 -0.03631,-0.19264c-0.00578,-0.06541 -0.00512,-0.13075 0.00197,-0.19603c0.00709,-0.06527 0.02049,-0.12923 0.04018,-0.19187c0.01969,-0.06264 0.0453,-0.12276 0.07684,-0.18035c0.03153,-0.05759 0.06838,-0.11156 0.11055,-0.16189c0.03798,-0.04535 0.07966,-0.08699 0.12503,-0.12494l7.7,-6.44c0.05037,-0.04213 0.10436,-0.07893 0.16198,-0.11042c0.05762,-0.03149 0.11776,-0.05706 0.18041,-0.0767c0.06265,-0.01964 0.12662,-0.03299 0.1919,-0.04003c0.06528,-0.00704 0.13062,-0.00765 0.19603,-0.00182c0.0654,0.00583 0.1296,0.01798 0.19261,0.03645c0.06301,0.01848 0.12361,0.04292 0.1818,0.07333c0.05819,0.03041 0.11286,0.06621 0.164,0.10739c0.05115,0.04118 0.09778,0.08695 0.13991,0.13732c0.04212,0.05037 0.07893,0.10436 0.11042,0.16198c0.03149,0.05762 0.05705,0.11775 0.0767,0.18041c0.01964,0.06265 0.03298,0.12662 0.04003,0.1919c0.00704,0.06528 0.00765,0.13062 0.00182,0.19603c-0.00583,0.0654 -0.01798,0.1296 -0.03645,0.19261c-0.01848,0.06301 -0.04293,0.12361 -0.07334,0.1818c-0.03041,0.05819 -0.0662,0.11286 -0.10739,0.16401c-0.04118,0.05114 -0.08695,0.09777 -0.13732,0.1399l-7.69999,6.44l-0.64156,-0.76708l0.64214,-0.76659l7.7,6.44999c0.05033,0.0422 0.09607,0.08887 0.13721,0.14c0.04115,0.0512 0.0769,0.1059 0.10727,0.1641c0.03037,0.0582 0.05476,0.11883 0.07319,0.1819c0.01843,0.063 0.03053,0.1272 0.03631,0.1926c0.00577,0.0654 0.00511,0.13073 -0.00198,0.196c-0.00709,0.06527 -0.02048,0.12923 -0.04017,0.1919c-0.01969,0.06267 -0.04531,0.12277 -0.07684,0.1803c-0.03153,0.0576 -0.06838,0.11157 -0.11054,0.1619c-0.04217,0.05033 -0.08884,0.0961 -0.14001,0.1373c-0.05117,0.04113 -0.10587,0.07687 -0.16409,0.1072c-0.05821,0.0304 -0.11883,0.0548 -0.18185,0.0732c-0.06303,0.01847 -0.12724,0.03057 -0.19264,0.0363c-0.06541,0.0058 -0.13075,0.00513 -0.19603,-0.002c-0.06527,-0.00707 -0.12923,-0.02043 -0.19187,-0.0401c-0.06264,-0.01973 -0.12276,-0.04537 -0.18035,-0.0769c-0.05759,-0.03153 -0.11156,-0.06837 -0.16189,-0.1105z">
          </path>
        </svg>
      </div>
      <div style="display: inline-block">
        <center>
          <span style="
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 0px;
              color: rgba(0, 87, 107, 0.67);
              position: absolute;
              top: 50%;
              left: 0;
              right: 0;
              transform: translateY(-50%);
            ">
            帖子内容
          </span>
        </center>
      </div>
      <!--js计算适配width-->
      <div style="
          display: inline-block;
          width: 40px;
          height: 100%;
          vertical-align: top;
          position: relative;
          left: 77%;
          top: 25%;
        " @click="moreInfor">
        <img src="./userService.png" style="width: 24px; height: auto" />
      </div>
    </div>
    <div id="talk_container" style="height: 504px; width: 360px"></div>
    <div class="interactive_label">
      <div>
        <img src="./commonQuestion.png" style="
            width: 25px;
            height: 25px;
            vertical-align: top;
            margin-left: 16px;
          " />
        <input v-model="questionInfor" style="
            background-image: linear-gradient(
              90deg,
              #00799496 -185.3%,
              #e7e8e957 100%
            );
            border-radius: 16px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2) inset;
            border: none;
            height: 24px;
            width: 246px;
            margin-left: 16px;
            font-size: 12px;
          " placeholder="     您遇到了什么问题" />
        <img src="./sendQuestion.png" style="
            width: 25px;
            height: 25px;
            vertical-align: top;
            margin-left: 16px;
          " @click="Ask()" />
      </div>
    </div>
  </div>
</template>
  
<script>

import axios from 'axios'
import api from '../../api/api'
export default {
  data() {
    return {
      questionInfor: "",
      userId: 10001,
      answer: [
        {
          ques: "AI",
          ans: "人工智能（Artificial Intelligence，简称AI）是指利用计算机模拟人类智能的思维、感知和学习能力，使得计算机能够像人类一样思考、决策和执行任务。AI涉及多个领域，包括机器学习、深度学习、自然语言处理、计算机视觉等。AI技术已被广泛应用于各个领域，如医疗保健、金融服务、交通运输、农业、教育等。"
        },
        {
          ques: "自然语言模型",
          ans: "自然语言处理（NLP）是计算机科学、人工智能领域中的一个重要方向，旨在让计算机能够理解、生成和操作人类语言。而自然语言模型则是其中的核心技术之一，它通过学习大量文本数据来建立语言规律，从而实现对自然语言的理解和生成。"
        },
        {
          ques: "算法",
          ans: "自然语言处理涉及到很多算法和技术，其中一些比较典型的算法包括： 隐马尔可夫模型 (Hidden Markov Model, HMM)：适用于语音识别、手写字符识别等领域。 条件随机场 (Conditional Random Fields, CRF)：与HMM类似，但更适合序列标注问题，如命名实体识别。 循环神经网络 (Recurrent Neural Network, RNN)：适用于序列预测问题，如语音识别、文本生成等。 长短期记忆网络 (Long Short-Term Memory, LSTM)：RNN的改进版，具有更好的记忆能力。 卷积神经网络 (Convolutional Neural Network, CNN)：适用于图像处理，近年来也逐渐应用于自然语言处理。 注意力机制 (Attention Mechanism)：广泛应用于翻译、阅读理解等任务中，能够更好地捕捉输入句子的关键信息。 预训练模型 (Pre-trained Models)：如BERT、GPT等，先在大规模语料库上进行预训练，再根据具体任务进行微调。 以上只是自然语言处理领域的部分算法，随着技术的不断进步，还会涌现出更多新的算法和技术。"
        },
      ]
    }
  },
  created() {
  },
  mounted() {
    // const url = `http://${api.api}/home/todo`
    // axios.get(url)
    //   .then(response => {
    //     const data = response.data
    //     console.log(data)
    //     this.userData = data
    //   })
    //   .catch(error => {
    //     console.error(error)
    //   })
  },
  methods: {
    Ask() {
      const formData = {
        "id": this.userId,
        "question": this.questionInfor,
      }
      //const url1 = `http://${api.api}/home/todo`
      var str = ""
      //const response = await axios.post(url1, formData)
      //console.log(response.data)

      str = '<div class="userTalk" style="margin:10px; max-width: 300px;padding:10px;height:auto; width:fit-content;width:-webkit-fit-content;width:-moz-fit-content; background: rgba(122, 133, 135, 0.13);border-radius:10px;border-top-right-radius:0px;margin-bottom:35px; display:block; text-align:right;margin-left:auto;">'
        + this.questionInfor +
        '</div>'
      var Words = document.getElementById("talk_container")
      Words.innerHTML = Words.innerHTML + str;
      for (var i = 0; i <= this.answer.length - 1; i++)
        if (this.answer[i].ques.includes(this.questionInfor)) {
          var _this = this;
          // setTimeout(() => {
          str = '<div class="adminAns" style="margin-left:10px;padding:10px;max-width: 300px;  height:auto;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content; background: rgba(0, 121, 148, 0.11);border-radius:10px;border-top-left-radius:0px;margin-bottom:35px; display:block;">'
            + _this.answer[i].ans +
            '</div>'
          var Answer = document.getElementById("talk_container")
          Answer.innerHTML = Answer.innerHTML + str
          // }, 1000);
        }
      this.questionInfor = ""

      // str = '<div class="adminAns" style="margin-left:10px;padding:10px; height:auto;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content; background: rgba(0, 121, 148, 0.11);border-radius:10px;border-top-left-radius:0px;margin-bottom:35px; display:block;">'
      //   + response.data +
      //   '</div>'
      // var Answer = document.getElementById("talk_container")
      // Answer.innerHTML = Answer.innerHTML + str
    },
    // async Ask () {
    //   const formData = {
    //     "id": this.userId,
    //     "question": this.questionInfor,
    //   }

    //   try {
    //     const url1 = `http://${api.api}/home/todo`
    //     var str = ""
    //     const response = await axios.post(url1, formData)
    //     console.log(response.data)

    //     str = '<div class="userTalk" style="margin:10px; padding:10px;height:auto; width:fit-content;width:-webkit-fit-content;width:-moz-fit-content; background: rgba(122, 133, 135, 0.13);border-radius:10px;border-top-right-radius:0px;margin-bottom:35px; display:block; text-align:right;margin-left:auto;">'
    //       + this.questionInfor +
    //       '</div>'
    //     var Words = document.getElementById("talk_container")
    //     Words.innerHTML = Words.innerHTML + str
    //     this.questionInfor = ""

    //     str = '<div class="adminAns" style="margin-left:10px;padding:10px; height:auto;width:fit-content;width:-webkit-fit-content;width:-moz-fit-content; background: rgba(0, 121, 148, 0.11);border-radius:10px;border-top-left-radius:0px;margin-bottom:35px; display:block;">'
    //       + response.data +
    //       '</div>'
    //     var Answer = document.getElementById("talk_container")
    //     Answer.innerHTML = Answer.innerHTML + str

    //   } catch (error) {
    //     console.error(error)
    //   }
    //},
    back() {
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
  background-image: linear-gradient(180deg,
      #007994 -323.1%,
      #086a80 -157.2%,
      #ffffff 27%);
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px -2px 3px #0000000a;
}
</style>