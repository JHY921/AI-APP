<template>
    <div class="total">
        <van-notify v-model:show="showTips" type="success">
            <van-icon name="bell" style="margin-right: 4px;" />
            <span>兑换成功: )</span>
        </van-notify>
        <van-notify v-model:show="showFailTips" type="warning">
            <van-icon name="bell" style="margin-right: 4px;" />
            <span>积分不足: (</span>
        </van-notify>
        <!-- <van-dialog v-model:show="showCheck" title="" show-cancel-button>
        </van-dialog> -->
        <!-- <van-button type="primary" @click="showDialog">显示确认弹窗</van-button> -->
        <div class="sendAdvice" style="position: absolute; width: 360px; height: 160px; background-color: rgb(218, 218, 218);
            margin-top: 240px; border-radius: 10px; opacity: 1;z-index: 999999;
            color: #007994;" v-if="isShowSendAdvice">
            <p style="font-size: 20px; font-weight: 600;">是否确认花费{{ choosePrice }}积分购买{{ chooseGoods }}</p>

            <button style="width: 155px; height: 40px; border-radius: 10px; border: none;
                font-size: 20px; color: #007994; margin-left: 20px;" @click="cancelAdvice">
                取消
            </button>
            <button style="width: 155px; height: 40px; border-radius: 10px; border: none;
                font-size: 20px; color: #007994; margin-left: 10px;" @click="confirmAdvice">
                确认
            </button>
        </div>
        <div class="status_bar">
        </div>

        <div class="return_label">
            <div @click="backTolast" style="display: inline-block; width: 40px; height: 100%;">
                <svg transform="translate(13,16)" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" width="9.70001220703125" height="14.89013671875"
                    viewBox="0 0 9.70001220703125 14.89013671875" fill="none">
                    <path id="路径 1" style="fill:#007994; opacity:1;"
                        d="M8.05786,14.6566l-7.7,-6.45001c-0.05033,-0.04217 -0.09607,-0.08884 -0.13721,-0.14001c-0.04114,-0.05117 -0.0769,-0.10587 -0.10727,-0.16408c-0.03037,-0.05822 -0.05477,-0.11884 -0.07319,-0.18186c-0.01843,-0.06303 -0.03053,-0.12724 -0.03631,-0.19264c-0.00578,-0.06541 -0.00512,-0.13075 0.00197,-0.19603c0.00709,-0.06527 0.02049,-0.12923 0.04018,-0.19187c0.01969,-0.06264 0.0453,-0.12276 0.07684,-0.18035c0.03153,-0.05759 0.06838,-0.11156 0.11055,-0.16189c0.03798,-0.04535 0.07966,-0.08699 0.12503,-0.12494l7.7,-6.44c0.05037,-0.04213 0.10436,-0.07893 0.16198,-0.11042c0.05762,-0.03149 0.11776,-0.05706 0.18041,-0.0767c0.06265,-0.01964 0.12662,-0.03299 0.1919,-0.04003c0.06528,-0.00704 0.13062,-0.00765 0.19603,-0.00182c0.0654,0.00583 0.1296,0.01798 0.19261,0.03645c0.06301,0.01848 0.12361,0.04292 0.1818,0.07333c0.05819,0.03041 0.11286,0.06621 0.164,0.10739c0.05115,0.04118 0.09778,0.08695 0.13991,0.13732c0.04212,0.05037 0.07893,0.10436 0.11042,0.16198c0.03149,0.05762 0.05705,0.11775 0.0767,0.18041c0.01964,0.06265 0.03298,0.12662 0.04003,0.1919c0.00704,0.06528 0.00765,0.13062 0.00182,0.19603c-0.00583,0.0654 -0.01798,0.1296 -0.03645,0.19261c-0.01848,0.06301 -0.04293,0.12361 -0.07334,0.1818c-0.03041,0.05819 -0.0662,0.11286 -0.10739,0.16401c-0.04118,0.05114 -0.08695,0.09777 -0.13732,0.1399l-7.69999,6.44l-0.64156,-0.76708l0.64214,-0.76659l7.7,6.44999c0.05033,0.0422 0.09607,0.08887 0.13721,0.14c0.04115,0.0512 0.0769,0.1059 0.10727,0.1641c0.03037,0.0582 0.05476,0.11883 0.07319,0.1819c0.01843,0.063 0.03053,0.1272 0.03631,0.1926c0.00577,0.0654 0.00511,0.13073 -0.00198,0.196c-0.00709,0.06527 -0.02048,0.12923 -0.04017,0.1919c-0.01969,0.06267 -0.04531,0.12277 -0.07684,0.1803c-0.03153,0.0576 -0.06838,0.11157 -0.11054,0.1619c-0.04217,0.05033 -0.08884,0.0961 -0.14001,0.1373c-0.05117,0.04113 -0.10587,0.07687 -0.16409,0.1072c-0.05821,0.0304 -0.11883,0.0548 -0.18185,0.0732c-0.06303,0.01847 -0.12724,0.03057 -0.19264,0.0363c-0.06541,0.0058 -0.13075,0.00513 -0.19603,-0.002c-0.06527,-0.00707 -0.12923,-0.02043 -0.19187,-0.0401c-0.06264,-0.01973 -0.12276,-0.04537 -0.18035,-0.0769c-0.05759,-0.03153 -0.11156,-0.06837 -0.16189,-0.1105z">
                    </path>
                </svg>
            </div>
            <div style="display: inline-block;">
                <center>
                    <span style="font-size: 16px;font-weight: 700;letter-spacing: 0px;
                        color: rgba(0, 87, 107, 0.67);
                        position: absolute;top: 50%;left: 0;right: 0;transform: translateY(-50%);">
                        兑换商城
                    </span>
                </center>
            </div>
            <!--js计算适配width-->
        </div>
        <div class="inforContainer" style="margin-top: 8px; width: 360px; height: 72px;">
            <div style="display: inline-block; vertical-align: top; width: 200px; height: 64px; margin-right: 8px;
                margin-left: 16px;border-radius: 10px;
                background: linear-gradient(0deg, rgba(255, 255, 255, 0.58) 0%, rgba(0, 115, 140, 0.2) 100%);
                box-shadow: 0px 1px 3px  rgba(0, 0, 0, 0.1), 0px 1px 2px  rgba(0, 0, 0, 0.06);
                color: rgba(0, 121, 148, 1);">
                <strong>
                    <span style="margin-top: 25px;">&nbsp;&nbsp;&nbsp;&nbsp;当前积分数：</span>
                </strong>
                <strong>
                    <span style="font-size: 24px;color: rgba(0, 94, 115, 1); line-height: 60px;">
                        {{ points }}
                    </span>
                </strong>
            </div>
            <div style="display: inline-block; vertical-align: top; width: 56px; height: 64px; background-color: #007994;margin-right: 8px;
                border-radius: 10px;
                background: linear-gradient(0deg, rgba(255, 255, 255, 0.58) 0%, rgba(0, 115, 140, 0.2) 100%);
                box-shadow: 0px 1px 3px  rgba(0, 0, 0, 0.1), 0px 1px 2px  rgba(0, 0, 0, 0.06);
                " @click="go('/goodsState')">
                <img src="./bills.png"
                    style="width: 24px; height: 24px; margin: 16px; margin-bottom: 0px; margin-top: 12px;">
                <span style="font-size: 12px; color: rgba(0, 121, 148, 1);vertical-align: top;
                    transform: scale(0.5);">
                    &nbsp;我的订单
                </span>
            </div>
            <div style="display: inline-block; vertical-align: top; width: 56px; height: 64px; background-color: #007994;
                border-radius: 10px;
                background: linear-gradient(0deg, rgba(255, 255, 255, 0.58) 0%, rgba(0, 115, 140, 0.2) 100%);
                box-shadow: 0px 1px 3px  rgba(0, 0, 0, 0.1), 0px 1px 2px  rgba(0, 0, 0, 0.06);
                " @click="go('/userPos')">
                <img src="./position.png"
                    style="width: 24px; height: 24px; margin: 16px; margin-bottom: 0px; margin-top: 12px;">
                <span style="font-size: 12px; color: rgba(0, 121, 148, 1);vertical-align: top;
                    transform: scale(0.5);">
                    &nbsp;我的地址
                </span>
            </div>
        </div>
        <div class="pageContainer" style="width: 360px; height: 512px;">
            <div class="swiperContainer" style="width: 327px; height: 102px; margin-left: 17px; margin-right: 16px;
                border-radius: 10px;">
                <van-swipe :autoplay="3000" lazy-render>
                    <van-swipe-item v-for="image in images" :key="image">
                        <img :src="image" style="width: 327px; height: 102px;" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="goodsContainer" style="margin-top: 8px; width: 360px; height: 402px;
                padding-left: 8px; overflow: auto;">
                <div v-for="goods in goodsList" :key="goods" style="height: 210px; width: 160px; display: inline-block; vertical-align: top;
                        margin-top: 8px; overflow: visible; margin-left: 8px;">
                    <div style="height: 156px; width: 160px; overflow: visible;
                        box-shadow:0px 0px 10px 1px rgba(0, 0, 0, 0.1); border-radius: 10px;">
                        <img :src="goods.img" style="width: 160px; height: 156px; border-radius: 10px;">
                    </div>
                    <div style="background: rgba(255, 255, 255, 1);
                        box-shadow:0px 0px 10px 0px rgba(0, 0, 0, 0.1);
                        width: 160px; height: 72px; border-radius: 10px;
                        position: relative; top: -10%; margin-bottom: 10px;">
                        <strong>
                            <p style="text-align: left; line-height: 40px; color: rgba(0, 100, 122, 1);">
                                &nbsp;&nbsp;&nbsp;{{ goods.name }}
                            </p>
                        </strong>
                        <span style="font-size: 10px; font-weight: 400; letter-spacing: 0px; color: rgba(93, 102, 105, 0.49);
                            text-align: left;vertical-align: top;">
                            &nbsp;&nbsp;&nbsp;&nbsp;点数：
                        </span>
                        <span style="font-size: 16px; font-weight: 700; letter-spacing: 0px;
                            color: rgba(0, 121, 148, 1);
                            text-align: left; vertical-align: top;">
                            {{ goods.price }}
                        </span>
                        <img src="./buyGoods.png" style="position: absolute; width: 24px; height: 24px;
                                margin-left: 30px;margin-top: -2px;" @click="buyGoods(goods.name, goods.price)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createApp } from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { Notify } from 'vant';
import { Dialog } from 'vant';
import { showConfirmDialog } from 'vant';
import 'vant/lib/index.css'

export default {
    data() {
        return {
            isShowSendAdvice: false,
            courseContent: [],
            isVip: true,
            isFollow: true,
            points: 24000,
            showTips: false,
            showFailTips: false,
            showCheck: false,
            goodsList: [
                {
                    price: 18000,
                    img: "https://res.vmallres.com/cmscdn/CN/2023-09/96b34ecd27fa417684c109461d890ae6.png",
                    name: "华为MATE60 PRO"
                },
                {
                    price: 25000,
                    img: "https://res.vmallres.com/cmscdn/CN/2023-09/d490cae3db5e4d089f005065d5ffe5e9.jpg",
                    name: "华为MATE X5"
                },
                {
                    price: 10000,
                    img: "https://res.vmallres.com/cmscdn/CN/2023-05/78089ce80f134d27a8e26fab2592332d.png",
                    name: "华为畅享系列"
                },
                {
                    price: 12000,
                    img: "https://res.vmallres.com/cmscdn/CN/2023-05/2fa0b145cbdc460aa22a510ed2832275.png",
                    name: "华为NOVA系列"
                },
                {
                    price: 180,
                    img: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
                    name: "商品名填充填充"
                },
                {
                    price: 180,
                    img: "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
                    name: "商品名填充填充"
                },
            ],
            chooseGoods: "",
            choosePrice: 0,
        };
    },
    methods: {
        showDialog(name,price) {
            showConfirmDialog({
                title: '是否确认兑换',
                message: name,
            })
                .then(() => {
                    this.showTips = true;
                    this.points-=price;
                    setTimeout(() => {
                        this.showTips = false;
                    }, 2000);
                })
                .catch(() => {
                });
        },
        backTolast() {
            history.back();
        },
        buyGoods(name, price) {
            if (this.points > price) {
                this.showDialog(name,price);
                this.chooseGoods = name;
                this.choosePrice = price;
                this.showCheck = true;
            } else {
                this.showFailTips = true;
                setTimeout(() => {
                    this.showFailTips = false;
                }, 2000);
            }
        },
        go(path) {
            this.$router.push(path)
        },
    },
    setup() {
        const images = [
            'https://res.vmallres.com/cmscdn/CN/2023-09/7ac451fcfabf429fb90c20e327dbd2ab.jpg',
            'https://res.vmallres.com/cmscdn/CN/2023-08/0b2372bf003a4293ba7df466c1f64af7.jpg',
        ];
        return { images };
    },
}
</script>

<style>
* {
    margin: 0px;
    overflow: hidden;
}

p {
    text-align: center;
}

.total {
    height: 640px;
    width: 360px;
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

.course_content {
    position: relative;
    width: 360px;
    height: 568px;
    overflow: auto;
}

.fans_detail {
    width: 360px;
    height: 70px;
}
</style>