<template>
    <div class="container" id="con">
        <div class="mon">{{ month }}月</div>
        <div class="mon-shadow">{{ month }}月</div>
        <div class="mon-s">{{ months }}.</div>
        <div class="bod"></div>
    </div>
</template>
<script>
import * as d3 from 'd3'
export default{
    data(){
        return{
            month:10,
            day:31,
            months:'',
            day:31,
            today:22
        }
    },

    methods:{
        getdata(){
            var date = new Date()
            this.month = date.getMonth()+1
            this.today =date.getDay()
            var year = date.getFullYear()
            this.day = new Date(year, this.month, 0).getDate()
        },
        transfata(a){
            var en_mon_arr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec"];
            this.months = en_mon_arr[a-1]
        },
        draw(){
            var width = document.getElementById('con').offsetWidth
            var height = document.getElementById('con').offsetHeight
            console.log('width', width);
            console.log('height', height);
            let svg = d3.select('#con')
                        .append('svg')
                        .attr('width', width)
                        .attr('height', height)
                        let defs = svg.append('defs');

            let filter = defs.append('filter')
            .attr('id', 'shadow')
            .attr('x', '-20%')
            .attr('y', '-20%')
            .attr('width', '140%')
            .attr('height', '140%');

            filter.append('feGaussianBlur')
            .attr('in', 'SourceAlpha')
            .attr('stdDeviation', '1')
            .attr('result', 'blur');

            filter.append('feOffset')
            .attr('in', 'blur')
            .attr('dx', '-1')
            .attr('dy', '4.5')
            .attr('result', 'offsetBlur');

            filter.append('feComposite')
            .attr('in', 'SourceGraphic')
            .attr('in2', 'offsetBlur')
            .attr('operator', 'out')
            .attr('result', 'inverse');

            filter.append('feFlood')
            .attr('flood-color', 'black')
            .attr('flood-opacity', '0.55')
            .attr('result', 'color');

            filter.append('feComposite')
            .attr('in', 'color')
            .attr('in2', 'inverse')
            .attr('operator', 'in')
            .attr('result', 'shadow');

            filter.append('feComposite')
            .attr('in', 'shadow')
            .attr('in2', 'SourceGraphic')
            .attr('operator', 'over');
            var g = svg.append('g')
                    
            g.append('circle')
                .attr('cx', width/10)
                .attr('cy', 95)
                .attr('r', 8)
                .attr('fill', 'rgba(218, 235, 239, 1)')
                .attr('filter', 'url(#shadow)')
            g.append('circle')
                .attr('cx', width/10)
                .attr('cy', 115)
                .attr('r', 8)
                .attr('fill', 'rgba(147, 198, 209, 1)')
                .attr('filter', 'url(#shadow)')
            g.append('circle')
                .attr('cx', width/10)
                .attr('cy', 135)
                .attr('r', 8)
                .attr('fill', '  rgba(52, 148, 169, 1)')
                .attr('filter', 'url(#shadow)')
            g.append('circle')
                .attr('cx', width/10)
                .attr('cy', 155)
                .attr('r', 8)
                .attr('fill', ' rgba(0, 100, 122, 1)')
                .attr('filter', 'url(#shadow)')
            var txt = svg.append('g')
            txt.append('text')
                .attr('x', width*0.14)
                .attr('y', 98)
                .attr('font-size', 10)
                .attr('fill', 'gray')
                .text('较差')
            txt.append('text')
                .attr('x', width*0.14)
                .attr('y', 118)
                .attr('font-size', 10)
                .attr('fill', 'gray')
                .text('正常')
            txt.append('text')
                .attr('x', width*0.14)
                .attr('y', 138)
                .attr('font-size', 10)
                .attr('fill', 'gray')
                .text('较好')
            txt.append('text')
                .attr('x', width*0.14)
                .attr('y', 158)
                .attr('font-size', 10)
                .attr('fill', 'gray')
                .text('优秀')
            var mark = svg.append('g')
            var tt = svg .append('g')
            for(var i = 0; i<4;i++){
                for(var j = 0;j<7 ;j++){
                    mark.append('circle')
                        .attr('cx', width*0.35+j*30)
                        .attr('cy', 25+i*29)
                        .attr('r', 9)
                        .attr('fill', 'rgba(218, 235, 239, 1)')
                        .attr('filter', 'url(#shadow)')
                    tt.append('text')
                        .attr('x',width*0.35-3+j*30)
                        .attr('y', 25+i*29)
                        .attr('font-size', 8)
                        .attr('fill', 'black')
                        .attr('text-anchor', 'middle')
                        .text(`${i*7+j+1}`)
                }
            }
            for(var i =0 ;i<this.day-28;i++){
                mark.append('circle')
                        .attr('cx', width*0.35+i*30)
                        .attr('cy', 141)
                        .attr('r', 9)
                        .attr('fill', 'rgba(218, 235, 239, 1)')
                        .attr('filter', 'url(#shadow)')
                tt.append('text')
                        .attr('x',width*0.35-3+i*30)
                        .attr('y', 141)
                        .attr('font-size', 8)
                        .attr('fill', 'black')
                        .attr('text-anchor', 'middle')
                        .text(`${29+i}`)
            }
        }

    },
    mounted(){
        this.getdata()
        this.transfata(this.month)
        this.draw()
    }
}
</script>
<style scoped> 
@import url('../../assets/font/font.css');
.container{
    width: 91%;
    height: 172px;
    margin-top: 15px;
    padding: 10px 0;
    background-image: linear-gradient(180deg, #3494a9 -138.5%, #ffffffa3 36.3%);
    border-radius: 10px;
    box-shadow: 0px 2px 4px #00000040;
    position: relative;
    font-family: dyh;
}
.mon{
    position: absolute;
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 0px;
    left: 28px;
    top: 16px;
    color: rgba(0, 0, 0, 1);
    text-align: left;
    vertical-align: top;
}
.mon-s{
    position: absolute;
    left: 28px;
    top: 65px;
    font-size: 18px;
    font-weight:900 ;
    color: rgba(0, 0, 0, 0.3);
}
.bod{
    width: 68%;
    height: 152px;
    opacity: 1;
    border-radius: 7px;
    background: rgba(255, 255, 255, 0);
    border: 0.3px solid rgba(0, 75, 92, 1);
    position: absolute;
    left: 28%;
    top: 17px;
}
.mon-shadow{
    position: absolute;
    left: 33px;
    top: 25px;
    font-weight: 400;
    font-family: dyh;
    font-size: 40px;
    letter-spacing: 0px;
    line-height: 38.4px;
    color: rgba(0, 90, 110, 0.06);
    text-align: left;
    vertical-align: top;
}
</style>