<script setup>
import { ref,onUnmounted,onUpdated,reactive } from 'vue'
const note = ref('font20');
const textStyle = ref({color: 'tomato',fontSize:'20px'});
const text = ref("請輸入樣式名稱")
const isFont30 = ref(false)
const fruits = reactive(['蘋果','香蕉','貓貓'])
const gender = ref('男')


onUpdated(()=>{
    updateLocalStorage();
    console.log("資料已更新")
})

onUnmounted(()=>{
    console.log('onUnmounted')
})

const updateLocalStorage =()=>{
    localStorage.setItem('userNote',note.value)
};

function showFruit(item){
alert("你選擇的是" + item)
}
function showMsg(msg){
    alert(msg)
}

</script>

<template>
    <h1>我的Note</h1>
    <input v-model="note" type="text" :placeholder="text">
  
    <p v-bind:style="textStyle">
        我得筆記文字長度:{{note.length}}
    </p>
    <img v-show="note.length>10" src="../assets/p56anaaakKSX.jpg" alt="">
    <p :class="note">{{3+20}}</p>
    <p v-if="isFont30==true">這是font30</p>
    <p v-else>這是font20</p>
    <ul id ="fruit-list">
        <li v-for="(item,index) in fruits" @click="showFruit(item)" >{{ index +1 }} . {{item}}</li>
    </ul>
    <form action="" id="myForm">
        <section name="fruit" id="Fruits">
            <option v-for="(item,index) in fruits" :value="item"></option>
        </section>
    </form>
    <input v-model="note" type="text" :placeholder="text" @change="showMsg(note)">
</template>
<style scoped>
.font30{
    font-size: 30px;
}
.font20{
    color:red;
    font-size: 20px;
}
li{
    list-style: none;
}
li:hover{
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    color: tomato;
}

</style>