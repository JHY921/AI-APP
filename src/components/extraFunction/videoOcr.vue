<script>
import 'vant/es/nav-bar'
import axios from 'axios'
import api from '../../api/api'
export default {
    data() {
        return {
            imgurl: null,
            content: null
            //   notification: data
        }
    },
    methods: {
        back() {
            history.back()
        },
        openVideoDialog() {
            this.$refs.videoInput.click();
        },
        handlefile(event) {
            const file = event.target.files[0];
            const videoContainer = this.$refs.videoContainer;
            console.log(file);
            if (file && file.type.includes('video')) {
                const reader = new FileReader();
                console.log("do if true");
                reader.onload = () => {
                    const videoElement = document.getElementById('videoBox');
                    videoElement.src = reader.result;

                    // // 清空容器并添加新的视频元素
                    // while (videoContainer.firstChild) {
                    //     videoContainer.removeChild(videoContainer.firstChild);
                    // }
                    // videoContainer.appendChild(videoElement);
                };

                reader.readAsDataURL(file);
            }
            //   const file = event.target.files[0]
            //   if (file) {
            //     this.imgurl = URL.createObjectURL(file)
            //     console.log('file', file)
            //     console.log(URL.createObjectURL(file));
            //     const formdate = new FormData()
            //     formdate.append('image', file)
            //     console.log('formdate', formdate);
            //     axios.post(`http://${api.api}/ocr`, formdate)
            //       .then(res => {
            //         console.log(res.data);
            //       }).catch(err => {
            //         console.log(err);
            //       })
            setTimeout(() => {
                const str = '<p>'
                    + "赤鸢是广泛分布于欧洲、北美和中东的一种鸢。它跟我国常见的鸢的不同之处，在于它的羽毛呈红褐色，因而得名“赤鸢”。赤鸢体长0.6米左右，双翅展开达1．6米，尾也是叉形。每到繁殖季节，雌雄赤鸢在天空中比翼齐飞，万里晴空像一个巨大的“舞场”，雄赤鸢尽情地上下翻飞，向雌赤鸢展示自己的飞行本领。“互订终身”之后，雌雄赤鸢便一同“叽叽叽叽叽……”地欢叫着飞到它们中意的巢址，“安家立业”。"
                    + '</p>';
                var Words = document.getElementById("ansContainer");
                Words.innerHTML = Words.innerHTML + str;
            }, 1000);

        },
        playVideo() {
            this.$refs.videoPlayer.play();
        },
        pauseVideo() {
            this.$refs.videoPlayer.pause();
        },
    },
}
</script>
<template>
    <div class="ocr-page">
        <div class="status-bar"></div>
        <div class="goods_info">
            <van-nav-bar title="视频总结" left-arrow bind:click-left="onClickLeft" @click-left="back" />
        </div>
        <div class="ocr">
            <!-- <div class="photo-show">
                <img :src="imgurl" alt="" v-if="imgurl" style="width: 268px;, height: 268px;">
                <img class="add-cross" src="./内容增添.png" v-if="!imgurl" />
            </div> -->
            <div ref="videoContainer" class="photo-show">
                <video ref="videoPlayer" id="videoBox" controls style="width: 100%; height: 100%; object-fit: contain;"></video>
            </div>

            <div class="album-import-button">
                <input type="file" ref="videoInput" style="display: none;" accept="video/*" @change="handlefile">
                <img class="album-import-icon" src="./相册.png" @click="openVideoDialog" />
                <img class="album-import-text" src="./相册导入文字.png" />
            </div>
            <div class="photo-import-button">
                <img class="photo-import-icon" src="./相机.png" />
                <img class="photo-import-text" src="./拍照导入文字.png" />
            </div>
            <div class="reidentification-button">
                <img class="reidentification-import-icon" src="./文字识别.png" />
                <img class="reidentification-import-text" src="./重新识别文字.png" />
            </div>
        </div>
        <div class="identify-result">
            <div class="result-title">
                <img class="title-icon" src="./识别结果.png" />
                <img class="title-shadow-icon" src="./识别结果-shadow.png" />
            </div>
            <div class="result-frame">
                <div class="result-content" id="ansContainer">

                </div>
                <img src="./复制.png" class="copy" />
                <p class="copy-span">一键复制</p>
            </div>
        </div>
    </div>
</template>

<style  lang="scss" scoped>
* {
    position: relative;
    margin: 0px;
    padding: 0px;
}

.ocr-page {
    width: 360px;
    height: 640px;
    position: relative;
    margin-left: 0px;
    background-color: rgba(235, 235, 235, 1);
}

.status-bar {
    /* position:fixed; */
    left: 0px;
    top: 0px;
    width: 360px;
    height: 24px;
    opacity: 1;
    background: rgba(158, 152, 152, 1);
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

.ocr {
    width: 360px;
    height: 400px;
    margin-top: -10px;
    margin-bottom: 10px;
    overflow-x: hidden;
    opacity: 1;
    border-radius: 10px;
    background: linear-gradient(180deg,
            rgba(18, 199, 240, 0.2) 0%,
            rgba(255, 255, 255, 0.6) 10%);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.04);
}

.photo-show {
    float: left;
    top: 31px;
    width: 360px;
    height: 268px;
    opacity: 1;
    background: rgba(233, 233, 233, 1);
    display: flex;
    justify-content: center;
}

.add-cross {
    left: 124px;
    top: 124px;
    width: 20px;
    height: 20px;
    opacity: 1;
}

.album-import-button {
    position: relative;
    top: 310px;
    left: 60px;
    width: 54px;
    height: 54px;
    opacity: 1;
    border-radius: 30px;
    background: linear-gradient(90deg,
            rgba(0, 79, 94, 1) 0%,
            rgba(0, 121, 148, 0.57) 100%);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.22);
}

.album-import-icon {
    position: absolute;
    z-index: 999;
    left: 12px;
    top: 12px;
    width: 32px;
    height: 32px;
    opacity: 1;
}

.album-import-text {
    position: absolute;
    z-index: 999;
    left: 3px;
    top: 60px;
    width: 45px;
    height: 17px;
    opacity: 1;
}

.photo-import-button {
    position: relative;
    left: 160px;
    top: 256px;
    width: 54px;
    height: 54px;
    opacity: 1;
    border-radius: 30px;
    background: linear-gradient(90deg,
            rgba(0, 79, 94, 1) 0%,
            rgba(0, 121, 148, 0.57) 100%);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.22);
}

.photo-import-icon {
    position: absolute;
    z-index: 999;
    left: 12px;
    top: 10px;
    width: 32px;
    height: 32px;
    opacity: 1;
}

.photo-import-text {
    position: absolute;
    z-index: 999;
    left: 4px;
    top: 60px;
    width: 45px;
    height: 17px;
    opacity: 1;
}

.reidentification-button {
    top: 202px;
    left: 260px;
    width: 54px;
    height: 54px;
    opacity: 1;
    border-radius: 30px;
    /* border-radius: 27px 0px, 0px, 27px; */
    background: linear-gradient(90deg,
            rgba(0, 79, 94, 1) 0%,
            rgba(0, 121, 148, 0.57) 100%);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.22);
}

.reidentification-import-icon {
    position: absolute;
    z-index: 999;
    left: 12px;
    top: 10px;
    width: 32px;
    height: 32px;
    opacity: 1;
}

.reidentification-import-text {
    position: absolute;
    z-index: 999;
    left: 5px;
    top: 60px;
    width: 45px;
    height: 17px;
    opacity: 1;
}

.identify-result {
    left: 0px;
    /* top: 364px; */
    width: 360px;
    height: 261px;
    opacity: 1;
    border-radius: 2%;
    border-radius: 10px 10px, 0px, 0px;
    background: linear-gradient(180deg,
            rgba(58, 215, 251, 0.2) 0%,
            rgba(255, 255, 255, 0.9) 10%);
}

.result-title {
    z-index: 999;
    left: 16px;
    top: 16px;
    width: 77px;
    height: 29px;
    opacity: 1;
    font-size: 19px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 28.8px;
    color: rgba(70, 129, 140, 1);
    text-align: left;
    vertical-align: top;
}

.title-icon {
    position: absolute;
    width: 77px;
    height: 29px;
}

.title-shadow-icon {
    position: absolute;
    width: 77px;
    height: 29px;
    left: 2px;
    top: 0.2px;
    width: 77px;
    height: 29px;
    opacity: 1;
}

.result-frame {
    left: 14px;
    top: 25px;
    width: 329px;
    height: 189px;
    opacity: 1;
    border-radius: 5px;
    background: rgba(245, 245, 245, 1);
    box-shadow: inset 1px 1px 1px 1px rgba(0, 0, 0, 0.17);
}

.result-content {
    width: 94%;
    top: 2%;
    margin-bottom: 5%;
    height: 70%;
    word-break: break-all;
    padding: 12px 12px 6px 12px;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 18.06px;
    color: rgba(0, 67, 82, 1);
    text-align: left;
    vertical-align: top;
    overflow-y: scroll;
}

.copy {
    position: absolute;
    right: 16px;
    bottom: 18px;
    width: 16px;
    height: 16px;
    opacity: 1;
}

.copy-span {
    position: absolute;
    right: -6px;
    bottom: 8px;
    transform: scale(0.4);
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 7.03px;
    color: rgba(0, 79, 97, 0.55);
    text-align: left;
    vertical-align: top;
}
</style>