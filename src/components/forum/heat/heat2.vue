<template>
    <div class="heat" @click="gotopost">
        <div class="number"><div class="txt">2</div></div>
        <div class="title">{{ item.title }}</div>
        <div class="username">{{ item.name }}</div>
        <div class="dau">浏览{{ item.through }}</div>
    </div>
</template>
<script>
export default{
    props: {
        item: {
            type: Object,
            required: true,
            default: () => ({
                title: '',
                name: '',
                through: 0,
                _id:''
            })
        }
    },
    data(){
        return{
        }
    },
    methods:{
    gotopost(){
      this.$router.push({ name: 'postContent', params: { pgId: this.item._id }})
    }
  }
}
</script>
<style scoped>
/* @import url('../../../assets/font/font.css'); */
.heat{
    position: relative;
    width: 356px;
    height: 96px;
    opacity: 1;
    border-radius: 10px;
    background-image: linear-gradient(209.9deg, #007994 -202.7%, #ffffff 49.9%);
    box-shadow: 0px 3px 8px  rgba(0, 0, 0, 0.2);
}
.number{
    position: absolute;
    left: 13px;
    top: 14px;
    width: 19px;
    height: 27px;
    opacity: 1;
    border-radius: 3px;
    background-image: linear-gradient(180deg, #ba6509 30.4%, #94000000 145.3%);
    font-family: dyh;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 21.6px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    vertical-align: center;
}
.txt{
    margin-top: 2.5px;
}
.title{
    position: absolute;
    left: 47px;
    top: 13px;
    width: 306px;
    height: 42px;
    opacity: 1;
    /** 文本1 */
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 19.92px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
    font-family: res;
    overflow: hidden;
}
.username{
    position: absolute;
    left: 47px;
    top: 65px;
    height: 16px;
    opacity: 1;

    font-family: res;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 15.24px;
    color: rgba(0, 0, 0, 0.5);
    text-align: left;
    vertical-align: top;
}
.dau{
    position: absolute;
    left: 282px;
    top: 65px;
    width: 126px;
    height: 23px;
    opacity: 1;
    font-family: res;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 12.89px;
    color: rgba(181, 181, 181, 1);
}
</style>