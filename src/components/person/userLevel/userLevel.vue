<template>
    <div class="total">

        <div class="status_bar">
        </div>
        <div id="user_label">
            <div style="position: absolute;height: 184px; width: 360px;
                background: linear-gradient(0deg, rgba(188, 243, 255, 0.15) 0%, rgba(255, 255, 255, 1) 40%);
                border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;"></div>
            <div style="position: absolute; height: 141px; width: 141px;
                border-radius: 50%; background: rgba(1, 171, 157, 0.3);
                margin-top: -100px;margin-left: -20px;"></div>
            <div style="position: absolute; height: 185px; width: 185px;
                border-radius: 50%; background: rgba(1, 171, 157, 0.3);
                margin-top: -120px; margin-left: 50px;"></div>
            <div style="position: absolute; height: 172px; width: 172px;
                border-radius: 50%; background: rgba(1, 171, 157, 0.3);
                margin-top: -100px; margin-left: 200px;"></div>
            <div class="glassContainer" style="position: relative; height: 184px; width: 360px;
                box-shadow: 0px 2px 4px  rgba(0, 0, 0, 0.09); margin-bottom: 20px;
                border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;">
                <div id="userInfor" style="width: 360px; height: 70px; margin-top: 30px; color: black;
                    font-size: 18px;">
                    <div style="display: inline-block; margin-left: 30px; margin-right: 20px;"><img src="./userPhoto.png"
                            style="width:46px;height: 46px;"></div>
                    <div style="display: inline-block; vertical-align: top;">
                        <strong>{{ userID }}</strong>
                        <p style="color: grey; font-size: 12px;margin-top: 6px;">ID:{{ userNum }}</p>
                    </div>
                </div>
                <div id="userPeri" style="width: 330px; height: 80px; margin-left: 30px;">
                    <div>
                        <img src="./include.png" style="position: absolute; width: 46px; z-index: 6;">
                        <img src="./define.png" style="position: absolute; width: 54px; margin-left: 39px;z-index: 5;">
                        <img src="./ifdef.png" style="position: absolute; width: 60px; margin-left: 83px;z-index: 4;">
                        <img src="./pragma.png" style="position: absolute; width: 61px; margin-left: 133px;z-index: 3;">
                        <img src="./framework.png" style="position: absolute; width: 62px; margin-left: 183px;z-index: 2;">
                        <img src="./code_god.png" style="position: absolute; width: 59px; margin-left: 235px;z-index: 1;">
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar-inner" :style="{ width: `${percentage}%` }"></div>
                    </div>
                    <div style="float: right; margin-right: 25px;font-size: 12px; color: grey; transform: scale(.8);">
                        <p style="text-align: right;margin-bottom: 5px;">{{ empiricalValue }}/{{ totalEmpir }}</p>
                        距离下一级还需：{{ empiricalValue }}经验
                    </div>
                </div>
            </div>

        </div>

        <div class="specific_item">
            <div style="width: 360px; height: 56px;font-size: 16px; text-align: left;
                vertical-align: top; line-height: 56px;">
                &nbsp;&nbsp;&nbsp;&nbsp;用户名：<span style="color: grey;">&nbsp;&nbsp;{{ userID }}</span>
                <img src="./arrow_G.png" style="width: 12px; float: right; margin: 16px;">
            </div>
            <center>
                <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1);">
            </center>

            <div style="width: 360px; height: 56px;font-size: 16px; text-align: left;
                vertical-align: top; line-height: 56px;">
                &nbsp;&nbsp;&nbsp;&nbsp;性别：<span style="color: grey;">&nbsp;&nbsp;{{ userSex }}</span>
                <img src="./arrow_G.png" style="width: 12px; float: right; margin: 16px;">
            </div>
            <center>
                <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1);">
            </center>

            <div style="width: 360px; height: 56px;font-size: 16px; text-align: left;
                vertical-align: top; line-height: 56px;">
                &nbsp;&nbsp;&nbsp;&nbsp;生日：<span style="color: grey;">&nbsp;&nbsp;{{ userBirth }}</span>
                <img src="./arrow_G.png" style="width: 12px; float: right; margin: 16px;">
            </div>
            <center>
                <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1);">
            </center>

            <div style="width: 360px; height: 56px;font-size: 16px; text-align: left;
                vertical-align: top; line-height: 56px;">
                &nbsp;&nbsp;&nbsp;&nbsp;学历：<span style="color: grey;">&nbsp;&nbsp;{{ userDegree }}</span>
                <img src="./arrow_G.png" style="width: 12px; float: right; margin: 16px;">
            </div>
            <center>
                <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1);">
            </center>

            <div style="width: 360px; height: 56px;font-size: 16px; text-align: left;
                vertical-align: top; line-height: 56px;">
                &nbsp;&nbsp;&nbsp;&nbsp;个人简介：<span style="color: grey;">&nbsp;&nbsp;{{ userIntro }}</span>
                <img src="./arrow_G.png" style="width: 12px; float: right; margin: 16px;">
            </div>
            <center>
                <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1);">
            </center>

            <div style="width: 360px; height: 56px;font-size: 16px; text-align: left;
                vertical-align: top; line-height: 56px;">
                &nbsp;&nbsp;&nbsp;&nbsp;手机号：<span style="color: grey;">&nbsp;&nbsp;{{ userPhoneNum }}</span>
                <img src="./arrow_G.png" style="width: 12px; float: right; margin: 16px;">
            </div>
            <center>
                <hr style="width: 296px; border: 0.6px solid rgba(0, 121, 148, 0.1);">
            </center>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            userID: "OSIR4",
            userSex: "男",
            userBirth: "2004-9-1",
            userDegree: "本科在读",
            userIntro: "无",
            userPhoneNum: "18157455023",
            userNum: "22330133",
            empiricalValue:100,
            totalEmpir:1800,
            percentage: 30,
        };
    },
    methods: {
        backTolast() {
            alert("back");
        },
        moreInfor() {
            alert("more");
        },

    },
    // watch: {
    //     percentage() {
    //         // 当percentage变化时，更新进度条的颜色
    //         this.$nextTick(() => {
    //             const gradient = `linear-gradient(to right, red, yellow, green, blue, indigo, violet)`; // 渐变颜色
    //             const progressStyle = `.progress-bar-inner {background: ${gradient};}`; // 设置进度条的颜色
    //             this.$el.querySelector('.progress-bar-inner').style.setProperty('background', progressStyle);
    //         });
    //     },
    // },

}
</script>

<style>
* {
    margin: 0px;
    overflow: hidden;
}

.progress-bar {
    transition: width .2s linear;
    margin-top: 20px;
    width: 292px;
    height: 5px;
    background:linear-gradient(to right, rgba(134, 184, 173, 1), rgba(151, 218, 168, 1), rgba(247, 224, 92, 1), rgba(242, 97, 19, 1), rgba(161, 21, 21, 1));
    border-radius: 18px;
    /* 背景色 */
}

.progress-bar-inner {
    transition: width .2s linear;
    height: 100%;
    background-color: #ddd;
    float: right;
    /* 初始颜色 */
}

.glassContainer {
    width: 360px;
    height: 184px;
    color: white;
    gap: 20px;
    backdrop-filter: blur(20px);
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, .1) 40%);
    box-shadow: rgba(0, 0, 0, 0.3) 2px 2px 8px;
    /* border: 2px rgba(255,255,255,0.4) solid;
    border-bottom: 2px rgba(40,40,40,0.35) solid;
    border-right: 2px rgba(40,40,40,0.35) solid; */
}

.total {
    height: 640px;
    width: 360px;
    overflow: hidden;
    background-color: rgba(158, 152, 152, 0.2);
}

.status_bar {
    position: relative;
    left: 0px;
    top: 0px;
    width: 360px;
    height: 24px;
    opacity: 1;
    background: rgba(158, 152, 152, 0.4);
}

#user_label {
    position: relative;
    height: 184px;
    width: 360px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow: hidden;
    margin-bottom: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.09);
}

.return_label {
    position: relative;
    width: 360px;
    height: 48px;
    opacity: 1;
    background-color: rgba(255, 255, 255, 1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.specific_item {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    height: 436px;
    color: rgba(0, 90, 110, 1);
}</style>