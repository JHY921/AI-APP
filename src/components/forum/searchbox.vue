<template>
    <h3>列表渲染</h3>
    <p v-for="items,index of names">{{ items }}+{{ index }}</p>
    <!-- 列表渲染 -->
    <div v-for="item of result">
        <p>{{ item.title }}</p>
        <p>{{ item.avator }}</p>
    </div>
    <div>
        <p v-for="(value,key,index) in userInfo">{{ value }}+{{ key }}</p>
    </div>
</template>
  
<script>
export default{
    data(){
        return{
            names:['百战程序员','尚学堂','IT'],
            // 数组
            result:[
                {
                    "id":22,
                    "title":"恶堕",
                    "avator":"https;"
                },
                {
                    "id":23,
                    "title":"恶堕",
                    "avator":"https;"
                },
                {
                    "id":24,
                    "title":"恶堕",
                    "avator":"https;"
                },
            ],
            // 对象 键值对
            userInfo:{
                name:"iwen",
                age:20,
                sex:"男"
            }
        }
    }
}
</script>
<!-- JSON格式数据   模拟网络请求数据-->
  