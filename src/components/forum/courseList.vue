<template>
    <div class="total">

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
                        帖子内容
                    </span>
                </center>
            </div>
            <!--js计算适配width-->
            <div style="display: inline-block; width: 40px; height: 100%; vertical-align:top;
                        position: relative; left: 77%; top: 25%;" @click="moreInfor">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="4"
                    viewBox="0 0 20 4" fill="none">
                    <g opacity="1" transform="translate(0 0)  rotate(0)">
                        <g opacity="1" transform="translate(0 0)  rotate(0)">
                            <path id="圆形 2" fill-rule="evenodd" style="fill:#007994" opacity="1"
                                d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0Z"></path>
                            <path id="圆形 2" fill-rule="evenodd" style="fill:#007994" opacity="1"
                                d="M10 0C8.9 0 8 0.9 8 2C8 3.1 8.9 4 10 4C11.1 4 12 3.1 12 2C12 0.9 11.1 0 10 0Z"></path>
                            <path id="圆形 2" fill-rule="evenodd" style="fill:#007994" opacity="1"
                                d="M18 0C16.9 0 16 0.9 16 2C16 3.1 16.9 4 18 4C19.1 4 20 3.1 20 2C20 0.9 19.1 0 18 0Z">
                            </path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>

        <transition name="color-transition">
        <div class="course_list">
            <ul>
                <li v-for="(course,index) in courseData.courses" :key="course.course_id">
                    <div style="border-top-right-radius: 10px;left: -50px; "  
                    :class="{ 'isMove': moveIndex === index && isClick}"><!--:style="`position: absolute; transform: translateY(${course.total_number * 36+48}px);`"-->
                        <div class="main_course" @click="mouseOver(course.course_id)">{{ course.course_name }}</div>
                        <div style="height: 48px;"></div>
                        <ul>
                            <div class="child_course" >
                                <li v-for="(subcategory) in course.subcategories" :key="subcategory.subcategory_id"
                                    @click="chooseCourse(subcategory.subcategory_id)" ><!--:style="`position: absolute; transform: translateY(${index * 36}px);`"-->
                                    {{ subcategory.subcategory_name }}
                                    <center>
                                        <hr style="width: 80px; border: 0.4px solid rgba(110, 120, 122, 0.27);"
                                            v-if="subcategory.subcategory_number != course.total_number">
                                    </center>
                                    
                                </li>
                            </div>
                        </ul>
                    </div>
                </li>
                
            </ul>
        </div>
        </transition>

        <div class="course_container">
            <!-- <div v-if="new Number(course_number)===new Number(clickedCourse)">
                {{ course.course_name }}
            </div>
            <div v-else>course.course_name {{course.course_name}} course.course_number {{ course.course_number }} clickedCourse {{clickedCourse}}</div> -->
            <div class="course_detail" v-for="course in courseContent.courses" :key="course.course_id"
                v-show="course.course_id === clickedCourse">
                <div style="display: inline-block; width: 100px; height: 65px; background-color: #007994;
                            margin-top: 20px; margin-right: 10px; margin-bottom: 20px;
                            border-radius: 10px;">
                    <img :src="course.course_cover" alt="封面"
                        style="max-width: 100%; max-height: 100%;border-radius: 10px;" />
                </div>
                <div style="display: inline-block; vertical-align:top; width: 99px; margin-top: 20px;">
                    <span style="font-size: 14px;font-weight: 700;letter-spacing: 0px;line-height: 16.41px;
                            color: rgba(0, 0, 0, 1);text-align: left;">
                        {{ course.course_title }}
                    </span>
                    <p style="font-size: 12px; font-weight: 400; letter-spacing: 0px; line-height: 9.38px;
                            color: rgba(0, 0, 0, 0.6); text-align: left; vertical-align: middle; margin-top: 5px;
                            -webkit-transform-origin-x: 0; -webkit-transform: scale(0.90);">
                        课程来源：{{ course.course_source }}
                    </p>
                    <p style="font-size: 6px; font-weight: 400; letter-spacing: 0px; line-height: 7.03px;
                            color: rgba(0, 0, 0, 0.4); text-align: left; vertical-align: middle; margin-top: 5px;
                            -webkit-transform-origin-x: 0; -webkit-transform: scale(0.70);">
                        时长：{{ course.course_time }}
                    </p>
                </div>
                <hr style="border: 3px solid rgba(110, 120, 122, 0.1);">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            courseData: [],
            courseContent: [],
            clickedCourse: 1,
            moveIndex:-1,
            listPosition:[],
            isClick:true
        };
    },
    created() {
        this.loadJsonData();
    },
    methods: {
        click_follow() {
            alert("follow");
        },
        backTolast() {
            alert("back");
        },
        moreInfor() {
            alert("more");
        },
        async loadJsonData() {
            const courseData = await import('./courseList.json');
            const courseContent = await import('./courseData.json');
            this.courseData = courseData.default;
            this.courseContent = courseContent.default;
        },
        chooseCourse(data) {
            this.clickedCourse = data;
            
        },
        mouseOver(para) {
            if(para-1===this.moveIndex) this.isClick=!this.isClick;
            else {
                this.moveIndex=para-1;
                this.isClick=true
            }
            console.log(this.isClick);
        }
    },
    computed: {
    },

}
</script>

<style>
.isMove{
    /* border-left: 10px solid blue; */
    box-shadow: 0px 1500px 0px 0px rgba(131, 199, 219, 0.1) inset,-50px 0px 0px 0px rgb(29, 146, 117,0.4);
    border-bottom-right-radius: 10px;
    transform: translateX(14px);
    width: 117px;
    /* background: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgb(143, 209, 224,0.8) 100%); */
    transition: box-shadow 0.5s;
    transition: transform 0.5s;
}
@keyframes fadeInAnimation { 
    0% { 
        background: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgb(143, 209, 224,0) 100%);
    } 
    100% { 
        background: linear-gradient(90deg, rgb(255, 255, 255) 50%, rgb(143, 209, 224,0.8) 100%);
     } 
}
* {
    margin: 0px;
}

li {
    display: block;
}

p {
    text-align: center;
}

h1,
h2,
h3 {
    text-align: center;
}

.total {
    height: 640px;
    width: 360px;
    overflow: auto;
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
    border-bottom-right-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.course_list {
    position: relative;
    display: inline-block;
    vertical-align: top;
    overflow-x: visible !important;
    overflow-y: auto;
    height: 568px;
    width: 140px;
}

.main_course {
    position: absolute;
    width: 123px;
    height: 48px;
    opacity: 1;
    background: linear-gradient(90deg, rgb(175, 212, 214) 0%, rgba(0, 121, 148, 1) 90%);
    color: rgba(255, 255, 255, 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
    line-height: 16.41px;
    /* color: rgba(255, 255, 255, 1); */
    text-align: center;
    line-height: 48px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.child_course {
    position: relative;
    width: 117px;
    text-align: center;
    line-height: 36px;
    font-size: 10px;
    color: rgba(0, 0, 0, 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25);
    border-bottom-right-radius: 10px;
}

.course_container {
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    width: 220px;
    height: 568px;
}

.course_detail {
    width: 236px;
    height: 120px;
}
</style>