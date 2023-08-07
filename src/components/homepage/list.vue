<template>
    <div class="comp">
        <div class="line" :class="{iscomplish:iscomplish}">
            <div class="circle"></div>
        </div>
        <div class="time">{{ time1 }}-{{ time2 }}</div>
        <div class="sth" :class="{isfinish:iscomplish}">{{ sth }}</div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            iscomplish:0,
            time1:'9:00',
            time2:'11:30',
            sth:'前端框架学习'
        }
    }
}
</script>
<style scoped>
.comp{
    position: relative;
}
.line{
    width: 64px;
    height: 0px;
    border: 0.4px solid rgba(0, 106, 130, 0.2);
    position: relative;
}
.iscomplish{
    border: 0.4px dashed rgba(0, 106, 130, 0.2);
}
.isfinish{
    text-decoration-line: line-through;
}
.circle {
  background-color:rgba(33, 138, 162, 0.8);
  height: 5px;
  width: 5px;
  border-radius: 50%;
  position: absolute;
  left: -2px;
  top: -2.2px;
}
.time{
    position: absolute;
    top: -6.5px;
    left: 75px;
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0px;
    line-height: 14.06px;
    color: rgba(0, 0, 0, 0.2);
    text-align: left;
    vertical-align: top;
    font-family: Regular;
}
.sth{
    position: absolute;
    left: 145px;
    top: -6.5px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 14.06px;
    color: rgba(0, 0, 0, 0.4);
    text-align: left;
    vertical-align: top;
    font-family: Regular;
}
</style>