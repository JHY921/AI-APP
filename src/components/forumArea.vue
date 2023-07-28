<script>
    export default {
        name: "zan",
        data () {
            return{
                liked:false,
                content:'+关注',
                bg_color:"#fef0f0",
                ft_color:"#f56c6c",
                likeshow:true,
                collectshow:true,
                likeCount:0,
                collectCount:0,
                commentCount:0,
            }
        },
        methods:{
            like(){
                this.likeshow=!this.likeshow;
                this.likeCount = !this.likeshow?this.likeCount+1:this.likeCount-1;
            },
            collect(){
                this.collectshow=!this.collectshow;
                this.collectCount = !this.collectshow?this.collectCount+1:this.collectCount-1;
            },
            comment(){
                this.commentCount++;
            },
            favor (e) {
                this.liked=!this.liked;
                if(this.liked){
                    this.content="已关注";
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                }

                else{
                    this.content="+ 关注"
                    this.bg_color="#fef0f0";
                    this.ft_color="#f56c6c";
                }
            },
            change(){
                this.bg_color="#ff9999";
                this.ft_color="#fef0f0";
            },
            goback(){
                if(this.liked){
                    this.bg_color="#f56c6c";
                    this.ft_color="#fef0f0";
                }
                else{
                    this.bg_color="#fef0f0";
                    this.ft_color="#f56c6c";
                }
            }
        }
    }
</script>
<template>
<div class="sceond-page">
<div id="top">
  <!-- <div>头像+搜索框+消息通知</div> -->
    <img src="../assets/头像.png" class="avator">
    <div class="search">
        <img src="../assets/头像.png" class="search-icon">
        <form>
            <input type="text" v-model="inputText" placeholder="前端开发就业前景">
        </form>
        <span>搜索</span>
    </div> 
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="17" viewBox="0 0 16 17" fill="none"><g opacity="1"  transform="translate(0 0)  rotate(0)"><path id="圆形 2" fill-rule="evenodd" style="fill:#D11F1F" opacity="1" d="M12.5 0C10.57 0 9 1.57 9 3.5C9 5.43 10.57 7 12.5 7C14.43 7 16 5.43 16 3.5C16 1.57 14.43 0 12.5 0Z"></path><g opacity="1" transform="translate(11 0)  rotate(0)"><text><tspan x="0" y="5.5680000000000005" font-size="6" line-height="0" fill="#FFFFFF" opacity="1" font-family="HarmonyOSSansSC-Regular" font-weight="Regular" letter-spacing="0" >3</tspan></text></g><g opacity="1"  transform="translate(0 1)  rotate(0)"><mask id="bg-mask-0" fill="white"><use transform="translate(0 0)  rotate(0)" xlink:href="#path_0"></use></mask><g mask="url(#bg-mask-0)" ><path id="路径 1" fill-rule="evenodd" style="fill:#005A6E" opacity="1" d="M3.33333 6.00334L3.33333 12.6633L12.6633 12.6633L12.6633 6.00334C12.6633 3.42334 10.5733 1.33334 8.00333 1.33334C5.42333 1.33334 3.33333 3.42334 3.33333 6.00334Z"></path><path  id="路径 2" style="fill:#007994; opacity:1;" d="M11.9967,12.6633v-6.65996c0,-0.54344 -0.10473,-1.06299 -0.3142,-1.55864c-0.20233,-0.47887 -0.48807,-0.90313 -0.8572,-1.2728c-0.36887,-0.36945 -0.79214,-0.65541 -1.26981,-0.85788c-0.49386,-0.20934 -1.01125,-0.31401 -1.55216,-0.31401c-0.54353,0 -1.06303,0.10475 -1.5585,0.31424c-0.47888,0.20248 -0.90308,0.48848 -1.2726,0.858c-0.36951,0.36951 -0.65551,0.79371 -0.85799,1.27259c-0.2095,0.49547 -0.31425,1.01497 -0.31425,1.5585v6.65996h-0.66666v-0.6666h9.32997v0.6666zM13.33,12.6633c0,0.0438 -0.00427,0.08717 -0.0128,0.1301c-0.00853,0.04293 -0.0212,0.08463 -0.038,0.1251c-0.01673,0.0404 -0.03727,0.0788 -0.0616,0.1152c-0.02427,0.0364 -0.0519,0.07007 -0.0829,0.101c-0.03093,0.031 -0.0646,0.05867 -0.101,0.083c-0.0364,0.02427 -0.07483,0.0448 -0.1153,0.0616c-0.0404,0.01673 -0.08207,0.02937 -0.125,0.0379c-0.04293,0.00853 -0.0863,0.0128 -0.1301,0.0128h-9.32997c-0.04377,0 -0.08713,-0.00427 -0.13006,-0.0128c-0.04293,-0.00853 -0.08462,-0.02117 -0.12506,-0.0379c-0.04045,-0.0168 -0.07887,-0.03733 -0.11526,-0.0616c-0.0364,-0.02433 -0.07008,-0.052 -0.10103,-0.083c-0.03095,-0.03093 -0.05859,-0.0646 -0.08291,-0.101c-0.02431,-0.0364 -0.04485,-0.0748 -0.0616,-0.1152c-0.01675,-0.04047 -0.0294,-0.08217 -0.03794,-0.1251c-0.00854,-0.04293 -0.01281,-0.0863 -0.01281,-0.1301v-6.65996c0,-0.72372 0.13984,-1.4163 0.41951,-2.07775c0.27002,-0.63862 0.6511,-1.204 1.14325,-1.69615c0.49215,-0.49215 1.05754,-0.87324 1.69616,-1.14326c0.66144,-0.27967 1.35402,-0.4195 2.07775,-0.4195c0.72153,0 1.41239,0.13991 2.07257,0.41974c0.6372,0.27013 1.2015,0.65125 1.6929,1.14337c0.49153,0.49223 0.87217,1.05754 1.1419,1.69595c0.27953,0.66154 0.4193,1.35407 0.4193,2.0776zM1.20327,12.0095c-0.04293,0.00853 -0.08462,0.02117 -0.12506,0.0379c-0.04045,0.01673 -0.07887,0.03727 -0.11526,0.0616c-0.0364,0.02433 -0.07007,0.05197 -0.10102,0.0829c-0.03095,0.031 -0.05859,0.0647 -0.08291,0.1011c-0.02432,0.0364 -0.04485,0.0748 -0.06161,0.1152c-0.01675,0.04047 -0.0294,0.08217 -0.03794,0.1251c-0.00854,0.04293 -0.01281,0.08627 -0.01281,0.13c0,0.0438 0.00427,0.08717 0.01281,0.1301c0.00854,0.04293 0.02119,0.08463 0.03794,0.1251c0.01675,0.0404 0.03729,0.0788 0.06161,0.1152c0.02432,0.0364 0.05196,0.07007 0.08291,0.101c0.03095,0.031 0.06463,0.05867 0.10102,0.083c0.03639,0.02427 0.07482,0.0448 0.11526,0.0616c0.04044,0.01673 0.08213,0.02937 0.12506,0.0379c0.04293,0.00853 0.08629,0.0128 0.13006,0.0128h13.32997c0.0438,0 0.08717,-0.00427 0.1301,-0.0128c0.04293,-0.00853 0.0846,-0.02117 0.125,-0.0379c0.04047,-0.0168 0.0789,-0.03733 0.1153,-0.0616c0.0364,-0.02433 0.07007,-0.052 0.101,-0.083c0.031,-0.03093 0.05863,-0.0646 0.0829,-0.101c0.02433,-0.0364 0.04487,-0.0748 0.0616,-0.1152c0.0168,-0.04047 0.02947,-0.08217 0.038,-0.1251c0.00853,-0.04293 0.0128,-0.0863 0.0128,-0.1301c0,-0.04373 -0.00427,-0.08707 -0.0128,-0.13c-0.00853,-0.04293 -0.0212,-0.08463 -0.038,-0.1251c-0.01673,-0.0404 -0.03727,-0.0788 -0.0616,-0.1152c-0.02427,-0.0364 -0.0519,-0.0701 -0.0829,-0.1011c-0.03093,-0.03093 -0.0646,-0.05857 -0.101,-0.0829c-0.0364,-0.02433 -0.07483,-0.04487 -0.1153,-0.0616c-0.0404,-0.01673 -0.08207,-0.02937 -0.125,-0.0379c-0.04293,-0.00853 -0.0863,-0.0128 -0.1301,-0.0128h-13.32997c-0.04377,0 -0.08713,0.00427 -0.13006,0.0128z"></path><path id="路径 3" fill-rule="evenodd" style="fill:#007994" opacity="1" d="M9.66333 12.9967L9.66333 12.6667L6.33333 12.6667L6.33333 12.9967C6.33333 13.9167 7.08333 14.6667 8.00333 14.6667C8.92333 14.6667 9.66333 13.9167 9.66333 12.9967Z"></path><path  id="路径 3" style="fill:#007994; opacity:1;" d="M8.99666,12.9967v-0.33h0.66667v0.6666h-3.33v-0.6666h0.66666v0.33c0,0.27587 0.09825,0.51207 0.29474,0.7086c0.19649,0.19647 0.43269,0.2947 0.7086,0.2947c0.27419,0 0.50807,-0.0976 0.70164,-0.2928c0.19446,-0.19607 0.29169,-0.4329 0.29169,-0.7105zM10.33,12.9967c0,0.31547 -0.06063,0.61777 -0.1819,0.9069c-0.11723,0.27953 -0.2827,0.52703 -0.49642,0.7425c-0.21433,0.21613 -0.46084,0.38357 -0.73952,0.5023c-0.28932,0.12327 -0.59226,0.1849 -0.90883,0.1849c-0.31625,0 -0.61937,-0.06147 -0.90936,-0.1844c-0.27929,-0.11847 -0.52664,-0.2854 -0.74205,-0.5008c-0.21541,-0.2154 -0.38233,-0.46277 -0.50078,-0.7421c-0.12299,-0.29 -0.18448,-0.5931 -0.18448,-0.9093v-0.33c0,-0.0438 0.00427,-0.08717 0.01281,-0.1301c0.00854,-0.04293 0.02119,-0.08463 0.03794,-0.1251c0.01675,-0.0404 0.03729,-0.0788 0.0616,-0.1152c0.02432,-0.0364 0.05196,-0.07007 0.08291,-0.101c0.03095,-0.031 0.06463,-0.05863 0.10103,-0.0829c0.03639,-0.02433 0.07481,-0.04487 0.11526,-0.0616c0.04044,-0.0168 0.08213,-0.02947 0.12506,-0.038c0.04293,-0.00853 0.08629,-0.0128 0.13006,-0.0128h3.33c0.04377,0 0.08713,0.00427 0.13006,0.0128c0.04293,0.00853 0.08462,0.0212 0.12506,0.038c0.04044,0.01673 0.07886,0.03727 0.11525,0.0616c0.0364,0.02427 0.07007,0.0519 0.101,0.0829c0.031,0.03093 0.05863,0.0646 0.0829,0.101c0.02433,0.0364 0.04487,0.0748 0.0616,0.1152c0.0168,0.04047 0.02947,0.08217 0.038,0.1251c0.00853,0.04293 0.0128,0.0863 0.0128,0.1301z"></path></g></g></g><defs><rect id="path_0" x="0" y="0" width="16" height="16" /></defs>
    </svg>
</div>
</div>
<div class="sorting-column">
    <div class="recommend">
        <p>推荐</p>
    </div>
    <div class="popular">
        <p>热门</p>
    </div>
    <div class="focus-on">
        <p>关注</p>
    </div>
</div>
<div class="items">
    <ul>
        <li class="item-info">
            <img src="../assets/课程.png">
            <p>课程</p>
        </li>
        <li class="item-info">
            <img src="../assets/学习工具.png">
            <p>学习工具</p>
        </li>
        <li class="item-info">
            <img src="../assets/资源.png">
            <p>资源</p>
        </li>
        <li class="item-info">
            <img src="../assets/更多.png">
            <p>更多</p>
        </li>
    </ul>
</div>
<div class="banner">
    <img src="../assets/banner1.png">
</div>
<div id="body">
      <ul class="post-list">
        <li class="each-post">
        <div id="each-post">
            <p class="post-title">Spring FrameWork从入门到NB-定制Bean</p>
            <div class="user-info">
              <img class="user-avator" src="../assets/photo.jpg">
              <span class="user-name">基彭伯格</span>
              <button  @click="favor" class="button" style="{background-color: bg_color,color:ft_color,}" @mouseenter="change()" @mouseleave="goback()">{{ content }}</button>
            </div>
            <div class="ms-content">
                  <p>以赛促创 杭州未来科技城成功举办人工智能技术创新大赛首次硬件大赛以赛促创 杭州未来科技城成功赛赛促创 杭州未来科技城成功举办人工智能技术创</p>
            </div>
            <div class="icon">
                <!-- 点赞 收藏 评论 -->
                <div class="like" @click="like">
                  <img src="../assets/like.png" class="likesbox" @click="clicklikes">
                  <p>{{ likeCount }}</p>
                </div>  
                <div class="collect" @click="collect">
                    <img src="../assets/collect.png">
                    <p>{{ collectCount }}</p>
                </div>
                <div class="comment" @click="comment">
                    <img src="../assets/comment.png">
                    <p>{{ commentCount }}</p>
                </div>
            </div> 
        </div>
        </li>
        <li class="each-post">
        <div id="each-post">
            <p class="post-title">Spring FrameWork从入门到NB-定制Bean</p>
            <div class="user-info">
              <img class="user-avator" src="../assets/photo.jpg">
              <span class="user-name">基彭伯格</span>
              <button  @click="favor" class="button" style="{background-color: bg_color,color:ft_color,}" @mouseenter="change()" @mouseleave="goback()">{{ content }}</button>
            </div>
            <div class="ms-content">
                  <p>以赛促创 杭州未来科技城成功举办人工智能技术创新大赛首次硬件大赛以赛促创 杭州未来科技城成功赛赛促创 杭州未来科技城成功举办人工智能技术创</p>
            </div>
            <div class="icon">
                <!-- 点赞 收藏 评论 -->
                <div class="like" @click="like">
                  <img src="../assets/like.png" class="likesbox" @click="clicklikes">
                  <p>{{ likeCount }}</p>
                </div>  
                <div class="collect" @click="collect">
                    <img src="../assets/collect.png">
                    <p>{{ collectCount }}</p>
                </div>
                <div class="comment" @click="comment">
                    <img src="../assets/comment.png">
                    <p>{{ commentCount }}</p>
                </div>
            </div> 
        </div>
        </li>
      </ul>
</div>
<div id="footer">

</div>
</div>
</template>
<style>
*{
    margin:0px;
    padding:0px;
}
.second-page{
    
}
#top{
    margin-top: 24px;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    height:58px;
}
#body{
    width:100%;
    height:400px;
    /* background-color: rgb(5, 99, 99); */
    overflow: scroll;
}
#footer{
    width:100%;
    height:40px;
    position:absolute;
    bottom:0;
    background-color: rgb(249, 249, 249);
}
.avator{
    width:42px;
    height:42px;
    margin-top:1%;
    margin-left:5%;
}
.search{
    width:220px;
    height:24px;
    border:1px solid rgba(0, 121, 148, 1);
    border-radius: 12px;
    margin-top:3.5%;
    margin-left:4%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.search-icon{
    margin-left:6%;
    margin-top:1%;
    width:8%;
    height:76%;
}
.search form input{
    margin-left:3%;
    border:none;
    width:80%;
    font-size: 12px;
}
.search span{
    border-left:1px solid rgba(153, 164, 166, 1);
    font-size: 12px;
    color:rgba(0, 121, 148, 1);
    line-height: 12px;
    height:50%;
    margin:auto;
    vertical-align: top;
    width:20%;
    padding-left:8px;
}
.info{
    width:42px;
    height:42px;
    margin-top:1%;
    margin-left:5%;
}

.sorting-column{
    height:28px;
    width:90%;
    font-size:13px;
    line-height:28px;
    margin:auto;
    font-weight: 700;
    color:rgba(0, 121, 148, 1);
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: space-around;
}
.sorting-column div{
    width:33.33%;
    text-align: center;
}
.recommend{
    background: linear-gradient(180deg, rgba(29, 166, 197, 0.35) 9.39%, rgba(0, 90, 110, 0) 100%);

border-top: 1px solid rgba(0, 121, 148, 1);
}
.items{
    position:relative;
    width:90%;
    height:58px;
    padding-bottom:4px;
    margin:auto;
    box-shadow:inset 0.7px 2px 5px  rgba(0, 121, 148, 0.2);
    border-radius: 10px;
}
.items ul{
    list-style-type: none;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
}
.items ul li{
    width:25%;
    text-align: center;
    font-size: 8px;
}
.items img{
    padding-top:4px;
    width:37px;
    height:37px;
}
.item-info p{
    padding-bottom: 1px;
    margin-top:-2%;
    font-size: 8px;
    color: rgba(0, 121, 148, 1);
}
.banner{
    width:90%;
    margin:auto;
}
.banner img{
    width:100%;
}

.post-list{
    width:100%;
    display:flex;
    flex-wrap:wrap;
    align-content: center;
    flex-direction:row;
    color:#999;
    font-size:20px;
}
.each-post{
    background-color: rgb(255, 255, 255);
    margin:auto;
    height:178px;
    width:99.8%;
    margin-top:3%;
    color:black;
    border-radius: 10px;
    padding: 140rpx 44rpx 4rpx 52rpx;
    background-image: linear-gradient(180deg, #007994 -134.6%, #ffffff 14.9%);
    border-radius: 21rpx;
    box-shadow: 0px 2px 5px  rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
}
.each-post a{
    color:black;
}
#each-post{
    margin-top:6%;
    margin-left:6%;
}
.post-title{
    line-height:16px;
    color:black;
    width:90%;
    font-size: 16px;
    overflow:hidden;
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient:vertical;
    white-space:normal;
    word-wrap:break-word;
}
.user-info{
    color:rgb(0, 0, 0);
    width:100%;
    height:40px;
    display:flex;
    align-items:center;
    flex-direction: row;
}
.button{
    right:10px;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 900;
    background:  #10857f;;
    border-radius: 20px;
    padding: 6px 18px;
    text-align: center;
    font-size: 7px;
    -webkit-transform:scale(0.7);
}
.user-info img{
    border-radius:50%;
    width:24px;
    height:24px;
}
.user-name{
    margin-left:4%;
    font-size: 14px;
    font-weight: 400;
}
.ms-content{
    width:98%;
    font-size:9px;
    line-height: 16px;
    height:54px;
    color:rgb(140, 139, 139);
    text-overflow:ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:3;
    -webkit-box-orient:vertical;
    white-space:normal;
    word-wrap:break-word;
    overflow: hidden;
}
.icon{
    width:20%;
    height:100%;
    float:right;
    margin-right:4%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-self: flex-start;
    font-size:6px;
}
.icon div{
    margin-left:28%;
    width:34px;
    height:34px;
    display:flex;
    font-size:6px;
    flex-direction: column;
    text-align: center;
}
.icon p{
    font-size:6px;
}
.icon img{
    width:18px;
    height:18px;
    vertical-align: middle;
}
.content span{
    font-size: 9px;
}
</style>